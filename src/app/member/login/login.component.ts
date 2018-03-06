import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  customLogin() {
    this.authService.customLogin();
  }

  googleLogin() {
    this.authService.googleLogin();
  }

}
