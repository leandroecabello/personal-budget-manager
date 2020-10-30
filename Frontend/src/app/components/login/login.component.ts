import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    }

  ngOnInit() { }

  signin(form) {
    this.authService.login(form.value)
      .subscribe(
        res => {
          this.router.navigate(['/operations']);
        },
        err => console.log(err)
      );
  }
}
