import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  user:User = new User();
  constructor(private fb:FormBuilder, private _userService:UserServiceService, private router:Router) { }

  // loginForm:FormGroup=this.fb.group({ 
    loginForm:FormGroup | any=this.fb.group({      

    userEmail: new FormControl('', [Validators.required]),

    userPassword: new FormControl('', [Validators.required]),
      
   
  })
 

  onSubmit(){
    console.log(this.loginForm.value);
     
    if(this.loginForm.controls['userEmail'].value == 'admin' && this.loginForm.controls['userPassword'].value == "admin@123"){
      alert("Welcome Admin");
      this.router.navigateByUrl('admin'); 
    }else{
      alert("Invalid admin credentials")
      this.loginForm.reset();
     // this.router.navigateByUrl('home');
    }     
  }

  ngOnInit(): void {
  }


 
  
  
  

}

