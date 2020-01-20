import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Post} from '../../models/Posts/post';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ListEventsService {

  POST_SERVER_ADDRESS = environment.apiUri;
  homeSubject = new BehaviorSubject(false);

  activity: Post[];

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  getEvents(id: string) {
    return this.httpClient.get(`${this.POST_SERVER_ADDRESS}/user/events/` + `${id}` + `/0`);
  }
  deleteEvents(id: string) {
    return this.httpClient.delete(`${this.POST_SERVER_ADDRESS}/event/` + `${id}`);
  }
}
