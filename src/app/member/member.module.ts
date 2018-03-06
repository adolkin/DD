import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { SharedModule } from './../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ]
})
export class MemberModule { }
