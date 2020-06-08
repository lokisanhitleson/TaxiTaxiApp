import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { agencyProfileImage } from '../../models/agencymodel';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({ providedIn: 'root' })

export class PasswordService {

  constructor(private http: HttpClient) { }

  createpassword(crp, accountid) {
    return this.http.post<{ data: { accountId: number }, status: string }>(`${environment.apiUrl}createpassword`, { 'password': crp, 'accountId': accountid }, httpOptions)
      .pipe(
        tap(_ => console.log('crated mobilenumber', _)),
        catchError(this.handleError<{ data: { accountId: number }, status: string }>('setmobilenumber'))
      );
  }

  userData() {
    return this.http.get<{ data: agencyProfileImage, status: string }>(`${environment.apiUrl}agencyProfileImage`)
      .pipe(
        tap(_ => console.log(`imageget: `, _)),
        catchError(this.handleError<{ data: agencyProfileImage, status: string }>('get agencyProfileImage'))
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
