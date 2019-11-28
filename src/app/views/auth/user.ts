export class User {
    _id: string;
    email: string;
    name: string;
    password: string;

    constructor(id='', email = '', pass = '', name = '') {
        this._id = id;
        this.email = email;
        this.name = name;
        this.password = pass;
    }
}
