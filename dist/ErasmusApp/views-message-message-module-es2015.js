(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/message/message.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/message/message.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Global Chat\r\n    </ion-list-header>\r\n    <ion-item (click)=\"viewConversation('everyone')\">\r\n      <ion-label>\r\n        <h2>Global Chat</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-list-header>\r\n      Online\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let userItem of userList\" (click)=\"viewConversation(userItem[0])\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../../assets/img/default_user.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{ userItem[0] }}</h2>\r\n          <h3 *ngIf=\"filterLast(userItem[0]) !== undefined\">\r\n            <span *ngIf=\"filterLast(userItem[0]).author === user.name\">\r\n              <b>You: </b>\r\n            </span>\r\n            {{filterLast(userItem[0]).text}}\r\n          </h3>\r\n        </ion-label>\r\n      <ion-badge *ngIf=\"filterAndCount(userItem[0]) != 0\" slot=\"end\">{{filterAndCount(userItem[0])}}</ion-badge>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Everybody\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let userItem of users\" (click)=\"viewConversation(userItem.name)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img *ngIf=\"userItem.photo\" style=\"object-fit: cover\" src=\"{{userItem.photo}}\"/>\r\n        <img *ngIf=\"!userItem.photo\" src=\"../../../assets/img/default_user.png\"/>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{ userItem.name }}</h2>\r\n        <h3 *ngIf=\"filterLast(userItem.name) !== undefined\">\r\n            <span *ngIf=\"filterLast(userItem.name).author === user.name\">\r\n              <b>You: </b>\r\n            </span>\r\n          {{filterLast(userItem.name).text}}\r\n        </h3>\r\n      </ion-label>\r\n      <ion-badge *ngIf=\"filterAndCount(userItem.name) != 0\" slot=\"end\">{{filterAndCount(userItem.name)}}</ion-badge>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/models/User/user.ts":
/*!*************************************!*\
  !*** ./src/app/models/User/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(jwt = '', _id = '', email = '', pass = '', name = '', profilePhoto = '', followers = null, following = null) {
        this._id = _id;
        this.email = email;
        this.password = pass;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.followers = followers;
        this.following = following;
        this.jwt = jwt;
    }
}


/***/ }),

/***/ "./src/app/views/message/message-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/message/message-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageRoutingModule", function() { return MessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page */ "./src/app/views/message/message.page.ts");




const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
    }
];
let MessagePageRoutingModule = class MessagePageRoutingModule {
};
MessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagePageRoutingModule);



/***/ }),

/***/ "./src/app/views/message/message.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/message/message.module.ts ***!
  \*************************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-routing.module */ "./src/app/views/message/message-routing.module.ts");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/views/message/message.page.ts");







let MessagePageModule = class MessagePageModule {
};
MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _message_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagePageRoutingModule"]
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "./src/app/views/message/message.page.scss":
/*!*************************************************!*\
  !*** ./src/app/views/message/message.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/message/message.page.ts":
/*!***********************************************!*\
  !*** ./src/app/views/message/message.page.ts ***!
  \***********************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../friends/friends.service */ "./src/app/views/friends/friends.service.ts");
/* harmony import */ var _models_User_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/User/user */ "./src/app/models/User/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _models_Message_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/Message/message */ "./src/app/models/Message/message.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/notification/notification.component */ "./src/app/components/notification/notification.component.ts");










let MessagePage = class MessagePage {
    constructor(navCtrl, userService, storage, chatService, friendsService, notificationComponent) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.storage = storage;
        this.chatService = chatService;
        this.friendsService = friendsService;
        this.notificationComponent = notificationComponent;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = JSON.parse(this.storage.getUser());
            this.chatService.connectSocket(this.user.name);
            this.storedMessages = yield this.chatService.getStoredMessages().toPromise();
            this.chatService.getList().subscribe((list) => {
                this.userList = list.filter(item => item[0] !== this.user.name);
            });
            this.friendsService.getUsers(new _models_User_user__WEBPACK_IMPORTED_MODULE_5__["User"](this.storage.getUser())._id).subscribe((list) => {
                this.users = list.filter(item => item.name !== this.user.name);
                this.users.forEach(user => {
                    this.userService.getPhoto(user._id).toPromise().then(result => {
                        user.photo = result.photo;
                    });
                });
            });
            this.chatService.forceGetList();
            this.chatService.getMessage().subscribe((data) => {
                if (data.everyone === true) {
                    this.storedMessages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_8__["Message"]('', data.email, 'everyone', data.message, new Date(), false, 0));
                }
                else {
                    this.storedMessages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_8__["Message"]('', data.email, this.user.name, data.message, new Date(), false, 0));
                }
            });
        });
    }
    filterAndCount(name) {
        return this.storedMessages.filter((item) => item.author === name && item.read === false && item.destination !== 'everyone').length;
    }
    filterLast(name) {
        // tslint:disable-next-line:max-line-length
        const tmp = this.storedMessages.filter((item) => (item.author === name || item.destination === name) && item.destination !== 'everyone');
        return tmp[tmp.length - 1];
    }
    viewConversation(name) {
        this.navCtrl.navigateForward('/conversation/' + `${name}`);
        this.storedMessages.filter((item) => item.author === name).forEach((msg) => msg.read = true);
    }
};
MessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__["StorageComponent"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"] },
    { type: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"] }
];
MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/message/message.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.page.scss */ "./src/app/views/message/message.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__["StorageComponent"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
        _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"],
        _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"]])
], MessagePage);



/***/ })

}]);
//# sourceMappingURL=views-message-message-module-es2015.js.map