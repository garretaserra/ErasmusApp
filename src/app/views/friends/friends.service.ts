import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserRegister } from '../../models/User/userRegister';
import {UserLogin} from '../../models/User/userLogin';
import {User} from '../../models/User/user';
import {UserName} from '../../models/User/userName';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FriendsService {

    FRIENDS_SERVER_ADDRESS = environment.apiUri + '/user';
    authSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    getUsers(id:any) {
        console.log(id);
        return this.httpClient.get<UserName[]>(`${this.FRIENDS_SERVER_ADDRESS}/all/`+id);
    }
}
