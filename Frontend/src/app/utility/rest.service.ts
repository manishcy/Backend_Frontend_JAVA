import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {


constructor(private _httpClient:HttpClient) { }
  

login(restaurant:any){
  console.log("Login")
  console.log("user "+restaurant)
  return this._httpClient.post<any>("http://localhost:8080/restaurant/login", restaurant);
}
}