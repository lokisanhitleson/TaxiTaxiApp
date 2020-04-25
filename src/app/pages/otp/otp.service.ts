import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OtpService{
 

    constructor(private http: HttpClient) {}
  

    configUrl = 'http://localhost:8012/api/otpauth';
    get(OTP,mobileNumber) {
      return this.http
          // .post<any>(this.configUrl, { params: { "mobilenumber": mobileNum, "password": pass } })
          .post<any>(this.configUrl, {mobilenumber: mobileNumber,  OTP:OTP});           
         
         
      }
}

 

