import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../models/User/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {ProfileService} from '../profile.service';
import {UserProfile} from '../../../models/User/userProfile';
import {UserName} from '../../../models/User/userName';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.page.html',
  styleUrls: ['./other-profile.page.scss'],
})
export class OtherProfilePage implements OnInit {

  user: User;
  userProfile: UserProfile;
  otherUserProfile: UserProfile;
  followers: UserName[];
  following: boolean;
  followcheck: string;
  _id: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, public menuCtrl: MenuController, private profileService: ProfileService) { }

  async ngOnInit() {
    this.load();
  }
  async load() {
    this._id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.sendUser();
    console.log('this.user: ', this.user);
    await this.profileService.getProfile(this._id).subscribe(res => {
      const response: any = res;
      console.log(res);
      this.userProfile = response.profile;
      this.otherUserProfile = this.userProfile;
    }, error => {console.log('error'); });
    await this.profileService.getFollowers(this._id).subscribe(res => {
      const response: any = res;
      console.log(res);
      this.followers = response.followers;
      console.log('this.followers: ', this.followers);
      this.checkFol();
    }, error => {console.log('error'); });
  }
  async follow() {
    await this.profileService.follow(this.user._id, this.userProfile._id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/profile/' + `${this.user._id}`);
    });
  }
  async unfollow() {
    this.profileService.unfollow(this.user._id, this.userProfile._id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/profile/' + `${this.user._id}`);
    });
  }
  async seeMyPosts() {
    await this.router.navigateByUrl('/posts/' + `${this._id}`);
  }
  async seeMyFollowers() {
    await this.router.navigateByUrl('/followers/' + `${this._id}`);
  }
  async seeMyFollowing() {
    await this.router.navigateByUrl('/following/' + `${this._id}`);
  }
  checkFol() {
    this.followcheck = this.profileService.checkFollow(this.followers, this.user._id);
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
