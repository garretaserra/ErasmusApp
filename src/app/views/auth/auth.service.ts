import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserRegister } from '../../models/User/userRegister';
import { AuthResponse } from './auth-response';
import {UserLogin} from '../../models/User/userLogin';
import {User} from '../../models/User/user';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    AUTH_SERVER_ADDRESS = environment.apiUri + '/user';
    authSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    register(user: UserRegister) {
        return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/register`, user);
    }
    login(user: UserLogin) {
        return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user);
    }
    sendUserPages(user: User) {
          return user;
    }
}
