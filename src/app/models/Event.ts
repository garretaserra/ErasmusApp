export class Event {
    _id: string;
    owner_id: string;
    type: string;
    description: string;
    location: string;
    constructor(_id = '', owner_id = '', type = '', message = '', location = '') {
        this.type = type;
        this.description = message;
        this.owner_id = owner_id;
        this._id = _id;
        this.location = location;
    }
}
