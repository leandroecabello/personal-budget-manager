import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../Global';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private url: string;
  private userId: number;

  constructor(
    private http: HttpClient,
    ) {
    this.url = GLOBAL.URL;
  }

  getOperations() {
    return this.http.get<any>(`${this.url}/operations/opByUser/${this.userId}`);
  }

  addOperation(operation) {
    return this.http.post<any>(`${this.url}/operations/addOperation`, operation);
  }

  getOneOpById(id: number) {
    return this.http.get<any>(`${this.url}/operations/${id}`);
  }

  updateOperation(id, operation) {
      return this.http.put(`${this.url}/operations/editOperation/${id}`, operation);
  }

  deleteOperation(id: number) {
    return this.http.delete(`${this.url}/operations/deleteOperation/${id}`);
  }


}
