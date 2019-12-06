import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User/user';
import {UserClient} from 'ionic/lib/user';
import {UserService} from '../../models/User/user.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  profileForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.sendUser();
    console.log('UserProfile: ', this.user);
  }



}
