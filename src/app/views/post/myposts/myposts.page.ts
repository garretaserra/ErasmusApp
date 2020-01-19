import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/Posts/post';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {AlertController, MenuController} from '@ionic/angular';
import {PostService} from '../post.service';
import {PostSend} from '../../../models/Posts/postSend';
import {StorageComponent} from "../../../storage/storage.component";
import {PostApp} from "../../../models/Posts/postApp";

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.page.html',
  styleUrls: ['./myposts.page.scss'],
})
export class MypostsPage implements OnInit {

  user: User;
  posts:PostApp[];

  constructor(private userService: UserService,
              private postService: PostService,
              private router: Router,
              public menuCtrl: MenuController,
              public storage: StorageComponent,
              public alertCtrl: AlertController) { }
  async ngOnInit() {
    this.load();
  }
  async load() {
      console.log('loading');
      this.user = JSON.parse(this.storage.getUser());
      console.log('this user', this.user);
      await this.postService.getPosts(this.user._id).subscribe(res => {
        console.log('response', res);
        const response: any = res;
        this.posts = response.posts;
    }, error => {
      console.log('error');
    });
  }
  async deletePost(id: string) {
    this.alertCtrl.create({
      header: 'TYPE',
      message: 'Are you sure that you want delete this message?',
      buttons: [{text: 'Yes', handler: () => {
          this.postService.deletePost(id).subscribe(res => {
            console.log(res);
            this.router.navigateByUrl('/profile');
          }, error => {
            console.log(error);
          });
           }},
        {text: 'No',  handler: () => {
            }}]
    }).then(alert => {
      alert.present();
    });
  }
}
