import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonScreen/commonServices/api-call.service';



@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
  
  loginForm!:FormGroup;
  login(){}
 
  showWorning=true; 
 showPass:boolean=false; 
 ownerData:any;
 showpass = false;

constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApiCallService){}

ngOnInit()

{this.loginFormcontrol()}
loginFormcontrol(){

  this.loginForm =this.fb.group({
    userName:["",[Validators.required]],
    Password:["",[Validators.required]]
    

  })
}
}

