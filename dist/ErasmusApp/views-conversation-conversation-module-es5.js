(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-conversation-conversation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/conversation/conversation.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/conversation/conversation.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{name}} - Conversation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list id=\"scroll-this\" style=\"height: 80%; overflow-y: scroll;\" (loadeddata)=\"scrollToBottom()\">\r\n    <ion-item *ngFor=\"let msg of messages\">\r\n      <p text-right *ngIf=\"msg.author === user.email\" style=\"width: 100%\"><span style=\"color: gray\">Me: </span>{{msg.text}}</p>\r\n      <p text-left *ngIf=\"msg.author !== user.email\" style=\"width: 100%\"><span style=\"color: gray\">{{name}}: </span>{{msg.text}}</p>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-row style=\"position: fixed; bottom: 0; width: 100%;\">\r\n    <ion-col size=\"8\">\r\n      <ion-textarea #box placeholder=\"Type a message...\"\r\n                    (keyup.enter)=\"onEnter(box.value); box.value = '' \">\r\n      </ion-textarea>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button (click)=\"onEnter(box.value); box.value = '' \">\r\n        Send\r\n        <ion-icon slot=\"end\" name=\"send\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/models/Message/message.ts":
/*!*******************************************!*\
  !*** ./src/app/models/Message/message.ts ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(id, author, destination, text, timestamp, __v) {
        this._id = id;
        this.author = author;
        this.destination = destination;
        this.text = text;
        this.timestamp = timestamp;
        this.__v = __v;
    }
    Message.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Date },
        { type: undefined }
    ]; };
    return Message;
}());



/***/ }),

/***/ "./src/app/views/conversation/conversation-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/conversation/conversation-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConversationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageRoutingModule", function() { return ConversationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation.page */ "./src/app/views/conversation/conversation.page.ts");




var routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_3__["ConversationPage"]
    }
];
var ConversationPageRoutingModule = /** @class */ (function () {
    function ConversationPageRoutingModule() {
    }
    ConversationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConversationPageRoutingModule);
    return ConversationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/conversation/conversation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/conversation/conversation.module.ts ***!
  \***********************************************************/
/*! exports provided: ConversationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function() { return ConversationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversation-routing.module */ "./src/app/views/conversation/conversation-routing.module.ts");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation.page */ "./src/app/views/conversation/conversation.page.ts");







var ConversationPageModule = /** @class */ (function () {
    function ConversationPageModule() {
    }
    ConversationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConversationPageRoutingModule"]
            ],
            declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]]
        })
    ], ConversationPageModule);
    return ConversationPageModule;
}());



/***/ }),

/***/ "./src/app/views/conversation/conversation.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/views/conversation/conversation.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/conversation/conversation.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/conversation/conversation.page.ts ***!
  \*********************************************************/
/*! exports provided: ConversationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPage", function() { return ConversationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _models_Message_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Message/message */ "./src/app/models/Message/message.ts");






var ConversationPage = /** @class */ (function () {
    function ConversationPage(route, chatService, storage) {
        var _this = this;
        this.route = route;
        this.chatService = chatService;
        this.storage = storage;
        this.name = this.route.snapshot.paramMap.get('name');
        setInterval(function () { return _this.scrollToBottom(); }, 500);
    }
    ConversationPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = JSON.parse(this.storage.getUser());
                        return [4 /*yield*/, this.chatService.getStoredMessages().toPromise().then(function (data) {
                                _this.messages = data.filter(function (item) { return item.author === _this.name || item.destination === _this.name; });
                            })];
                    case 1:
                        _a.sent();
                        this.chatService.getMessage().subscribe(function (data) {
                            _this.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', data.email, _this.name, data.message, new Date(), 0));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ConversationPage.prototype.onEnter = function (value) {
        this.message = value;
        this.sendMessage();
    };
    ConversationPage.prototype.sendMessage = function () {
        console.log(this.message);
        this.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', this.user.email, this.name, this.message, new Date(), 0)); // TODO: Swap name email
        this.chatService.sendMessage(this.message, this.name); // TODO: noo
        // this.scrollToBottom();
    };
    ConversationPage.prototype.scrollToBottom = function () {
        try {
            var element = document.getElementById('scroll-this');
            element.scrollTop = element.scrollHeight;
        }
        catch (e) { }
    };
    ConversationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
        { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"] }
    ]; };
    ConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conversation',
            template: __webpack_require__(/*! raw-loader!./conversation.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/conversation/conversation.page.html"),
            styles: [__webpack_require__(/*! ./conversation.page.scss */ "./src/app/views/conversation/conversation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"]])
    ], ConversationPage);
    return ConversationPage;
}());



/***/ })

}]);
//# sourceMappingURL=views-conversation-conversation-module-es5.js.map