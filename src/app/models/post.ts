export class Post {
    owner: string;
    type: string;
    message: string;
    constructor(owner = '', type = '', message = '') {
        this.type = type;
        this.message = message;
        this.owner = owner;
    }
}
