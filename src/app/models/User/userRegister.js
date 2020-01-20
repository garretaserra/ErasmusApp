"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRegister {
    constructor(email = '', pass = '', name = '') {
        this.email = email;
        this.name = name;
        this.password = pass;
    }
}
exports.UserRegister = UserRegister;
