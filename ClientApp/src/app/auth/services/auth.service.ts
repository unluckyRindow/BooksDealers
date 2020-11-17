import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationChanged = new Subject<boolean>();

  // mocked login data
  loginData = {login: 'login', pass: 'admin'};

  constructor(
    private tokenService: TokenService,
    private router: Router,
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

  logout(): void {
    this.tokenService.authenticated = false;
    this.authenticationChanged.next(true);
    this.router.navigate(['/login']);
  }
}
