import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
// provide all basic functionality of managing JWT in app
export class TokenService {

  constructor() { }

  isAuthenticated(): boolean{
    return false;
  }

  setToken(value: any): void{

  }

  getToken(): any{
    return 'token';
  }

  removeToken(): void{
  }
}
