import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private tokenService: TokenService,
  ) { }

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  // TODO parse login data and fetch token from auth API
  authenticate(data: any): Observable<any> {
    return of(true);
  }
}
