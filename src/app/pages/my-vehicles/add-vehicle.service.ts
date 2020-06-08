import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { VehicleNameWithBrand, VehicleName } from '../models/vehicle-name.model';
import { VehicleTypeDetails } from '../models/vehicle-type.model';
import { ColorOfVehicle } from '../models/vehicle-color.model';
import { VariantOfVehicle } from '../models/vehicle-variant.model';
import { FuelTypeOfVehicle } from '../models/fuel-type.model';
import { VehicleCondition } from '../models/vehicle-condition.model';
import { WheelTypeOfVehicle } from '../models/wheel-type.model';
import { BreakingSystemOfVehicle } from '../models/breaking-system.model';
import { InsuranceCompany } from '../models/insurance-company.model';
import { InsuranceType } from '../models/insurance-type.model';
import { VehicleBrand } from '../models/vehicle-brand.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AddVehicleService {

  constructor(private http: HttpClient) { }

  getVehicleBrands() {
    return this.http.get<{ data: [VehicleBrand], status: string }>(`${environment.apiUrl}vehicleBrands?sort=popularity:asc`)
      .pipe(
        tap(_ => console.log(`vehicleBrands: `, _)),
        catchError(this.handleError<{ data: [VehicleBrand], status: string }>('get vehicleBrands'))
      );
  }
  getVehicleNamesByBrand(vehicleBrandId: number) {
    return this.http.get<{ data: [VehicleName], status: string }>(`${environment.apiUrl}vehicleNames?vehicleBrandId=${vehicleBrandId}`)
      .pipe(
        tap(_ => console.log(`VehicleNamesByBrand: `, _)),
        catchError(this.handleError<{ data: [VehicleName], status: string }>('get VehicleNamesByBrand'))
      );
  }
  getVehicleType(vehicleTypeId) {
    return this.http.get<{ data: VehicleTypeDetails, status: string }>(`${environment.apiUrl}vehicleTypes/${vehicleTypeId}`)
      .pipe(
        tap(_ => console.log(`VehicleTypeDetails: `, _)),
        catchError(this.handleError<{ data: VehicleTypeDetails, status: string }>('get VehicleTypeDetails'))
      );
  }
  getVehicleColors(vehicleNameId) {
    return this.http.get<{ data: [ColorOfVehicle], status: string }>(`${environment.apiUrl}colorsOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`ColorsOfVehicle: `, _)),
        catchError(this.handleError<{ data: [ColorOfVehicle], status: string }>('get ColorsOfVehicle'))
      );
  }
  getVehicleVariants(vehicleNameId) {
    return this.http.get<{ data: [VariantOfVehicle], status: string }>(`${environment.apiUrl}variantsOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`variantsOfVehicle: `, _)),
        catchError(this.handleError<{ data: [VariantOfVehicle], status: string }>('get variantsOfVehicle'))
      );
  }
  getVehicleFuelTypes(vehicleNameId) {
    return this.http.get<{ data: [FuelTypeOfVehicle], status: string }>(`${environment.apiUrl}fuelTypesOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`fuelTypesOfVehicle: `, _)),
        catchError(this.handleError<{ data: [FuelTypeOfVehicle], status: string }>('get fuelTypesOfVehicle'))
      );
  }
  getVehicleConditions() {
    return this.http.get<{ data: [VehicleCondition], status: string }>(`${environment.apiUrl}vehicleConditions`)
      .pipe(
        tap(_ => console.log(`vehicleConditions: `, _)),
        catchError(this.handleError<{ data: [VehicleCondition], status: string }>('get vehicleConditions'))
      );
  }
  getVehicleWheelTypes(vehicleNameId) {
    return this.http.get<{ data: [WheelTypeOfVehicle], status: string }>(`${environment.apiUrl}wheelTypesOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`wheelTypesOfVehicle: `, _)),
        catchError(this.handleError<{ data: [WheelTypeOfVehicle], status: string }>('get wheelTypesOfVehicle'))
      );
  }
  getVehicleBreakingSystems(vehicleNameId) {
    return this.http.get<{ data: [BreakingSystemOfVehicle], status: string }>(`${environment.apiUrl}breakingSystemsOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`breakingSystemsOfVehicle: `, _)),
        catchError(this.handleError<{ data: [BreakingSystemOfVehicle], status: string }>('get breakingSystemsOfVehicle'))
      );
  }
  getInsuranceCompanies() {
    return this.http.get<{ data: [InsuranceCompany], status: string }>(`${environment.apiUrl}insuranceCompanies`)
      .pipe(
        tap(_ => console.log(`insuranceCompanies: `, _)),
        catchError(this.handleError<{ data: [InsuranceCompany], status: string }>('get insuranceCompanies'))
      );
  }
  getInsuranceTypes() {
    return this.http.get<{ data: [InsuranceType], status: string }>(`${environment.apiUrl}insuranceTypes`)
      .pipe(
        tap(_ => console.log(`insuranceTypes: `, _)),
        catchError(this.handleError<{ data: [InsuranceType], status: string }>('get insuranceTypes'))
      );
  }



  insertAgencyVehicle(formData) {
    return this.http.post<{ data: number, status: string }>(`${environment.apiUrl}agencyVehicles`, formData, httpOptions)
      .pipe(
        tap(_ => console.log('Insert Agency Vehicle: ', _)),
        catchError(this.handleError<{ data: number, status: string }>('Insert Agency Vehicle'))
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
