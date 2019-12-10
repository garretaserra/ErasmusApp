import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

import {UserName} from '../../models/User/userName';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    PROFILE_SERVER_ADDRESS = 'http://localhost:3000/user';
    authSubject = new BehaviorSubject(false);

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

}
