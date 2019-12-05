import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  homeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, public menuCtrl: MenuController) {}

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      post: new FormControl()
    });
  }
  openMenu() {
    this.menuCtrl.open();
  }
  openMessagePage() {
    console.log('Funciona Message');
    this.router.navigateByUrl('/login');
  }
  openProfilePage() {
    console.log('Funciona Profile');
    this.router.navigateByUrl('/login');
  }
  openSettingPage() {
    console.log('Funciona Setting');
    this.router.navigateByUrl('/login');
  }
  openHomePage() {
    console.log('Funciona Home');
    this.router.navigateByUrl('/home');
  }
  sendPost() { document.querySelector('ion-menu-controller')
      .open(); }
}
