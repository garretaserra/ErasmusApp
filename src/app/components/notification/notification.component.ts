import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  sound: HTMLAudioElement;
  innerSound: HTMLAudioElement;

  constructor(public toastController: ToastController,
              public navCtrl: NavController) {
    this.sound = new Audio();
    this.sound.src = '../../../assets/sounds/when.mp3';
    this.sound.load();
    this.innerSound = new Audio();
    this.innerSound.src = '../../../assets/sounds/clearly.mp3';
    this.innerSound.load();
  }

  ngOnInit() {}

  async generateToast(message: string, goToUrl: string) {
    const toast = await this.toastController.create({
      position: 'top',
      message,
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'Show'
    });
    toast.present().then(() => this.sound.play()).catch((err) => console.log(err));
    toast.onDidDismiss().then((arg) => {
      if (arg.role === 'cancel') {
        this.navCtrl.navigateForward(goToUrl);
      }
    });
  }

  public playInnerSound() {
    this.innerSound.play().catch((err) => console.log(err));
  }

}
