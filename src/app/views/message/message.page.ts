import { Component, OnInit } from '@angular/core';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';
import {ConversationPage} from '../conversation/conversation.page';
import {NavController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';

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

  constructor(public navCtrl: NavController,
              private userService: UserService,
              public storage: StorageComponent,
              private chatService: ChatService,
              private friendsService: FriendsService) { }

  ngOnInit() {
    this.user = JSON.parse(this.storage.getUser());
    console.log(this.user.email);
    this.chatService.connectSocket(this.user.email);
    this.chatService.getList().subscribe((list: string[]) => {
      this.userList = list.filter( item => item[0] !== this.user.email); // TODO: User esta mal, email sale name.
      // console.log('UserList:');
      // console.log(this.userList);
    });
    this.friendsService.getUsers().subscribe((list: UserName[]) => {
        this.users = list.filter( item => item.name !== this.user.email); // TODO: User esta mal, email sale name.
    });
    this.chatService.getMessage().subscribe((data: {message, email}) => {
      console.log('Incoming message:');
      console.log(data);
    });
  }

  viewConversation(data) {
    console.log(data);
    this.navCtrl.navigateForward('/conversation/' + `${data}`);
  }

}
