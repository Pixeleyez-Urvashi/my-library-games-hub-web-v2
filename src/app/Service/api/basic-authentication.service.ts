import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from './app-config';
import { throwError } from 'rxjs';


export const TOKEN = 'Authorization'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient, private appConfig: AppConfig) { }

  executeJWTAuthenticationService(username: string, password: string) {
    username = 'docandid'
    password = 'sabao'
    return this.http.post<any>(
      this.appConfig.baseApiPath + 'authenticate',
      { username, password }
    ).pipe(
      map(data => {
        localStorage.setItem(AUTHENTICATED_USER, username);
        localStorage.setItem(TOKEN, `Bearer ${data.token}`);
        return data;
      }),
      catchError(err => {
        console.error('Erro na autenticação:', err);
        return throwError(() => err);
      })
    )
  };


  getAuthenticatedUser() {
    return localStorage.getItem(AUTHENTICATED_USER)
  }

  isUserLoggedIn() {
    let user = localStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    localStorage.removeItem(AUTHENTICATED_USER)
    localStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}