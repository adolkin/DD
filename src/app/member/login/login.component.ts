import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  customLogin(formData) {
    if (formData.valid) {
      this.authService.customLogin(formData);
    }
  }

  googleLogin() {
    this.authService.googleLogin();
  }

}
