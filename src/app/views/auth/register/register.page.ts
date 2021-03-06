import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRegister} from '../../../models/User/userRegister';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {environment} from "../../../../environments/environment";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User;
  userTest: User;
  registerForm: FormGroup;
  validation_messages: any;

  constructor(
      private authService: AuthService,
      private userService: UserService,
      private router: Router,
      private formBuilder: FormBuilder,
      public toastController: ToastController
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-Z]+(([',. -][A-Z ])?[a-zA-Z]*)*$/),
        Validators.minLength(2)])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)])),
      pass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).+$/),
        Validators.minLength(8)])),
      confirm: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).+$/),
        Validators.minLength(8)])),
      terms: new FormControl('', Validators.requiredTrue)
    }, { validators: this.password.bind(this)
      });
  }

  ngOnInit() {
    console.log("ENVironment:"+ environment.apiUri);
    this.validation_messages = {
      name: [
        { type: 'required', message: 'Campo obligatorio' },
        { type: 'pattern', message: 'Debe empezar con mayúsculas y no contener ni números ni espacios' },
        { type: 'minlength', message: 'Demasiado corto'}
      ],
      email: [
        { type: 'required', message: 'Campo obligatorio.' },
        { type: 'pattern', message: 'Debe ser un correo electrónico válido'}
      ],
      pass: [
        { type: 'required', message: 'Campo obligatorio.' },
        { type: 'pattern', message: 'Debe contener almenos una minúsucla, mayúscula, un número y un carácter especial' },
        { type: 'minlength', message: 'Mínimo 8 caracteres'}
      ],
      confirm: [
        { type: 'required', message: 'Campo obligatorio.' },
        { type: 'pattern', message: 'Debe contener almenos una minúsucla, mayúscula, un número y un carácter especial' },
        { type: 'minlength', message: 'Mínimo 8 caracteres'}
      ],
      terms: [
        { type: 'requiredtrue', message: 'Debes aceptar los Términos y Condiciones de Servicio'}
      ]
    };
  }

  email(formGroup: FormGroup) {
    const email = formGroup.get('email');
    setTimeout(() => {
      if (email.value === 'pepito@gmail.com') {
        console.log('coinciden');
        return null;
      } else {
        console.log('no coinciden');
        return { emailNotValid: true };
      }
    }, 2000);
  }

  password(formGroup: FormGroup) {
    const { value: pass } = formGroup.get('pass');
    const { value: confirm } = formGroup.get('confirm');
    return pass === confirm ? null : { passwordNotMatch: true };
  }

  register() {
    const user = new UserRegister(this.registerForm.controls.email.value,
      this.registerForm.controls.pass.value, this.registerForm.controls.name.value);
      this.authService.register(user).subscribe(res => {
        console.log(res);
        const response: any = res;
        console.log(response);
        this.router.navigateByUrl('/erasmusInfo/' + `${response.user._id}`);
      },
      async err => {
        console.log(err);
        if(err.error.message == 'Existent User'){
          const toast = await this.toastController.create({
            message: 'Usuario con este correo ya existe',
            position: 'top',
            duration: 2000,
            showCloseButton: true, color: 'dark'
          });
          await toast.present();
        }
      });
   }
}
