import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User/user';
import {UserService} from '../../models/User/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {
  followers: User [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.followers = this.userService.sendFollowers();
  }

}
