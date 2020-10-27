import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../Global';
=======
import {HttpClient} from '@angular/common/http';
>>>>>>> frontend

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.URL;
  }

  createUser(user) {
    this.http.post(`${this.url}/operations/addOperation`)
  }
=======
  constructor(private http: HttpClient) { }
>>>>>>> frontend
}
