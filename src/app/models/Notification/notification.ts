export class Notification {
    _id: string;
    author: string;
    destination: string;
    text: string;
    type: string;
    goToUrl: string;
    timestamp: Date;
    __v: any;

    constructor(id: string, author: string, destination: string, text: string, type: string, goToUrl: string, timestamp: Date, _v: any) {
        this._id = id;
        this.author = author;
        this.destination = destination;
        this.text = text;
        this.type = type;
        this.goToUrl = goToUrl;
        this.timestamp = timestamp;
        this.__v = _v;
    }
}
