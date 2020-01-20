import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '../../services/notifications.service';
import {Notification} from '../../models/Notification/notification';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Notification[];

  constructor(private notificationsService: NotificationsService,
              public navCtrl: NavController) { }

  async ngOnInit() {
    this.notifications = await this.notificationsService.getNotifications().toPromise();
    this.notifications = this.notifications.reverse();
  }

  goTo(url: string) {
    this.navCtrl.navigateForward(url);
  }

}
