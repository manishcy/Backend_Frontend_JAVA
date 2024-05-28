import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  public aFormGroup!:FormGroup;
  public sitekey:any;
  constructor(public formBuilder:FormBuilder) { }
title='recaptcha';
  ngOnInit(): void {
    this.aFormGroup=this.formBuilder.group({
        recaptcha:['',Validators.required]
      });
  }

  
}
