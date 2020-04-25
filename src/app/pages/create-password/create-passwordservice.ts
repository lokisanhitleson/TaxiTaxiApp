import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PasswordService{
 

    constructor(private http: HttpClient) {}
  

    configUrl = 'http://localhost:8012/api/register';
    get(password,mobileNumber) {
      
       return this.http
             .post<any>(this.configUrl, {mobilenumber: mobileNumber,  password:password});           
         
         
      }
}

 

