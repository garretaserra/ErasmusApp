import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../User/user.service';
import {User} from '../../User/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    homeForm: FormGroup;
    user: User;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, public menuCtrl: MenuController) {
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
        this.router.navigateByUrl('/profile');
    }
}
