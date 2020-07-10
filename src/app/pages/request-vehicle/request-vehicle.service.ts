import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AgencyVehicleSelect } from '../models/agency-vehicle.model';
import { VehicleType } from '../models/vehicle-type.model';
import { BrandOfVehicleType } from '../models/vehicle-brand.model';
import { VehicleName } from '../models/vehicle-name.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RequestVehicleService {

  constructor(private http: HttpClient) { }

  getVehicleTypes() {
    return this.http.get<{ data: [VehicleType], status: string }>(`${environment.apiUrl}vehicleTypes?active=Y&sort=type:asc`)
      .pipe(
        tap(_ => console.log(`vehicleTypes: `, _)),
        catchError(this.handleError<{ data: [VehicleType], status: string }>('get vehicleTypes'))
      );
  }
  getVehicleBrands(vehicleTypeId) {
    return this.http.get<{ data: [BrandOfVehicleType], status: string }>(`${environment.apiUrl}brandsOfVehicleType/${vehicleTypeId}`)
      .pipe(
        tap(_ => console.log(`vehicleBrands: `, _)),
        catchError(this.handleError<{ data: [BrandOfVehicleType], status: string }>('get vehicleBrands'))
      );
  }
  getVehicleNamesByBrand(vehicleBrandId: number, vehicleTypeId) {
    return this.http.get<{ data: [VehicleName], status: string }>(`${environment.apiUrl}vehicleNames?vehicleBrandId=${vehicleBrandId}&vehicleTypeId=${vehicleTypeId}&active=Y`)
      .pipe(
        tap(_ => console.log(`VehicleNamesByBrand: `, _)),
        catchError(this.handleError<{ data: [VehicleName], status: string }>('get VehicleNamesByBrand'))
      );
  }
  getAgencyVehicles() {
    return this.http.get<{ data: [AgencyVehicleSelect], status: string }>(`${environment.apiUrl}selectAgencyVehicles`)
      .pipe(
        tap(_ => console.log(`AgencyVehiclesSelect: `, _)),
        catchError(this.handleError<{ data: [AgencyVehicleSelect], status: string }>('get AgencyVehiclesSelect'))
      );
  }
  getBookedDates(agencyVehicleId: number) {
    return this.http.get<{ data: [{ date: string }], status: string }>(`${environment.apiUrl}vehicleBookedDates/${agencyVehicleId}`)
      .pipe(
        tap(_ => console.log(`vehicleBookedDates: `, _)),
        catchError(this.handleError<{ data: [{ date: string }], status: string }>('get vehicleBookedDates'))
      );
  }
  saveRequest(data) {
    return this.http.post<{ data: [], status: string }>(`${environment.apiUrl}vehicleRequests`, data)
      .pipe(
        tap(_ => console.log(`vehicleRequests: `, _)),
        catchError(this.handleError<{ data: [], status: string }>('save vehicleRequests'))
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
