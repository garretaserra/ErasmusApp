import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';
import {Post} from '../post';
import {UserName} from './userName';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    USER_SERVER_ADDRESS = 'http://localhost:3000/user';
    userSubject = new BehaviorSubject(false);

    user: User;
    otherUser: User;
    posts: Post[];
    postsOthUser: Post[];
    followers: UserName[];
    following: UserName[];
    followersOth: UserName[];
    followingOth: UserName[];

    constructor(private httpClient: HttpClient) {}

    saveUser(user: User) {
        console.log('User: ', user);
        this.user = user;
    }
    sendUser() {
        return this.user;
    }
    saveOtherUser(id: string) {
         return this.httpClient.get(`${this.USER_SERVER_ADDRESS}/profile/` + `${id}`);
    }
    saveOth(user: User) {
        this.otherUser = user;
    }
    sendOtherUser() {
        return this.otherUser;
    }
    savePostsUsers(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/posts/` + `${id}`).subscribe(res => {
            console.log(res);
            const response: any = res;
            const posts: Post[] = response.posts;
            console.log('Posts2: ', posts);
            this.posts = posts;
            console.log('posts3:', this.posts);
        });
    }
    sendPosts() {
        console.log('this.posts: ', this.posts);
        return this.posts;
    }
    saveFollowers(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/followers/` + `${id}`).subscribe(res => {
            console.log(res);
            console.log(res);
            const response: any = res;
            this.followers = response.followers;
        });
    }
    sendFollowers() {
        return this.followers;
    }
    saveFollowing(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/following/` + `${id}`).subscribe(res => {
            const response: any = res;
            this.following = response.following;
        });
    }
    sendFollowing() {
        return this.following;
    }
    saveFollowersOth(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/followers/` + `${id}`).subscribe(res => {
            console.log(res);
            console.log(res);
            const response: any = res;
            this.followersOth = response.followers;
        });
    }
    sendFollowersOth() {
        return this.followersOth;
    }
    saveFollowingOth(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/following/` + `${id}`).subscribe(res => {
            const response: any = res;
            this.followingOth = response.following;
        });
    }
    sendFollowingOth() {
        return this.followingOth;
    }
    savePostsOth(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/posts/` + `${id}`).subscribe(res => {
        console.log(res);
        const response: any = res;
        const posts: Post[] = response.posts;
        console.log('Posts2: ', posts);
        this.postsOthUser = posts;
        console.log('posts3:', this.posts);
    });
    }
    sendPostOth(){
        return this.postsOthUser;
    }
}
