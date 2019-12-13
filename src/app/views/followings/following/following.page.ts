import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {UserName} from '../../../models/User/userName';
import {FollowingService} from '../following.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  following: UserName[];
  _id: string;
  constructor(private userService: UserService, private route: ActivatedRoute, private followingService: FollowingService, private router: Router, public menuCtrl: MenuController) { }

  async ngOnInit() {
    this.load();
  }
  async load() {
    this._id = this.route.snapshot.paramMap.get('id');
    await this.followingService.getFollowing(this._id).subscribe(res => {
      const response: any = res;
      console.log(res);
      this.following = response.following;
    }, error => {console.log('error'); });
  }
  async change(id: string) {
    if (id === this.userService.sendUser()._id) {
      await this.router.navigateByUrl('/profile');

    } else {
      await this.router.navigateByUrl('/other-profile/' + `${id}`);
    }
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
