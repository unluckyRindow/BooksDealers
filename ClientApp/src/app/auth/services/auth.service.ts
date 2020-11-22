import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RegistrationData, LoginData } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationChanged = new Subject<boolean>();

  // mocked login data
  loginData = {login: 'admin', pass: 'admin'};

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) { }

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  authenticate(loginData: LoginData): Observable<any> {
    if (loginData.login === this.loginData.login && loginData.password === this.loginData.pass) {
      this.tokenService.authenticated = true;
      this.authenticationChanged.next(true);
      return of(true);
    }
    return of(false);
  }

  register(data: RegistrationData): Observable<any> {
    return of(true);
  }

  logout(): void {
    this.tokenService.authenticated = false;
    this.authenticationChanged.next(true);
    this.router.navigate(['/login']);
  }
}
