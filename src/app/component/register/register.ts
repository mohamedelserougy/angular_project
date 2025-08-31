import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DilogComponent } from '../dilog-component/dilog-component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule ,CommonModule,ReactiveFormsModule],
templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
   registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private dialog : MatDialog , private productService : ProductService) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10,11}$')
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.productService.passwordMatchValidator("password" , "confirmPassword")});
  }


  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
    this.dialog.open(DilogComponent);
  }

  onReset() {
    this.registerForm.reset();
  }
}
