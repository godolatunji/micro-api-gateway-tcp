import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { LocationGroup } from '../types/car.type';

export class LocationDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  carId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  locationType: LocationGroup;

  @ApiPropertyOptional()
  @IsOptional()
  location?: string;

  @ApiPropertyOptional()
  @IsOptional()
  placeId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  country?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  deletedAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdByName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdById?: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedByName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedById?: string;

  @ApiPropertyOptional()
  @IsOptional()
  deletedByName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  deletedById?: string;
}
