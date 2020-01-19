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

    constructor( jwt = '', _id = '', email = '', pass = '', name = '', profilePhoto = '', followers = null, following = null) {
        this._id = _id;
        this.email = email;
        this.password = pass;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.followers = followers;
        this.following = following;
        this.jwt=jwt;
    }
}
