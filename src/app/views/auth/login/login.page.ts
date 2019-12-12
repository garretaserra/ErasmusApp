import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLogin} from '../../../models/User/userLogin';
import {UserService} from '../../../models/User/user.service';
import {User} from '../../../models/User/user';
import {UserPost} from '../../../models/User/userPost';
import {StorageComponent} from "../../../storage/storage.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages: any;
  user: User;
  userWithJWT: UserPost;
  constructor(
      private authService: AuthService,
      private userService: UserService,
      private router: Router,
      private formBuilder: FormBuilder,
      public storage: StorageComponent) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)])),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.validation_messages = {
      email: [
        {type: 'required', message: 'Campo obligatorio.'},
        {type: 'pattern', message: 'Debe ser un correo electrónico válido'}
      ]
    };

    this.user = JSON.parse(this.storage.getUser());
    //If user is not present redirect to home
    if(this.user){
      this.router.navigateByUrl('/home');
    }
  }

  login() {
    console.log('Email: ', this.loginForm.controls.email.value);
    console.log('Pass;',  this.loginForm.controls.password.value );
    this.authService.login(new UserLogin( this.loginForm.controls.email.value,
      this.loginForm.controls.password.value)).subscribe(res => {
      this.userWithJWT = res as UserPost;
      this.user = this.userWithJWT.user;
      this.userService.saveUser(this.user);

      //Save info locally
      this.storage.saveToken(this.userWithJWT.jwt);
      this.storage.saveUser(JSON.stringify(this.user));
      location.reload();
    })
  }
}
