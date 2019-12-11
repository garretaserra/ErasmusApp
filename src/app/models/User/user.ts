import {Post} from '../Posts/post';
import {UserName} from './userName';
import {Observable} from 'rxjs';

export class User {
    jwt: string;
    _id: string;
    email: string;
    name: string;
    password: string;
    profilePhoto: string;
    followers: UserName[]; // Gente que me sigue a mí
    following: UserName[]; // Gente a la que yo sigo
    posts: Post[];
    activity: Post[];

    constructor( jwt = '', _id = '', email = '', pass = '', name = '', profilePhoto = '', followers = null, following = null, posts = null, activity = null) {
        this._id = _id;
        this.email = email;
        this.password = pass;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
        this.activity = activity;
        this.jwt=jwt;
    }
}
