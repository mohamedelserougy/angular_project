import { Component, inject, OnInit } from '@angular/core';
import { DD, Product } from '../../models/iproduct';
import { ProductsApi } from '../../services/products-api';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-api',
  imports: [RouterModule],
  templateUrl: './product-api.html',
  styleUrl: './product-api.css'
})
export class ProductApi implements OnInit {
  productService = inject(ProductsApi)
  products : Product[] = []



  ngOnInit(): void {
    this.getproducts();
  }


  getproducts(){
    this.productService.getAllProducts().subscribe({
      next : (data : DD ) => {
        this.products = data.products
      } ,
      error : (error) => console.log(error),
      complete : ()=> console.log("All done ")
    })
  }



}
