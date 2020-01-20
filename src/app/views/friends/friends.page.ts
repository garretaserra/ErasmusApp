import { Component, OnInit } from '@angular/core';
import {FriendsService} from './friends.service';
import {UserName} from '../../models/User/userName';
import {UserService} from '../../models/User/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/User/user';
import {MenuController} from '@ionic/angular';
import {StorageComponent} from "../../storage/storage.component";
import {UserFriend} from '../../models/User/UserFriend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  myInput: any;
  shouldShowCancel: any;
  users: UserFriend [];
  textobuscar = '';
  otherUser: User;
  user: User;

  constructor( private friendsService: FriendsService,
               private userService: UserService,
               private router: Router,
               public menuCtrl: MenuController,
               public storage: StorageComponent) {
  }

  ngOnInit() {
      this.friendsService.getUsers(JSON.parse(this.storage.getUser())._id).subscribe(users => {
          console.log(users);
          const response: any = users;
          this.users = response;
          console.log('this.users: ', this.users);
      });
  }

  buscar(CustomEvent) {
    this.textobuscar = CustomEvent.detail.value;
  }
  async change(id: string) {
     await this.router.navigateByUrl('/other-profile/' + `${id}`);
  }
  onCancel($event: CustomEvent) {
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
}
