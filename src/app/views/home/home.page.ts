import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  homeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public menuCtrl: MenuController) {}

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      email: new FormControl()
    });
  }
  openMenu() {
    this.menuCtrl.open();
  }
  login() { document.querySelector('ion-menu-controller')
      .open(); }
}
