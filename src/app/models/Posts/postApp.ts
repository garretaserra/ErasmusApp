import {convertMetaToOutput} from '@angular/compiler/src/render3/util';

export class PostApp {
    _id: string;
    owner: {
        id: string;
        name: string;
    }[];
    type: string;
    message: string;
    comments: {
        _id: string;
        message: string;
    }[];
    constructor(_id = '', owner = [], type = '', message = '', comments = []) {
        this.type = type;
        this.message = message;
        this.owner = owner;
        this._id = _id;
        this.comments = comments;
    }
}
