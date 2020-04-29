import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RegisterService{
 
    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  

    configUrl = 'http://localhost:8012/api/register';
    get(mobileNumber,AgencyName,AgencyRegisterationNumber,Region,ContactName,email) {
         return this.http.post<any>(this.configUrl, {mobilenumber: mobileNumber,
          AgencyName: AgencyName,
          AgencyRegisterationNumber: AgencyRegisterationNumber ,
           ContactName: ContactName,
            Region: Region,
            email:email});             
      }
    }
