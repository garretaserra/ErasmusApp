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
  constructor(private userService: UserService, private router: Router, public menuCtrl: MenuController, private profileService: ProfileService) { }

  ngOnInit() {
    this.otherUser = this.userService.sendOtherUser();
    this.user = this.userService.sendUser();
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
    this.userService.savePostsUsers(this.otherUser._id);
    this.router.navigateByUrl('/posts');
  }
  seeMyFollowers() {
    this.userService.saveFollowers(this.otherUser._id);
    this.router.navigateByUrl('/followers');
  }
  seeMyFollowing() {
    this.userService.saveFollowing(this.otherUser._id);
    this.router.navigateByUrl('/following');
  }
}
