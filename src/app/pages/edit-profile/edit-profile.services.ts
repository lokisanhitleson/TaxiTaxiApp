import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { checkExistnumber } from '../../models/checknumberexistmodel';
import { EditProfile } from '../../models/agencymodel';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({ providedIn: 'root' })

export class EditProfiles {

  constructor(private http: HttpClient) { }

  editProfileData() {
    return this.http.get<{ data: EditProfile, status: string }>(`${environment.apiUrl}getEditProfile`)
      .pipe(
        tap(_ => console.log(`getEditProfiledatas: `, _)),
        catchError(this.handleError<{ data: EditProfile, status: string }>('get getEditProfile'))
      );
  }

  setEditProfile(formData) {
    return this.http.post<{ data: { profilePicUrl: number }, status: string }>(`${environment.apiUrl}setEditProfile`, formData, httpOptions)
      .pipe(
        tap(_ => console.log('crated setEditProfile', _)),
        catchError(this.handleError<{ data: { profilePicUrl: number }, status: string }>('setEditProfile'))
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



