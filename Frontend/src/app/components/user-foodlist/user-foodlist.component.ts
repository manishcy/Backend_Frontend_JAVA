import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/utility/food';
import { FoodService } from 'src/app/utility/food.service';

@Component({
  selector: 'app-user-foodlist',
  templateUrl: './user-foodlist.component.html',
  styleUrls: ['./user-foodlist.component.scss']
})
export class UserFoodlistComponent implements OnInit {

  constructor(private foodService: FoodService, private route: ActivatedRoute,
    private router: Router) { }

    foodList?: food[];

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

  onSubmit()
  {
    this.router.navigate(['/cart-list'])
  }

}
