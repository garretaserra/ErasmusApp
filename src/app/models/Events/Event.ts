import {UserName} from '../User/userName';

export class Event {
    _id: string;
    owner_id: string;
    type: string;
    description: string;
    location: string;
    eventDate: string;
    members: UserName[];
    constructor(_id = '', owner_id = '', type = '', message = '', location = '', eventDate = '', members = null) {
        this.type = type;
        this.description = message;
        this.owner_id = owner_id;
        this._id = _id;
        this.location = location;
        this.eventDate = eventDate;
        this.members = members;
    }
}
