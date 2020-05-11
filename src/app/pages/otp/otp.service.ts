import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ENVIRONMENT } from "../../../environments/environment"

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({ providedIn: 'root' })
export class OtpService{
 

    constructor(private http: HttpClient) {}
    
    otpauth(OTP,val) {
        return this.http.post<{  data : { id: number }, status: string }>(`${ENVIRONMENT.apiUrl}passotpauth`, {"mobileNo":val,"otp":OTP} ,httpOptions)
          .pipe(
            tap(_ => console.log('OTP Authentication', _)),
            catchError(this.handleError<{  data : { id: number }, status: string }>('authentication error'))
          );
        }


    otpresend(resendOtpNumber) {
            return this.http.post<{  data : { response : number }, status: string }>(`${ENVIRONMENT.apiUrl}passresendotp`, {"mobileNo":resendOtpNumber} ,httpOptions)
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
        


 

