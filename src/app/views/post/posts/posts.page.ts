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
    await this.router.navigateByUrl('/home');
  }
  async changePageComments(idPost) {
    await this.router.navigateByUrl('/comments/' + `${idPost}`);
  }
}
