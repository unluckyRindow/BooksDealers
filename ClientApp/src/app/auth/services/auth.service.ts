import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationChanged = new Subject<boolean>();

  // mocked login data
  loginData = {login: 'login', pass: 'admin'};

  constructor(
    private tokenService: TokenService,
  ) { }

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  authenticate(login: string, password: string): Observable<any> {
    if (login === this.loginData.login && password === this.loginData.pass) {
      this.tokenService.authenticated = true;
      this.authenticationChanged.next(true);
      return of(true);
    }
    return of(false);
  }
}
