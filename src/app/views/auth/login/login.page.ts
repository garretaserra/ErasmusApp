import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLogin} from '../userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages: any;

  constructor(private authService: AuthService, private router: Router,  private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({email: new FormControl(), password: new FormControl()});
  }

  login() {
    console.log('email: ', this.loginForm.controls['email'].value);
    console.log('email: ', this.loginForm.controls['password'].value);
    this.authService.login(new UserLogin( this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value)).subscribe(res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }
}
