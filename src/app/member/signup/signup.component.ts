import { Component, OnInit } from '@angular/core';
import { SignupService } from '@services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {

  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit() {

  }

  onSubmit(formData) {
    if (formData.valid) {
      this.signupService.createUser(formData);
    }
  }
}
