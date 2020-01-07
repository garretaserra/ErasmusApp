import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';
import {NavController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  user: User;
  name: string;
  message: string;
  messages: { author: string, text: string}[] = [];

  constructor(private route: ActivatedRoute,
              private chatService: ChatService,
              public storage: StorageComponent) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    this.user = JSON.parse(this.storage.getUser());
    this.chatService.getMessage().subscribe((data: {message, email}) => {
      console.log('Incoming message:');
      console.log(data);
      this.messages.push({author: data.email, text: data.message});
    });
  }

  onEnter(value: string) {
    this.message = value;
    this.sendMessage();
  }

  sendMessage() {
    console.log(this.message);
    this.messages.push({author: this.user.email, text: this.message}); // TODO: Swap name email
    this.chatService.sendMessage(this.message, this.name); // TODO: noo
  }

}
