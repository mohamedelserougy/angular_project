import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { DilogComponent } from '../dilog-component/dilog-component';
import { Auth } from '../../services/auth';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  imports: [FormsModule ,CommonModule,ReactiveFormsModule],

templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

// loginForm!:FormGroup
  loginForm! : FormBuilder | any
formControlName: any;

  constructor(private fb:FormBuilder , private dialog : MatDialog , private authService : Auth , private router : Router , private toastr : ToastrService ){
    // this.loginForm =  new FormGroup({
    //   username: new FormControl ('',[ Validators.required , Validators.email]),
    //   password: new FormControl ( '',[ Validators.required , Validators.minLength(6)])
    // })

    this.loginForm = this.fb.group({
      username : 'emilys',
      password : 'emilyspass'
    })
  }


  onsubmit(){
    const {username , password} = this.loginForm.value ;
    console.log({username , password});

    this.authService.login(username , password ).subscribe({
      next :  () => {

    this.toastr.success("Login successful!", "Welcome");

        setTimeout(() => {
          this.router.navigate(['/products'])
        }, 1500);
      } ,
      error : ()=>{
        this.toastr.error(" Failed ❌")

      } ,
    })
    this.loginForm.reset();
  }

  onrest(){
    this.loginForm.reset();
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
    this.loginForm.updateValueAndValidity();

  }

}
