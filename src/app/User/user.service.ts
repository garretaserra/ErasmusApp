import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    USER_SERVER_ADDRESS = 'http://localhost:3000/user';
    userSubject = new BehaviorSubject(false);

    user: User;

    constructor(private httpClient: HttpClient) {}

    saveUser(user: User) {
        console.log('User: ', user);
        this.user = user;
    }
    sendUser() {
        return this.user;
    }
}
