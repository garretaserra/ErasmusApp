import { Component, OnInit } from '@angular/core';
import {FriendsService} from './friends.service';
import {UserName} from '../../models/User/userName';
import {UserService} from '../../models/User/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/User/user';

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
  constructor( private friendsService: FriendsService, private userService: UserService, private router: Router) {
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
}
