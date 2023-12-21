import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';


@NgModule({
  declarations: [
    OwnerLoginComponent,
    OwnerSignUpComponent,
    HotelRegistrationComponent,
    OwnerSuccessComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatInputModule,
    SharedModule
  ]
})
export class OwnerModule { }
