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

    homeForm: FormGroup;
    user: User;
    post: Post;

    form: FormGroup = new FormGroup({});
    suggestions: String[];
    searchValue: string;

    constructor(private formBuilder: FormBuilder,
                private homeService: HomeService,
                private userService: UserService,
                private router: Router,
                public menuCtrl: MenuController,
                public alertCtrl: AlertController) {
    }

    ngOnInit() {
        this.homeForm = this.formBuilder.group({
            post: new FormControl()
        });
        this.user = this.userService.sendUser();
        console.log('UserHome: ', this.user);
    }
     async getActivity() {
       await this.homeService.getActivity(this.user._id).subscribe(res => {
            console.log(res);
            const response: any = res;
            this.user.activity = response.activity;
        });
       console.log('activity: ', this.user.activity);
       await this.userService.saveUser(this.user);
    }
    openMenu() {
        console.log('abrete perro');
        this.menuCtrl.open();
    }
    closeMenu() {
        console.log('cierrate perro');
        this.menuCtrl.close();
    }
    openMessagePage() {
        this.menuCtrl.close();
        console.log('Funciona Message');
        this.router.navigateByUrl('/message');

    }
    openProfilePage() {
        console.log('Funciona Profile');
        this.router.navigateByUrl('/profile');
    }
    openFriendsPage() {
        console.log('Funciona Friends');
        this.router.navigateByUrl('/friends');
    }
    openGlobePage() {
        console.log('Funciona Globe');
        this.router.navigateByUrl('/globe');
    }
    openSettingPage() {
        console.log('Funciona Setting');
        this.router.navigateByUrl('/login');
    }
    openHomePage() {
        console.log('Funciona Home');
        this.router.navigateByUrl('/home');
    }
    alert() {
        this.alertCtrl.create({
            header: 'TYPE',
            message: 'What type is the message?',
            buttons: [
                {text: 'Event', handler: () => {
                    this.post = new Post(this.user.email, 'Event', this.homeForm.controls.post.value);
                    this.homeService.sendPost(this.post, this.user).subscribe(res => {
                         this.router.navigateByUrl('/profile');
                        });
                    }},
                {text: 'Post',  handler: () => {
                    this.post = new Post(this.user.email, 'Post', this.homeForm.controls.post.value);
                    this.homeService.sendPost(this.post, this.user).subscribe(res => {
                        this.getActivity();
                        this.router.navigateByUrl('/profile');
                    });
                }}
            ]
        }).then(alert => {
            alert.present();
        });
    }

    async updateSuggestions(event){
        this.searchValue = event.target.value;
        let users: User[] = await this.userService.search(this.searchValue).toPromise();
        //Get emails of all users
        this.suggestions = users.map(a => a.email);
    }

    //TODO: Implement log off functionality
    logOff(){

    }

    postMessage: string;
    async publishPost(){
        this.post = new Post(this.user.email, 'Post', this.postMessage);
        this.homeService.sendPost(this.post, this.user).subscribe(res => {
            this.user.posts.push(this.post);
            this.updateUser();
        });
    }

    async updateUser(){
        let posts = await this.userService.savePostsUsers(this.user._id);
    }
}
