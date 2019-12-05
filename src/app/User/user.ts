
export class User {
    email: string;
    name: string;
    password: string;
    profilePhoto: string;
    followers: string; // Gente que me sigue a mí
    following: string; // Gente a la que yo sigo
    posts: string;

    constructor( email = '', pass = '', name = '', profilePhoto = '', followers = '', following = '', posts = '') {
        this.email = email;
        this.password = pass;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
    }
}
