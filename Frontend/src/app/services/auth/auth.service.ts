import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../Global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.URL;
  }

  createUser(user) {
    this.http.post(`${this.url}/operations/addOperation`)
  }
}
