import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
// provide all basic functionality of managing JWT in app
export class TokenService {

  constructor() { }

  isAuthenticated(): boolean{
    return (!(window.localStorage.token === undefined ||
              window.localStorage.token === null ||
              window.localStorage.token === 'null' ||
              window.localStorage.token === 'undefined' ||
              window.localStorage.token === ''));
  }

  setToken(value: any): void{
    window.localStorage.token = value;
  }

  getToken(): any{
    if (!this.isAuthenticated()) {
        return '';
    }
    return window.localStorage.token;
  }

  removeToken(): void{
    this.setToken(undefined);
  }
}
