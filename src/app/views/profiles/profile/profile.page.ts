import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../models/User/user.service';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {Post} from '../../../models/Posts/post';
import {ProfileService} from '../profile.service';
import {UserProfile} from '../../../models/User/userProfile';
import {StorageComponent} from "../../../storage/storage.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  posts: Post[];
  photo: string;
  userTest: UserProfile;
  _id: string;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              public menuCtrl: MenuController,
              public storage: StorageComponent,
              private profileService: ProfileService
  ) { }

  async ngOnInit() {
    await this.load();
  }

  async ionViewEnter(){
    await this.load();
  }

  async load() {
      this._id = JSON.parse(this.storage.getUser())._id;
      await this.profileService.getProfile(this._id).subscribe(async res => {
      const response: any = res;
      this.userTest = response.profile;
      this.photo = (await this.userService.getPhoto(this.userTest._id).toPromise()).photo;
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

  sendEmail(email: string) {
    if(confirm('Estas seguro que quieres enviar un mensaje a '+email)){
      window.open("mailto:"+email, "_blank");
    }
  }

  async processPhoto(imageInput: HTMLInputElement) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', async (event: any) => {
      this.photo = event.target.result;
      await this.userService.editPhoto(event.target.result, this.userTest._id).toPromise();
    });
    reader.readAsDataURL(file);
  }
}
