(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-message-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/message/message.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/message/message.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Online\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let userItem of userList\" (click)=\"viewConversation(userItem[0])\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../../assets/img/default_user.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{ userItem[0] }}</h2>\r\n          <h3>Online</h3>\r\n        </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Everybody\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let userItem of users\" (click)=\"viewConversation(userItem.name)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../../../assets/img/default_user.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{ userItem.name }}</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../friends/friends.service */ "./src/app/views/friends/friends.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let MessagePage = class MessagePage {
    constructor(navCtrl, userService, chatService, friendsService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.chatService = chatService;
        this.friendsService = friendsService;
    }
    ngOnInit() {
        this.user = this.userService.sendUser();
        console.log(this.user.email);
        this.chatService.connectSocket(this.user.email);
        this.chatService.getList().subscribe((list) => {
            this.userList = list;
            console.log('UserList:');
            console.log(this.userList);
        });
        this.friendsService.getUsers().subscribe((list) => {
            console.log('Users:');
            console.log(list);
            this.users = list;
        });
        this.chatService.getMessage().subscribe((data) => {
            console.log('Incoming message:');
            console.log(data);
        });
    }
    viewConversation(data) {
        console.log(data);
        this.navCtrl.navigateForward('/conversation/' + `${data}`);
    }
};
MessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"] }
];
MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/message/message.page.html"),
        styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/views/message/message.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"]])
], MessagePage);



/***/ })

}]);
//# sourceMappingURL=views-message-message-module-es2015.js.map