import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';
import {Post} from '../Posts/post';
import {UserName} from './userName';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    USER_SERVER_ADDRESS = environment.apiUri + '/user';
    userSubject = new BehaviorSubject(false);

    user: User;
    posts: Post[];
    followers: UserName[];
    following: UserName[];
    constructor(private httpClient: HttpClient) {}

    saveUser(user: User) {
        this.user = user;
    }
    sendUser() {
        return this.user;
    }
    savePostsUsers(id: string) {
        return this.httpClient.get<any>(`${this.USER_SERVER_ADDRESS}/posts/` + `${id}` + `/0`);
    }
    search(searchString) {
        return this.httpClient.get<User[]>(`${this.USER_SERVER_ADDRESS}/search?searchString=` + searchString);
    }
    editPhoto(photo: string , userId: string) {
        return this.httpClient.post(`${this.USER_SERVER_ADDRESS}/image/edit`, {id: userId, photo: photo});
    }
    getPhoto(userId: string) {
        return this.httpClient.get<any>(`${this.USER_SERVER_ADDRESS}/image?id=` + userId);
    }
}
