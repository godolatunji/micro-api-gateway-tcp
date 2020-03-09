import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PaperworkDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  carId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  country?: string;

  @ApiPropertyOptional()
  @IsOptional()
  documentStatus?: string;

  @ApiPropertyOptional()
  @IsOptional()
  documentHandoverToBuyer?: string;

  @ApiPropertyOptional()
  @IsOptional()
  documentHandoverfromSellerDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  documentHandoverToBuyerDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  documentLocation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  comment?: string;

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
