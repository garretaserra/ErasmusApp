export class University {
    _id: string;
    name: string;
    country: string;

    constructor(id: string, name: string, country: string) {
        this._id = id;
        this.name = name;
        this.country = country;
    }
}
