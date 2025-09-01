import { Component, inject, OnInit } from '@angular/core';
import { DD, Product } from '../../models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsApi } from '../../services/products-api';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-details-api',
  imports: [CommonModule],
 templateUrl: './product-details-api.html',
  styleUrl: './product-details-api.css'
})
export class ProductDetailsApi implements OnInit {

  productDetails? :  Product ;

  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductsApi)



  ngOnInit(): void {
    const id  = Number (this.activatedRoute.snapshot.paramMap.get("id"));
    this.productService.getProductById(id).subscribe({
      next : (res) => this.productDetails = res ,
      error : (error) => console.log(error),


    })
  }




}
