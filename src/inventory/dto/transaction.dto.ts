import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Country } from '../types/car.type';

export class TransactionDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  carId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  type?: string;

  @ApiPropertyOptional()
  @IsOptional()
  amount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  subtype?: string;

  @ApiPropertyOptional()
  @IsOptional()
  comments?: string;

  @ApiPropertyOptional()
  @IsOptional()
  country?: Country;

  @ApiPropertyOptional()
  @IsOptional()
  transactionDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  vatPercentage?: number;

  @ApiPropertyOptional()
  @IsOptional()
  vat?: number;

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
  createdById?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdByEmail?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdByName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedById?: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedByEmail?: string;

  @ApiPropertyOptional()
  @IsOptional()
  updatedByName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  deletedById?: string;

  @ApiPropertyOptional()
  @IsOptional()
  deletedByName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  status?: string;
}
