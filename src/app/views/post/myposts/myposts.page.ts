import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/Posts/post';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {AlertController, MenuController} from '@ionic/angular';
import {PostService} from '../post.service';
import {PostSend} from '../../../models/Posts/postSend';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.page.html',
  styleUrls: ['./myposts.page.scss'],
})
export class MypostsPage implements OnInit {

  user: User;
  userTest: User;
  constructor(private userService: UserService, private postService: PostService, private router: Router, public menuCtrl: MenuController,public alertCtrl: AlertController) { }
  async ngOnInit() {
    this.load();
  }
  async load() {
    this.user = this.userService.sendUser();
    await this.postService.getPosts(this.user._id).subscribe(res => {
      const response: any = res;
      this.user.posts = response.posts;
      this.userTest = this.user;
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
