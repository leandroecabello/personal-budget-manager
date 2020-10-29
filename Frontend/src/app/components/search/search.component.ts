import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations/operations.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private operationsService: OperationsService
  ) { }

  ngOnInit() {
  }

  search() {
    console.log('buscando...');
  }
}
