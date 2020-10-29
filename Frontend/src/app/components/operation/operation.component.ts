import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations/operations.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  public operation = {};

  constructor(
    private operationsService: OperationsService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  addOperation() {
    this.operationsService.addOperation(this.operation)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/operations']);
        },
        err => console.log(err)
      );
  }
}
