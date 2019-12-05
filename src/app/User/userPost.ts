import {User} from './user';

export class UserPost {
    jwt: string;
    user: User;

    constructor(jwt = '', user = null) {
        this.jwt = jwt;
        this.user = user;
    }
}
