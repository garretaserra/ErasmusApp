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

    getProfile( id: string ) {
        return this.httpClient.get(`${this.PROFILE_SERVER_ADDRESS}/profile/` + `${id}`);
    }

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
    getFollowers(id: string) {
        return this.httpClient.get(`${this.PROFILE_SERVER_ADDRESS}/followers/` + `${id}`);
    }

    checkFollow(followers: UserName[], userId: string) {
        console.log('followers: ', followers);
        console.log('userId: ', userId);
        this.val = 'not';
        if (followers === undefined) {
            return this.val;
        } else {
            followers.forEach(x => {
                    if (x._id === userId) {
                        return this.val = 'following';
                    }
                }
            );
        }
    }
}
