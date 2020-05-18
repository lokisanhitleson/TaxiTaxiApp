import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loginCheckSource = new BehaviorSubject(null);
  currentLoginCheck = this.loginCheckSource.asObservable();

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().then(x => this.loginCheckSource.next(x))
  }
  
  changeLoginCheck(message: boolean) {
    this.loginCheckSource.next(message)
  }

}