import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Iuser } from '../models/iproduct';
import { API_URLS } from '../constant/api-url';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class Auth {

  private tokenKey = "token"

  constructor(private http : HttpClient , private toaetr : ToastrService){}

  login(username : string , password : number) :  Observable <Iuser>{
    return this.http.post<Iuser>(`${API_URLS.auth}` , {
      username ,
      password,
       expiresInMins: 30,
    }).pipe(tap((data : Iuser) => {
      localStorage.setItem(this.tokenKey , data.accessToken)
    }))
  };

  islooged() :boolean {
    if(localStorage.getItem(this.tokenKey)){
      return true
    }else return false
  }

  logout(){
    localStorage.removeItem(this.tokenKey)
    this.toaetr.info("You have been logged out.", "Logout")
  }

}
