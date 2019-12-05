export class UserLogin {
    email: string;
    password: string;

    constructor( email = '', pass = '') {
        this.email = email;
        this.password = pass;
    }
}
