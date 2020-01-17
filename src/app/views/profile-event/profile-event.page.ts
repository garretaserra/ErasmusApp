import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User/user';
import {FormBuilder} from '@angular/forms';
import {AlertController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageComponent} from '../../storage/storage.component';
import {ProfileEventService} from './profile-event.service';
import {Event} from '../../models/Events/Event';
import {CheckUser} from '../../models/User/checkUser';

@Component({
  selector: 'app-profile-event',
  templateUrl: './profile-event.page.html',
  styleUrls: ['./profile-event.page.scss'],
})
export class ProfileEventPage implements OnInit {

  user: User;
  _idEvent: string;
  event: Event;
  check: string;

  constructor(private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              private profileEventService: ProfileEventService,
              private router: Router,
              private route: ActivatedRoute,
              public storage: StorageComponent,
              private toastCtrl: ToastController) {
  }

  async ngOnInit() {
    let storageUser = this.storage.getUser();
    this.user = JSON.parse(storageUser);
    console.log('this.user: ', this.user);
    await this.getEvent();
  }
  async ionViewDidEnter() {
    let storageUser = this.storage.getUser();

    if (!storageUser) {
      console.log('goto login');
      await this.router.navigateByUrl('/login');
    } else {
      this.user = JSON.parse(storageUser);
      console.log('this.user: ', this.user);
      await this.getEvent();
    }
  }
  async getEvent() {
    this._idEvent = this.route.snapshot.paramMap.get('id');
    await this.profileEventService.getEvent(this._idEvent).subscribe(res => {
      console.log(res.event);
      this.event = res.event;
      this.checkMember();
    });
  }
  async checkMember() {
        let count = 0;
        console.log('this.event: ', this.event);
        if (this.event.members === null) {
          this.check = 'no';
        } else {
            this.event.members.forEach(a => {
            if (a._id === this.user._id) {
              this.check = 'yes';
              count = 1;
            }
          });
          if (count !== 1) {
            this.check = 'no';
          }
        }
  }
  async asistir() {
    await this.profileEventService.asistir(this.event._id, this.user._id).subscribe(res => {
      this.router.navigateByUrl('/profile-event/' + `${this.event._id}`);
      console.log(res);
    },  error => {
      if (error.status === 304) {
        this.launchToast('You are already in');
      }
    });
  }
  async leave() {
    await this.profileEventService.leave(this.event._id, this.user._id).subscribe(res => {
      this.launchToast('You leave successfully');
      console.log(res);
    },  error => {
      if (error.status === 304) {
        this.launchToast('You not are in');
      }
    });
  }
  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
}
