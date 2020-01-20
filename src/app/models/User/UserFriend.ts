export class UserFriend {
    name: string;
    _id: string;
    profilePhoto: string;

    constructor( name = '', _id = '', profilePhoto = '') {
        this.name = name;
        this._id = _id;
        this.profilePhoto = profilePhoto;
    }
}
