export class Message {
    _id: string;
    author: string;
    destination: string;
    text: string;
    timestamp: Date;
    read: boolean;
    __v: any;

    constructor(id: string, author: string, destination: string, text: string, timestamp: Date, read: boolean, __v: any) {
        this._id = id;
        this.author = author;
        this.destination = destination;
        this.text = text;
        this.timestamp = timestamp;
        this.read = read;
        this.__v = __v;
    }
}
