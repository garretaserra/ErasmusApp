function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-message-message-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/message/message.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/message/message.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsMessageMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Global Chat\r\n    </ion-list-header>\r\n    <ion-item (click)=\"viewConversation('everyone')\">\r\n      <ion-label>\r\n        <h2>Global Chat</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-list-header>\r\n      Online\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let userItem of userList\" (click)=\"viewConversation(userItem[0])\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../../assets/img/default_user.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{ userItem[0] }}</h2>\r\n          <h3 *ngIf=\"filterLast(userItem[0]) !== undefined\">\r\n            <span *ngIf=\"filterLast(userItem[0]).author === user.name\">\r\n              <b>You: </b>\r\n            </span>\r\n            {{filterLast(userItem[0]).text}}\r\n          </h3>\r\n        </ion-label>\r\n      <ion-badge *ngIf=\"filterAndCount(userItem[0]) != 0\" slot=\"end\">{{filterAndCount(userItem[0])}}</ion-badge>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Everybody\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let userItem of users\" (click)=\"viewConversation(userItem.name)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img *ngIf=\"userItem.photo\" style=\"object-fit: cover\" src=\"{{userItem.photo}}\"/>\r\n        <img *ngIf=\"!userItem.photo\" src=\"../../../assets/img/default_user.png\"/>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{ userItem.name }}</h2>\r\n        <h3 *ngIf=\"filterLast(userItem.name) !== undefined\">\r\n            <span *ngIf=\"filterLast(userItem.name).author === user.name\">\r\n              <b>You: </b>\r\n            </span>\r\n          {{filterLast(userItem.name).text}}\r\n        </h3>\r\n      </ion-label>\r\n      <ion-badge *ngIf=\"filterAndCount(userItem.name) != 0\" slot=\"end\">{{filterAndCount(userItem.name)}}</ion-badge>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/models/User/user.ts":
  /*!*************************************!*\
    !*** ./src/app/models/User/user.ts ***!
    \*************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      var jwt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var pass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var name = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var profilePhoto = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var followers = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var following = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;

      _classCallCheck(this, User);

      this._id = _id;
      this.email = email;
      this.password = pass;
      this.name = name;
      this.profilePhoto = profilePhoto;
      this.followers = followers;
      this.following = following;
      this.jwt = jwt;
    };
    /***/

  },

  /***/
  "./src/app/views/message/message-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/message/message-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MessagePageRoutingModule */

  /***/
  function srcAppViewsMessageMessageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagePageRoutingModule", function () {
      return MessagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./message.page */
    "./src/app/views/message/message.page.ts");

    var routes = [{
      path: '',
      component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
    }];

    var MessagePageRoutingModule = function MessagePageRoutingModule() {
      _classCallCheck(this, MessagePageRoutingModule);
    };

    MessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MessagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/message/message.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/views/message/message.module.ts ***!
    \*************************************************/

  /*! exports provided: MessagePageModule */

  /***/
  function srcAppViewsMessageMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagePageModule", function () {
      return MessagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./message-routing.module */
    "./src/app/views/message/message-routing.module.ts");
    /* harmony import */


    var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./message.page */
    "./src/app/views/message/message.page.ts");

    var MessagePageModule = function MessagePageModule() {
      _classCallCheck(this, MessagePageModule);
    };

    MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _message_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagePageRoutingModule"]],
      declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })], MessagePageModule);
    /***/
  },

  /***/
  "./src/app/views/message/message.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/views/message/message.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsMessageMessagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/views/message/message.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/views/message/message.page.ts ***!
    \***********************************************/

  /*! exports provided: MessagePage */

  /***/
  function srcAppViewsMessageMessagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagePage", function () {
      return MessagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/User/user.service */
    "./src/app/models/User/user.service.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../friends/friends.service */
    "./src/app/views/friends/friends.service.ts");
    /* harmony import */


    var _models_User_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/User/user */
    "./src/app/models/User/user.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../storage/storage.component */
    "./src/app/storage/storage.component.ts");
    /* harmony import */


    var _models_Message_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/Message/message */
    "./src/app/models/Message/message.ts");
    /* harmony import */


    var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/notification/notification.component */
    "./src/app/components/notification/notification.component.ts");

    var MessagePage =
    /*#__PURE__*/
    function () {
      function MessagePage(navCtrl, userService, storage, chatService, friendsService, notificationComponent) {
        _classCallCheck(this, MessagePage);

        this.navCtrl = navCtrl;
        this.userService = userService;
        this.storage = storage;
        this.chatService = chatService;
        this.friendsService = friendsService;
        this.notificationComponent = notificationComponent;
      }

      _createClass(MessagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.user = JSON.parse(this.storage.getUser());
                    this.chatService.connectSocket(this.user.name);
                    _context.next = 4;
                    return this.chatService.getStoredMessages().toPromise();

                  case 4:
                    this.storedMessages = _context.sent;
                    this.chatService.getList().subscribe(function (list) {
                      _this.userList = list.filter(function (item) {
                        return item[0] !== _this.user.name;
                      });
                    });
                    this.friendsService.getUsers(new _models_User_user__WEBPACK_IMPORTED_MODULE_5__["User"](this.storage.getUser())._id).subscribe(function (list) {
                      _this.users = list.filter(function (item) {
                        return item.name !== _this.user.name;
                      });

                      _this.users.forEach(function (user) {
                        _this.userService.getPhoto(user._id).toPromise().then(function (result) {
                          user.photo = result.photo;
                        });
                      });
                    });
                    this.chatService.forceGetList();
                    this.chatService.getMessage().subscribe(function (data) {
                      if (data.everyone === true) {
                        _this.storedMessages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_8__["Message"]('', data.email, 'everyone', data.message, new Date(), false, 0));
                      } else {
                        _this.storedMessages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_8__["Message"]('', data.email, _this.user.name, data.message, new Date(), false, 0));
                      }
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "filterAndCount",
        value: function filterAndCount(name) {
          return this.storedMessages.filter(function (item) {
            return item.author === name && item.read === false && item.destination !== 'everyone';
          }).length;
        }
      }, {
        key: "filterLast",
        value: function filterLast(name) {
          // tslint:disable-next-line:max-line-length
          var tmp = this.storedMessages.filter(function (item) {
            return (item.author === name || item.destination === name) && item.destination !== 'everyone';
          });
          return tmp[tmp.length - 1];
        }
      }, {
        key: "viewConversation",
        value: function viewConversation(name) {
          this.navCtrl.navigateForward('/conversation/' + "".concat(name));
          this.storedMessages.filter(function (item) {
            return item.author === name;
          }).forEach(function (msg) {
            return msg.read = true;
          });
        }
      }]);

      return MessagePage;
    }();

    MessagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__["StorageComponent"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }, {
        type: _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"]
      }, {
        type: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"]
      }];
    };

    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/message/message.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.page.scss */
      "./src/app/views/message/message.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__["StorageComponent"], _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"], _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"]])], MessagePage);
    /***/
  }
}]);
//# sourceMappingURL=views-message-message-module-es5.js.map