import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {UserName} from '../../../models/User/userName';
import {FollowingService} from '../following.service';

@Component({
  selector: 'app-myfollowing',
  templateUrl: './myfollowing.page.html',
  styleUrls: ['./myfollowing.page.scss'],
})
export class MyfollowingPage implements OnInit {

  _id: string;
  following: UserName[];

  constructor(private userService: UserService, private followingService: FollowingService, private router: Router, public menuCtrl: MenuController) { }

  async ngOnInit() {
    this.load();
  }
  async change(id: string) {
    await this.router.navigateByUrl('/other-profile/' + `${id}`);
  }
  async load() {
    this._id = this.userService.sendUser()._id;
    this.followingService.getFollowing(this._id).subscribe(res => {
      const response: any = res;
      console.log(res);
      this.following = response.following;
    }, error => {console.log('error'); });
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
