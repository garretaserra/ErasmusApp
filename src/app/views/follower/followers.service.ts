import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {User} from '../../models/User/user';

@Injectable({
    providedIn: 'root'
})
export class FollowersService {

    FOLLOWERS_SERVER_ADDRESS = 'http://localhost:3000/user';
    followersSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    getFollowers(id: string) {
        return this.httpClient.get(`${this.FOLLOWERS_SERVER_ADDRESS}/followers/` + `${id}`);
    }
}
