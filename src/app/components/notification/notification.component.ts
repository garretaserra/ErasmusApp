import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  async ngOnInit() {
    const toast = await this.toastController.create({
      message: 'Lorem ipsum dolor sit amet',
      duration: 4000
    });
    toast.present().catch((err) => console.log(err));
  }

}
