import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Post} from '../../models/Posts/post';
import {User} from '../../models/User/user';
import {posix} from 'path';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    POST_SERVER_ADDRESS = environment.apiUri;
    homeSubject = new BehaviorSubject(false);

    activity: Post[];

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    getPosts(id: string) {
        return this.httpClient.get(`${this.POST_SERVER_ADDRESS}user/posts/` + `${id}`);
    }
    deletePost(id: string) {
        return this.httpClient.delete(`${this.POST_SERVER_ADDRESS}post/` + `${id}`);
    }
}
