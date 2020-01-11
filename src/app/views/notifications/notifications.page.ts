import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '../../services/notifications.service';
import {Notification} from '../../models/Notification/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Notification[];

  constructor(private notificationsService: NotificationsService) { }

  async ngOnInit() {
    this.notifications = await this.notificationsService.getNotifications().toPromise();
  }

}
