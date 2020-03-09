import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Country } from '../types/car.type';
import { ContactListDto } from './contact-list.dto';
import { DocumentDto } from './document.dto';
import { FinancialDetailDto } from './financial-detail.dto';
import { LocationDto } from './location.dto';
import { PaperworkDto } from './paperwork.dto';
import { StatusDto } from './status.dto';

export class InspectionDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  createdAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  inspector?: string;

  @ApiPropertyOptional()
  @IsOptional()
  location?: string;
}

// tslint:disable-next-line: max-classes-per-file
export class CarDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  internalId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  sourceCarID?: string;

  @ApiPropertyOptional()
  @IsOptional()
  make?: string;

  @ApiPropertyOptional()
  @IsOptional()
  model?: string;

  @ApiPropertyOptional()
  @IsOptional()
  trim?: string;

  @ApiPropertyOptional()
  @IsOptional()
  trimDetails?: string;

  @ApiPropertyOptional()
  @IsOptional()
  year?: number;

  @ApiPropertyOptional()
  @IsOptional()
  mileage?: number;

  @ApiPropertyOptional()
  @IsOptional()
  color?: string;

  @ApiPropertyOptional()
  @IsOptional()
  vin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  licensePlate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  type?: string;

  @ApiPropertyOptional()
  @IsOptional()
  country?: Country;

  @ApiPropertyOptional()
  @IsOptional()
  locationTrackerID?: string;

  @ApiPropertyOptional()
  @IsOptional()
  handoverFromSellerAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  handoverToBuyerAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  contacts?: ContactListDto;

  @ApiPropertyOptional()
  @IsOptional()
  status?: StatusDto[];

  @ApiPropertyOptional()
  @IsOptional()
  location?: Array<LocationDto>;

  @ApiPropertyOptional()
  @IsOptional()
  financialDetails?: FinancialDetailDto;

  @ApiPropertyOptional()
  @IsOptional()
  paperwork?: PaperworkDto;

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
  documents?: DocumentDto[];

  @ApiPropertyOptional()
  @IsOptional()
  inspection?: InspectionDto;

  @ApiPropertyOptional()
  @IsOptional()
  completedDocumentCategoriesPercentage?: number;

  @ApiPropertyOptional()
  @IsOptional()
  completedDocumentCategoriesReviewedPercentage?: number;

  @ApiPropertyOptional()
  @IsOptional()
  completedDocumentCategories?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  completedDocumentCategoriesReviewed?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  incompleteDocumentCategories?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  incompleteDocumentCategoriesReviewed?: string[];

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
  availableForPickup?: string;

  @ApiPropertyOptional()
  @IsOptional()
  engineNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  registeredCity?: string;

  @ApiPropertyOptional()
  @IsOptional()
  technicalCheckExpiration?: string;

  @ApiPropertyOptional()
  @IsOptional()
  warnings?: {
    count: number;
    list: Array<{ warning: any }>;
  };

  @ApiPropertyOptional()
  @IsOptional()
  refurbishmentStatus?: string;

  @ApiPropertyOptional()
  @IsOptional()
  openTasks?: number;

  @ApiPropertyOptional()
  @IsOptional()
  pickUpFrom?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bookingId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  grade?: string;

  @ApiPropertyOptional()
  @IsOptional()
  bodyType?: string;
}
