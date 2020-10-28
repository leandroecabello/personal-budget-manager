import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signin() {
    this.authService.createUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        err => console.log(err)
      );
  }
}
