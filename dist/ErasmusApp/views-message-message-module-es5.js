(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-message-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/message/message.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/message/message.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Online\n    </ion-list-header>\n    <ion-item *ngFor=\"let userItem of userList\" (click)=\"viewConversation(userItem[0])\">\n        <ion-avatar slot=\"start\">\n          <img src=\"../../../assets/img/default_user.png\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ userItem[0] }}</h2>\n          <h3>\n            <span *ngIf=\"filterLast(userItem[0]).author === user.email\">\n              <b>You: </b>\n            </span>\n            {{filterLast(userItem[0]).text}}\n          </h3>\n        </ion-label>\n      <ion-badge *ngIf=\"filterAndCount(userItem[0]) != 0\" slot=\"end\">{{filterAndCount(userItem[0])}}</ion-badge>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Everybody\n    </ion-list-header>\n    <ion-item *ngFor=\"let userItem of users\" (click)=\"viewConversation(userItem.name)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/img/default_user.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ userItem.name }}</h2>\n        <h3 *ngIf=\"filterLast(userItem.name)\">\n            <span *ngIf=\"filterLast(userItem.name).author === user.email\">\n              <b>You: </b>\n            </span>\n          {{filterLast(userItem.name).text}}\n        </h3>\n      </ion-label>\n      <ion-badge *ngIf=\"filterAndCount(userItem.name) != 0\" slot=\"end\">{{filterAndCount(userItem.name)}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page */ "./src/app/views/message/message.page.ts");




var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
    }
];
var MessagePageRoutingModule = /** @class */ (function () {
    function MessagePageRoutingModule() {
    }
    MessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MessagePageRoutingModule);
    return MessagePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-routing.module */ "./src/app/views/message/message-routing.module.ts");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/views/message/message.page.ts");







var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
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
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/views/message/message.page.scss":
/*!*************************************************!*\
  !*** ./src/app/views/message/message.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../friends/friends.service */ "./src/app/views/friends/friends.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _models_Message_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/Message/message */ "./src/app/models/Message/message.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/notification/notification.component */ "./src/app/components/notification/notification.component.ts");









var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, userService, storage, chatService, friendsService, notificationComponent) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.storage = storage;
        this.chatService = chatService;
        this.friendsService = friendsService;
        this.notificationComponent = notificationComponent;
    }
    MessagePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = JSON.parse(this.storage.getUser());
                        this.chatService.connectSocket(this.user.email);
                        _a = this;
                        return [4 /*yield*/, this.chatService.getStoredMessages().toPromise()];
                    case 1:
                        _a.storedMessages = _b.sent();
                        this.chatService.getList().subscribe(function (list) {
                            _this.userList = list.filter(function (item) { return item[0] !== _this.user.email; }); // TODO: User esta mal, email sale name.
                        });
                        this.friendsService.getUsers().subscribe(function (list) {
                            _this.users = list.filter(function (item) { return item.name !== _this.user.email; }); // TODO: User esta mal, email sale name.
                        });
                        this.chatService.forceGetList();
                        this.chatService.getMessage().subscribe(function (data) {
                            _this.storedMessages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_7__["Message"]('', data.email, _this.user.email, data.message, new Date(), false, 0));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagePage.prototype.filterAndCount = function (name) {
        return this.storedMessages.filter(function (item) { return item.author === name && item.read === false; }).length;
    };
    MessagePage.prototype.filterLast = function (name) {
        var tmp = this.storedMessages.filter(function (item) { return item.author === name || item.destination === name; });
        return tmp[tmp.length - 1];
    };
    MessagePage.prototype.viewConversation = function (name) {
        this.navCtrl.navigateForward('/conversation/' + ("" + name));
        this.storedMessages.filter(function (item) { return item.author === name; }).forEach(function (msg) { return msg.read = true; });
    };
    MessagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
        { type: _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"] },
        { type: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"] }
    ]; };
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/message/message.page.html"),
            styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/views/message/message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"],
            _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"]])
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=views-message-message-module-es5.js.map