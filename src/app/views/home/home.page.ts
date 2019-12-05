import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {User} from '../../models/User/user';
import {HomeService} from './home.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    controller = document.querySelector('ion-alert-controller');
    homeForm: FormGroup;
    user: User;
    post: Post;
    
    constructor(private formBuilder: FormBuilder, private homeService: HomeService, private userService: UserService, private router: Router, public menuCtrl: MenuController, public alertCtrl: AlertController) {
    }

    ngOnInit() {
        this.homeForm = this.formBuilder.group({
            post: new FormControl()
        });
        this.user = this.userService.sendUser();
        console.log('UserHome: ', this.user);
    }

    openMenu() {
        this.menuCtrl.open();
    }

    openMessagePage() {
        console.log('Funciona Message');
        this.router.navigateByUrl('/message');
    }

    openProfilePage() {
        console.log('Funciona Profile');
        this.router.navigateByUrl('/profile');
    }

    openSettingPage() {
        console.log('Funciona Setting');
        this.router.navigateByUrl('/login');
    }

    openHomePage() {
        console.log('Funciona Home');
        this.router.navigateByUrl('/home');
    }

    sendPost() {
        this.post = new Post('5de8f3d1b0bed650ac12c60d', '', this.homeForm.controls.post.value);
        this.homeService.sendPost(this.post).subscribe(res => {
            console.log(res);
            this.router.navigateByUrl('/profile');
        });
    }
    alert() {
        this.alertCtrl.create({
            header: 'TYPE',
            message: 'What type is the message?',
            buttons: ['Event', 'Status']
        }).then(alert => {
            alert.present();
        });
    }
}
