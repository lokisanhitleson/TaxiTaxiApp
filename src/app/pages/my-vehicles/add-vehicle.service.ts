import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ENVIRONMENT } from "../../../environments/environment"
import { VehicleNameWithBrand } from '../models/vehicle-name.model';
import { VehicleTypeDetails } from '../models/vehicle-type.model';
import { ColorOfVehicle } from '../models/vehicle-color.model';
import { VariantOfVehicle } from '../models/vehicle-variant.model';
import { FuelTypeOfVehicle } from '../models/fuel-type.model';
import { VehicleCondition } from '../models/vehicle-condition.model';
import { WheelTypeOfVehicle } from '../models/wheel-type.model';
import { BreakingSystemOfVehicle } from '../models/breaking-system.model';
import { InsuranceCompany } from '../models/insurance-company.model';
import { InsuranceType } from '../models/insurance-type.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AddVehicleService {
 
  constructor(private http: HttpClient) {}

  getVehicleNames() {
    return this.http.get<{ data: [VehicleNameWithBrand], status: string }>(`${ENVIRONMENT.apiUrl}vehicleNamesWithBrand`)
      .pipe(
        tap(_ => console.log(`VehicleNamesWithBrand: `, _)),
        catchError(this.handleError<{ data: [VehicleNameWithBrand], status: string }>('get VehicleNamesWithBrand'))
      );               
  }  
  getVehicleType(vehicleTypeId) {
    return this.http.get<{ data: VehicleTypeDetails, status: string }>(`${ENVIRONMENT.apiUrl}vehicleTypes/${vehicleTypeId}`)
      .pipe(
        tap(_ => console.log(`VehicleTypeDetails: `, _)),
        catchError(this.handleError<{ data: VehicleTypeDetails, status: string }>('get VehicleTypeDetails'))
      );               
  }
  getVehicleColors(vehicleNameId) {
    return this.http.get<{ data: [ColorOfVehicle], status: string }>(`${ENVIRONMENT.apiUrl}colorsOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`ColorsOfVehicle: `, _)),
        catchError(this.handleError<{ data: [ColorOfVehicle], status: string }>('get ColorsOfVehicle'))
      );               
  }
  getVehicleVariants(vehicleNameId) {
    return this.http.get<{ data: [VariantOfVehicle], status: string }>(`${ENVIRONMENT.apiUrl}variantsOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`variantsOfVehicle: `, _)),
        catchError(this.handleError<{ data: [VariantOfVehicle], status: string }>('get variantsOfVehicle'))
      );               
  }
  getVehicleFuelTypes(vehicleNameId) {
    return this.http.get<{ data: [FuelTypeOfVehicle], status: string }>(`${ENVIRONMENT.apiUrl}fuelTypesOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`fuelTypesOfVehicle: `, _)),
        catchError(this.handleError<{ data: [FuelTypeOfVehicle], status: string }>('get fuelTypesOfVehicle'))
      );               
  }
  getVehicleConditions() {
    return this.http.get<{ data: [VehicleCondition], status: string }>(`${ENVIRONMENT.apiUrl}vehicleConditions`)
      .pipe(
        tap(_ => console.log(`vehicleConditions: `, _)),
        catchError(this.handleError<{ data: [VehicleCondition], status: string }>('get vehicleConditions'))
      );               
  }  
  getVehicleWheelTypes(vehicleNameId) {
    return this.http.get<{ data: [WheelTypeOfVehicle], status: string }>(`${ENVIRONMENT.apiUrl}wheelTypesOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`wheelTypesOfVehicle: `, _)),
        catchError(this.handleError<{ data: [WheelTypeOfVehicle], status: string }>('get wheelTypesOfVehicle'))
      );               
  }
  getVehicleBreakingSystems(vehicleNameId) {
    return this.http.get<{ data: [BreakingSystemOfVehicle], status: string }>(`${ENVIRONMENT.apiUrl}breakingSystemsOfVehicle/${vehicleNameId}`)
      .pipe(
        tap(_ => console.log(`breakingSystemsOfVehicle: `, _)),
        catchError(this.handleError<{ data: [BreakingSystemOfVehicle], status: string }>('get breakingSystemsOfVehicle'))
      );               
  }
  getInsuranceCompanies() {
    return this.http.get<{ data: [InsuranceCompany], status: string }>(`${ENVIRONMENT.apiUrl}insuranceCompanies`)
      .pipe(
        tap(_ => console.log(`insuranceCompanies: `, _)),
        catchError(this.handleError<{ data: [InsuranceCompany], status: string }>('get insuranceCompanies'))
      );               
  } 
  getInsuranceTypes() {
    return this.http.get<{ data: [InsuranceType], status: string }>(`${ENVIRONMENT.apiUrl}insuranceTypes`)
      .pipe(
        tap(_ => console.log(`insuranceTypes: `, _)),
        catchError(this.handleError<{ data: [InsuranceType], status: string }>('get insuranceTypes'))
      );               
  } 
    


  forgetpassword(mobileNumber) {
    return this.http.post<{  data : { accountId: number }, status: string }>(`${ENVIRONMENT.apiUrl}forgetPass`, {"mobileNo":mobileNumber},httpOptions )
      .pipe(
        tap(_ => console.log('crated otp for forgetpassword', _)),
        catchError(this.handleError<{  data : { accountId: number }, status: string }>('error'))
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
