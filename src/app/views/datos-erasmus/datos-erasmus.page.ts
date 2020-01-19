import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HomeService} from '../home/home.service';
import {UserService} from '../../models/User/user.service';
import {Router} from '@angular/router';
import {AlertController, MenuController, ToastController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';
import {DatosErasmusService} from './datos-erasmus.service';
import {User} from '../../models/User/user';
import {UserErasmus} from '../../models/User/userErasmus';

@Component({
  selector: 'app-datos-erasmus',
  templateUrl: './datos-erasmus.page.html',
  styleUrls: ['./datos-erasmus.page.scss'],
})
export class DatosErasmusPage implements OnInit {

  erasmusForm: FormGroup;
  user: User;
  homeCountry: string;
  homeUniversity: string;
  destCountry: string;
  destUniversity: string;
  countries: string[];
  languages: string[];
  selectedCountry: string;
  selectedLanguages: string[];

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
      course: new FormControl(),
      languages: new FormControl(),
      country: new FormControl()
    });

    this.countries = [
        'Spain',
        'France',
        'Italy',
        'Germany',
    ];

    this.languages = [
      'Spanish',
      'French',
      'Italian',
      'German',
    ];
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
  async add() {
    console.log("Selected country: "+this.erasmusForm.controls.country.value);
    console.log("Selected Languages: "+this.erasmusForm.controls.languages.value);
    this.homeUniversity = "UPC Barcelona";
    this.homeCountry = "Catalunya";
    this.destUniversity = "UP Berlin";
    this.destCountry = "Alemania";
    await this.erasmusService.sendInformation(this.user._id, new UserErasmus(this.erasmusForm.controls.age.value,
        this.erasmusForm.controls.course.value,
        this.homeCountry,
        this.homeUniversity,
        this.destCountry,
        this.destUniversity)).subscribe(res => console.log(res));
  }
}
