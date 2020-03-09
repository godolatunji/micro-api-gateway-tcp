import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { TYPES } from '../types';
import { CarQuery } from './dto/car-query.dto';
import { Car } from './types/car.type';

@Injectable()
export class InventoryService {
  constructor(
    @Inject(TYPES.INVENTORY_SVC) private readonly inventorySvc: ClientProxy,
  ) {}

  listCars(
    carQuery: CarQuery,
    headers?: Request['headers'],
  ): Observable<Car[]> {
    const pattern = { cmd: 'listCars' };
    return this.inventorySvc.send<Car[]>(pattern, { carQuery, headers });
  }
}
