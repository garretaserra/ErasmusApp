import {UserName} from '../User/userName';

export class Properties {
    _id: string;
    title: string;
    type: string;
    date: Date;
    location: string;
    owner: UserName;
    members: UserName[];

    constructor(id: string, title: string, type: string, date: Date, location: string, owner: UserName, members: UserName[]) {
        this._id = id;
        this.title = title;
        this.type = type;
        this.date = date;
        this.location = location;
        this.owner = owner;
        this.members = members;
    }
}
