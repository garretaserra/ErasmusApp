export class Post {
    _id: string;
    owner: string;
    type: string;
    message: string;
    constructor(_id = '', owner = '', type = '', message = '') {
        this.type = type;
        this.message = message;
        this.owner = owner;
    }
}
