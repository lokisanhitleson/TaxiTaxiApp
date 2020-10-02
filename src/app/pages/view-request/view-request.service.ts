import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { viewRequests } from '../models/view-request.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  @Injectable()

  export class viewRequestsService {

    constructor(private http: HttpClient) { }
  
    getvehicleRequests(data: { page: number }) {
        return this.http.get<{ data: [viewRequests], status: string, perPage: number, totalCount: number, totalPages: number }>(`${environment.apiUrl}vehicleRequests?pagination=true&page=${data.page}`)
          .pipe(
            tap(_ => console.log(`getAgencyVehicles: `, _)),
            catchError(this.handleError<{ data: [viewRequests], status: string, perPage: number, totalCount: number, totalPages: number }>('get agencyVehicles'))
          );
      }
      getagencyNotifications(data: { page: number }) {
        return this.http.get<{ data: [viewRequests], status: string, perPage: number, totalCount: number, totalPages: number }>(`${environment.apiUrl}agencyNotifications?pagination=true&page=${data.page}`)
          .pipe(
            tap(_ => console.log(`getnotfications: `, _)),
            catchError(this.handleError<{ data: [viewRequests], status: string, perPage: number, totalCount: number, totalPages: number }>('get agencyVehicles'))
          );
      }
      getolderagencyNotifications(data: { page: number }) {
        return this.http.get<{ data: [viewRequests], status: string, perPage: number, totalCount: number, totalPages: number }>(`${environment.apiUrl}olderAgencyNotifications?pagination=true&page=${data.page}`)
          .pipe(
            tap(_ => console.log(`get older notfications: `, _)),
            catchError(this.handleError<{ data: [viewRequests], status: string, perPage: number, totalCount: number, totalPages: number }>('get agencyVehicles'))
          );
      }
      getRequestsById(id) {
        return this.http.get<{ data: viewRequests, status: string, perPage: number, totalCount: number, totalPages: number }>(`${environment.apiUrl}agencyNotification/${id}`)
          .pipe(
            tap(_ => console.log(`get request by id: `, _)),
            catchError(this.handleError<{ data: viewRequests, status: string, perPage: number, totalCount: number, totalPages: number }>('get agencyVehicles'))
          );
      }
      updateDetailRequests(id) {
        return this.http.put<{ data: number, status: string }>(`${environment.apiUrl}agencyNotifications/${id}`, httpOptions)
        .pipe(
          tap(_ => console.log('update agencyNotifications: ', _)),
          catchError(this.handleError<{ data: number, status: string }>('update agencyNotifications'))
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
  
