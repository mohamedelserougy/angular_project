import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],


templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  id : number | undefined
  product : IProduct | undefined
  constructor (private router: ActivatedRoute){}
  private ProductService  = inject(ProductService)



  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get("id"))

    this.product = this.ProductService.getProductByID(this.id)

  }

}
