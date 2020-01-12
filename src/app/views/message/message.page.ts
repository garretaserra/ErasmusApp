import { Component, OnInit } from '@angular/core';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';
import {ConversationPage} from '../conversation/conversation.page';
import {NavController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';
import {Message} from '../../models/Message/message';
import {NotificationComponent} from '../../components/notification/notification.component';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  storedMessages: Message[];
  message: string;
  user: User;
  users: UserName[];
  userList: string[];

  constructor(public navCtrl: NavController,
              private userService: UserService,
              public storage: StorageComponent,
              public chatService: ChatService,
              private friendsService: FriendsService,
              public notificationComponent: NotificationComponent) { }

   async ngOnInit() {
    this.user = JSON.parse(this.storage.getUser());
    this.chatService.connectSocket(this.user.email);
    this.storedMessages = await this.chatService.getStoredMessages().toPromise();
    this.chatService.getList().subscribe((list: string[]) => {
      this.userList = list.filter( item => item[0] !== this.user.email); // TODO: User esta mal, email sale name.
    });
    this.friendsService.getUsers().subscribe((list: UserName[]) => {
        this.users = list.filter( item => item.name !== this.user.email); // TODO: User esta mal, email sale name.
    });
    this.chatService.forceGetList();
  }

  filterAndCount(name: string) {
      return this.storedMessages.filter((item) => item.author === name && item.read === false).length;
  }

  viewConversation(name: string) {
    this.navCtrl.navigateForward('/conversation/' + `${name}`);
    this.storedMessages.filter((item) => item.author === name).forEach((msg) => msg.read = true);
  }

}
