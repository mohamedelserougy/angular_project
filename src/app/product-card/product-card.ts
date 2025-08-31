import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Color } from "../../directives/directive";
import { CurrencyPipe } from '@angular/common';
import { CustompipePipe } from '../pipe/custompipe-pipe';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-card',
  imports: [Color , CurrencyPipe ,CustompipePipe],


  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  specificProduct: IProduct | null = null;

  private  ProductService = inject(ProductService);

  creditnem : number = 1234567812345678
  @Input() product : IProduct = {id : 1, name: 'mego', price: 0, quantity: 0, img: '' , categoryID :0};

  @Output() veiwdetails  = new EventEmitter<any>()

  onviewdetails(){
    this.veiwdetails.emit(this.product)
  }

  getproduct(id : number){
      const foundProduct = this.ProductService.getProductByID(id);
    if (foundProduct) {
      this.specificProduct = foundProduct;
    } else {
      console.warn('Product not found with id:', id);
    }
  }

  close(id :number){
    this.specificProduct = null

  }

  }


