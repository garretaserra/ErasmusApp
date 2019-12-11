import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Post} from '../../models/post';
import {User} from '../../models/User/user';
import {posix} from 'path';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    POST_SERVER_ADDRESS = 'http://localhost:3000/';
    homeSubject = new BehaviorSubject(false);

    activity: Post[];

    constructor(private httpClient: HttpClient, private storage: Storage) {}

}
