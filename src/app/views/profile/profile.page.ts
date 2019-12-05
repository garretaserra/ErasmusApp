import { Component, OnInit } from '@angular/core';
import {User} from '../../User/user';
import {UserClient} from 'ionic/lib/user';
import {UserService} from '../../User/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.sendUser();
    console.log('UserProfile: ', this.user);
  }

}
