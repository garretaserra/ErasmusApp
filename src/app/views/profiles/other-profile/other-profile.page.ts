import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.page.html',
  styleUrls: ['./other-profile.page.scss'],
})
export class OtherProfilePage implements OnInit {

  user: User;
  otherUser: User;
  following: boolean;
  followcheck: string;

  constructor(private userService: UserService, private router: Router, public menuCtrl: MenuController, private profileService: ProfileService) { }

  ngOnInit() {
    this.otherUser = this.userService.sendOtherUser();
    this.user = this.userService.sendUser();
    this.userService.savePostsOth(this.otherUser._id);
    this.userService.savePostsUsers(this.user._id);
    this.userService.saveFollowers(this.user._id);
    this.userService.saveFollowersOth(this.otherUser._id);
    this.userService.saveFollowing(this.user._id);
    this.userService.saveFollowingOth(this.otherUser._id);

    this.checkFol();
    console.log('UserOther', this.otherUser);
    console.log('User', this.user);

  }
  follow() {
    this.profileService.follow(this.user._id, this.otherUser._id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/profile');
    });
  }
  unfollow() {
    this.profileService.unfollow(this.user._id, this.otherUser._id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/profile'); });
  }
  seeMyPosts() {
    this.router.navigateByUrl('/posts');
  }
  seeMyFollowers() {
    this.router.navigateByUrl('/followers');
  }
  seeMyFollowing() {
    this.router.navigateByUrl('/following');
  }
  checkFol() {
    this.followcheck = this.profileService.checkFollow(this.user, this.otherUser);
    console.log('check: ', this.followcheck);
    if (this.followcheck === 'not') {
      this.following = false;
    } else { this.following = true; }
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
