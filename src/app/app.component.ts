import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {StorageComponent} from "./storage/storage.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Friends',
      url: '/friends',
      icon: 'contact'
    },
    {
      title: 'Messages',
      url: '/message',
      icon: 'chatboxes'
    },
    {
      title: 'Globe',
      url: '/globe',
      icon: 'globe'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router,
    public storage: StorageComponent,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOff(){
    this.storage.clearStorage();
    this.router.navigateByUrl('/login');
  }
}
