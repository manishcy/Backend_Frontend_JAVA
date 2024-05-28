import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/utility/food';
import { FoodService } from 'src/app/utility/food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentFood: food = {
    foodName: '',
    foodCategory: '',
    
  };

  message = '';

  constructor(private foodService: FoodService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getFood(this.route.snapshot.params["foodId"]);
    }
  }

  getFood(id: any): void {
    this.foodService.getFoodById(id)
      .subscribe({
        next: (data) => {
          this.currentFood = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateFood(): void {
    this.message = '';

    this.foodService.update(this.currentFood.foodId, this.currentFood)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Food Item was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteFood(): void {
    this.foodService.delete(this.currentFood.foodId)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/food-list/:restuarant_id']);
        },
        error: (e) => console.error(e)
      });
  }

}
