import { Controller, Get, Inject, Query, Req, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { ProxyService } from '../proxy';
import { JSONObject, ResponseDto, TYPES } from '../types';
import { toJSON } from '../utils/helpers';
import { CarArrayResponseDto } from './dto/car-array-response.dto';
import { CarQuery } from './dto/car-query.dto';

@ApiTags('/cars')
@Controller('/cars')
export class InventoryController {
  constructor(
    @Inject(ProxyService) private readonly proxyService: ProxyService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: [CarArrayResponseDto],
    description: 'Return the list of cars',
  })
  async listCars(
    @Req() req: Request,
    @Query() carQuery: CarQuery,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    const data = toJSON(carQuery) as JSONObject;
    return this.proxyService.send(
      req,
      res,
      TYPES.INVENTORY_SVC,
      'listCars',
      data,
    );
  }
}
