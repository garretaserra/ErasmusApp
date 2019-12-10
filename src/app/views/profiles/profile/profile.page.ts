import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {UserClient} from 'ionic/lib/user';
import {UserService} from '../../../models/User/user.service';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  profileForm: FormGroup;
  constructor(private userService: UserService, private router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.user = this.userService.sendUser();
    console.log('UserProfile: ', this.user);
  }
  seeMyPosts() {
    this.userService.savePostsUsers(this.user._id);
    this.router.navigateByUrl('/posts');
  }
  seeMyFollowers() {
    this.userService.saveFollowers(this.user._id);
    this.router.navigateByUrl('/followers');
  }
  seeMyFollowing() {
    this.userService.saveFollowing(this.user._id);
    this.router.navigateByUrl('/following');
  }

  openMenu() {
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
