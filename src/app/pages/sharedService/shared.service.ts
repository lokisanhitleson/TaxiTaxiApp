import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loginCheckSource = new BehaviorSubject(this.authService.isLoggedIn());
  currentLoginCheck = this.loginCheckSource.asObservable();

  constructor(private authService: AuthService) {}
  
  changeLoginCheck(message: boolean) {
    this.loginCheckSource.next(message)
  }

}