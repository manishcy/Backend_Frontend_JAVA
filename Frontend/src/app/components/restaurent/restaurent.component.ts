import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.scss']
})
export class RestaurentComponent implements OnInit {

  title = 'material-login';


  userForm:FormGroup | any=this.fb.group({

    restaurantName: new FormControl('', [Validators.required]),
      
    restaurantUserName: new FormControl('', [Validators.required]),

    restaurantPassword: new FormControl('', [Validators.required]),
      
    restaurantEmail: new FormControl('', [Validators.required]),

    //address: new FormControl('', [Validators.required])

    // address:this.fb.group({
    //   area: new FormControl('', [Validators.required]),
      // street: new FormControl('', [Validators.required]),
      // pincode: new FormControl('', [Validators.required]),
      // })
      
    });
   

  
  constructor(private fb:FormBuilder, 
    private _userService:UserServiceService,private router:Router) {

  
  }

  onSubmit(){
    if(!this.userForm.valid){
      return;
    }
    console.log(this.userForm.value);
    this._userService.addrestaurent(this.userForm.value).subscribe(data=>{
      console.log(data);
    });
    localStorage.setItem('user',this.userForm.value)
    this.router.navigate(['/admin'])
  }

  ngOnInit(): void {
  }



}
