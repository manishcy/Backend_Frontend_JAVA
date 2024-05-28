import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  //private baseUrl="http://localhost:8080/food-delivery/login";

  constructor(private _httpClient:HttpClient) { }

  loginUser(user:User):Observable<object>{
    console.log(user);
    return this._httpClient.post<User>("http://localhost:8080/food-delivery/login",user)
   // return this._httpClient.post(`${this.baseUrl}`,user);
  }


  //  loginUser(user:any){
  //    return this._httpClient.post<any>("http://localhost:8080/food-delivery/login", user);
  //  }
}
