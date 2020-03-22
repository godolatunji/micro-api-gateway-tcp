import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { InventoryService } from '../inventory/inventory.service';
import { handleError, success } from '../utils/responses';

@Injectable()
export class GraphQLMiddleware implements NestMiddleware {
  constructor(private readonly inventoryService: InventoryService) {}

  async use(req: Request, res: Response, next: () => any) {
    if (req.body.operationName === 'IntrospectionQuery') {
      return next();
    }

    let cmd = '';
    if (req.url === '/car/graphql') {
      cmd = 'carRawQuery';
    } else if (req.url === '/inspection/graphql') {
      cmd = 'inspectionRawQuery';
    } else if (req.url === '/auction/graphql') {
      cmd = 'auctionRawQuery';
    } else if (req.url === '/search/graphql') {
      cmd = 'searchRawQuery';
    } else if (req.url === '/document/graphql') {
      cmd = 'documentRawQuery';
    } else if (req.url === '/cardata/graphql') {
      cmd = 'cardataRawQuery';
    } else {
      return res.status(404);
    }

    try {
      const headers: Request['headers'] = req.headers;
      const data = await this.inventoryService
        .queryBackend(req.body.query, cmd, headers)
        .toPromise();
      return res.json(data);
    } catch (err) {
      return handleError(res, err.message);
    }
  }
}
