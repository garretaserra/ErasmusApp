import {UserName} from '../User/userName';

export class Properties {
    title: string;
    type: string;
    date: Date;
    location: string;
    owner: UserName;
    members: UserName[];

    constructor(title: string, type: string, date: Date, location: string, owner: UserName, members: UserName[]) {
        this.title = title;
        this.type = type;
        this.date = date;
        this.location = location;
        this.owner = owner;
        this.members = members;
    }
}
