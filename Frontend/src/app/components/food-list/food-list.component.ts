import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/utility/food';
import { FoodService } from 'src/app/utility/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private foodService: FoodService, private route: ActivatedRoute,
    private router: Router) { }

  foodList?: food[];
  currentFood: food = {};
  currentIndex = -1;
  title = '';
  restuarant_id=this.route.snapshot.params["restuarant_id"];

  ngOnInit(): void {
    this.retrieveFoodList(this.route.snapshot.params["restuarant_id"]);
  }

  retrieveFoodList(restuarant_id:any): void {
    this.foodService.getFoodListByRestuarant(restuarant_id)
      .subscribe({
        next: (data) => {
          this.foodList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(restuarant_id:any): void {
    this.retrieveFoodList(restuarant_id);
    this.currentFood = {};
    this.currentIndex = -1;
  }

  setActiveFood(food: food, index: number): void {
    this.currentFood = food;
    this.currentIndex = index;
  }

  // searchTitle(): void {
  //   this.currentFood = {};
  //   this.currentIndex = -1;

  //   this.foodService.findByTitle(this.title)
  //     .subscribe({
  //       next: (data) => {
  //         this.foodList = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

}
