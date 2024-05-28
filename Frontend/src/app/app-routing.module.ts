import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RestLoginComponent } from './components/rest-login/rest-login.component';
import { RestaurentListComponent } from './components/restaurent-list/restaurent-list.component';
import { RestaurentComponent } from './components/restaurent/restaurent.component';
import { RestloginhomepageComponent } from './components/restloginhomepage/restloginhomepage.component';
import { UserFoodlistComponent } from './components/user-foodlist/user-foodlist.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"home", component:HomeComponent},
  //{path:"front", component},
  {path:"registration", component:RegisterUserComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:"logout", component:LogoutComponent},
  {path:"restaurent", component:RestaurentComponent},
  {path:"user-list", component:UserListComponent},
  {path:"adminlogin", component:AdminLoginComponent},
  {path:"restlogin", component:RestLoginComponent},
  {path:"restlist", component:RestaurentListComponent},
  {path:"userhomepage", component:UserhomepageComponent},
  {path:"restloginhomepage", component:RestloginhomepageComponent},
  {path:"food-list/:restuarant_id",component:FoodListComponent},
  {path:"food-details/:foodId",component:FoodDetailsComponent},
  {path:"user-food-list/:restuarant_id",component:UserFoodlistComponent},
  {path:"add-food/:restuarant_id",component:AddFoodComponent},
  {path:"cart-list",component:CartListComponent},
  {path:"captcha",component:CaptchaComponent},
  
  {path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

