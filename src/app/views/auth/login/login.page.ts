import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLogin} from '../../../models/User/userLogin';
import {UserService} from '../../../models/User/user.service';
import {User} from '../../../models/User/user';
import {StorageComponent} from "../../../storage/storage.component";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm: FormGroup;
    validation_messages: any;
    user: User;

    constructor(
      private authService: AuthService,
      private userService: UserService,
      public toastController: ToastController,
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

    async ngOnInit() {
        this.validation_messages = {
          email: [
            {type: 'required', message: 'Campo obligatorio.'},
            {type: 'pattern', message: 'Debe ser un correo electrónico válido'}
          ]
        };
    }

    async ionViewDidEnter() {
        let storageUser = this.storage.getUser();

        //If user is present redirect to home
        if (!!storageUser) {
            await this.router.navigateByUrl('/home');
        }
    }


  async login() {
    this.authService.login(new UserLogin(this.loginForm.controls.email.value,
        this.loginForm.controls.password.value)).subscribe(async res => {
            const response: any = res;
            this.user = response.user;
            this.user.jwt = response.jwt;
            console.log(this.user);
            //Save info locally
            await this.storage.saveToken(this.user.jwt);
            await this.storage.saveUser(JSON.stringify(this.user));
            await this.router.navigateByUrl('/home');
        },
        async err => {
          const toast = await this.toastController.create({
            message: 'Bad username or password',
            position: 'top',
            duration: 2000,
            showCloseButton: true, color: 'dark'
          });
          await toast.present();
        });
  }
}
