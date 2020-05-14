import { Inject, Injectable, Req, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from 'express';
import { JSONObject, ResponseDto, TYPES } from './types';
import { handleError, success } from './utils/responses';

@Injectable()
export class ProxyService {
  constructor(
    @Inject(TYPES.USER_SVC) private readonly userSvc: ClientProxy,
    @Inject(TYPES.INVENTORY_SVC) private readonly inventorySvc: ClientProxy,
    @Inject(TYPES.AUTHORIZATION_SVC) private readonly authSvc: ClientProxy,
  ) {}

  async send(
    @Req() req: Request,
    @Res() res: Response,
    service: string,
    endpoint: string,
    data: JSONObject,
  ): Promise<ResponseDto> {
    let svc: ClientProxy = null;
    switch (service) {
      case TYPES.USER_SVC:
        svc = this.userSvc;
        break;
      case TYPES.INVENTORY_SVC:
        svc = this.inventorySvc;
        break;
      case TYPES.AUTHORIZATION_SVC:
        svc = this.authSvc;
        break;
      default:
        throw new Error('Invalide service name');
    }

    try {
      const headers: Request['headers'] = req.headers;
      const response = await svc
        .send<any>({ cmd: endpoint }, { headers, data })
        .toPromise();
      return success(res, response);
    } catch (err) {
      handleError(res, err.message);
    }
  }
}
