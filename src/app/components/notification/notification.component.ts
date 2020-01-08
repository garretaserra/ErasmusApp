import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  constructor(public toastController: ToastController,
              public navCtrl: NavController) {}

  ngOnInit() {}

  async generateToast(message: string, goToUrl: string) {
    const toast = await this.toastController.create({
      position: 'top',
      message,
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'Show'
    });
    toast.present().catch((err) => console.log(err));
    toast.onDidDismiss().then((arg) => {
      if (arg.role === 'cancel') {
        this.navCtrl.navigateForward(goToUrl);
      }
    });
  }
}
