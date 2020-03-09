/* tslint:disable:max-file-line-count */
/**
 * This document was generated from FCG schema: https://api-ng.fcg.dev/car/graphiql using the tool
 * https://graphql-code-generator.com/#live-demo
 */

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISOString: any;
  Warning: any;
  ExportResult: any;
  HistoryMeta: any;
  MetaInfo: any;
  StatisticsScalar: any;
};

export type Artifacts = {
  __typename?: 'Artifacts';
  list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ArtifactsInput = {
  list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Car = {
  __typename?: 'Car';
  id?: Maybe<Scalars['ID']>;
  internalId?: Maybe<Scalars['ID']>;
  sourceCarID?: Maybe<Scalars['ID']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  trimDetails?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  mileage?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  locationTrackerID?: Maybe<Scalars['String']>;
  handoverFromSellerAt?: Maybe<Scalars['ISOString']>;
  handoverToBuyerAt?: Maybe<Scalars['ISOString']>;
  contacts?: Maybe<ContactList>;
  status?: Maybe<Array<Maybe<Status>>>;
  location?: Maybe<Array<Maybe<Location>>>;
  financialDetails?: Maybe<FinancialDetails>;
  paperwork?: Maybe<Paperwork>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  documents?: Maybe<Array<Maybe<Document>>>;
  inspection?: Maybe<Inspection>;
  completedDocumentCategoriesPercentage?: Maybe<Scalars['Float']>;
  completedDocumentCategoriesReviewedPercentage?: Maybe<Scalars['Float']>;
  completedDocumentCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  completedDocumentCategoriesReviewed?: Maybe<Array<Maybe<Scalars['String']>>>;
  incompleteDocumentCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  incompleteDocumentCategoriesReviewed?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  availableForPickup?: Maybe<Scalars['ISOString']>;
  engineNumber?: Maybe<Scalars['String']>;
  registeredCity?: Maybe<Scalars['String']>;
  technicalCheckExpiration?: Maybe<Scalars['ISOString']>;
  warnings?: Maybe<WarningList>;
  refurbishmentStatus?: Maybe<Scalars['String']>;
  openTasks?: Maybe<Scalars['Int']>;
  pickUpFrom?: Maybe<Scalars['ISOString']>;
  bookingId?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
};

export type CarDeletedOutput = {
  __typename?: 'CarDeletedOutput';
  id?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
};

export type CarList = {
  __typename?: 'CarList';
  list?: Maybe<Array<Maybe<Car>>>;
  count?: Maybe<Scalars['Int']>;
};

export type CarPricing = {
  __typename?: 'CarPricing';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  vatPercentage?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Float']>;
  referenceId?: Maybe<Scalars['ID']>;
  entity?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdById?: Maybe<Scalars['String']>;
  createdByEmail?: Maybe<Scalars['String']>;
  createdByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  updatedByEmail?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
};

export type CarPricingInput = {
  type: Scalars['String'];
  amount: Scalars['Float'];
  subtype: Scalars['String'];
  comments?: Maybe<Scalars['String']>;
};

export type CitiesList = {
  __typename?: 'CitiesList';
  list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Comment = {
  __typename?: 'Comment';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  carInternalId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  idCreatedBy?: Maybe<Scalars['ID']>;
  emailCreatedBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  mentions?: Maybe<Array<Maybe<CommentMention>>>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
};

export type CommentDeletedOutput = {
  __typename?: 'CommentDeletedOutput';
  id?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  carInternalId?: Maybe<Scalars['String']>;
};

export type CommentList = {
  __typename?: 'CommentList';
  list?: Maybe<Array<Maybe<Comment>>>;
  count?: Maybe<Scalars['Int']>;
};

export type CommentMention = {
  __typename?: 'CommentMention';
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type CommentMentionInput = {
  type: MentionType;
  id: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
};

export type CommentSavedOutput = {
  __typename?: 'CommentSavedOutput';
  comment?: Maybe<Comment>;
};

export type Contact = {
  __typename?: 'Contact';
  id?: Maybe<Scalars['ID']>;
  carId: Scalars['ID'];
  company?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Contacttype>;
  subtype?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankAccountOwner?: Maybe<Scalars['String']>;
  bankAccountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  bankAccountOwnerTaxId?: Maybe<Scalars['String']>;
  bankContactDetails?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  reasonForSelling?: Maybe<Scalars['String']>;
  referrerCode?: Maybe<Scalars['String']>;
};

export type ContactDeletedOutput = {
  __typename?: 'ContactDeletedOutput';
  id?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Contacttype>;
  subtype?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankAccountOwner?: Maybe<Scalars['String']>;
  bankAccountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  bankAccountOwnerTaxId?: Maybe<Scalars['String']>;
  bankContactDetails?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  reasonForSelling?: Maybe<Scalars['String']>;
};

export type ContactList = {
  __typename?: 'ContactList';
  list?: Maybe<Array<Maybe<Contact>>>;
  count?: Maybe<Scalars['Int']>;
};

export type ContactSavedOutput = {
  __typename?: 'ContactSavedOutput';
  contact?: Maybe<Array<Maybe<Contact>>>;
};

export enum Contacttype {
  Seller = 'seller',
  ContactPersonSeller = 'contactPersonSeller',
  Buyer = 'buyer',
  Consignee = 'consignee',
  ShippingCompany = 'shippingCompany',
  Customs = 'customs',
  LegalRepresentative = 'legalRepresentative',
}

export enum Country {
  Cl = 'CL',
  Id = 'ID',
  Kn = 'KN',
  Mx = 'MX',
  Ng = 'NG',
  Pk = 'PK',
  Tr = 'TR',
  Ar = 'AR',
  Co = 'CO',
  Za = 'ZA',
  Gl = 'GL',
  In = 'IN',
  Cb = 'CB',
  Pl = 'PL',
  Ae = 'AE',
  Sm = 'SM',
  Gh = 'GH',
  Ke = 'KE',
}

export type CountryOptionMetaInfoInput = {
  color?: Maybe<Scalars['String']>;
  lowerBound?: Maybe<Scalars['Float']>;
  upperBound?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

export type CountryOptions = {
  __typename?: 'CountryOptions';
  id?: Maybe<Scalars['ID']>;
  type: Scalars['String'];
  country: Country;
  name: Scalars['String'];
  allowedExternally?: Maybe<Scalars['Boolean']>;
  biMapping?: Maybe<Scalars['String']>;
  metaInfo?: Maybe<CountryOptionsMetaInfo>;
  translationKey?: Maybe<Scalars['String']>;
  customSort?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  createdById?: Maybe<Scalars['ID']>;
  createdByName?: Maybe<Scalars['String']>;
};

export type CountryOptionsList = {
  __typename?: 'CountryOptionsList';
  list?: Maybe<Array<Maybe<CountryOptions>>>;
  count?: Maybe<Scalars['Int']>;
};

export type CountryOptionsMetaInfo = {
  __typename?: 'CountryOptionsMetaInfo';
  color?: Maybe<Scalars['String']>;
  lowerBound?: Maybe<Scalars['Float']>;
  upperBound?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  regionalOffice?: Maybe<Scalars['String']>;
};

export type DateTimeRange = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type DeleteTaskOutput = {
  __typename?: 'DeleteTaskOutput';
  id?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['String']>;
};

export type Document = {
  __typename?: 'Document';
  id?: Maybe<Scalars['String']>;
  entity?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  fileType?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdById?: Maybe<Scalars['String']>;
  createdByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
};

export enum DocumentHandoverToBuyer {
  Yes = 'YES',
  Partially = 'PARTIALLY',
  No = 'NO',
}

export enum DocumentStatus {
  Complete = 'COMPLETE',
  Incomplete = 'INCOMPLETE',
}

export type Event = {
  __typename?: 'Event';
  eventId: Scalars['ID'];
  correlationId?: Maybe<Scalars['String']>;
  CarCreated?: Maybe<SaveCarOutput>;
  CarDeleted?: Maybe<CarDeletedOutput>;
  CarUpdated?: Maybe<SaveCarOutput>;
  CommentCreated?: Maybe<CommentSavedOutput>;
  CommentDeleted?: Maybe<CommentDeletedOutput>;
  CommentUpdated?: Maybe<CommentSavedOutput>;
  ContactCreated?: Maybe<ContactSavedOutput>;
  ContactDeleted?: Maybe<ContactDeletedOutput>;
  ContactUpdated?: Maybe<ContactSavedOutput>;
  HistorySaved?: Maybe<SaveHistoryOutput>;
  LinkCreated?: Maybe<LinkSubscriptionOutput>;
  LocationCreated?: Maybe<LocationSavedOutput>;
  LocationUpdated?: Maybe<LocationSavedOutput>;
  PaperworkCreated?: Maybe<PaperworkSavedOutput>;
  PaperworkDeleted?: Maybe<PaperworkDeletedOutput>;
  PaperworkUpdated?: Maybe<PaperworkSavedOutput>;
  StatusCreated?: Maybe<StatusSavedOutput>;
  StatusDeleted?: Maybe<StatusDeletedOutput>;
  StatusUpdated?: Maybe<StatusSavedOutput>;
  TaskCreated?: Maybe<TaskSavedOutput>;
  TaskDeleted?: Maybe<DeleteTaskOutput>;
  TaskUpdated?: Maybe<TaskSavedOutput>;
  TransitCreated?: Maybe<TransitSavedOutput>;
  TransitDeleted?: Maybe<TransitDeletedOutput>;
  TransitUpdated?: Maybe<TransitSavedOutput>;
  LinkDeleted?: Maybe<LinkSubscriptionOutput>;
};

export type EventStatusUpdatedArgs = {
  where?: Maybe<Array<Maybe<SubscriptionFilter>>>;
};

export enum Export {
  SapMexico = 'SAP_MEXICO',
}

export type FinancialDetails = {
  __typename?: 'FinancialDetails';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  competitorPrice?: Maybe<Scalars['Float']>;
  initialValuationPrice?: Maybe<Scalars['String']>;
  sellerExpectationPrice?: Maybe<Scalars['Float']>;
  sellerFirstOffer?: Maybe<Scalars['Float']>;
  sellerFinalOffer?: Maybe<Scalars['Float']>;
  reserveAuctionPrice?: Maybe<Scalars['Float']>;
  purchaseCarPrice?: Maybe<Scalars['Float']>;
  purchaseOtherPrice?: Maybe<Scalars['Float']>;
  sellCarPrice?: Maybe<Scalars['Float']>;
  sellOtherPrice?: Maybe<Scalars['Float']>;
  purchasePayment?: Maybe<Scalars['Float']>;
  buyerPayment?: Maybe<Scalars['Float']>;
  purchaseChannel?: Maybe<Scalars['String']>;
  purchasedBy?: Maybe<Scalars['ID']>;
  purchasedComment?: Maybe<Scalars['String']>;
  saleChannel?: Maybe<Scalars['String']>;
  saleComment?: Maybe<Scalars['String']>;
  salesRep?: Maybe<Scalars['ID']>;
  soldTo?: Maybe<Scalars['ID']>;
  reservedAt?: Maybe<Scalars['String']>;
  boughtAt?: Maybe<Scalars['String']>;
  soldAt?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  invoiceDate?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  b2bDeal?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  purchasePriceTotal?: Maybe<Scalars['Float']>;
  sellPriceTotal?: Maybe<Scalars['Float']>;
  marginTotal?: Maybe<Scalars['Float']>;
  marginPercentage?: Maybe<Scalars['Float']>;
  purchasePaymentDone?: Maybe<Scalars['Float']>;
  buyerDone?: Maybe<Scalars['Float']>;
  purchasePricing?: Maybe<Array<Maybe<CarPricing>>>;
  sellPricing?: Maybe<Array<Maybe<CarPricing>>>;
  offerPurchasePricing?: Maybe<Array<Maybe<OfferPricing>>>;
  offerSellPricing?: Maybe<Array<Maybe<OfferPricing>>>;
  paymentsMade?: Maybe<Array<Maybe<Transaction>>>;
  paymentsReceived?: Maybe<Array<Maybe<Transaction>>>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  marketplacePrice?: Maybe<Scalars['Float']>;
  marketplaceVisible?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  soldToPhoneNumber?: Maybe<Scalars['String']>;
  availableFinancingOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  chosenFinancingOption?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['String']>;
  purchaseCancellingReason?: Maybe<Scalars['String']>;
  marketplaceImages?: Maybe<Array<Maybe<MarketplaceImage>>>;
  selectedMarketplaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  oldMarketplacePrice?: Maybe<Scalars['Float']>;
  paymentRecipient?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  riskIndex?: Maybe<Scalars['Int']>;
  processingAmount?: Maybe<Scalars['Float']>;
  processingReference?: Maybe<Array<Maybe<Scalars['String']>>>;
  dueAmount?: Maybe<Scalars['Float']>;
  outstandingAmount?: Maybe<Scalars['Float']>;
  dealerExecutive?: Maybe<Scalars['ID']>;
};

export type FinancialDetailsInputType = {
  competitorPrice?: Maybe<Scalars['Float']>;
  initialValuationPrice?: Maybe<Scalars['String']>;
  sellerExpectationPrice?: Maybe<Scalars['Float']>;
  sellerFirstOffer?: Maybe<Scalars['Float']>;
  sellerFinalOffer?: Maybe<Scalars['Float']>;
  reserveAuctionPrice?: Maybe<Scalars['Float']>;
  purchaseCarPrice?: Maybe<Scalars['Float']>;
  purchaseOtherPrice?: Maybe<Scalars['Float']>;
  sellCarPrice?: Maybe<Scalars['Float']>;
  sellOtherPrice?: Maybe<Scalars['Float']>;
  purchasePayment?: Maybe<Scalars['Float']>;
  buyerPayment?: Maybe<Scalars['Float']>;
  purchaseChannel?: Maybe<Scalars['String']>;
  purchasedBy?: Maybe<Scalars['ID']>;
  purchasedComment?: Maybe<Scalars['String']>;
  saleChannel?: Maybe<Scalars['String']>;
  saleComment?: Maybe<Scalars['String']>;
  salesRep?: Maybe<Scalars['ID']>;
  soldTo?: Maybe<Scalars['ID']>;
  reservedAt?: Maybe<Scalars['String']>;
  boughtAt?: Maybe<Scalars['String']>;
  soldAt?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  invoiceDate?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  b2bDeal?: Maybe<Scalars['String']>;
  carPricing?: Maybe<Array<Maybe<CarPricingInput>>>;
  marketplacePrice?: Maybe<Scalars['Float']>;
  marketplaceVisible?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  soldToPhoneNumber?: Maybe<Scalars['String']>;
  availableFinancingOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  chosenFinancingOption?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['String']>;
  purchaseCancellingReason?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  paymentRecipient?: Maybe<Scalars['String']>;
  selectedMarketplaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  oldMarketplacePrice?: Maybe<Scalars['Float']>;
  riskIndex?: Maybe<Scalars['Int']>;
  dealerExecutive?: Maybe<Scalars['ID']>;
};

export type History = {
  __typename?: 'History';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  typeId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  historyMeta?: Maybe<Scalars['HistoryMeta']>;
  updatedById?: Maybe<Scalars['ID']>;
  updatedByEmail?: Maybe<Scalars['String']>;
  operation?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
};

export type HistoryList = {
  __typename?: 'HistoryList';
  list?: Maybe<Array<Maybe<History>>>;
  count?: Maybe<Scalars['Int']>;
};

export enum Historytype {
  Car = 'car',
  Comment = 'comment',
  Contact = 'contact',
  Location = 'location',
  Paperwork = 'paperwork',
  Status = 'status',
  Task = 'task',
  Transit = 'transit',
}

export type Inspection = {
  __typename?: 'Inspection';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  inspector?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
};

export enum Link {
  Linked = 'LINKED',
  Swapped = 'SWAPPED',
}

export type LinkCar = {
  __typename?: 'LinkCar';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  countryCar?: Maybe<Country>;
  swappedCarId?: Maybe<Scalars['ID']>;
  countrySwappedCar?: Maybe<Country>;
  type?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
};

export type LinkedCarList = {
  __typename?: 'LinkedCarList';
  list?: Maybe<Array<Maybe<LinkCar>>>;
  count?: Maybe<Scalars['Int']>;
};

export type LinkSubscriptionOutput = {
  __typename?: 'LinkSubscriptionOutput';
  link?: Maybe<LinkCar>;
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  locationType: LocationGroup;
  location?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
};

export enum LocationGroup {
  Purchase = 'PURCHASE',
  Current = 'CURRENT',
  Selling = 'SELLING',
  Comment = 'COMMENT',
  Place = 'PLACE',
  Marketplace = 'MARKETPLACE',
}

export type LocationInput = {
  locationType: LocationGroup;
  location?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeId?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LocationList = {
  __typename?: 'LocationList';
  list?: Maybe<Array<Maybe<Location>>>;
  count?: Maybe<Scalars['Int']>;
};

export type LocationSavedOutput = {
  __typename?: 'LocationSavedOutput';
  location?: Maybe<Array<Maybe<Location>>>;
};

export type MarketPlace = {
  __typename?: 'MarketPlace';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  country?: Maybe<Country>;
  auctionedOnInspectionId?: Maybe<Scalars['ID']>;
  auctionedOnQCInspectionId?: Maybe<Scalars['ID']>;
  marketplaceInspectionId?: Maybe<Scalars['ID']>;
  marketplaceQCInspectionId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
};

export type MarketplaceImage = {
  __typename?: 'MarketplaceImage';
  id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export type MarketPlaceList = {
  __typename?: 'MarketPlaceList';
  list?: Maybe<Array<Maybe<MarketPlace>>>;
  count?: Maybe<Scalars['Int']>;
};

export enum MentionType {
  User = 'USER',
  Role = 'ROLE',
}

export type Mutation = {
  __typename?: 'Mutation';
  createCar?: Maybe<Car>;
  createCarViaAppointment?: Maybe<Car>;
  createCarViaCopy?: Maybe<Car>;
  createComment?: Maybe<Comment>;
  createContact?: Maybe<Contact>;
  createCountryOptions?: Maybe<CountryOptions>;
  createDocument?: Maybe<Array<Maybe<Document>>>;
  createLocation?: Maybe<Location>;
  createPaperwork?: Maybe<Paperwork>;
  createPdf?: Maybe<Pdf>;
  createPlace?: Maybe<Place>;
  createStatus?: Maybe<Status>;
  createTask?: Maybe<Task>;
  createTransit?: Maybe<Transit>;
  deleteCar?: Maybe<Scalars['Boolean']>;
  deleteComment?: Maybe<Scalars['Boolean']>;
  deleteContact?: Maybe<Scalars['Boolean']>;
  deleteCountryOptions?: Maybe<Scalars['Boolean']>;
  deleteDocument?: Maybe<Scalars['Boolean']>;
  deleteMarketPlace?: Maybe<Scalars['Boolean']>;
  deletePaperwork?: Maybe<Scalars['Boolean']>;
  deletePlace?: Maybe<Scalars['Boolean']>;
  deleteStatus?: Maybe<Scalars['Boolean']>;
  deleteTask?: Maybe<Scalars['Boolean']>;
  deleteTransit?: Maybe<Scalars['Boolean']>;
  linkCar?: Maybe<LinkCar>;
  unlinkCar?: Maybe<Scalars['Boolean']>;
  updateCar?: Maybe<Car>;
  updateComment?: Maybe<Comment>;
  updateContact?: Maybe<Contact>;
  updateDocument?: Maybe<Document>;
  updateLocation?: Maybe<Location>;
  updatePaperwork?: Maybe<Paperwork>;
  updatePlace?: Maybe<Place>;
  updateStatus?: Maybe<Status>;
  updateTask?: Maybe<Task>;
  updateTransit?: Maybe<Transit>;
  uploadPlaces?: Maybe<Scalars['Boolean']>;
  upsertMarketPlace?: Maybe<MarketPlace>;
  upsertPlace?: Maybe<Place>;
};

export type MutationCreateCarArgs = {
  make: Scalars['String'];
  model: Scalars['String'];
  trim?: Maybe<Scalars['String']>;
  trimDetails?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  mileage?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  locationTrackerID?: Maybe<Scalars['String']>;
  handoverFromSellerAt?: Maybe<Scalars['String']>;
  handoverToBuyerAt?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Maybe<StatusInput>>>;
  country: Country;
  contacts?: Maybe<Array<Maybe<ContactInput>>>;
  location?: Maybe<Array<Maybe<LocationInput>>>;
  financialDetails?: Maybe<FinancialDetailsInputType>;
  paperwork?: Maybe<PaperworkInput>;
  availableForPickup?: Maybe<Scalars['String']>;
  engineNumber?: Maybe<Scalars['String']>;
  registeredCity?: Maybe<Scalars['String']>;
  technicalCheckExpiration?: Maybe<Scalars['String']>;
  refurbishmentStatus?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  pickUpFrom?: Maybe<Scalars['String']>;
  bookingId?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
};

export type MutationCreateCarViaAppointmentArgs = {
  country: Country;
  appointmentId: Scalars['ID'];
};

export type MutationCreateCarViaCopyArgs = {
  sourceCarID: Scalars['ID'];
};

export type MutationCreateCommentArgs = {
  carId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  mentions?: Maybe<Array<Maybe<CommentMentionInput>>>;
};

export type MutationCreateContactArgs = {
  carId: Scalars['ID'];
  company?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  type: Contacttype;
  subtype?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankAccountOwner?: Maybe<Scalars['String']>;
  bankAccountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  bankAccountOwnerTaxId?: Maybe<Scalars['String']>;
  bankContactDetails?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  reasonForSelling?: Maybe<Scalars['String']>;
  referrerCode?: Maybe<Scalars['String']>;
};

export type MutationCreateCountryOptionsArgs = {
  type: Scalars['String'];
  country: Country;
  name: Scalars['String'];
  metaInfo?: Maybe<CountryOptionMetaInfoInput>;
  allowedExternally?: Maybe<Scalars['Boolean']>;
  translationKey?: Maybe<Scalars['String']>;
  customSort?: Maybe<Scalars['Int']>;
};

export type MutationCreateDocumentArgs = {
  carId: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  file: Scalars['String'];
  fileName: Scalars['String'];
  fileType?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
};

export type MutationCreateLocationArgs = {
  carId: Scalars['String'];
  locationType: LocationGroup;
  location?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['ID']>;
};

export type MutationCreatePaperworkArgs = {
  carId: Scalars['String'];
  documentStatus?: Maybe<Scalars['String']>;
  documentHandoverToBuyer?: Maybe<DocumentHandoverToBuyer>;
  documentHandoverfromSellerDate?: Maybe<Scalars['String']>;
  documentHandoverToBuyerDate?: Maybe<Scalars['String']>;
  documentLocation?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type MutationCreatePdfArgs = {
  carId: Scalars['String'];
};

export type MutationCreatePlaceArgs = {
  country: Country;
  shortId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  place?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  bIMapping?: Maybe<Scalars['String']>;
  inspectionPointId?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezoneOffset?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  existsOnSimplyBook?: Maybe<Scalars['Boolean']>;
  metaInfo?: Maybe<Scalars['String']>;
};

export type MutationCreateStatusArgs = {
  carId: Scalars['String'];
  statusType: StatusGroup;
  status: StatusValue;
  reason?: Maybe<Scalars['String']>;
};

export type MutationCreateTaskArgs = {
  carId: Scalars['ID'];
  subject: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<Taskstatus>;
  dueDate?: Maybe<Scalars['String']>;
  responsible?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  sendEmail?: Maybe<Scalars['Boolean']>;
  closeEventReceivers?: Maybe<Array<Scalars['String']>>;
};

export type MutationCreateTransitArgs = {
  carId: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  status: TransitStatus;
  driver?: Maybe<Scalars['String']>;
  driverCompany?: Maybe<Scalars['String']>;
  startLocation?: Maybe<Scalars['String']>;
  startPlace?: Maybe<Scalars['String']>;
  endLocation?: Maybe<Scalars['String']>;
  endPlace?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  availableAtStart?: Maybe<ArtifactsInput>;
  availableAtEnd?: Maybe<ArtifactsInput>;
  comment?: Maybe<Scalars['String']>;
  startMileage?: Maybe<Scalars['Int']>;
  endMileage?: Maybe<Scalars['Int']>;
  driverId?: Maybe<Scalars['String']>;
  bookingId?: Maybe<Scalars['String']>;
};

export type MutationDeleteCarArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCountryOptionsArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteDocumentArgs = {
  documentId: Scalars['String'];
};

export type MutationDeleteMarketPlaceArgs = {
  carId: Scalars['ID'];
};

export type MutationDeletePaperworkArgs = {
  id: Scalars['ID'];
};

export type MutationDeletePlaceArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  inspectionPointIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MutationDeleteStatusArgs = {
  carId: Scalars['ID'];
  status: StatusInput;
};

export type MutationDeleteTaskArgs = {
  id: Scalars['String'];
};

export type MutationDeleteTransitArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationLinkCarArgs = {
  carId: Scalars['ID'];
  countryCar: Country;
  swappedCarId: Scalars['ID'];
  countrySwappedCar: Country;
  type: Link;
};

export type MutationUnlinkCarArgs = {
  carId: Scalars['ID'];
  swappedCarId: Scalars['ID'];
};

export type MutationUpdateCarArgs = {
  id: Scalars['ID'];
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  trimDetails?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  mileage?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  locationTrackerID?: Maybe<Scalars['String']>;
  handoverFromSellerAt?: Maybe<Scalars['String']>;
  handoverToBuyerAt?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  contacts?: Maybe<Array<Maybe<ContactInput>>>;
  location?: Maybe<Array<Maybe<LocationInput>>>;
  status?: Maybe<Array<Maybe<StatusInput>>>;
  financialDetails?: Maybe<FinancialDetailsInputType>;
  paperwork?: Maybe<PaperworkInput>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  availableForPickup?: Maybe<Scalars['String']>;
  engineNumber?: Maybe<Scalars['String']>;
  registeredCity?: Maybe<Scalars['String']>;
  technicalCheckExpiration?: Maybe<Scalars['String']>;
  refurbishmentStatus?: Maybe<Scalars['String']>;
  pickUpFrom?: Maybe<Scalars['String']>;
  bookingId?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
};

export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  carId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  mentions?: Maybe<Array<Maybe<CommentMentionInput>>>;
};

export type MutationUpdateContactArgs = {
  id: Scalars['ID'];
  carId: Scalars['ID'];
  company?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  type: Contacttype;
  subtype?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankAccountOwner?: Maybe<Scalars['String']>;
  bankAccountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  bankAccountOwnerTaxId?: Maybe<Scalars['String']>;
  bankContactDetails?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  reasonForSelling?: Maybe<Scalars['String']>;
  referrerCode?: Maybe<Scalars['String']>;
};

export type MutationUpdateDocumentArgs = {
  documentId: Scalars['String'];
  file?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  fileType?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type MutationUpdateLocationArgs = {
  carId: Scalars['String'];
  locationType: LocationGroup;
  location?: Maybe<Scalars['String']>;
  placeId?: Maybe<Scalars['ID']>;
};

export type MutationUpdatePaperworkArgs = {
  id: Scalars['ID'];
  carId: Scalars['String'];
  documentStatus?: Maybe<Scalars['String']>;
  documentHandoverToBuyer?: Maybe<DocumentHandoverToBuyer>;
  documentHandoverfromSellerDate?: Maybe<Scalars['String']>;
  documentHandoverToBuyerDate?: Maybe<Scalars['String']>;
  documentLocation?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type MutationUpdatePlaceArgs = {
  id: Scalars['String'];
  country?: Maybe<Country>;
  shortId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  bIMapping?: Maybe<Scalars['String']>;
  inspectionPointId?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezoneOffset?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
  existsOnSimplyBook?: Maybe<Scalars['Boolean']>;
  metaInfo?: Maybe<Scalars['String']>;
};

export type MutationUpdateStatusArgs = {
  carId: Scalars['String'];
  statusType: StatusGroup;
  status: StatusValue;
  reason?: Maybe<Scalars['String']>;
};

export type MutationUpdateTaskArgs = {
  id: Scalars['ID'];
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<Taskstatus>;
  dueDate?: Maybe<Scalars['String']>;
  responsible?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  sendEmail?: Maybe<Scalars['Boolean']>;
  closeEventReceivers?: Maybe<Array<Scalars['String']>>;
};

export type MutationUpdateTransitArgs = {
  id: Scalars['ID'];
  carId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<TransitStatus>;
  driver?: Maybe<Scalars['String']>;
  driverCompany?: Maybe<Scalars['String']>;
  startLocation?: Maybe<Scalars['String']>;
  startPlace?: Maybe<Scalars['String']>;
  endLocation?: Maybe<Scalars['String']>;
  endPlace?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  availableAtStart?: Maybe<ArtifactsInput>;
  availableAtEnd?: Maybe<ArtifactsInput>;
  comment?: Maybe<Scalars['String']>;
  startMileage?: Maybe<Scalars['Int']>;
  endMileage?: Maybe<Scalars['Int']>;
  driverId?: Maybe<Scalars['String']>;
  bookingId?: Maybe<Scalars['String']>;
};

export type MutationUploadPlacesArgs = {
  country: Country;
  placeData: Scalars['String'];
};

export type MutationUpsertMarketPlaceArgs = {
  carId: Scalars['ID'];
  country?: Maybe<Country>;
  auctionedOnInspectionId?: Maybe<Scalars['ID']>;
  auctionedOnQCInspectionId?: Maybe<Scalars['ID']>;
  marketplaceInspectionId?: Maybe<Scalars['ID']>;
  marketplaceQCInspectionId?: Maybe<Scalars['ID']>;
};

export type MutationUpsertPlaceArgs = {
  country?: Maybe<Country>;
  shortId: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  bIMapping?: Maybe<Scalars['String']>;
  inspectionPointId?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezoneOffset?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  existsOnSimplyBook?: Maybe<Scalars['Boolean']>;
  metaInfo?: Maybe<Scalars['String']>;
};

export type NumberRange = {
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type OfferPricing = {
  __typename?: 'OfferPricing';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdById?: Maybe<Scalars['String']>;
  createdByEmail?: Maybe<Scalars['String']>;
  createdByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  updatedByEmail?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
};

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Paperwork = {
  __typename?: 'Paperwork';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  documentStatus?: Maybe<Scalars['String']>;
  documentHandoverToBuyer?: Maybe<Scalars['String']>;
  documentHandoverfromSellerDate?: Maybe<Scalars['ISOString']>;
  documentHandoverToBuyerDate?: Maybe<Scalars['ISOString']>;
  documentLocation?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
};

export type PaperworkDeletedOutput = {
  __typename?: 'PaperworkDeletedOutput';
  id?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['String']>;
};

export type PaperworkInput = {
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['String']>;
  documentStatus?: Maybe<Scalars['String']>;
  documentHandoverToBuyer?: Maybe<DocumentHandoverToBuyer>;
  documentHandoverfromSellerDate?: Maybe<Scalars['String']>;
  documentHandoverToBuyerDate?: Maybe<Scalars['String']>;
  documentLocation?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type PaperworkList = {
  __typename?: 'PaperworkList';
  list?: Maybe<Array<Maybe<Paperwork>>>;
  count?: Maybe<Scalars['Int']>;
};

export type PaperworkSavedOutput = {
  __typename?: 'PaperworkSavedOutput';
  paperwork?: Maybe<Paperwork>;
};

export type Pdf = {
  __typename?: 'Pdf';
  id?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  id?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  country?: Maybe<Country>;
  shortId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  bIMapping?: Maybe<Scalars['String']>;
  inspectionPointId?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezoneOffset?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  existsOnSimplyBook?: Maybe<Scalars['Boolean']>;
  metaInfo?: Maybe<Scalars['MetaInfo']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
};

export type PlaceList = {
  __typename?: 'PlaceList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<Place>>>;
};

export type PlainCarOutput = {
  __typename?: 'PlainCarOutput';
  id?: Maybe<Scalars['ID']>;
  sourceCarID?: Maybe<Scalars['ID']>;
  internalId?: Maybe<Scalars['ID']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  trimDetails?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  mileage?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  locationTrackerID?: Maybe<Scalars['String']>;
  handoverFromSellerAt?: Maybe<Scalars['String']>;
  handoverToBuyerAt?: Maybe<Scalars['String']>;
  availableForPickup?: Maybe<Scalars['String']>;
  engineNumber?: Maybe<Scalars['String']>;
  registeredCity?: Maybe<Scalars['String']>;
  technicalCheckExpiration?: Maybe<Scalars['String']>;
  refurbishmentStatus?: Maybe<Scalars['String']>;
  pickUpFrom?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  updatedByUser?: Maybe<UserList>;
  createdByUser?: Maybe<UserList>;
  bookingId?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  _diff?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  car?: Maybe<CarList>;
  carsLinked?: Maybe<LinkedCarList>;
  cities?: Maybe<CitiesList>;
  comment?: Maybe<CommentList>;
  contact?: Maybe<ContactList>;
  countryOptions?: Maybe<CountryOptionsList>;
  exportCar?: Maybe<Scalars['ExportResult']>;
  history?: Maybe<HistoryList>;
  location?: Maybe<LocationList>;
  marketPlace?: Maybe<MarketPlaceList>;
  paperwork?: Maybe<PaperworkList>;
  place?: Maybe<PlaceList>;
  statistics?: Maybe<Scalars['StatisticsScalar']>;
  status?: Maybe<StatusList>;
  task?: Maybe<TaskList>;
  transit?: Maybe<TransitList>;
};

export type QueryCarArgs = {
  id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  internalId?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  make?: Maybe<Array<Scalars['String']>>;
  model?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  trimDetails?: Maybe<Scalars['String']>;
  year?: Maybe<NumberRange>;
  mileage?: Maybe<NumberRange>;
  color?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  engineNumber?: Maybe<Scalars['String']>;
  registeredCity?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Maybe<StatusInput>>>;
  location?: Maybe<Array<Maybe<LocationInput>>>;
  createdAt?: Maybe<DateTimeRange>;
  createdByName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<DateTimeRange>;
  technicalCheckExpiration?: Maybe<DateTimeRange>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<Sort>>>;
  documentStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  documentHandoverToBuyer?: Maybe<Array<Maybe<DocumentHandoverToBuyer>>>;
  paperWorkSort?: Maybe<Array<Maybe<Sort>>>;
  reservedAt?: Maybe<DateTimeRange>;
  soldAt?: Maybe<DateTimeRange>;
  boughtAt?: Maybe<DateTimeRange>;
  saleChannel?: Maybe<Scalars['String']>;
  purchaseChannel?: Maybe<Scalars['String']>;
  refurbishmentStatus?: Maybe<Scalars['String']>;
  hasOpenTasks?: Maybe<Scalars['Boolean']>;
  openTasks?: Maybe<Scalars['Int']>;
  pickUpFrom?: Maybe<DateTimeRange>;
  marketplacePrice?: Maybe<NumberRange>;
  marketplaceVisible?: Maybe<Scalars['Boolean']>;
  soldTo?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  bookingId?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  cache?: Maybe<Scalars['Boolean']>;
};

export type QueryCarsLinkedArgs = {
  carId?: Maybe<Scalars['ID']>;
  swappedCarId?: Maybe<Scalars['ID']>;
  type?: Maybe<Link>;
};

export type QueryCitiesArgs = {
  country: Country;
  service: Service;
  region?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  existsOnSimplyBook?: Maybe<Scalars['Boolean']>;
};

export type QueryCommentArgs = {
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<Sort>>>;
};

export type QueryContactArgs = {
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankAccountOwner?: Maybe<Scalars['String']>;
  bankAccountNumber?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  bankAccountOwnerTaxId?: Maybe<Scalars['String']>;
  bankContactDetails?: Maybe<Scalars['String']>;
  referrerCode?: Maybe<Scalars['String']>;
};

export type QueryCountryOptionsArgs = {
  id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  name?: Maybe<Scalars['String']>;
  allowedExternally?: Maybe<Scalars['Boolean']>;
  biMapping?: Maybe<Scalars['String']>;
  hasBiMapping?: Maybe<Scalars['Boolean']>;
  translationKey?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Sort>>>;
};

export type QueryExportCarArgs = {
  carId: Scalars['ID'];
  type: Export;
};

export type QueryHistoryArgs = {
  carId: Scalars['ID'];
  contactId?: Maybe<Scalars['ID']>;
  commentId?: Maybe<Scalars['ID']>;
  type?: Maybe<Historytype>;
  field?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Sort>>>;
};

export type QueryLocationArgs = {
  carId: Scalars['ID'];
  locationType?: Maybe<LocationGroup>;
  location?: Maybe<Scalars['String']>;
};

export type QueryMarketPlaceArgs = {
  carId: Array<Scalars['ID']>;
};

export type QueryPaperworkArgs = {
  id?: Maybe<Scalars['ID']>;
  carId: Scalars['String'];
  documentStatus?: Maybe<Scalars['String']>;
  documentLocation?: Maybe<Scalars['String']>;
};

export type QueryPlaceArgs = {
  id?: Maybe<Scalars['ID']>;
  country?: Maybe<Country>;
  shortId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  type?: Maybe<Service>;
  bIMapping?: Maybe<Scalars['String']>;
  inspectionPointId?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  existsOnSimplyBook?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Array<Maybe<Sort>>>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  cache?: Maybe<Scalars['Boolean']>;
};

export type QueryStatisticsArgs = {
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  country?: Maybe<Array<Maybe<Country>>>;
  groupByCountry?: Maybe<Scalars['Boolean']>;
  groupByTime?: Maybe<Timerange>;
};

export type QueryStatusArgs = {
  carId: Scalars['ID'];
  statusType?: Maybe<StatusGroup>;
  status?: Maybe<StatusValue>;
};

export type QueryTaskArgs = {
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Taskstatus>>>;
  dueDate?: Maybe<DateTimeRange>;
  responsible?: Maybe<Array<Maybe<Scalars['String']>>>;
  priority?: Maybe<Array<Maybe<Scalars['Int']>>>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<Sort>>>;
};

export type QueryTransitArgs = {
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<TransitStatus>>>;
  driver?: Maybe<Scalars['String']>;
  driverCompany?: Maybe<Scalars['String']>;
  startLocation?: Maybe<Array<Maybe<Scalars['String']>>>;
  startPlace?: Maybe<Scalars['String']>;
  endLocation?: Maybe<Array<Maybe<Scalars['String']>>>;
  endPlace?: Maybe<Scalars['String']>;
  startTime?: Maybe<DateTimeRange>;
  endTime?: Maybe<DateTimeRange>;
  availableAtStart?: Maybe<Scalars['String']>;
  availableAtEnd?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  startMileage?: Maybe<NumberRange>;
  endMileage?: Maybe<NumberRange>;
  driverId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<Sort>>>;
  limit?: Maybe<Scalars['Int']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  year?: Maybe<NumberRange>;
  internalId?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  bookingId?: Maybe<Scalars['String']>;
};

export type SaveCarOutput = {
  __typename?: 'SaveCarOutput';
  car?: Maybe<PlainCarOutput>;
};

export type SaveHistoryOutput = {
  __typename?: 'SaveHistoryOutput';
  history?: Maybe<Scalars['String']>;
};

export enum Service {
  Purchase = 'PURCHASE',
  Document = 'DOCUMENT',
  Inspection = 'INSPECTION',
  Inspectioncrm = 'INSPECTIONCRM',
  Inspectioncarpro = 'INSPECTIONCARPRO',
  Selling = 'SELLING',
  Pickup = 'PICKUP',
  Current = 'CURRENT',
  Registration = 'REGISTRATION',
  Auction = 'AUCTION',
}

export type Sort = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
};

export type Status = {
  __typename?: 'Status';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  statusType: StatusGroup;
  status: StatusValue;
  reason?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
};

export type StatusDeletedOutput = {
  __typename?: 'StatusDeletedOutput';
  id?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['String']>;
};

export enum StatusGroup {
  Physical = 'PHYSICAL',
  Legal = 'LEGAL',
  Selling = 'SELLING',
  PurchasePayment = 'PURCHASE_PAYMENT',
  SellingPayment = 'SELLING_PAYMENT',
}

export type StatusInput = {
  statusType: StatusGroup;
  status: Array<Maybe<StatusValue>>;
  reason?: Maybe<Scalars['String']>;
};

export type StatusList = {
  __typename?: 'StatusList';
  list?: Maybe<Array<Maybe<Status>>>;
  count?: Maybe<Scalars['Int']>;
};

export type StatusSavedOutput = {
  __typename?: 'StatusSavedOutput';
  status?: Maybe<Array<Maybe<Status>>>;
};

export enum StatusValue {
  Atowner = 'ATOWNER',
  Intransit = 'INTRANSIT',
  Atourlocation = 'ATOURLOCATION',
  Atbuyer = 'ATBUYER',
  Notavailable = 'NOTAVAILABLE',
  Available = 'AVAILABLE',
  Reserved = 'RESERVED',
  Sold = 'SOLD',
  Owner = 'OWNER',
  Us = 'US',
  Buyer = 'BUYER',
  None = 'NONE',
  Partial = 'PARTIAL',
  Complete = 'COMPLETE',
  Onconsignment = 'ONCONSIGNMENT',
  Consigned = 'CONSIGNED',
  Notconfirmed = 'NOTCONFIRMED',
  Returned = 'RETURNED',
  Pendingclearance = 'PENDINGCLEARANCE',
  Internaluse = 'INTERNALUSE',
  Inqc = 'INQC',
  Defaulted = 'DEFAULTED',
  Confirmed = 'CONFIRMED',
  Financier = 'FINANCIER',
  Underrepair = 'UNDERREPAIR',
  Writeoff100 = 'WRITEOFF100',
}

export type Subscription = {
  __typename?: 'Subscription';
  car?: Maybe<Event>;
};

export type SubscriptionCarArgs = {
  lastEventId?: Maybe<Scalars['ID']>;
};

export type SubscriptionFilter = {
  value?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['ISOString']>;
  responsible?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  createdByName?: Maybe<Scalars['String']>;
  car?: Maybe<PlainCarOutput>;
  closeEventReceivers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TaskList = {
  __typename?: 'TaskList';
  list?: Maybe<Array<Maybe<Task>>>;
  count?: Maybe<Scalars['Int']>;
};

export type TaskSavedOutput = {
  __typename?: 'TaskSavedOutput';
  task?: Maybe<Task>;
};

export enum Taskstatus {
  Open = 'OPEN',
  Close = 'CLOSE',
}

export enum Timerange {
  Week = 'WEEK',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Year = 'YEAR',
}

export type Transaction = {
  __typename?: 'Transaction';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  transactionDate?: Maybe<Scalars['String']>;
  vatPercentage?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  deletedAt?: Maybe<Scalars['ISOString']>;
  createdById?: Maybe<Scalars['String']>;
  createdByEmail?: Maybe<Scalars['String']>;
  createdByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['String']>;
  updatedByEmail?: Maybe<Scalars['String']>;
  updatedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['String']>;
  deletedByName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Transit = {
  __typename?: 'Transit';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  internalId?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  driver?: Maybe<Scalars['String']>;
  driverCompany?: Maybe<Scalars['String']>;
  startLocation?: Maybe<Scalars['String']>;
  startLocationName?: Maybe<Scalars['String']>;
  startPlace?: Maybe<Scalars['String']>;
  endLocation?: Maybe<Scalars['String']>;
  endLocationName?: Maybe<Scalars['String']>;
  endPlace?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['ISOString']>;
  endTime?: Maybe<Scalars['ISOString']>;
  availableAtStart?: Maybe<Artifacts>;
  availableAtEnd?: Maybe<Artifacts>;
  comment?: Maybe<Scalars['String']>;
  startMileage?: Maybe<Scalars['Int']>;
  endMileage?: Maybe<Scalars['Int']>;
  driverId?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['ID']>;
  createdByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['ID']>;
  updatedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['ID']>;
  deletedByName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
  bookingId?: Maybe<Scalars['String']>;
};

export type TransitDeletedOutput = {
  __typename?: 'TransitDeletedOutput';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
};

export type TransitList = {
  __typename?: 'TransitList';
  list?: Maybe<Array<Maybe<Transit>>>;
  count?: Maybe<Scalars['Int']>;
};

export type TransitPlainOutput = {
  __typename?: 'TransitPlainOutput';
  id?: Maybe<Scalars['ID']>;
  carId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  driver?: Maybe<Scalars['String']>;
  driverCompany?: Maybe<Scalars['String']>;
  startLocation?: Maybe<Scalars['String']>;
  startPlace?: Maybe<Scalars['String']>;
  endLocation?: Maybe<Scalars['String']>;
  endPlace?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  availableAtStart?: Maybe<Artifacts>;
  availableAtEnd?: Maybe<Artifacts>;
  comment?: Maybe<Scalars['String']>;
  startMileage?: Maybe<Scalars['Int']>;
  endMileage?: Maybe<Scalars['Int']>;
  driverId?: Maybe<Scalars['String']>;
  bookingId?: Maybe<Scalars['String']>;
  createdById?: Maybe<Scalars['ID']>;
  createdByName?: Maybe<Scalars['String']>;
  updatedById?: Maybe<Scalars['ID']>;
  updatedByName?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['ID']>;
  deletedByName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISOString']>;
  updatedAt?: Maybe<Scalars['ISOString']>;
};

export type TransitSavedOutput = {
  __typename?: 'TransitSavedOutput';
  transit?: Maybe<TransitPlainOutput>;
};

export enum TransitStatus {
  Pending = 'PENDING',
  Scheduled = 'SCHEDULED',
  Running = 'RUNNING',
  Finished = 'FINISHED',
  Aborted = 'ABORTED',
}

export type UserList = {
  __typename?: 'UserList';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
};

export type WarningList = {
  __typename?: 'WarningList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Scalars['Warning']>;
};
