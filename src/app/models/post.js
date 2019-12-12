"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(owner = '', type = '', message = '') {
        this.type = type;
        this.message = message;
        this.owner = owner;
    }
}
exports.Post = Post;
