import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { User } from './user';
import { AuthResponse } from './auth-response';
import {UserLogin} from './userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS = 'http://localhost:3000/user';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) {}

register(user: User) {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/register`, user);
}
login(user: UserLogin) {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user);
}
}
