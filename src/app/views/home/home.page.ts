import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {User} from '../../models/User/user';
import {HomeService} from './home.service';
import {Post} from '../../models/Posts/post';
import {PostSend} from '../../models/Posts/postSend';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    homeForm: FormGroup;
    user: User;
    post: PostSend;
    constructor(private formBuilder: FormBuilder,
                private homeService: HomeService,
                private userService: UserService,
                private router: Router,
                public menuCtrl: MenuController,
                public alertCtrl: AlertController) {}

   async ngOnInit() {
        this.homeForm = this.formBuilder.group({
            post: new FormControl()
        });
        this.user = this.userService.sendUser();
        await this.getActivity();
    }
    async getActivity() {
       await this.homeService.getActivity(this.user._id).subscribe(res => {
            const response: any = res;
            this.user.activity = response.activity;
        });
       console.log('activity: ', this.user.activity);
       await this.userService.saveUser(this.user);
    }
    async openMenu() {
        await this.menuCtrl.open();
    }
    closeMenu() {
        this.menuCtrl.close();
    }
    async openMessagePage() {
        await this.menuCtrl.close();
        await this.router.navigateByUrl('/message');

    }
    async openProfilePage() {
        await this.menuCtrl.toggle();
        await this.router.navigateByUrl('/profile/' + `${this.user._id}`);
    }
    openFriendsPage() {
        this.router.navigateByUrl('/friends');
    }
    openGlobePage() {
        this.router.navigateByUrl('/globe');
    }
    openSettingPage() {
        this.router.navigateByUrl('/login');
    }
    openHomePage() {
        this.router.navigateByUrl('/home');
    }
    async alert() {
        this.alertCtrl.create({
            header: 'TYPE',
            message: 'What type is the message?',
            buttons: [{text: 'Event', handler: () => {
                this.post = new PostSend( this.user.email, 'Event', this.homeForm.controls.post.value);
                this.homeService.sendPost(this.post, this.user).subscribe(res => {
                    this.router.navigateByUrl('/profile/' + `${this.user._id}`);
                    }); }},
                {text: 'Post',  handler: () => {
                    this.post = new PostSend( this.user.email, 'Post', this.homeForm.controls.post.value);
                    this.homeService.sendPost(this.post, this.user).subscribe(res => {
                        this.router.navigateByUrl('/profile/' + `${this.user._id}`);
                    }); }}]
        }).then(alert => {
             alert.present();
        });
    }
}
