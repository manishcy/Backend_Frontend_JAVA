import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title = 'material-login';


  userForm:FormGroup | any=this.fb.group({

    userName: new FormControl('', [Validators.required]),
      
    userPassword: new FormControl('', [Validators.required]),

    userEmail: new FormControl('', [Validators.required]),
      
    userMobileNo: new FormControl('', [Validators.required])
    });
   

  
  constructor(private fb:FormBuilder, 
    private _userService:UserServiceService,private router:Router) {

  
  }

  onSubmit(){
    if(!this.userForm.valid){
      return;
    }
    console.log(this.userForm.value);
    this._userService.registerUser(this.userForm.value).subscribe(data=>{
      console.log(data);
    });
    localStorage.setItem('user',this.userForm.value)
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

  // removeitem()
  // {
  //   sessionStorage.removeItem('key');
  // }


}
