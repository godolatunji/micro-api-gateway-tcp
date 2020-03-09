import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Country } from '../types/car.type';
import { CarPricingDto } from './car-pricing.dto';
import { OfferPricingDto } from './offer-pricing.dto';
import { TransactionDto } from './transaction.dto';

export class FinancialDetailDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  carId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  competitorPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  initialValuationPrice?: string;

  @ApiPropertyOptional()
  @IsOptional()
  sellerExpectationPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  sellerFirstOffer?: number;

  @ApiPropertyOptional()
  @IsOptional()
  sellerFinalOffer?: number;

  @ApiPropertyOptional()
  @IsOptional()
  reserveAuctionPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  purchaseCarPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  purchaseOtherPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  sellCarPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  sellOtherPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  purchasePayment?: number;

  @ApiPropertyOptional()
  @IsOptional()
  buyerPayment?: number;

  @ApiPropertyOptional()
  @IsOptional()
  purchaseChannel?: string;

  @ApiPropertyOptional()
  @IsOptional()
  purchasedBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  purchasedComment?: string;

  @ApiPropertyOptional()
  @IsOptional()
  saleChannel?: string;

  @ApiPropertyOptional()
  @IsOptional()
  saleComment?: string;

  @ApiPropertyOptional()
  @IsOptional()
  salesRep?: string;

  @ApiPropertyOptional()
  @IsOptional()
  soldTo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  reservedAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  boughtAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  soldAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  country?: Country;

  @ApiPropertyOptional()
  @IsOptional()
  invoiceDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  invoiceNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  b2bDeal?: string;

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
  purchasePriceTotal?: number;

  @ApiPropertyOptional()
  @IsOptional()
  sellPriceTotal?: number;

  @ApiPropertyOptional()
  @IsOptional()
  marginTotal?: number;

  @ApiPropertyOptional()
  @IsOptional()
  marginPercentage?: number;

  @ApiPropertyOptional()
  @IsOptional()
  purchasePaymentDone?: number;

  @ApiPropertyOptional()
  @IsOptional()
  buyerDone?: number;

  @ApiPropertyOptional()
  @IsOptional()
  purchasePricing?: CarPricingDto[];

  @ApiPropertyOptional()
  @IsOptional()
  sellPricing?: CarPricingDto[];

  @ApiPropertyOptional()
  @IsOptional()
  offerPurchasePricing?: OfferPricingDto[];

  @ApiPropertyOptional()
  @IsOptional()
  offerSellPricing?: OfferPricingDto[];

  @ApiPropertyOptional()
  @IsOptional()
  paymentsMade?: TransactionDto[];

  @ApiPropertyOptional()
  @IsOptional()
  paymentsReceived?: TransactionDto[];

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
  marketplacePrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  marketplaceVisible?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  isFeatured?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  soldToPhoneNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  availableFinancingOptions?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  chosenFinancingOption?: string;

  @ApiPropertyOptional()
  @IsOptional()
  confirmedAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  purchaseCancellingReason?: string;

  @ApiPropertyOptional()
  @IsOptional()
  marketplaceImages?: Array<{ id: string; description: string }>;

  @ApiPropertyOptional()
  @IsOptional()
  selectedMarketplaces?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  oldMarketplacePrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  paymentRecipient?: string;

  @ApiPropertyOptional()
  @IsOptional()
  paymentType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  riskIndex?: number;

  @ApiPropertyOptional()
  @IsOptional()
  processingAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  processingReference?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  dueAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  outstandingAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  dealerExecutive?: string;
}
