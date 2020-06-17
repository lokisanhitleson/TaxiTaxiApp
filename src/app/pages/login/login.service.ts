import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { checkExistnumber } from '../../models/checknumberexistmodel';
import { AgencyProfileImage } from '../../models/agencymodel';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  get(mobileNum, pass) {
    // mobilenumber: mobileNum, password: pass}
    return this.http
      // .post<any>(this.configUrl, { params: { "mobilenumber": mobileNum, "password": pass } })
      .post<any>(`${environment.apiUrl}login`, { mobileNo: mobileNum, password: pass });
  }

  CheckExists(values): Observable<{ data: [checkExistnumber], status: string }> {

    //  this. = values.value;

    return this.http.get<{ data: [checkExistnumber], status: string }>(`${environment.apiUrl}accounts?signupFlag=1&mobilenumber=${values.value}`)
      .pipe(
        tap(_ => console.log(`mobilenumbers exist ${values}`, _)),
        catchError(this.handleError<{ data: [checkExistnumber], status: string }>('mobilenumber exist'))
      );
  }

  forgetpassword(mobileNumber) {
    return this.http.post<{ data: { accountId: number }, status: string }>(`${environment.apiUrl}forgetPass`, { 'mobileNo': mobileNumber }, httpOptions)
      .pipe(
        tap(_ => console.log('crated otp for forgetpassword', _)),
        catchError(this.handleError<{ data: { accountId: number }, status: string }>('error'))
      );
  }

  userData() {
    return this.http.get<{ data: AgencyProfileImage, status: string }>(`${environment.apiUrl}agencyProfileImage`)
      .pipe(
        tap(_ => console.log(`imageget: `, _)),
        catchError(this.handleError<{ data: AgencyProfileImage, status: string }>('get agencyProfileImage'))
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
