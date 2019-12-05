import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Post} from '../../models/post';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    HOME_SERVER_ADDRESS = 'http://localhost:3000/post';
    homeSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    sendPost(post: Post) {
        return this.httpClient.post(`${this.HOME_SERVER_ADDRESS}/newPost`, post);
    }

}
