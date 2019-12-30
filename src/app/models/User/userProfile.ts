export class UserProfile {
    email: string;
    name: string;
    profilePhoto: string;
    followers: string; // Gente que me sigue a mí
    following: string; // Gente a la que yo sigo
    posts: string;
    events: string;
    _id: string;

    constructor( _id = '', email = '', pass = '', name = '', profilePhoto = '', followers = '', following = '', posts = '', events = '') {
        this.email = email;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
        this._id = _id;
        this.events = events;
    }
}
