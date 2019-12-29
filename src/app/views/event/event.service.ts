import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Post} from '../../models/Posts/post';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {PostSend} from '../../models/Posts/postSend';
import {EventSend} from '../../models/User/eventSend';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  EVENT_SERVER_ADDRESS = environment.apiUri;
  homeSubject = new BehaviorSubject(false);

  activity: Post[];

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  sendEvent(event: EventSend) {
    return this.httpClient.post(`${this.EVENT_SERVER_ADDRESS}/event`, {
      event
    });
  }
}
