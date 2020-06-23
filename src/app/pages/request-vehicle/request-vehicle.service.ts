import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AgencyVehicleSelect } from '../models/agency-vehicle.model';
import { VehicleBrand } from '../models/vehicle-brand.model';
import { VehicleName } from '../models/vehicle-name.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RequestVehicleService {

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
  saveBookings(data: { agencyVehicleId: number, dates: string[] }) {
    return this.http.post<{ data: [], status: string }>(`${environment.apiUrl}vehicleBookedDates`, data)
      .pipe(
        tap(_ => console.log(`saveVehicleBookedDates: `, _)),
        catchError(this.handleError<{ data: [], status: string }>('save vehicleBookedDates'))
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
