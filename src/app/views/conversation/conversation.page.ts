import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  name: string;
  message: string;
  messages: string[] = [];

  constructor(private route: ActivatedRoute,
              private chatService: ChatService) {
    console.log(this.route.snapshot.paramMap.get('name'));
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    this.chatService.getMessage().subscribe((data: {message, email}) => {
      console.log('Incoming message:');
      console.log(data);
      this.messages.push(data.email + ': ' + data.message);
    });
  }
  onKey(event: any) {
    this.message = event.target.value;
  }

  sendMessage() {
    console.log(this.message);
    this.messages.push(this.name + ': ' + this.message);
    this.chatService.sendMessage(this.message, this.name);
  }

}
