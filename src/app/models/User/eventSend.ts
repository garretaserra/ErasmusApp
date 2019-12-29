export class EventSend {
    owner_id: string;
    type: string;
    description: string;
    location: string;
    constructor( owner_id = '', type = '', message = '', location = '') {
        this.type = type;
        this.description = message;
        this.owner_id = owner_id;
        this.location = location;
    }
}
