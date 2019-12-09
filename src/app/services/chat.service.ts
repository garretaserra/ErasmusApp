import * as io from 'socket.io-client';
import {Observable} from 'rxjs';


export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() { }

  public connectSocket(email: string) {
    this.socket = io(this.url, {query: 'email=' + email});
  }

  public getList = () => {
    return new Observable((observer) => {
      this.socket.on('userList', (data) => {
        observer.next(data);
      });
    });
  }

  public sendMessage(message, destination) {
    this.socket.emit('message', { message, destination});
  }

}
