import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../models/User/user.service';
import {Post} from '../../../models/Posts/post';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {User} from '../../../models/User/user';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: Post[];
  user: User;
  _id: string;
  constructor(private userService: UserService, private postService: PostService, private route: ActivatedRoute, private router: Router, public menuCtrl: MenuController) { }
  async ngOnInit() {
   this.load();
  }
  async load() {
    this._id = this.route.snapshot.paramMap.get('id');
    await this.postService.getPosts(this._id).subscribe(res => {
      const response: any = res;
      console.log(res);
      this.posts = response.posts;
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
