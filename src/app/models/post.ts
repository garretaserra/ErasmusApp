export class Post {
    userId: string;
    type: string;
    message: string;

    constructor(userId = '', type = '', message = '') {
        this.type = type;
        this.message = message;
        this.userId = userId;
    }
}
