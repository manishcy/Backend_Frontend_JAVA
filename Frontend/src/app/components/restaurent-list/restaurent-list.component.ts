import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/utility/food.service';
import { Rest } from 'src/app/utility/rest';
import { UserServiceService } from 'src/app/utility/user-service.service';
import { food } from 'src/app/utility/food';


@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.scss']
})
export class RestaurentListComponent implements OnInit {

  rest!: Observable<Rest[]>;
  // rest_id:any
  restuarant_id:any;
  constructor(private userService: UserServiceService,private foodService: FoodService,
    
    private router: Router) { }
    foodList?: food[];

    ngOnInit() {
    this.reloadData();
   
  }
 
  reloadData() {
    this.rest = this.userService.getrestaurentList();
  }

  // onSubmit(rest_id:any){
  //   console.log(rest_id);
  //   this.router.navigateByUrl('/food-list/'+this.rest_id);
  // }

  onSubmit(){

  this.foodService.getFoodListByRestuarant(this.restuarant_id).subscribe(data=>{
// console.log(data);
// console.log(data.restId);
// this.restaurantId=data.restId;
// console.log(this.restaurantId);
// console.log("manishrest")
alert("Restaurant Login Successful")
this.router.navigateByUrl('/food-list/'+this.restuarant_id);

});        
  }
}
