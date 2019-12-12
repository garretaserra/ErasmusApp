import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/Posts/post';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {PostService} from '../post.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.page.html',
  styleUrls: ['./myposts.page.scss'],
})
export class MypostsPage implements OnInit {

  user: User;
  userTest: User;
  constructor(private userService: UserService, private postService: PostService, private router: Router, public menuCtrl: MenuController) { }
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
  deletePost(id: string) {

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
