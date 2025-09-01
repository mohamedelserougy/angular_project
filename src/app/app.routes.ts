import { Routes } from '@angular/router';
import { Home } from './component/Home/home/home';
import { AboutUs } from './component/about-us/about-us';
import { Contact } from './component/contact/contact';
import { NotFound } from './component/not-found/not-found';
import { ProductDetails } from './component/product-details/product-details';
import { Login } from './component/login/login';
import { RegisterComponent } from './component/register/register';
import { ProductApi } from './component/product-api/product-api';
import { ProductDetailsApi } from './component/product-details-api/product-details-api';
import { isAuthenticatedGuard } from './guard/is-authenticated-guard';
import { SearchProducts } from './component/search-products/search-products';
import { isLoggedinGuard } from './guard/is-loggedin-guard';

export const routes: Routes = [
  {path : "", redirectTo: "/home", pathMatch: "full"},
  {path : "home", component:Home},
  {path : "aboutus" , component:AboutUs},
  {path : "contact" , component:Contact},
  {path : "login" , component:Login , canActivate : [isAuthenticatedGuard] },
  {path : "register" , component:RegisterComponent , canActivate : [isAuthenticatedGuard]},
  {path : "products" , component:ProductApi , canActivate : [isLoggedinGuard] },
  {path : "products/:id" , component:ProductDetailsApi ,canActivate : [isLoggedinGuard]},
  {path : "search-products" , component : SearchProducts ,canActivate : [isLoggedinGuard]},
  {path: "product/:id" , component:ProductDetails},
  {path :"**" , component:NotFound}
];
