import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store';
import { IProduct } from '../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ProductCard } from "../product-card/product-card";
import { Viewdetails } from '../viewdetails/viewdetails';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  imports: [FormsModule, ProductCard, Viewdetails],


templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {

  store : Store = new Store( "frist store " , ["branch 1" , "branch 2 "] , "logo.png");


  products :IProduct[]  = [];
  constructor(private ProductService : ProductService){}
  searchText : string = "";
  filteredArray : IProduct[] = this.products;


  ngOnInit(): void {
    this.products = this.ProductService.getAllProduct();
    this.filteredArray = this.products
  }

  decrease(productId: number): void {

  const product = this.products.find(p => p.id === productId);

  if (product && product.quantity > 0) {
    product.quantity--;
  }
}





  filteredText(text : string ) :void {
    this.filteredArray = this.products.filter( (product) => product.name.toLowerCase().includes(text.toLowerCase()) );
  }

  currentProduct : IProduct | null = null

  handelVeiwDetals(pro :IProduct){
      this.currentProduct = pro ;
  }

  handelCloseDetals(){
    this.currentProduct = null ;
  }



}
