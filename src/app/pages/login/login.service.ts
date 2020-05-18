import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse ,HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ENVIRONMENT } from "../../../environments/environment"
import { checkExistnumber } from '../../models/checknumberexistmodel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class LoginService{
 

    constructor(private http: HttpClient) {}


    get(mobileNum, pass) {
      // mobilenumber: mobileNum, password: pass}
       return this.http
          // .post<any>(this.configUrl, { params: { "mobilenumber": mobileNum, "password": pass } })
          .post<any>(`${ENVIRONMENT.apiUrl}login`, {mobileNo: mobileNum, password: pass});                 
      }
      
      CheckExists(values): Observable<{ data: [checkExistnumber], status: string }> {

        //  this. = values.value;
 
       return this.http.get<{ data: [checkExistnumber], status: string }>(`${ENVIRONMENT.apiUrl}accounts?mobilenumber=${values.value}`)
         .pipe(
           tap(_ => console.log(`mobilenumbers exist ${values}`, _)),
           catchError(this.handleError<{ data: [checkExistnumber], status: string }>('mobilenumber exist'))
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
