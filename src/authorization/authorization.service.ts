import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { TYPES } from '../types';

@Injectable()
export class AuthorizationService {
  constructor(
    @Inject(TYPES.AUTHORIZATION_SVC) private readonly authSvc: ClientProxy,
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
}
