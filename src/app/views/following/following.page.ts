import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User/user';
import {UserService} from '../../models/User/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  following: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.following = this.userService.sendFollowing();
  }

}
