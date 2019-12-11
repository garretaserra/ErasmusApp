import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {User} from './user';
import {UserPost} from './userPost';
import {Post} from '../post';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    USER_SERVER_ADDRESS = 'http://localhost:3000/user';
    userSubject = new BehaviorSubject(false);

    user: User;
    otherUser: User;
    posts: Post[];
    followers: User[];
    following: User[];
    
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
            this.posts = res as Post[];
        });
    }
    sendPosts() {
        return this.posts;
    }

    saveFollowers(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/followers/` + `${id}`).subscribe(res => {
            console.log(res);
            this.followers = res as User[];
        });
    }
    sendFollowers() {
        return this.followers;
    }
    saveFollowing(id: string) {
        this.httpClient.get(`${this.USER_SERVER_ADDRESS}/following/` + `${id}`).subscribe(res => {
            console.log(res);
            this.following = res as User[];
        });
    }
    sendFollowing() {
        return this.following;
    }

    search(searchString){
        return this.httpClient.get<User[]>(`${this.USER_SERVER_ADDRESS}/search?searchString=` + searchString);
    }
}
