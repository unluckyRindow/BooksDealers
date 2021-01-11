import { Injectable } from '@angular/core';
import { UserData } from '../models/user.model';


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

  setToken(value: any): void {
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

  setUserData(id: number, name: string): void {
    window.localStorage.id = id;
    window.localStorage.name = name;
  }

  getUserData(): UserData {
    if (!this.isAuthenticated()) {
      return null;
    }
    return {id: window.localStorage.id, name: window.localStorage.name};
  }

  removeUserData(): void {
    this.setUserData(undefined, undefined);
  }
}
