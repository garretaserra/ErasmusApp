import {Post} from '../post';

export class User {
    _id: string;
    email: string;
    name: string;
    password: string;
    profilePhoto: string;
    followers: string; // Gente que me sigue a mí
    following: string; // Gente a la que yo sigo
    posts: [Post];
    activity: [string];

    constructor( _id = '', email = '', pass = '', name = '', profilePhoto = '', followers = '', following = '', posts = null, activity = null) {
        this._id = _id;
        this.email = email;
        this.password = pass;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
        this.activity = activity;
    }
}
