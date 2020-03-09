import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import {
  Country,
  LocationGroup,
  StatusGroup,
  StatusValue,
} from '../types/car.type';

export class NumberRange {
  @ApiPropertyOptional()
  @IsOptional()
  from?: number;

  @ApiPropertyOptional()
  @IsOptional()
  to?: number;
}

// tslint:disable-next-line: max-classes-per-file
export class DateRange {
  @ApiPropertyOptional()
  @IsOptional()
  from?: string;

  @ApiPropertyOptional()
  @IsOptional()
  to?: string;
}

// tslint:disable-next-line: max-classes-per-file
export class StatusInput {
  statusType: StatusGroup;
  status: StatusValue[];
  reason?: string;
}

export type LocationInput = {
  locationType: LocationGroup;
  location?: string[];
  placeId?: string[];
};

// tslint:disable-next-line: max-classes-per-file
export class Order {
  Asc = 'ASC';
  Desc = 'DESC';
}

// tslint:disable-next-line: max-classes-per-file
export class Sort {
  field: string;
  order: Order;
}

// tslint:disable-next-line: max-classes-per-file
export enum DocumentHandoverToBuyer {
  Yes = 'YES',
  Partially = 'PARTIALLY',
  No = 'NO',
}

// tslint:disable-next-line: max-classes-per-file
export class CarQuery {
  @ApiPropertyOptional()
  @IsOptional()
  id: string;

  @ApiPropertyOptional()
  @IsOptional()
  numberernalId: string;

  @ApiPropertyOptional()
  @IsOptional()
  country: Country;
  make: string; // cannot be null

  @ApiPropertyOptional()
  @IsOptional()
  model: string;

  @ApiPropertyOptional()
  @IsOptional()
  trim: string;

  @ApiPropertyOptional()
  @IsOptional()
  trimDetails: string;

  @ApiPropertyOptional()
  @IsOptional()
  year: NumberRange;

  @ApiPropertyOptional()
  @IsOptional()
  mileage: NumberRange;

  @ApiPropertyOptional()
  @IsOptional()
  color: string;

  @ApiPropertyOptional()
  @IsOptional()
  vin: string;

  @ApiPropertyOptional()
  @IsOptional()
  licensePlate: string;

  @ApiPropertyOptional()
  @IsOptional()
  type: string;

  @ApiPropertyOptional()
  @IsOptional()
  engineNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  registeredCity: string;

  @ApiPropertyOptional()
  @IsOptional()
  status: StatusInput;

  @ApiPropertyOptional()
  @IsOptional()
  location: LocationInput;

  @ApiPropertyOptional()
  @IsOptional()
  createdAt: DateRange;

  @ApiPropertyOptional()
  @IsOptional()
  createdByName: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedAt: DateRange;

  @ApiPropertyOptional()
  @IsOptional()
  technicalCheckExpiration: DateRange;

  @ApiPropertyOptional()
  @IsOptional()
  limit = 20;

  @ApiPropertyOptional()
  @IsOptional()
  page = 0;

  @ApiPropertyOptional()
  @IsOptional()
  sort: Sort;

  @ApiPropertyOptional()
  @IsOptional()
  documentStatus: string;

  @ApiPropertyOptional()
  @IsOptional()
  documentHandoverToBuyer: DocumentHandoverToBuyer;

  @ApiPropertyOptional()
  @IsOptional()
  paperWorkSort: Sort;

  @ApiPropertyOptional()
  @IsOptional()
  reservedAt: DateRange;

  @ApiPropertyOptional()
  @IsOptional()
  soldAt: DateRange;

  @ApiPropertyOptional()
  @IsOptional()
  boughtAt: DateRange;

  @ApiPropertyOptional()
  @IsOptional()
  saleChannel: string;

  @ApiPropertyOptional()
  @IsOptional()
  purchaseChannel: string;

  @ApiPropertyOptional()
  @IsOptional()
  refurbishmentStatus: string;

  @ApiPropertyOptional()
  @IsOptional()
  hasOpenTasks: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  openTasks: number;

  @ApiPropertyOptional()
  @IsOptional()
  pickUpFrom: DateRange;

  @ApiPropertyOptional()
  @IsOptional()
  marketplacePrice: NumberRange;

  @ApiPropertyOptional()
  @IsOptional()
  marketplaceVisible: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  soldTo: string;

  @ApiPropertyOptional()
  @IsOptional()
  isFeatured: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  bookingId: string;

  @ApiPropertyOptional()
  @IsOptional()
  grade: string;

  @ApiPropertyOptional()
  @IsOptional()
  bodyType: string;

  @ApiPropertyOptional()
  @IsOptional()
  cache: boolean;

  @ApiPropertyOptional({
    description: 'fiels you want returned for car e.g ?fields=id,make,model',
  })
  @IsOptional()
  fields: string;
}
