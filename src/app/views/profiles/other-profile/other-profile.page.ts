import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {ProfileService} from '../profile.service';
import {UserProfile} from '../../../models/User/userProfile';
import {UserName} from '../../../models/User/userName';
import {StorageComponent} from "../../../storage/storage.component";

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
  photo: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private storage: StorageComponent,
              public menuCtrl: MenuController,
              private profileService: ProfileService) { }

  async ngOnInit() {
    this.load();
  }

  async ionViewDidEnter() {
    this.load();
  }

  async load() {
    this._id = this.route.snapshot.paramMap.get('id');
    this.user = JSON.parse(this.storage.getUser());
    await this.profileService.getProfile(this._id).subscribe(async res => {
        const response: any = res;
        this.userProfile = response.profile;
        this.otherUserProfile = this.userProfile;
        this.photo = (await this.userService.getPhoto(this.otherUserProfile._id).toPromise()).photo;
    }, error => {console.log('error'); });
    await this.profileService.getFollowers(this._id).subscribe(res => {
      const response: any = res;
      this.followers = response.followers;
      this.checkFol();
    }, error => {console.log('error'); });
  }
  async follow() {
    await this.profileService.follow(this.user._id, this.userProfile._id).subscribe(res => {
      this.load();
    });
  }
  async unfollow() {
    this.profileService.unfollow(this.user._id, this.userProfile._id).toPromise();
    this.following = false;
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
    if (this.followcheck === 'not') {
      this.following = false;
    } else { this.following = true; }
  }

  sendEmail(email: string) {
    if(confirm('Estas seguro que quieres enviar un mensaje a '+email)){
      window.open("mailto:"+email, "_blank");
    }
  }
}
