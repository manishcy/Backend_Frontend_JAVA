import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private _httpClient:HttpClient) { }

  private baseUrl = 'http://localhost:8080/food-menu';

  getFoodListByRestuarant(restuarant_id:any): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/getFoodByRestaurant/${restuarant_id}`);
   
  }

  getFoodById(foodId:any): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/${foodId}`);
   
  }

  create(data: any,restaurantId:any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/addFoodMenus/${restaurantId}`, data);
  }

  update(foodId: any, data: any): Observable<any> {
    return this._httpClient.put(`${this.baseUrl}/updateFoodMenu/${foodId}`, data);
  }

  delete(id: any): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
