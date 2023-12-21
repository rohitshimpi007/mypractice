import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { SharedModule } from '../shared/shared.module';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserSuccessComponent } from './user-success/user-success.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignUpComponent,
    UserSuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
