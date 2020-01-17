import {Component, ViewChild, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChatService} from '../../services/chat.service';
import {User} from '../../models/User/user';
import {StorageComponent} from '../../storage/storage.component';
import {Message} from '../../models/Message/message';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})

export class ConversationPage implements OnInit {

  // @ts-ignore
  @ViewChild(IonContent) myContent: IonContent;

  user: User;
  name: string;
  message: string;
  messages: Message[];

  constructor(private route: ActivatedRoute,
              private chatService: ChatService,
              public storage: StorageComponent,
              public router: Router) {
    this.name = this.route.snapshot.paramMap.get('name');
    setTimeout(() => this.scrollToBottom(), 500);
  }

  async ngOnInit() {
    this.user = JSON.parse(this.storage.getUser());
    await this.chatService.getStoredMessages().toPromise().then((data) => {
       this.messages = data.filter((item) => item.author === this.name || item.destination === this.name);
       this.chatService.ackMsg(this.name);
    });
    this.chatService.getMessage().subscribe((data: {message, email}) => {
      if (data.email === this.name) {
        this.messages.push(new Message('', data.email, this.name, data.message, new Date(), true, 0));
        setTimeout(() => this.scrollToBottom(), 50);
        if (this.router.url === ('/conversation/' + this.name)) {
          this.chatService.ackMsg(this.name);
        }
      }
    });
    this.chatService.getACK().subscribe((data) => {
      console.log('ACK received from ' + data);
      this.messages.forEach(message => message.read = true);
    });
  }

  onEnter(value: string) {
    this.message = value;
    this.sendMessage();
  }

  sendMessage() {
    if (this.message.replace(/\s/g, '').length) {
      let pepe = this.messages.push(new Message('', this.user.email, this.name, this.message, new Date(), false, 0)); // TODO: Swap name email
      console.log(pepe);
      this.chatService.sendMessage(this.message, this.name); // TODO: noo
      setTimeout(() => this.scrollToBottom(), 50);
    }
  }

  zeroPad(a: number) {
    const s = a.toString();
    if (s.length < 2) { return '0' + a; } else { return a; }
  }

  formatDate(timestamp: Date): string {
    const date = new Date(timestamp);
    const monthNames = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct',
      'Nov', 'Dec'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hour = this.zeroPad(date.getHours());
    const min = this.zeroPad(date.getMinutes());
    const sec = this.zeroPad(date.getSeconds());
    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  }

  async scrollToBottom() {
    await this.myContent.scrollToBottom(500);
  }
}
