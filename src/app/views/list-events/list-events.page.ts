import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User/user';
import {PostApp} from '../../models/Posts/postApp';
import {UserService} from '../../models/User/user.service';
import {PostService} from '../post/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, MenuController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';
import {EventService} from '../event/event.service';
import {ListEventsService} from './list-events.service';
import {EventApp} from '../../models/Events/EventApp';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.page.html',
  styleUrls: ['./list-events.page.scss'],
})
export class ListEventsPage implements OnInit {

  user: User;
  events: EventApp [];
  _id: string;

  constructor(private userService: UserService,
              private eventService: ListEventsService,
              private router: Router,
              public menuCtrl: MenuController,
              public storage: StorageComponent,
              private route: ActivatedRoute,
              public alertCtrl: AlertController) { }
  async ngOnInit() {
    this.load();
  }
  async ionViewDidEnter() {
    this.load();
  }
  async load() {
    this._id = this.route.snapshot.paramMap.get('id');
    await this.eventService.getEvents(this._id).subscribe(res => {
      console.log('response', res);
      const response: any = res;
      this.events = response.events;
    }, error => {
      console.log('error');
    });
  }
  async deletePost(id: string) {
    this.alertCtrl.create({
      header: 'TYPE',
      message: 'Are you sure that you want delete this message?',
      buttons: [{text: 'Yes', handler: () => {
          this.eventService.deleteEvents(id).subscribe(res => {
            console.log(res);
            this.router.navigateByUrl('/profile');
          }, error => {
            console.log(error);
          });
        }},
        {text: 'No',  handler: () => {
          }}]
    }).then(alert => {
      alert.present();
    });
  }
  async changePageComments(idPost) {
    await this.router.navigateByUrl('/profile-event/' + `${idPost}`);
  }

}
