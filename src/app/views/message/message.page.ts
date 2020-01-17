import { Component, OnInit } from '@angular/core';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';
import {NavController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';
import {Message} from '../../models/Message/message';
import {NotificationComponent} from '../../components/notification/notification.component';

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
      this.chatService.connectSocket(this.user.name);
      this.storedMessages = await this.chatService.getStoredMessages().toPromise();
      this.chatService.getList().subscribe((list: string[]) => {
          this.userList = list.filter(item => item[0] !== this.user.name);
      });
      this.friendsService.getUsers(new User(this.storage.getUser())._id).subscribe((list: UserName[]) => {
          this.users = list.filter(item => item.name !== this.user.name);
      });
      this.chatService.forceGetList();
      this.chatService.getMessage().subscribe((data: { name, message }) => {
          this.storedMessages.push(new Message('', data.name, this.user.name, data.message, new Date(), false, 0));
      });
  }

  filterAndCount(name: string) {
      return this.storedMessages.filter((item) => item.author === name && item.read === false).length;
  }

  filterLast(name: string) {
      const tmp = this.storedMessages.filter((item) => item.author === name || item.destination === name);
      return tmp[tmp.length - 1];
  }

  viewConversation(name: string) {
    this.navCtrl.navigateForward('/conversation/' + `${name}`);
    this.storedMessages.filter((item) => item.author === name).forEach((msg) => msg.read = true);
  }

}
