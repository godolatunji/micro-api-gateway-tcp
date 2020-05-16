import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
/* tslint:disable: no-string-literal */
import { CacheService } from 'cache/cache.service';
import * as jwt from 'jsonwebtoken';
import { AuthorizationService } from '../authorization/authorization.service';
import { error } from '../utils/responses';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @Inject(CacheService) private readonly cacheService: CacheService,
    @Inject(AuthorizationService)
    private readonly authSvc: AuthorizationService,
  ) {}

  async use(req: Request, res: Response, next: () => any) {
    if (this.excludePath(req['baseUrl'], req['method'])) {
      return next();
    }

    const secret = await this.cacheService.get('app::secret');

    const headers = req.headers;
    if (headers['authorization'] === undefined) {
      return error(res, 'no authorization header', 401);
    }

    const token = headers['authorization'].split(' ')[1];
    if (token === undefined) {
      return error(res, 'no authorization token present', 401);
    }
    try {
      const { userId } = jwt.verify(token, secret, { algorithm: 'HS512' });
      const user = await this.authSvc.getUserAuthority(userId);
      req.headers['user'] = user;
    } catch (err) {
      return error(res, err.name + ': ' + err.message, 401);
    }

    return next();
  }

  excludePath(path: string, method: string): boolean {
    const ignorePaths = [
      { path: '/auth/login', method: 'POST' },
      { path: '/car/graphql', method: 'GET' },
      { path: '/auction/graphql', method: 'GET' },
      { path: '/inspection/graphql', method: 'GET' },
      { path: '/search/graphql', method: 'GET' },
      { path: '/document/graphql', method: 'GET' },
      { path: '/cardata/graphql', method: 'GET' },
    ];

    let flag = false;
    for (const url of ignorePaths) {
      if (url.path === path && url.method === method) {
        flag = true;
        break;
      }
    }
    return flag;
  }
}
