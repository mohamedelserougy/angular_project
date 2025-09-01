import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DD, Product } from '../models/iproduct';
import { API_URLS } from '../constant/api-url';

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {

  private baseUrl = "https://dummyjson.com/products";
  constructor(private http : HttpClient){}



  getAllProducts() : Observable<DD>{
    return this.http.get<DD>(`${API_URLS.Products}`)
  }


  getProductById(id : number ) : Observable<Product>{
    return this.http.get<Product>(`${API_URLS.productById}${id}`)
  }


}
