export class CheckUser {
    check: string;
    idEvent: string;
    constructor( check = '', _idEvent = '') {
        this.check = check;
        this.idEvent = _idEvent;
    }
}
