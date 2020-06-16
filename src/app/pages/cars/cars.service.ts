import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AvailableVehicle } from '../models/agency-vehicle.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) { }

  getAvailableAgencyVehicles(data: { vehicleTypeId: number, latitude: number, longitude: number, searchDate: string, page: number }) {
    return this.http.get<{ data: [AvailableVehicle], status: string, perPage: number, totalCount: number, totalPages: number }>(`${environment.apiUrl}availableAgencyVehicles?vehicleTypeId=${data.vehicleTypeId}&searchDate=${data.searchDate}&latitude=${data.latitude}&longitude=${data.longitude}&pagination=true&page=${data.page}`)
      .pipe(
        tap(_ => console.log(`getAvailableAgencyVehicles: `, _)),
        catchError(this.handleError<{ data: [AvailableVehicle], status: string, perPage: number, totalCount: number, totalPages: number }>('get availableAgencyVehicles'))
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
