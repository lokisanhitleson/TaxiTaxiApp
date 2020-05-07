import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ENVIRONMENT } from "../../../environments/environment"
import { checkExistnumber } from '../../models/checknumberexistmodel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })

export class SignUpService{
 
    constructor(private http: HttpClient) {}

      CheckExists(values): Observable<{ data: checkExistnumber, status: string }> {

       //  this. = values.value;

      return this.http.get<{ data: checkExistnumber, status: string }>(`${ENVIRONMENT.apiUrl}accounts?mobilenumber=${values.value}`)
        .pipe(
          tap(_ => console.log(`mobilenumbers exist ${values}`, _)),
          catchError(this.handleError<{ data: checkExistnumber, status: string }>('mobilenumber exist'))
        );
      }
   
      createAccount(mobileNumber) {
      return this.http.post<{  data : { accountId: number }, status: string }>(`${ENVIRONMENT.apiUrl}signUpMobileNo`, {"mobileNo":mobileNumber} )
        .pipe(
          tap(_ => console.log('crated mobilenumber', _)),
          catchError(this.handleError<{  data : { accountId: number }, status: string }>('setmobilenumber'))
        );
         }

        otpauth(OTP,val) {
          return this.http.post<{  data : { id: number }, status: string }>(`${ENVIRONMENT.apiUrl}OTPAuth`, {"mobileNo":val,"otp":OTP} )
            .pipe(
              tap(_ => console.log('OTP Authentication', _)),
              catchError(this.handleError<{  data : { id: number }, status: string }>('authentication error'))
            );
          }

        
          otpresend(resendOtpNumber) {
            return this.http.post<{  data : { response : number }, status: string }>(`${ENVIRONMENT.apiUrl}OTPResend`, {"mobileNo":resendOtpNumber} )
              .pipe(
                tap(_ => console.log('OTP Authentication', _)),
                catchError(this.handleError<{  data : { response: number }, status: string }>('resend OTP Error'))
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
