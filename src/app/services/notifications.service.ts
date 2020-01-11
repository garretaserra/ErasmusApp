import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {StorageComponent} from '../storage/storage.component';
import {Notification} from '../models/Notification/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  url = environment.apiUri;
  user = JSON.parse(this.storage.getUser());

  constructor(private http: HttpClient, public storage: StorageComponent) { }

  public getNotifications() {
    return this.http.get<Notification[]>(`${this.url}/user/notifications/${this.user.email}`);
  }
}
