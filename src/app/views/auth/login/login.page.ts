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
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)])),
      password: new FormControl()
    });
  }

  ngOnInit() { this.validation_messages = {
    'email': [
      { type: 'required', message: 'Campo obligatorio.' },
      { type: 'pattern', message: 'Debe ser un correo electrónico válido'}
    ]
  };
  }

  login() {
    console.log('email: ', this.loginForm.controls.email.value);
    console.log('email: ', this.loginForm.controls.password.value);
    this.authService.login(new UserLogin( this.loginForm.controls.email.value,
        this.loginForm.controls.password.value)).subscribe(res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }
}
