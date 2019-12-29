export class PostSend {
    owner: string;
    owner_id: string;
    type: string;
    description: string;
    constructor(owner = '', owner_id = '', type = '', message = '') {
        this.type = type;
        this.description = message;
        this.owner = owner;
        this.owner_id = owner_id;
    }

}
