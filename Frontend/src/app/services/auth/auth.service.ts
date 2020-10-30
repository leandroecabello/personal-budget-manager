import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../Global';
import { Router } from '@angular/router';
import { User, UserResponse } from 'src/app/models/User.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  private token: string;

  constructor(
      private http: HttpClient,
      private router: Router
    ) {
        this.url = GLOBAL.URL;
    }

  createUser(user: User) {
    return this.http.post(`${this.url}/users/createUser`, user);
  }

  login(user: User) {
    return this.http.post(`${this.url}/login`, user).pipe(map(
        (res: UserResponse ) => this.saveToken(res.token)
      )
    );
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

  private saveToken( token: any ): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

}
