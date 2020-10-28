import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../Global';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private url: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {
    this.url = GLOBAL.URL;
  }

  getOperations() {
    return this.http.get<any>(`${this.url}/operations`);
  }
}
