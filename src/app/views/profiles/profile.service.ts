import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

import {UserName} from '../../models/User/userName';
import {User} from '../../models/User/user';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    PROFILE_SERVER_ADDRESS = 'http://localhost:3000/user';
    authSubject = new BehaviorSubject(false);

    val: string;

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    follow(id: string, followedId: string) {
        return this.httpClient.put(`${this.PROFILE_SERVER_ADDRESS}/follow`, {
            userId: id,
            followedId: followedId
        });
    }
    unfollow(id: string, followedId: string) {
        return this.httpClient.put(`${this.PROFILE_SERVER_ADDRESS}/unfollow`, {
            userId: id,
            followedId: followedId
        });
    }
    checkFollow(user: User, otherUser: User) {
        this.val = 'not';
        user.following.forEach(x => {
                console.log('UserCheck: ', x);
                console.log('checkid:', x._id);
                console.log('otherUserId:', otherUser._id);
                if (x._id === otherUser._id) {
                    console.log('entra!');
                    this.val = 'following';
                }
            }
        );
        return this.val;
    }
}
