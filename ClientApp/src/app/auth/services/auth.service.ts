import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RegistrationData, LoginData } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly API_URL = environment.config.PathApi;

  // tslint:disable:variable-name
  private _userId: number;
  private _userName: string;
  authenticationChanged = new Subject<boolean>();

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private http: HttpClient,
  ) { }

  get userId(): number {
    return this._userId;
  }

  get userName(): string {
    return this._userName;
  }

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  authenticate(loginData: LoginData): Observable<any> {
    return this.http.post(this.API_URL + 'api/users/login', JSON.stringify(loginData), this.GetHeaders())
      .pipe(
        map((x: any) => {
          if (x) {
            this.tokenService.setToken(x.token);
            this._userId = x.id;
            this._userName = x.name;
          }
          this.authenticationChanged.next(true);
          return x;
        })
      );
  }

  register(registrationData: RegistrationData): Observable<any> {
    return this.http.post(this.API_URL + 'api/users/register', JSON.stringify(registrationData), this.GetHeaders())
    .pipe(
      map((x: any) => {
        if (x) {
          this.tokenService.setToken(x.token);
          this._userId = x.id;
          this._userName = x.name;
        }
        this.authenticationChanged.next(true);
        return x;
      })
    );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.authenticationChanged.next(true);
    this.router.navigate(['/login']);
  }

  GetHeaders(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenService.getToken()}`
      })
    };
  }
}
