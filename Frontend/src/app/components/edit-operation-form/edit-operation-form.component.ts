import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations/operations.service';

@Component({
  selector: 'app-edit-operation-form',
  templateUrl: './edit-operation-form.component.html',
  styleUrls: ['./edit-operation-form.component.css']
})
export class EditOperationFormComponent implements OnInit {

  private id: number;
  private operation = {};

  constructor(
    private operationsService: OperationsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.operationsService.getOneOpById(this.id)
        .subscribe(
          res => {
            this.operation = res;
          },
          err => console.log(err)
        );
    });
  }

  updateOperation() {
    this.operationsService.updateOperation(this.id, this.operation)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/operations']);
        },
        err => console.log(err)
      );
  }

}
