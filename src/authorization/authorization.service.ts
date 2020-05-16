import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CacheService } from '../cache/cache.service';
import { TYPES } from '../types';

interface ISecret {
  secret: string;
}

@Injectable()
export class AuthorizationService {
  constructor(
    @Inject(TYPES.AUTHORIZATION_SVC) private readonly authSvc: ClientProxy,
    @Inject(TYPES.USER_SVC) private readonly userSvc: ClientProxy,
    @Inject(CacheService) private readonly cacheService: CacheService,
  ) {}

  seedResources(application): Observable<boolean> {
    const availableRoutes: string[] = application.httpAdapter.instance._router.stack
      .filter(r => r.route)
      .map(
        r =>
          Object.keys(r.route.methods)[0]
            .toUpperCase()
            .padEnd(7) + r.route.path,
      );

    const resources = availableRoutes.map(doc => {
      const array = doc
        .split(' ')
        .map(s => s.trim())
        .filter(s => s.length > 0);
      return {
        id: array
          .join('-')
          .replace(/\//g, '-')
          .toLowerCase(),
        name: array.join(' '),
        url: array.join(' '),
      };
    });

    const pattern = { cmd: 'createResource' };
    return this.authSvc.send<boolean>(pattern, resources);
  }

  async getSecretKey() {
    const { secret } = await this.authSvc
      .send<ISecret>({ cmd: 'getSecret' }, {})
      .toPromise();
    await this.cacheService.save('app::secret', secret);
  }

  async getUserAuthority(userId: string) {
    let user: any = await this.cacheService.get(`app::user::${userId}`);
    if (!user) {
      const data = { id: userId, userId },
        headers = {};
      user = await this.userSvc
        .send<any>({ cmd: 'getUserById' }, { headers, data })
        .toPromise();
      const auth = await this.authSvc
        .send<any>({ cmd: 'getUserAuthority' }, { headers, data })
        .toPromise();
      user.roles = auth.roles;
      user.permissions = auth.permissions;
      await this.cacheService.save(
        `app::user::${userId}`,
        JSON.stringify(user),
        600,
      );
    }

    user = JSON.parse(JSON.stringify(user));
    return user;
  }

  async logout(userId: string) {
    await this.cacheService.remove(`app::user::${userId}`);
  }

  async getResourcePermissions() {
    const res = await this.authSvc
      .send({ cmd: 'getResourcePermissions' }, {})
      .toPromise();
    await this.cacheService.save(
      `app::resource-permissions`,
      JSON.stringify(res),
    );
  }
}
