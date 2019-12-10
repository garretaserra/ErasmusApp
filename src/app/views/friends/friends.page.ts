import { Component, OnInit } from '@angular/core';
import {FriendsService} from './friends.service';
import {UserName} from '../../models/User/userName';
import {UserService} from '../../models/User/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/User/user';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  myInput: any;
  shouldShowCancel: any;
  users: UserName [];
  textobuscar = '';
  otherUser: User;
  constructor( private friendsService: FriendsService, private userService: UserService, private router: Router, public menuCtrl: MenuController) {
  }
  ngOnInit() {
      this.friendsService.getUsers().subscribe(users => {
          console.log(users);
          this.users = users;
      });

  }
  buscar(CustomEvent) {
    this.textobuscar = CustomEvent.detail.value;
  }
  change() {
      this.router.navigateByUrl('/other-profile');
  }
   sendUser(id: string) {
    this.userService.saveOtherUser(id).subscribe(res => {
          console.log('pepe', res);
          this.otherUser = res as User;
          this.userService.saveOth(this.otherUser);
      });
  }
  onCancel($event: CustomEvent) {
  }
  openMenu() {
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
