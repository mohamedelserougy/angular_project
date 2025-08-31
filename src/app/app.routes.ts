import { Routes } from '@angular/router';
import { Home } from './component/Home/home/home';
import { AboutUs } from './component/about-us/about-us';
import { Contact } from './component/contact/contact';
import { NotFound } from './component/not-found/not-found';
import { ProductDetails } from './component/product-details/product-details';
import { Login } from './component/login/login';
import { RegisterComponent } from './component/register/register';

export const routes: Routes = [
  {path : "", redirectTo: "/home", pathMatch: "full"},
  {path : "home", component:Home},
  {path : "aboutus" , component:AboutUs},
  {path : "contact" , component:Contact},
  {path : "login" , component:Login},
  {path : "register" , component:RegisterComponent},
  {path: "product/:id" , component:ProductDetails},
  {path :"**" , component:NotFound}
];
