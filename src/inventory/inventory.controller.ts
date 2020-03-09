import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { success } from '../utils/responses';
import { CarArrayResponseDto } from './dto/car-array-response.dto';
import { CarQuery } from './dto/car-query.dto';
import { InventoryService } from './inventory.service';

@ApiTags('/cars')
@Controller('/cars')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

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
  ): Promise<CarArrayResponseDto> {
    const headers: Request['headers'] = req.headers;
    const data = await this.inventoryService
      .listCars(carQuery, headers)
      .toPromise();
    return success(res, data);
  }
}
