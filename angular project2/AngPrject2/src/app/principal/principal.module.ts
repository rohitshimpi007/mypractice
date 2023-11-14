import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { PrincipalSignUpComponent } from './principal-sign-up/principal-sign-up.component';



@NgModule({
  declarations: [
    PrincipalHomeComponent,
    PrincipalLoginComponent,
    PrincipalSignUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrincipalModule { }
