
export class EventApp {
    _id: string;
    owner: string;
    type: string;
    description: string;
    location: string;
    eventDate: string;

    constructor( id= '', owner_id = '', type = '', message = '', location = '', eventDate = '') {
        this.type = type;
        this.description = message;
        this.owner = owner_id;
        this.location = location;
        this.eventDate = eventDate;
        this._id = id;

    }
}
