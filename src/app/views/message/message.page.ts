import { Component, OnInit } from '@angular/core';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';
import {ConversationPage} from '../conversation/conversation.page';
import {NavController} from '@ionic/angular';

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

  constructor(public navCtrl: NavController, private userService: UserService,
              private chatService: ChatService, private friendsService: FriendsService) { }

  ngOnInit() {
    this.user = this.userService.sendUser();
    console.log(this.user.email);
    this.chatService.connectSocket(this.user.email);
    this.chatService.getList().subscribe((list: string[]) => {
      this.userList = list;
      console.log('UserList:');
      console.log(this.userList);
    });
    this.friendsService.getUsers().subscribe((list: UserName[]) => {
      console.log('Users:');
      console.log(list);
      this.users = list;
    });
  }

  viewConversation(data) {
    console.log(data);
    this.navCtrl.navigateForward('/conversation/' + `${data}`);
  }

}
