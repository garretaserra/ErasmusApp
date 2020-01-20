import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, MenuController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../../models/User/user.service';
import {User} from '../../models/User/user';
import {HomeService} from './home.service';
import {Post} from '../../models/Posts/post';
import {PostSend} from '../../models/Posts/postSend';
import {StorageComponent} from "../../storage/storage.component";
import {PostService} from "../post/post.service";
import {ChatService} from '../../services/chat.service';
import {NotificationComponent} from '../../components/notification/notification.component';
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

    comment:string;
    postId:string;

    activity: any[];
    checklist: CheckUser[];
    followers;
    following;
    form: FormGroup = new FormGroup({});
    suggestions: String[];
    searchValue: string;
    photo: any;

    constructor(private formBuilder: FormBuilder,
                private homeService: HomeService,
                private userService: UserService,
                private postService: PostService,
                private router: Router,
                public menuCtrl: MenuController,
                public alertCtrl: AlertController,
                private toastCtrl: ToastController,
                public storage: StorageComponent,
                public chatService: ChatService,
                public notificationComponent: NotificationComponent) {
    }

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
        } else {
            this.user = JSON.parse(storageUser);
            await this.storage.saveUser(storageUser);
            this.checklist = [];
            this.photo = (await this.userService.getPhoto(this.user._id).toPromise()).photo;
            this.followers = (await this.homeService.getFollowers(this.user._id).toPromise()).followers;
            // this.following = (await this.homeService.getFollowing(this.user._id).toPromise()).following;
            await this.getActivity().then();
            this.following = (await this.homeService.getFollowing(this.user._id).toPromise()).following;
            this.getActivity();
            this.chatService.connectSocket(this.user.name);
            this.chatService.getMessage().subscribe((data: {message, email}) => {
                console.log(data);
                const goToUrl = '/conversation/' + data.email;
                const msg = data.email + ' says: ' + data.message;
                if (this.router.url !== goToUrl) {
                    this.notificationComponent.generateToast(msg, goToUrl).catch((err) => console.log(err));
                } else {
                    this.notificationComponent.playInnerSound();
                }
                console.log(this.router.url);
            });
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
                this.checkMember();

            }
        }, error => {
            console.log('error', error);
        });
        console.log('activity: ', this.activity);
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
                    this.homeService.sendPost(this.postSend, this.followers).subscribe(res => {
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
        let postSend = new PostSend(this.user._id, 'Post', this.postMessage);
        this.homeService.sendPost(postSend, this.followers).subscribe(res => {
            this.getActivity();
        });
    }

    async updateUser(){
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
        }, error => {
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
            if (x.type === 'Event') {
               if (x.members === null) {
                   this.checklist.push(new CheckUser('no', x._id));
               } else {
                   x.members.forEach(a => {
                       if (a._id === this.user._id) {
                           this.checklist.push(new CheckUser('yes', x._id));
                           count = 1;
                       }
                   });
                   if (count !== 1) {
                       this.checklist.push(new CheckUser('no', x._id));
                   } else {
                       count = 0;
                   }
               }
           }
        });
    }
    async changePageComments(idPost) {
       await this.router.navigateByUrl('/comments/' + `${idPost}`);
    }

    async deleteEvent(activity) {
        await this.postService.deletePost(activity._id).toPromise();
        await this.getActivity();
    }

    async processPhoto(imageInput: HTMLInputElement) {
        const file: File = imageInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', async (event: any) => {
            this.photo = event.target.result;
            await this.userService.editPhoto(event.target.result, this.user._id).toPromise();
        });
        reader.readAsDataURL(file);
    }

    async onEnter(value: string, postId: string) {
        this.comment = value;
        this.postId = postId;
        console.log(postId);
        console.log(this.postId);
        await this.sendComment();
    }

    async sendComment() {
        if (this.comment.replace(/\s/g, '').length) {
            /*let comment = {
                postId: this.postId,
                owner: this.user._id,
                message: this.comment
            };*/
            console.log(this.comment);
            await this.homeService.comment(this.comment,this.postId,this.user._id).subscribe(res => {
                this.router.navigateByUrl('/comments/' + `${this.postId}`);
            });
        }
    }

  goToProfile(_id: any) {
    this.router.navigateByUrl('/other-profile/' + _id);
  }

  startChat(name: any) {
    this.router.navigateByUrl('/conversation/' + name);
  }
}
