import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { DilogComponent } from '../dilog-component/dilog-component';



@Component({
  selector: 'app-login',
  imports: [FormsModule ,CommonModule,ReactiveFormsModule],

templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

loginForm!:FormGroup
formControlName: any;

  constructor(private fb:FormBuilder , private dialog : MatDialog){
    this.loginForm =  new FormGroup({
      username: new FormControl ('',[ Validators.required , Validators.email]),
      password: new FormControl ( '',[ Validators.required , Validators.minLength(6)])
    })
  }


  onsubmit(){
    console.log(this.loginForm.value);
        this.loginForm.reset();
    this.dialog.open(DilogComponent)
  }

  onrest(){
    this.loginForm.reset();
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
    this.loginForm.updateValueAndValidity();

  }

}
