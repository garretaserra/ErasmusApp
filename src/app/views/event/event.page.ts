import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, ToastController} from '@ionic/angular';
import {EventService} from './event.service';
import {PostSend} from '../../models/Posts/postSend';
import {EventSend} from '../../models/Events/eventSend';
import {User} from '../../models/User/user';
import {StorageComponent} from '../../storage/storage.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  eventForm: FormGroup;
  eventSend: EventSend;
  user: User;

  constructor(private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              private eventService: EventService,
              private router: Router,
              public storage: StorageComponent,
              private toastCtrl: ToastController) {
  }
  async ngOnInit() {
    this.eventForm = this.formBuilder.group({
      event: new FormControl(),
      location: new FormControl(),
      eventDate: new FormControl()
    });
  }
  async ionViewDidEnter() {
    let storageUser = this.storage.getUser();

    if (!storageUser) {
      console.log('goto login');
      await this.router.navigateByUrl('/login');
    } else {
      this.user = JSON.parse(storageUser);
      console.log('this.user: ', this.user);
      this.eventForm = this.formBuilder.group({
        event: new FormControl(),
        location: new FormControl(),
        eventDate: new FormControl()
      });
      }
  }
  async event() {
    this.eventSend = new EventSend(this.user._id, 'Event', this.eventForm.controls.event.value, this.eventForm.controls.location.value, this.eventForm.controls.eventDate.value);
    await this.eventService.sendEvent(this.eventSend).subscribe(res => {
      console.log('res: ', res);
    });
  }
  async aggregateMember() {
    await this.router.navigateByUrl('/add-members-event');
  }
  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
}
