import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {Post} from '../../../models/Posts/post';
import {ProfileService} from '../profile.service';
import {UserProfile} from '../../../models/User/userProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  posts: Post[];
  userProfile: UserProfile;
  userTest: UserProfile;
  _id: string;
  profileForm: FormGroup;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, public menuCtrl: MenuController, private profileService: ProfileService) { }

  async ngOnInit() {
    await this.load();
  }
  async load() {
      this._id = this.userService.sendUser()._id;
      await this.profileService.getProfile(this._id).subscribe(res => {
      const response: any = res;
      console.log(res);
      this.userTest = response.profile;
    }, error => {console.log('error'); });
  }
  async seeMyPosts() {
    await this.router.navigateByUrl('/myposts');
  }
  async seeMyFollowers() {
    await this.router.navigateByUrl('/myfollowers');
  }
  async seeMyFollowing() {
    await this.router.navigateByUrl('/myfollowing');
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
    await this.menuCtrl.close();
    this.router.navigateByUrl('/home');
  }



}
