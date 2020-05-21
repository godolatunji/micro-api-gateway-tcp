import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    @Inject(CacheService) private readonly cacheService: CacheService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request): Promise<boolean> {
    const resourcePermissions = JSON.parse(
      await this.cacheService.get(`app::resource-permissions`),
    );
    // tslint:disable-next-line: no-string-literal
    const url = `${request['method']} ${request.route.path}`;

    const currentResource = resourcePermissions.find(doc => doc.url === url);
    if (!currentResource) {
      return false;
    } else if (currentResource.permission === null) {
      return true;
    } else {
      const user = JSON.parse(request.headers.user);
      if (user.permissions.includes(currentResource.permissions)) return true;
      else return false;
    }
  }
}
