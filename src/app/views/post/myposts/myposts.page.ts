import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {User} from '../../../models/User/user';
import {UserService} from '../../../models/User/user.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.page.html',
  styleUrls: ['./myposts.page.scss'],
})
export class MypostsPage implements OnInit {

  posts: Post[];
  user: User;
  constructor(private userService: UserService, private router: Router, public menuCtrl: MenuController) { }
  ngOnInit() {
    console.log('primero');
    this.user = this.userService.user;
    this.posts = this.userService.sendPosts();
    console.log('post: ', this.posts);
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
