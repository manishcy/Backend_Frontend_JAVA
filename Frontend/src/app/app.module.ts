import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './components/admin/admin.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RestaurentComponent } from './components/restaurent/restaurent.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RestLoginComponent } from './components/rest-login/rest-login.component';
import { RestaurentListComponent } from './components/restaurent-list/restaurent-list.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';


import {MatCardModule} from '@angular/material/card';
import { RestloginhomepageComponent } from './components/restloginhomepage/restloginhomepage.component';
import { FrontComponent } from './components/front/front.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { UserFoodlistComponent } from './components/user-foodlist/user-foodlist.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    RestaurentComponent,
    UserListComponent,
    AdminLoginComponent,
    RestLoginComponent,
    RestaurentListComponent,
    UserhomepageComponent,
    RestloginhomepageComponent,
    FrontComponent,
    AboutusComponent,
    FoodListComponent,
    FoodDetailsComponent,
    UserFoodlistComponent,
    AddFoodComponent,
    CartListComponent,
    CaptchaComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgxCaptchaModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
