import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';
import {Post} from '../Posts/post';
import {UserName} from './userName';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    USER_SERVER_ADDRESS = 'http://localhost:3000/user';
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
        return this.httpClient.get(`${this.USER_SERVER_ADDRESS}/posts/` + `${id}`);
    }
    search(searchString) {
        return this.httpClient.get<User[]>(`${this.USER_SERVER_ADDRESS}/search?searchString=` + searchString);
    }
}
