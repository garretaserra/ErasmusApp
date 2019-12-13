import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {User} from '../../models/User/user';
import {HomeService} from './home.service';
import {Post} from '../../models/Posts/post';
import {PostSend} from '../../models/Posts/postSend';
import {StorageComponent} from "../../storage/storage.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    homeForm: FormGroup;
    user: User;
    post: PostSend;

    followers;
    following;

    form: FormGroup = new FormGroup({});
    suggestions: String[];
    searchValue: string;

    constructor(private formBuilder: FormBuilder,
                private homeService: HomeService,
                private userService: UserService,
                private router: Router,
                public menuCtrl: MenuController,
                public alertCtrl: AlertController,
                public storage: StorageComponent) {
    }

    async ngOnInit() {
        this.homeForm = this.formBuilder.group({
            post: new FormControl()
        });
    }

    async ionViewDidEnter(){
        let storageUser = this.storage.getUser();

        console.log('storageUser', !!storageUser, storageUser);

        //If user is not present redirect to login
        if(!storageUser){
            console.log('goto login');
            await this.router.navigateByUrl('/login');
        }
        else{
            console.log('storageuser', (storageUser));
            this.user = JSON.parse(storageUser);
            this.storage.saveUser(storageUser);

            this.followers = (await this.userService.getFollowers(this.user._id).toPromise()).followers;
            this.following = (await this.userService.getFollowing(this.user._id).toPromise()).following;
        }
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
    async closeMenu() {
        await this.menuCtrl.close();
    }
    async openMessagePage() {
        await this.menuCtrl.close();
        await this.router.navigateByUrl('/message');
    }
    async openProfilePage() {
        await this.menuCtrl.toggle();
        await this.router.navigateByUrl('/profile');
    }
    async openFriendsPage() {
        await this.router.navigateByUrl('/friends');
    }
    async openGlobePage() {
        await this.router.navigateByUrl('/globe');
    }
    async openSettingPage() {
        await this.router.navigateByUrl('/login');
    }
    async openHomePage() {
        await this.router.navigateByUrl('/home');
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

    async updateSuggestions(event){
        this.searchValue = event.target.value;
        let users: User[] = await this.userService.search(this.searchValue).toPromise();
        //Get emails of all users
        this.suggestions = users.map(a => a.email);
    }

    logOff(){
        this.storage.clearStorage();
    }

    postMessage: string;
    async publishPost(){
        let post = new Post('', this.user.email, 'Post', this.postMessage);
        let postSend = new PostSend(this.user.email, 'Post', this.postMessage);
        this.homeService.sendPost(postSend, this.user).subscribe(res => {
            this.user.activity.push(post);
            this.updateUser();
        });
    }

    async updateUser(){
        let posts = await this.userService.savePostsUsers(this.user._id);
    }
}
