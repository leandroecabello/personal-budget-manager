import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations/operations.service';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {

  public operations: [];

  constructor(
    private operationsService: OperationsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations() {
    this.operationsService.getOperations()
    .subscribe(
      res => {
        this.operations = res;
      },
      err => console.log(err)
    );
  }

  deleteOperation(id: number) {
    this.operationsService.deleteOperation(id)
      .subscribe(
        res => {
          console.log(res);
          this.getOperations();
        },
        err => console.log(err)
      );
  }

  operationSelected(id: number) {
    this.router.navigate(['/operations/editOperation', id]);
  }
}
