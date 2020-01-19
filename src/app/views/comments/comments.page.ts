import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, MenuController, ToastController} from '@ionic/angular';
import {StorageComponent} from '../../storage/storage.component';
import {CommentsService} from './comments.service';
import {Post} from '../../models/Posts/post';
import {PostApp} from '../../models/Posts/postApp';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  _id: string;
  post: PostApp;
  constructor(private formBuilder: FormBuilder,
              private commentsService: CommentsService,
              private router: Router,
              private route: ActivatedRoute,
              public menuCtrl: MenuController,
              public alertCtrl: AlertController,
              public storage: StorageComponent,
              private toastCtrl: ToastController) {}

  async ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    await this.getPost(this._id);
  }
  async getPost(id: string) {
    await this.commentsService.getPost(id).subscribe(res => {
      console.log(res);
      const response: any = res;
      this.post = response.post;
      console.log('post:', this.post);
    });
  }
}
