import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations/operations.service';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {

  public operations: [];

  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
    this.operationsService.getOperations()
    .subscribe(
      res => {
        console.log(res);
        this.operations = res;
      },
      err => console.log(err)
    );
  }

}
