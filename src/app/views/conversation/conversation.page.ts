import { Component, OnInit } from '@angular/core';
import {UserService} from '../../models/User/user.service';
import {ChatService} from '../../services/chat.service';
import {FriendsService} from '../friends/friends.service';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
