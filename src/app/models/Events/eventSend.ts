import {UserName} from '../User/userName';

export class EventSend {
    owner: string;
    type: string;
    description: string;
    location: string;
    eventDate: string;

    constructor( owner_id = '', type = '', message = '', location = '', eventDate = '') {
        this.type = type;
        this.description = message;
        this.owner = owner_id;
        this.location = location;
        this.eventDate = eventDate;

    }
}
