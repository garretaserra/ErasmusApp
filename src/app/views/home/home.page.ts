import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {User} from '../../models/User/user';
import {HomeService} from './home.service';
import {Post} from '../../models/Posts/post';
import {PostSend} from '../../models/Posts/postSend';
import {UserProfile} from '../../models/User/userProfile';
import {UserName} from '../../models/User/userName';
import {StorageComponent} from "../../storage/storage.component";
import {PostService} from "../post/post.service";
import {ChatService} from '../../services/chat.service';
import {NotificationComponent} from '../../components/notification/notification.component';

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

    followers;
    following;
    form: FormGroup = new FormGroup({});
    suggestions: String[];
    searchValue: string;
    private photo: any;

    constructor(private formBuilder: FormBuilder,
                private homeService: HomeService,
                private userService: UserService,
                private postService: PostService,
                private router: Router,
                public menuCtrl: MenuController,
                public alertCtrl: AlertController,
                public storage: StorageComponent,
                public chatService: ChatService,
                public notificationComponent: NotificationComponent) {
    }

    async ngOnInit() {
        this.homeForm = this.formBuilder.group({
            post: new FormControl()
        });
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
            await this.storage.saveUser(storageUser);

            this.photo = (await this.userService.getPhoto(this.user._id).toPromise()).photo;
            this.followers = (await this.homeService.getFollowers(this.user._id).toPromise()).followers;
            this.following = (await this.homeService.getFollowing(this.user._id).toPromise()).following;
            this.getActivity();
            this.chatService.connectSocket(this.user.email);
            this.chatService.getMessage().subscribe((data: {message, email}) => {
                console.log(data);
                const goToUrl = '/conversation/' + data.email;
                const msg = data.email + ' says: ' + data.message;
                if (this.router.url !== goToUrl) {
                    this.notificationComponent.generateToast(msg, goToUrl).catch((err) => console.log(err));
                }
                console.log(this.router.url);
            });
        }
    }

    async getActivity() {
        await this.homeService.getActivity(this.user._id).subscribe(res => {
            const response: any = res;
            this.user.activity = response.activity;
        });
        await this.userService.saveUser(this.user);
    }
    async alert() {
        this.alertCtrl.create({
            header: 'TYPE',
            message: 'What type is the message?',
            buttons: [{text: 'Event', handler: () => {
                this.postSend = new PostSend( this.user.email, 'Event', this.homeForm.controls.post.value);
                this.homeService.sendPost(this.postSend, this.user).subscribe(res => {
                    this.router.navigateByUrl('/profile');
                    }); }},
                {text: 'Post',  handler: () => {
                    console.log('message: ', this.homeForm.controls.post.value);
                    this.postSend = new PostSend( this.user.email, 'Post', this.homeForm.controls.post.value);
                    this.homeService.sendPost(this.postSend, this.user).subscribe(res => {
                        this.router.navigateByUrl('/profile');
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
        this.user.activity = (await this.userService.savePostsUsers(this.user._id).toPromise()).posts;
        this.storage.saveUser(JSON.stringify(this.user));
    }

    async deleteEvent(activity) {
        await this.postService.deletePost(activity._id).toPromise();
        await this.getActivity();
    }

    processPhoto(imageInput: HTMLInputElement) {
        const file: File = imageInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', async (event: any) => {
            this.photo = event.target.result;
            await this.userService.editPhoto(event.target.result, this.user._id).toPromise();
        });
        reader.readAsDataURL(file);
    }
}
