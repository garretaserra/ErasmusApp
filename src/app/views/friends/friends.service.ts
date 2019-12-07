import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserRegister } from '../../models/User/userRegister';
import {UserLogin} from '../../models/User/userLogin';
import {User} from '../../models/User/user';

@Injectable({
    providedIn: 'root'
})
export class FriendsService {

    FRIENDS_SERVER_ADDRESS = 'http://localhost:3000/user';
    authSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    getUsers(){
        return this.httpClient.get('https://jsonplaceholder.typecode.com/users');
    }
    getMenuOpts() {
        return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/albums');
    }
}
