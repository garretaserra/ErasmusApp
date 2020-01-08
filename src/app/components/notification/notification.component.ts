import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  async generateToast(message: string) {
    const toast = await this.toastController.create({
      position: 'top',
      message,
      duration: 4000,
      showCloseButton: true
    });
    toast.present().catch((err) => console.log(err));
  }

}
