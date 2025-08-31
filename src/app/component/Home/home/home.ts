import { Component, inject } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { ProductService } from '../../../services/product.service';
import { Route, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DilogComponent } from '../../dilog-component/dilog-component';



@Component({
  selector: 'app-home',


templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

products :  IProduct[] = []

constructor(private ProductService : ProductService ,private dialog : MatDialog ){
  this.products = this.ProductService.getAllProduct();
}

private router = inject(Router)

  goToProductDetails(productId : number){
    this.router.navigate(['/product', productId])
  }

  opendialog(id: number){
    const foundedProduct = this.ProductService.getProductByID(id)

  this.dialog.open(DilogComponent , {
    data : foundedProduct
  })
}

}
