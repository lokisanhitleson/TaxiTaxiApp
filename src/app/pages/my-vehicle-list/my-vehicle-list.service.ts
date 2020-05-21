import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { VehicleNameWithBrand } from '../models/vehicle-name.model';
import { AgencyVehicle } from '../models/agency-vehicle.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class myVehicleListService {
 
  constructor(private http: HttpClient) {}

  getAgencyVehicles(data: { page: number }) {
    return this.http.get<{ data: [AgencyVehicle], status: string, perPage: number, totalCount: number, totalPages: number }>(`${environment.apiUrl}agencyVehicles?pagination=true&page=${data.page}`)
      .pipe(
        tap(_ => console.log(`getAgencyVehicles: `, _)),
        catchError(this.handleError<{ data: [AgencyVehicle], status: string, perPage: number, totalCount: number, totalPages: number }>('get agencyVehicles'))
      );               
  }


  removeAgencyVehicle(id: number) {
    return this.http.delete<{  data : string, status: string }>(`${environment.apiUrl}agencyVehicles/${id}`,httpOptions )
      .pipe(
        tap(_ => console.log('Remove Agency Vehicle: ', _)),
        catchError(this.handleError<{  data : string, status: string }>('Remove Agency Vehicle'))
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
