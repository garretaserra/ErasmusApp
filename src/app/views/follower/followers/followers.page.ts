import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {UserName} from '../../../models/User/userName';
import {ProfileService} from '../../profiles/profile.service';
import {FollowersService} from '../followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {
  followers: UserName [];
  _id: string;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private followersService: FollowersService,
              private router: Router,
              public menuCtrl: MenuController) { }

  async ngOnInit() {
    this.load();
  }
  async load() {
    this._id = this.route.snapshot.paramMap.get('id');
    await this.followersService.getFollowers(this._id).subscribe(res => {
      const response: any = res;
      console.log('res: ', res);
      this.followers = response.followers;
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
