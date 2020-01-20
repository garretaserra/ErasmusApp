import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {UserName} from '../../../models/User/userName';
import {User} from '../../../models/User/user';
import {FollowersService} from '../followers.service';
import {StorageComponent} from "../../../storage/storage.component";
import {UserFriend} from '../../../models/User/UserFriend';

@Component({
  selector: 'app-myfollowers',
  templateUrl: './myfollowers.page.html',
  styleUrls: ['./myfollowers.page.scss'],
})
export class MyfollowersPage implements OnInit {

  followers: UserFriend [];
  user: User;
  constructor(private userService:UserService,
              private followersService: FollowersService,
              private router: Router,
              private storage: StorageComponent,
              public menuCtrl: MenuController) { }

  async ngOnInit() {
    this.load();
  }
  async load() {
    this.user = JSON.parse(this.storage.getUser());
    this.followersService.getFollowers(this.user._id).subscribe(res => {
      const response: any = res;
      this.followers = response.followers;
    }, error => {console.log('error'); });
  }
  async change(id: string) {
    await this.router.navigateByUrl('/other-profile/' + `${id}`);
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
