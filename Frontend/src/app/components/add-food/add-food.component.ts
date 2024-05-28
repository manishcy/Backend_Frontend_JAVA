import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/utility/food';
import { FoodService } from 'src/app/utility/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  food: food = {
    foodName: '',
    price: 0,
    offer: 0,
    foodCategory:''
  };
  restaurantId=this.route.snapshot.params["restuarant_id"];
  submitted = false;

  constructor(private foodService: FoodService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      foodName: this.food.foodName,
      price: this.food.price,
      offer: this.food.offer,
      foodCategory: this.food.foodCategory

    };

    this.foodService.create(data,this.restaurantId)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          
        },
        error: (e) => console.error(e)
      });
  }

}
