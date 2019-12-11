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
    console.log(this.route.snapshot.paramMap.get('id'));
    this._id = this.route.snapshot.paramMap.get('id');
    await this.load();
  }
  async load() {
      console.log('id: ', this._id);
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

  openMenu() {
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

  async openHomePage() {
    await this.menuCtrl.close();
    console.log('Funciona Home');
    this.router.navigateByUrl('/home');
  }



}
