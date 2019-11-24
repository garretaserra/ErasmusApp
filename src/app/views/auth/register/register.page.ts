import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_messages: any;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-Z]+(([',. -][A-Z ])?[a-zA-Z]*)*$/),
        Validators.minLength(2)])),
      /*email: new FormControl('', Validators.compose([
        Validators.required ])),
      password: new FormControl('', Validators.compose([
        Validators.required ])),
      confirm: new FormControl('', Validators.compose([
        Validators.required ])),*/
    });
  }

  ngOnInit() {
    this.validation_messages = {
      'name': [
        { type: 'required', message: 'Campo obligatorio' },
        { type: 'pattern', message: 'Debe empezar con mayúsculas y no contener números' },
        { type: 'minlength', message: 'Demasiado corto'}
      ]
      /*'email': [
        { type: 'required', message: 'Campo obligatorio.' }
      ],
      'password': [
        { type: 'required', message: 'Campo obligatorio.' }
      ],
      'confirm': [
        { type: 'required', message: 'Campo obligatorio.' }
      ],*/
    }
  }

  register(){
    this.authService.register(this.registerForm.value);
  }
}
