import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Contacttype } from '../types/car.type';

export class ContactDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  carId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  company?: string;

  @ApiPropertyOptional()
  @IsOptional()
  salutation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  street?: string;

  @ApiPropertyOptional()
  @IsOptional()
  zip?: string;

  @ApiPropertyOptional()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional()
  @IsOptional()
  comment?: string;

  @ApiPropertyOptional()
  @IsOptional()
  type?: Contacttype;

  @ApiPropertyOptional()
  @IsOptional()
  subtype?: string;

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

  @ApiPropertyOptional()
  @IsOptional()
  taxId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bankName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bankCode?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bankAccountOwner?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bankAccountNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  accountType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bankAccountOwnerTaxId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bankContactDetails?: string;

  @ApiPropertyOptional()
  @IsOptional()
  maritalStatus?: string;

  @ApiPropertyOptional()
  @IsOptional()
  occupation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  reasonForSelling?: string;

  @ApiPropertyOptional()
  @IsOptional()
  referrerCode?: string;
}
