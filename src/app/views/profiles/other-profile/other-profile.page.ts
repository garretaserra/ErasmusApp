import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User/user';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../models/User/user.service';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.page.html',
  styleUrls: ['./other-profile.page.scss'],
})
export class OtherProfilePage implements OnInit {

  user: User;
  otherUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.otherUser = this.userService.sendOtherUser();
    console.log('UserOther', this.otherUser);
  }
  follow() {
  }
  unfollow() {}
}
