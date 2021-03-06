import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Post} from '../../models/Posts/post';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {EventSend} from '../../models/Events/eventSend';

@Injectable({
  providedIn: 'root'
})
export class ProfileEventService {

  EVENT_SERVER_ADDRESS = environment.apiUri;
  homeSubject = new BehaviorSubject(false);

  activity: Post[];

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  getEvent(id: string) {
    return this.httpClient.get<any>(`${this.EVENT_SERVER_ADDRESS}/event/` + `${id}`);
  }
  asistir(idEvent: string, idUser: string) {
    return this.httpClient.put<any>(`${this.EVENT_SERVER_ADDRESS}/event/join`, {
      eventId: idEvent,
      userId: idUser
    });
  }
  leave(idEvent: string, idUser: string) {
    return this.httpClient.put<any>(`${this.EVENT_SERVER_ADDRESS}/event/leave`, {
      eventId: idEvent,
      userId: idUser
    });
  }
}
