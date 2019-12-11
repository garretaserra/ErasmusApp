import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {UserName} from '../../../models/User/userName';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  following: UserName[];
  constructor(private userService: UserService, private router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.following = this.userService.sendFollowingOth();
  }
  openMenu() {
    console.log('abrete perro');
    this.menuCtrl.open();
  }

  closeMenu() {
    console.log('cierrate perro');
    this.menuCtrl.close();
  }

  openMessagePage() {
    console.log('Funciona Message');
    this.router.navigateByUrl('/message');
  }

  openProfilePage() {
    console.log('Funciona Profile');
    this.router.navigateByUrl('/profile');
  }
  openFriendsPage() {
    console.log('Funciona Friends');
    this.router.navigateByUrl('/friends');
  }
  openGlobePage() {
    console.log('Funciona Globe');
    this.router.navigateByUrl('/globe');
  }
  openSettingPage() {
    console.log('Funciona Setting');
    this.router.navigateByUrl('/login');
  }

  openHomePage() {
    console.log('Funciona Home');
    this.router.navigateByUrl('/home');
  }
}
