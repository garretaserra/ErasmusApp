import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserRegister } from '../../models/User/userRegister';
import {UserLogin} from '../../models/User/userLogin';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';

@Injectable({
    providedIn: 'root'
})
export class FriendsService {

    FRIENDS_SERVER_ADDRESS = 'http://localhost:3000/user';
    authSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    getUsers() {
        return this.httpClient.get<UserName[]>(`${this.FRIENDS_SERVER_ADDRESS}/all`);
    }
}
