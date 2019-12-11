import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../models/User/user.service';
import {Post} from '../../../models/post';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {User} from '../../../models/User/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: Post[];
  user: User;
  constructor(private userService: UserService, private router: Router, public menuCtrl: MenuController) { }
  ngOnInit() {
    console.log('primero');
    this.user = this.userService.otherUser;
    this.posts = this.userService.sendPostOth();
    console.log('post: ', this.posts);
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
