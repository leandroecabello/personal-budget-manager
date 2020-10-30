import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signin(form: NgForm) {
    this.authService.createUser(form.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        err => console.log(err)
      );
  }
}
