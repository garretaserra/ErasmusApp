export class Post {
    _id: string;
    owner_id: string;
    type: string;
    description: string;
    constructor(_id = '', owner_id = '', type = '', message = '') {
        this.type = type;
        this.description = message;
        this.owner_id = owner_id;
        this._id = _id;
    }
}
