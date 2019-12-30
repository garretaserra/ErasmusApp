import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, MenuController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {User} from '../../models/User/user';
import {HomeService} from './home.service';
import {Post} from '../../models/Posts/post';
import {PostSend} from '../../models/Posts/postSend';
import {UserProfile} from '../../models/User/userProfile';
import {UserName} from '../../models/User/userName';
import {StorageComponent} from "../../storage/storage.component";
import {error} from 'util';
import {CheckUser} from '../../models/User/checkUser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    homeForm: FormGroup;
    user: User;
    postSend: PostSend;
    post: Post;
    userProfile: UserProfile;
    userProfileTest: UserProfile;

    activity: any[];
    checklist: CheckUser[];
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
                public storage: StorageComponent,
                private toastCtrl: ToastController) {}

    async ngOnInit() {
        this.homeForm = this.formBuilder.group({
            post: new FormControl()
        });
        this.checklist = [];
    }

    async ionViewDidEnter(){
        let storageUser = this.storage.getUser();

        //If user is not present redirect to login
        if(!storageUser){
            console.log('goto login');
            await this.router.navigateByUrl('/login');
        }
        else{
            this.user = JSON.parse(storageUser);
            console.log('this.user: ', this.user);
            await this.storage.saveUser(storageUser);
            this.checklist = [];
            this.followers = (await this.homeService.getFollowers(this.user._id).toPromise()).followers;
            // this.following = (await this.homeService.getFollowing(this.user._id).toPromise()).following;
            await this.getActivity();
        }
    }

    async getActivity() {
        await this.homeService.getActivity(this.user._id).subscribe(res => {
            if (res.status === 204) {
                console.log('204');
            } else {
                console.log('res: ', res);
                const response: any = res;
                this.activity = response.body.activity;
                this.user.activity = this.activity;
                this.checkMember();

            }
        }, error => {
            console.log('error', error);
        });
        await this.userService.saveUser(this.user);
    }
    async alert() {
        this.alertCtrl.create({
            header: 'TYPE',
            message: 'Post or event',
            buttons: [{text: 'Event', handler: () => {
                    this.router.navigateByUrl('/event');
                }},
                {text: 'Post',  handler: () => {
                    console.log('message: ', this.homeForm.controls.post.value);
                    this.postSend = new PostSend( this.user._id, 'Post', this.homeForm.controls.post.value);
                    this.homeService.sendPost(this.postSend).subscribe(res => {
                        this.router.navigateByUrl('/profile');
                    }); }}]
        }).then(alert => {
            alert.present();
        });
    }
    async seeEvent(id: string){
        await this.router.navigateByUrl('/profile-event/' + `${id}`);
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
        let post = new Post('', this.user._id, 'Post', this.postMessage);
        let postSend = new PostSend(this.user._id, 'Post', this.postMessage);
        this.homeService.sendPost(postSend).subscribe(res => {
            console.log('res: ', res);
            this.user.activity.push(post);
            this.updateUser();
        });
    }
    async updateUser(){
        this.user.activity = (await this.userService.savePostsUsers(this.user._id).toPromise()).posts;
        this.storage.saveUser(JSON.stringify(this.user));
    }
    async asistir(eventId: string) {
       await this.homeService.asistir(eventId, this.user._id).subscribe(res => {
           this.router.navigateByUrl('/profile-event/' + `${eventId}`);
           console.log(res);
        },  error => {
           if (error.status === 304) {
               this.launchToast('You are already in');
           }
       });
    }
    async leave(eventId: string) {
        await this.homeService.leave(eventId, this.user._id).subscribe(res => {
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
    async checkMember() {
        let count = 0;
        this.activity.forEach(x => {
            console.log('x.type: ', x.type);
            if (x.type === 'Event') {
               if (x.members === null) {
                   this.checklist.push(new CheckUser('no', x._id));
               } else {
                   x.members.forEach(a => {
                       console.log('entra');
                       if (a._id === this.user._id) {
                           console.log('entra 2.');
                           this.checklist.push(new CheckUser('yes', x._id));
                           count = 1;
                       }
                   });
                   if (count !== 1) {
                       this.checklist.push(new CheckUser('no', x._id));
                   }else {
                       count = 0;
                   }
               }
           } console.log('check: ', this.checklist);
        });
    }
}
