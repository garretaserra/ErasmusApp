import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {UserName} from '../../../models/User/userName';
import {ProfileService} from '../../profiles/profile.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {
  followers: UserName [];
  _id: string;
  constructor(private userService: UserService, private route: ActivatedRoute, private profileService: ProfileService, private router: Router, public menuCtrl: MenuController) { }

  async ngOnInit() {
    this.load();
  }
  async load() {
    this._id = this.route.snapshot.paramMap.get('id');
    await this.profileService.getFollowers(this._id).subscribe(res => {
      const response: any = res;
      console.log('res: ', res);
      this.followers = response.followers;
    }, error => {console.log('error'); });
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
