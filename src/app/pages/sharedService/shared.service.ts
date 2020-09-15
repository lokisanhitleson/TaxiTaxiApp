import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loginCheckSource = new BehaviorSubject(null);
  currentLoginCheck = this.loginCheckSource.asObservable();

  private authTokenCheckSource = new BehaviorSubject(null);
  currentAuthTokenCheck = this.authTokenCheckSource.asObservable();

  private profileCheckSource = new BehaviorSubject(null);
  currentProfileCheck = this.profileCheckSource.asObservable();

  private agencyManualRefresh = new BehaviorSubject(null);
  currentAgencyManualRefresh = this.agencyManualRefresh.asObservable();

  constructor(private authService: AuthService, private storage: Storage) {
    this.authService.isLoggedIn().then(x => this.loginCheckSource.next(x));
    this.storage.get('accessToken').then(x => this.authTokenCheckSource.next(x));
  }

  changeLoginCheck(message: boolean) {
    this.loginCheckSource.next(message);
  }
  changeAuthTokenCheck(message: string) {
    this.authTokenCheckSource.next(message);
  }
  changeProfileCheck(message: number) {
    this.profileCheckSource.next(message);
  }
  changeagencyManualRefresh(message: number) {
    this.agencyManualRefresh.next(message);
  }
}
