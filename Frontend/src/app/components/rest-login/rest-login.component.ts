import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/utility/rest.service';

@Component({
  selector: 'app-rest-login',
  templateUrl: './rest-login.component.html',
  styleUrls: ['./rest-login.component.scss']
})
export class RestLoginComponent implements OnInit {

  restaurantId:any;

  constructor(private fb:FormBuilder, private _restService:RestService, private router:Router) { }

  //loginForm:FormGroup=this.fb.group({      
    
    loginForm:FormGroup | any=this.fb.group({

      restaurantEmail: new FormControl('', [Validators.required]),
        
      restaurantPassword: new FormControl('', [Validators.required])    
 
  })
 

  onSubmit(){
    console.log(this.loginForm.value);
        this._restService.login(this.loginForm.value).subscribe(data=>{
      console.log(data);
      console.log(data.restId);
      this.restaurantId=data.restId;
      console.log(this.restaurantId);
      console.log("manishrest")
      alert("Restaurant Login Successful")
      this.router.navigateByUrl('/food-list/'+this.restaurantId);
      
    },error=>alert("sorry..please enter correct credentials"));        
  }

 
  // 
  ngOnInit(): void {
  }


}

