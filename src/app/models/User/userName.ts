export class UserName {
    name: string;
    _id: string;

    constructor( name = '', _id = '') {
        this.name = name;
        this._id = _id;
    }
}
