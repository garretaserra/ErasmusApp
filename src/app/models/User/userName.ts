export class UserName {
    name: string;
    _id: string;
    photo: string;

    constructor( name = '', _id = '', photo = '') {
        this.name = name;
        this._id = _id;
        this.photo = photo;
    }
}
