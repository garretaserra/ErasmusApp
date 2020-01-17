import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Post} from '../../models/Posts/post';
import {User} from '../../models/User/user';
import {posix} from 'path';
import {resolve} from '@angular-devkit/core';
import {PostSend} from '../../models/Posts/postSend';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    // HOME_SERVER_ADDRESS = 'http://localhost:3000/';
    HOME_SERVER_ADDRESS = environment.apiUri;
    homeSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) {}

    sendPost(post: PostSend) {
        return this.httpClient.post(`${this.HOME_SERVER_ADDRESS}/post`, {
            post
        });
    }
    getActivity(id: string) {
         return this.httpClient.put(`${this.HOME_SERVER_ADDRESS}/user/activity/` + `${id}` + `/0`, {}, {observe: 'response'});
    }
    getProfile( id: string ) {
        return this.httpClient.get(`${this.HOME_SERVER_ADDRESS}/user/profile/` + `${id}`);
    }
    getFollowers(_id: string) {
        return this.httpClient.get<any>(`${this.HOME_SERVER_ADDRESS}/user/followers/` + `${_id}`);
    }
    asistir(idEvent: string, idUser: string) {
        return this.httpClient.put<any>(`${this.HOME_SERVER_ADDRESS}/event/join`, {
            eventId: idEvent,
            userId: idUser
        });
    }
    leave(idEvent: string, idUser: string) {
        return this.httpClient.put<any>(`${this.HOME_SERVER_ADDRESS}/event/leave`, {
            eventId: idEvent,
            userId: idUser
        });
    }

    getFollowing(_id: string) {
        return this.httpClient.get<any>(`${this.HOME_SERVER_ADDRESS}/user/following/` + `${_id}`);
    }
}
