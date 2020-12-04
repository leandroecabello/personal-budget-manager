import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../Global';
import { Operation, Balance } from 'src/app/models/Operation.model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private url: string;
  private userId: number;
  public selectedOperation: Operation = {
    concept: '',
    amount: 0,
    date: '',
    opType: '',
    category: '',
    userId: 0
  };
  public operations: Operation[];

  public balance: Balance = {
    totalIncome: 0,
    totalDischarge: 0,
    balance: 0,
  };

  constructor(
    private http: HttpClient,
    ) {
    this.url = GLOBAL.URL;
  }

  getOperations() {
    return this.http.get<Operation[]>(`${this.url}/operations/opByUser/${this.userId}`);
  }

  addOperation(operation: Operation) {
    return this.http.post(`${this.url}/operations/addOperation`, operation);
  }

  getOneOpById(id: number) {
    return this.http.get<Operation>(`${this.url}/operations/${id}`);
  }

  updateOperation(id: number, operation: Operation) {
      return this.http.put(`${this.url}/operations/editOperation/${id}`, operation);
  }

  deleteOperation(id: number) {
    return this.http.delete(`${this.url}/operations/deleteOperation/${id}`);
  }

  getBalance() {
    return this.http.get<Balance>(`${this.url}/operations/balance/${this.userId}`);
  }

}
