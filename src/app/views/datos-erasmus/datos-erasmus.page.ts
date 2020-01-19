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
import {University} from "../../models/university";
import {Language} from "../../models/language";

@Component({
  selector: 'app-datos-erasmus',
  templateUrl: './datos-erasmus.page.html',
  styleUrls: ['./datos-erasmus.page.scss'],
})

export class DatosErasmusPage implements OnInit {


  erasmusForm: FormGroup;
  user: User;
  homeUniversity: string;
  destUniversity: string;
  languages: string[];
  universities: any[];

  customAlertHomeOptions: any = {
    header: 'Home university',
    subHeader: 'Select your home university',
    message: '',
    translucent: true
  };

  customAlertDestOptions: any = {
    header: 'Destination university',
    subHeader: 'Select your destination university',
    message: 'It is not mandatory if you are not abroad yet!',
    translucent: true
  };

  constructor(private formBuilder: FormBuilder,
              private erasmusService: DatosErasmusService,
              private router: Router,
              public menuCtrl: MenuController,
              public alertCtrl: AlertController,
              public storage: StorageComponent,
              private toastCtrl: ToastController) {}

  async ngOnInit() {
    this.erasmusForm = this.formBuilder.group({
      age: new FormControl(),
      course: new FormControl(),
      homeUniversity: new FormControl(),
      destUniversity: new FormControl(),
      languages: new FormControl()
    });
    this.load();
  }

  async ionViewDidEnter() {
    this.load();
  }

  async load() {
    let storageUser = this.storage.getUser();

    if (!storageUser) {
      console.log('goto login');
      await this.router.navigateByUrl('/login');
    } else {
      this.user = JSON.parse(storageUser);
      console.log('this.user: ', this.user);
      await this.storage.saveUser(storageUser);
    }

    await this.erasmusService.getUniversities().subscribe(res => {
          this.universities = res.universities;
        }
    );

    this.languages = [
      'Spanish',
      'French',
      'Italian',
      'German',
      'English'
    ];

    this.onChanges();
  }

  async add() {
    this.languages = this.erasmusForm.controls.languages.value;
    let spokenLanguages = [];
    this.languages.forEach(language => {spokenLanguages.push(new Language(language))});
    console.log(spokenLanguages);
    if(this.erasmusForm.controls.destUniversity.value) this.destUniversity = this.erasmusForm.controls.destUniversity.value.split(',')[0];
    await this.erasmusService.sendInformation(this.user._id, new UserErasmus(this.erasmusForm.controls.age.value,
        this.erasmusForm.controls.course.value,
        this.homeUniversity,
        this.destUniversity,
        spokenLanguages)).subscribe(res => console.log(res));
  }

  onChanges(): void {
    this.erasmusForm.get('homeUniversity').valueChanges.subscribe(val => {
      this.homeUniversity = val.split(',')[0];
    });
  }
}
