export class UserRegister {
    email: string;
    name: string;
    password: string;

    constructor( email = '', pass = '', name = '') {
        this.email = email;
        this.name = name;
        this.password = pass;
    }
}
