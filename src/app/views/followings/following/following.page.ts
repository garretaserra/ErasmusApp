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
  async openMenu() {
    console.log('abrete perro');
    await this.menuCtrl.open();
  }

  async closeMenu() {
    console.log('cierrate perro');
    await this.menuCtrl.close();
  }

  async openMessagePage() {
    console.log('Funciona Message');
    await this.router.navigateByUrl('/message');
  }

  async openProfilePage() {
    console.log('Funciona Profile');
    await this.router.navigateByUrl('/profile');
  }
  async openFriendsPage() {
    console.log('Funciona Friends');
    await this.router.navigateByUrl('/friends');
  }
  async openGlobePage() {
    console.log('Funciona Globe');
    await this.router.navigateByUrl('/globe');
  }
  async openSettingPage() {
    console.log('Funciona Setting');
    await this.router.navigateByUrl('/login');
  }

  async openHomePage() {
    console.log('Funciona Home');
    await this.router.navigateByUrl('/home');
  }
}
