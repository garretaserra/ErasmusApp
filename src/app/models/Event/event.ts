import {UserName} from '../User/userName';

export class Event {
    _id: string;
    type: string;
    description: string;
    eventDate: Date;
    location: string;
    owner: UserName;
    modificationDate: Date;
    __v: any;
    members: UserName[];

    // tslint:disable-next-line:max-line-length
    constructor(id: string, type: string, description: string, eventDate: Date, location: string, owner: UserName, modificationDate: Date, _v: any, members: UserName[]) {
        this._id = id;
        this.type = type;
        this.description = description;
        this.eventDate = eventDate;
        this.location = location;
        this.owner = owner;
        this.modificationDate = modificationDate;
        this.__v = _v;
        this.members = members;
    }
}
