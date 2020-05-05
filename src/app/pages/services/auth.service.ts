import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

import { Token } from '../models/login.model';
import { SharedService } from '../sharedService/shared.service';
// import { ENVIRONMENT } from '../environment';
const ENVIRONMENT = {
  apiUrl: "http://13.234.111.199:8000/"
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    public navCtrl: NavController) { }

  login(mobileNo: string, password: string): Observable<{data: Token, status: string}> {
    return this.http.post<{data: Token, status: string}>(`${ENVIRONMENT.apiUrl}login/`, {type: 'USER', mobileNo, password}, httpOptions)
      .pipe(
        tap(_ => {
          console.log('Authenticating', _);
          this.setSession(_.data);
        }),
        catchError(this.handleError<{data: Token, status: string}>('Login Authenticate'))
      );
  }
  private setSession(authResult: Token) {
      localStorage.setItem('accessToken', authResult.accessToken);
  } 
  
  getAccount(): Observable<{ data: Account, status: string }> {
    return this.http.get<{ data: Account, status: string }>(`${ENVIRONMENT.apiUrl}currentAccount`)
      .pipe(
        tap(_ => console.log('Fetched Account', _)),
        catchError(this.handleError<{ data: Account, status: string }>('getAccountDetails'))
      );
  }

  logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("mobileNo");
      localStorage.removeItem("role");
      localStorage.removeItem("roleName");
  }
  public isLoggedIn() {
      return localStorage.getItem('accessToken') != null;
  }

  isLoggedOut() {
      return !this.isLoggedIn();
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
