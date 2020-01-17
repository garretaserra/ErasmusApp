import * as io from 'socket.io-client';
import {observable, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Message} from '../models/Message/message';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private url = environment.apiUri;
  private socket;
  private email;

  constructor(private http: HttpClient) {}

  public connectSocket(email: string) {
    if (!this.socket) {
      this.email = email;
      this.socket = io(this.url, {query: 'email=' + email});
      console.log('connection');
    }
  }

  public getStoredMessages() {
    return this.http.get<Message[]>(`${this.url}/user/messages/${this.email}`);
  }

  public getList = () => {
    return new Observable((observer) => {
      this.socket.on('userList', (data) => {
        observer.next(data);
      });
    });
  }

  public forceGetList() {
    this.socket.emit('giveMeUserList');
  }

  public sendMessage(message, destination) {
    this.socket.emit('message', { message, destination});
    const body = {author: this.email, destination, text: message};
    this.http.post(`${this.url}/user/message/`, body).toPromise().catch((err) => console.log(err));
  }

  public ackMsg(sender: string) {
    this.socket.emit('ACK', sender);
    this.http.put(`${this.url}/user/message/${sender}/${this.email}`, null).toPromise().catch((err) => console.log(err));
  }

  public getACK = () => {
    return new Observable((observer) => {
      this.socket.on('ACK', (arg) => {
        observer.next(arg);
      });
    });
  };

  public getMessage = () => {
    return new Observable((observer) => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    });
  }


}
