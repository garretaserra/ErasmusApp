import { Component, OnInit } from '@angular/core';
import {UserService} from '../../User/user.service';
import {User} from '../../User/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.sendUser();
    console.log('UserMessage: ', this.user);

  }

}
