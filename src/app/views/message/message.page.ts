import { Component, OnInit } from '@angular/core';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  message: string;
  user: User;
  users: UserName[];
  userList: string[];

  constructor(private userService: UserService, private chatService: ChatService, private friendsService: FriendsService) { }

  ngOnInit() {
    this.user = this.userService.sendUser();
    console.log(this.user.email);
    this.chatService.connectSocket(this.user.email);
    this.chatService.getList().subscribe((list: string[]) => {
      this.userList = list;
      console.log(this.userList);
    });
    this.friendsService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  onKey(event: any) {
    this.message = event.target.value;
  }

  sendMessage() {
    console.log(this.message);
    this.chatService.sendMessage(this.message, 'Sheila');
  }

}
