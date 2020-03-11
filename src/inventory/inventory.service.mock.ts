import { Observable } from 'rxjs';
import { Car, Country } from './types/car.type';

export class InventoryServiceMock {
  listCars(): Observable<Car[]> {
    const cars: Car[] = [
      {
        id: '79245eca-a2b7-4929-a065-22c120db5cb0',
        internalId: 'NG-125628',
        sourceCarID: null,
        make: 'Innoson',
        model: 'IVMG5',
        trim: 'Automatic',
        trimDetails: null,
        year: 2014,
        mileage: 163744,
        color: 'Blue',
        vin: '2ea1df5a9bc9ca913fa69bb993dbe379',
        licensePlate: null,
        type: 'Selling',
        country: Country.Ng,
        locationTrackerID: null,
        handoverFromSellerAt: null,
        handoverToBuyerAt: null,
        financialDetails: {
          id: 'd73afbd6-b037-4d2d-b52f-1d581e1c6074',
          carId: '79245eca-a2b7-4929-a065-22c120db5cb0',
          marketplacePrice: null,
          oldMarketplacePrice: 0,
          marketplaceVisible: false,
          isFeatured: false,
          soldToPhoneNumber: null,
          availableFinancingOptions: null,
          chosenFinancingOption: null,
          confirmedAt: null,
          marketplaceImages: null,
        },
        createdAt: '2020-02-27T23:13:47.000Z',
        updatedAt: '2020-02-27T23:13:47.000Z',
        deletedAt: null,
        createdByName: 'florian.sauter@frontiercargroup.com',
        createdById: '5854bdd0-a3a9-47ac-bd8a-b84d2d0362ff',
        updatedByName: null,
        updatedById: null,
        deletedByName: null,
        deletedById: null,
        availableForPickup: null,
        engineNumber: null,
        registeredCity: null,
        technicalCheckExpiration: null,
        refurbishmentStatus: null,
        openTasks: 0,
        pickUpFrom: null,
        bookingId: null,
        grade: null,
        bodyType: null,
      },
    ];
    // return Observable.of(cars);
    const observable: Observable<Car[]> = new Observable(sub => {
      sub.next(cars);
      sub.complete();
    });
    return observable;
  }
}
