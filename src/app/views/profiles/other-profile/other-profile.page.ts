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
      this.router.navigateByUrl('/profile');
    });
  }
  async unfollow() {
    this.profileService.unfollow(this.user._id, this.userProfile._id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/profile');
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
    console.log('followcheck: ', this.followcheck);
    if (this.followcheck === 'not') {
      this.following = false;
    } else { this.following = true; }
  }
  async openMenu() {
    await this.menuCtrl.open();
  }
  async closeMenu() {
    await this.menuCtrl.close();
  }
  async openMessagePage() {
    await this.router.navigateByUrl('/message');
  }
  async openProfilePage() {
    await this.router.navigateByUrl('/profile');
  }
  async openFriendsPage() {
    await this.router.navigateByUrl('/friends');
  }
  async openGlobePage() {
    await this.router.navigateByUrl('/globe');
  }
  async openSettingPage() {
    await this.router.navigateByUrl('/login');
  }
  async openHomePage() {
    await this.router.navigateByUrl('/home');
  }
}
