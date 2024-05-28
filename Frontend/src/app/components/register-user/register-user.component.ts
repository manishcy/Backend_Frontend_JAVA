import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  //loginForm: FormGroup | any;
  //userForm: FormGroup | any=this.fb.group;
  title = 'material-login';

  // addressForm = this.fb.group({
  //   area:[''],
  //   street:[''],
  //   pincode:['']
  // });

  // userForm:FormGroup | any=this.fb.group({       
    
  //    userName:[''],
  //    userPassword:[''],
  //    userEmail:[''],
  //    userMobileNo:[''],
     
  //    address:[{
  //     area:'Pune',
  //     street:'KN',
  //     pincode:'456123'
  //   }]   
  // })





  // loginForm: FormGroup | any;
 
  
  





  userForm:FormGroup | any=this.fb.group({
   // userForm:FormGroup=this.fb.group({       

    userName: new FormControl('', [Validators.required]),
      
    userPassword: new FormControl('', [Validators.required]),

    userEmail: new FormControl('', [Validators.required]),
      
    userMobileNo: new FormControl('', [Validators.required]),

    address:this.fb.group({
      area: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      })
      
              
              
            
             
    });
   

  


  constructor(private fb:FormBuilder, private _userService:UserServiceService,private router:Router) {

    



   
    
  }

  // get address() {
  //   return this.userForm.controls["address"] as FormArray;
  // }

  // addAddress(){
  //   this.address.push(this.addressForm);  

  // }

  // addCreds() {
  //   const creds = this.userForm.controls["address"] as FormArray;
  //   creds.push(this.fb.group({
  //     area: '',
  //     street: '',
  //     pincode: ''
  //   }));
  // }

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

  // onSubmit(){
  //   if(!this.userForm.valid){
  //     return;
  //   }
  //   localStorage.setItem('user',this.userForm.value)
  //   this.router.navigate(['/home'])
  // }

}
