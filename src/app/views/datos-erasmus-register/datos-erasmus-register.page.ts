import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {User} from '../../models/User/user';
import {DatosErasmusService} from '../datos-erasmus/datos-erasmus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, MenuController, ToastController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';
import {Language} from '../../models/language';
import {UserErasmus} from '../../models/User/userErasmus';

@Component({
  selector: 'app-datos-erasmus-register',
  templateUrl: './datos-erasmus-register.page.html',
  styleUrls: ['./datos-erasmus-register.page.scss'],
})
export class DatosErasmusRegisterPage implements OnInit {

  erasmusForm: FormGroup;
  user: User;
  homeUniversity: string;
  destUniversity: string;
  languages: string[];
  universities: any[];
  _id: string;

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
              private route: ActivatedRoute,
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
    this._id = this.route.snapshot.paramMap.get('id');


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
    await this.erasmusService.sendInformation(this._id, new UserErasmus(this.erasmusForm.controls.age.value,
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

  async changePage() {
    await this.router.navigateByUrl('/login');
  }
}
