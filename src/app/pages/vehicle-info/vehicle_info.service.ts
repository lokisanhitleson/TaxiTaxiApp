import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AvailableVehicleDetails, AvailableAgencyDetails } from '../models/agency-vehicle.model';
import { VehicleNameDetails } from '../models/vehicle-name.model';
import { VehicleBrandDetails } from '../models/vehicle-brand.model';
import { VehicleTypeDetails } from '../models/vehicle-type.model';
import { VehicleColorDetails } from '../models/vehicle-color.model';
import { VehicleVariantDetails } from '../models/vehicle-variant.model';
import { FuelTypeDetails } from '../models/fuel-type.model';
import { WheelTypeDetails } from '../models/wheel-type.model';
import { BrakingSystemDetails } from '../models/braking-system.model';
import { VehicleConditionDetails } from '../models/vehicle-condition.model';
import { InsuranceAvailableDetails } from '../models/insurance-detail.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class VehicleInfoService {

  constructor(private http: HttpClient) { }

  getAgencyVehicleDetails(id: number) {
    return this.http.get<{ data: AvailableVehicleDetails, status: string }>(`${environment.apiUrl}availableAgencyVehicles/${id}`)
      .pipe(
        tap(_ => console.log(`getAvailableSingleAgencyVehicle: `, _)),
        catchError(this.handleError<{ data: AvailableVehicleDetails, status: string }>('getAvailableSingleAgencyVehicle'))
      );
  }
  getVehicleName(id: number) {
    return this.http.get<{ data: VehicleNameDetails, status: string }>(`${environment.apiUrl}vehicleNames/${id}`)
      .pipe(
        tap(_ => console.log(`vehicleNames: `, _)),
        catchError(this.handleError<{ data: VehicleNameDetails, status: string }>('get single vehicleNames'))
      );
  }
  getInsuranceDetail(id: number) {
    return this.http.get<{ data: InsuranceAvailableDetails, status: string }>(`${environment.apiUrl}insuranceAvailableDetails/${id}`)
      .pipe(
        tap(_ => console.log(`InsuranceDetails: `, _)),
        catchError(this.handleError<{ data: InsuranceAvailableDetails, status: string }>('get single InsuranceDetails'))
      );
  }
  getVehicleBrand(id: number) {
    return this.http.get<{ data: VehicleBrandDetails, status: string }>(`${environment.apiUrl}vehicleBrands/${id}`)
      .pipe(
        tap(_ => console.log(`vehicleBrands: `, _)),
        catchError(this.handleError<{ data: VehicleBrandDetails, status: string }>('get single vehicleBrands'))
      );
  }
  getVehicleType(id: number) {
    return this.http.get<{ data: VehicleTypeDetails, status: string }>(`${environment.apiUrl}vehicleTypes/${id}`)
      .pipe(
        tap(_ => console.log(`vehicleTypes: `, _)),
        catchError(this.handleError<{ data: VehicleTypeDetails, status: string }>('get single vehicleTypes'))
      );
  }
  getVehicleColor(id: number) {
    return this.http.get<{ data: VehicleColorDetails, status: string }>(`${environment.apiUrl}vehicleColors/${id}`)
      .pipe(
        tap(_ => console.log(`VehicleColorDetails: `, _)),
        catchError(this.handleError<{ data: VehicleColorDetails, status: string }>('get single vehicleColors'))
      );
  }
  getVehicleVariant(id: number) {
    return this.http.get<{ data: VehicleVariantDetails, status: string }>(`${environment.apiUrl}vehicleVariants/${id}`)
      .pipe(
        tap(_ => console.log(`vehicleVariants: `, _)),
        catchError(this.handleError<{ data: VehicleVariantDetails, status: string }>('get single vehicleVariants'))
      );
  }
  getVehicleFuelType(id: number) {
    return this.http.get<{ data: FuelTypeDetails, status: string }>(`${environment.apiUrl}fuelTypes/${id}`)
      .pipe(
        tap(_ => console.log(`fuelTypes: `, _)),
        catchError(this.handleError<{ data: FuelTypeDetails, status: string }>('get single fuelTypes'))
      );
  }
  getVehicleWheelType(id: number) {
    return this.http.get<{ data: WheelTypeDetails, status: string }>(`${environment.apiUrl}wheelTypes/${id}`)
      .pipe(
        tap(_ => console.log(`wheelTypes: `, _)),
        catchError(this.handleError<{ data: WheelTypeDetails, status: string }>('get single wheelTypes'))
      );
  }
  getVehicleBrakingSystem(id: number) {
    return this.http.get<{ data: BrakingSystemDetails, status: string }>(`${environment.apiUrl}brakingSystems/${id}`)
      .pipe(
        tap(_ => console.log(`brakingSystems: `, _)),
        catchError(this.handleError<{ data: BrakingSystemDetails, status: string }>('get single brakingSystems'))
      );
  }
  getVehicleCondition(id: number) {
    return this.http.get<{ data: VehicleConditionDetails, status: string }>(`${environment.apiUrl}vehicleConditions/${id}`)
      .pipe(
        tap(_ => console.log(`vehicleConditions: `, _)),
        catchError(this.handleError<{ data: VehicleConditionDetails, status: string }>('get single vehicleConditions'))
      );
  }
  getAgencyDetails(id: number) {
    return this.http.get<{ data: AvailableAgencyDetails, status: string }>(`${environment.apiUrl}availableAgencies/${id}`)
      .pipe(
        tap(_ => console.log(`availableAgencies: `, _)),
        catchError(this.handleError<{ data: AvailableAgencyDetails, status: string }>('get availableAgencies'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
