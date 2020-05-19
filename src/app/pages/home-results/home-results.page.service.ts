import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { vechicleTypes } from '../../models/VechileTypesmodel';     
const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
 @Injectable({ providedIn: 'root' })

 export class homeResultsService{

        constructor(private http: HttpClient) {}
        getVechileTypes(): Observable<{  data: [vechicleTypes], status: string }> {
          console.log("vehicleTypes");
            let url = `${environment.apiUrl}vehicleTypes?active=Y&sort=sequence:asc`;
            return (
              this.http.get<{  data: [vechicleTypes], status: string }>(url)
              .pipe(
                tap(_ => console.log('linked students', _)),
                catchError(this.handleError<{  data: [vechicleTypes], status: string }>('getLinkedStudents'))
              )
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

 

