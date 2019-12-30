import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HomeService} from '../home/home.service';
import {UserService} from '../../models/User/user.service';
import {Router} from '@angular/router';
import {AlertController, MenuController, ToastController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';
import {DatosErasmusService} from './datos-erasmus.service';
import {User} from '../../models/User/user';

@Component({
  selector: 'app-datos-erasmus',
  templateUrl: './datos-erasmus.page.html',
  styleUrls: ['./datos-erasmus.page.scss'],
})
export class DatosErasmusPage implements OnInit {

  erasmusForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private erasmusService: DatosErasmusService,
              private router: Router,
              public menuCtrl: MenuController,
              public alertCtrl: AlertController,
              public storage: StorageComponent,
              private toastCtrl: ToastController) {}

  ngOnInit() {
    this.erasmusForm = this.formBuilder.group({
      age: new FormControl(),
      procedencia: new FormControl(),
      universidad: new FormControl(),
      curso: new FormControl(),
      destino: new FormControl(),
      universidadDestino: new FormControl()
    });
  }
  async ionViewDidEnter() {
    let storageUser = this.storage.getUser();

    if (!storageUser) {
      console.log('goto login');
      await this.router.navigateByUrl('/login');
    } else {
      this.user = JSON.parse(storageUser);
      console.log('this.user: ', this.user);
      await this.storage.saveUser(storageUser);
    }
  }
}
