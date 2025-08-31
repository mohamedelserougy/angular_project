import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


   private products: IProduct[] = [
  {
    id: 1,
    name: "Rolex Submariner",
    img: "images/Rolex Submariner.jpg",
    price: 8999,
    quantity: 10,
    categoryID: 1, // Luxury
  },
  {
    id: 2,
    name: "Omega Seamaster",
    img: "images/watch1.jpg",
    price: 7500,
    quantity: 5,
    categoryID: 1, // Luxury
  },
  {
    id: 3,
    name: "Casio G-Shock",
    img: "images/watch2.jpg",
    price: 199,
    quantity: 7,
    categoryID: 2, // Sport
  },
  {
    id: 4,
    name: "Seiko 5 Automatic",
    img: "images/watch3.jpg",
    price: 350,
    quantity: 1,
    categoryID: 2, // Sport
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    img: "images/watch4.jpg",
    price: 499,
    quantity: 1,
    categoryID: 3, // Smart
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch 6",
    img: "images/watch5.jpg",
    price: 399,
    quantity: 1,
    categoryID: 3, // Smart
  },
   {
    id: 8,
    name: "Fossil Grant Chronograph",
    img: "images/watch6.jpg",
    price: 220,
    quantity: 1,
    categoryID: 4, // Fashion
  },
  {
    id: 7,
    name: "Daniel Wellington Classic",
    img: "images/watch7jpg.jpg",
    price: 150,
    quantity: 1,
    categoryID: 4, // Fashion
  },

];


    constructor(){}


    getAllProduct(){
      return this.products
    }



    getProductByID(id : number ){
      return this.products.find(p => p.id === id)
    }


    /*pass must be match  */
    passwordMatchValidator(passwordField : string , confirmPasswordField :string) : ValidatorFn  {
      return (formGroup : AbstractControl ) => {
          const password = formGroup.get(passwordField)?.value ;
          const ConfirmPassword = formGroup.get(confirmPasswordField)?.value;

          if(password !== ConfirmPassword){
            formGroup.get(confirmPasswordField)?.setErrors({ passwordMismatch: true });
            return {passwordMismatch : true}
          }else{
            return null
          }
      }

    }}
