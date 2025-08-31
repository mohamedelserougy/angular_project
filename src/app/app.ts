import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";
import { Header } from "./header/header";
import { Product } from "./product/product";
import { Sidemenu } from "./sidemenu/sidemenu";
import { Footer } from "./footer/footer";
import { IProduct } from './models/iproduct';
import { Store } from './models/store';
import { Clock } from "./clock/clock";

@Component({
  selector: 'app-root',
  imports: [Nav, Footer , RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  status : boolean = true ;

  toggleTime() : void{
    this.status = !this.status ;
  }

}
