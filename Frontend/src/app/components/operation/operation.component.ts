import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations/operations.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  public operations = [];

  constructor( private operationsService: OperationsService) { }

  ngOnInit() {
    /* this.operationsService.getOperations()
      .subscribe(
        res => {
          console.log(res);
          // this.operations = res.
        },
        err => console.log(err)
      ); */
  }

}
