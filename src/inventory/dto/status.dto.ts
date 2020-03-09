import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { StatusGroup, StatusValue } from '../types/car.type';

export class StatusDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  carId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  statusType: StatusGroup;

  @ApiPropertyOptional()
  @IsOptional()
  status: StatusValue;

  @ApiPropertyOptional()
  @IsOptional()
  reason?: string;

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
