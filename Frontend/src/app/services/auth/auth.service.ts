import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../Global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;

  constructor(
      private http: HttpClient,
      private router: Router
    ) {
        this.url = GLOBAL.URL;
    }

  createUser(user) {
    return this.http.post<any>(`${this.url}/users/createUser`, user);
  }

  login(user) {
    return this.http.post<any>(`${this.url}/login`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
