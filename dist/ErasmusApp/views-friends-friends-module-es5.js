function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-friends-friends-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/friends/friends.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/friends/friends.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFriendsFriendsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <div class=\"ion-page\" main>\r\n  <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Friends</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar\r\n            (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let userName of users | filtro:textobuscar: 'name'\">\r\n          <ion-avatar slot=\"start\">\r\n            <img *ngIf=\"userName.profilePhoto\"  (click)=\"change(userName._id)\" src=\"{{userName.profilePhoto}}\"/>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2 (click)=\"change(userName._id)\">{{userName.name}}</h2>\r\n          </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n  </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/friends/friends-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/friends/friends-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FriendsPageRoutingModule */

  /***/
  function srcAppViewsFriendsFriendsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsPageRoutingModule", function () {
      return FriendsPageRoutingModule;
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


    var _friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./friends.page */
    "./src/app/views/friends/friends.page.ts");

    var routes = [{
      path: '',
      component: _friends_page__WEBPACK_IMPORTED_MODULE_3__["FriendsPage"]
    }];

    var FriendsPageRoutingModule = function FriendsPageRoutingModule() {
      _classCallCheck(this, FriendsPageRoutingModule);
    };

    FriendsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FriendsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/friends/friends.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/views/friends/friends.module.ts ***!
    \*************************************************/

  /*! exports provided: FriendsPageModule */

  /***/
  function srcAppViewsFriendsFriendsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function () {
      return FriendsPageModule;
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


    var _friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./friends-routing.module */
    "./src/app/views/friends/friends-routing.module.ts");
    /* harmony import */


    var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./friends.page */
    "./src/app/views/friends/friends.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var FriendsPageModule = function FriendsPageModule() {
      _classCallCheck(this, FriendsPageModule);
    };

    FriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["FriendsPageRoutingModule"]],
      declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]]
    })], FriendsPageModule);
    /***/
  },

  /***/
  "./src/app/views/friends/friends.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/views/friends/friends.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsFriendsFriendsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZyaWVuZHMvZnJpZW5kcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/views/friends/friends.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/views/friends/friends.page.ts ***!
    \***********************************************/

  /*! exports provided: FriendsPage */

  /***/
  function srcAppViewsFriendsFriendsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsPage", function () {
      return FriendsPage;
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


    var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./friends.service */
    "./src/app/views/friends/friends.service.ts");
    /* harmony import */


    var _models_User_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/User/user.service */
    "./src/app/models/User/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../storage/storage.component */
    "./src/app/storage/storage.component.ts");

    var FriendsPage =
    /*#__PURE__*/
    function () {
      function FriendsPage(friendsService, userService, router, menuCtrl, storage) {
        _classCallCheck(this, FriendsPage);

        this.friendsService = friendsService;
        this.userService = userService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.textobuscar = '';
      }

      _createClass(FriendsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.friendsService.getUsers(JSON.parse(this.storage.getUser())._id).subscribe(function (users) {
            console.log(users);
            var response = users;
            _this.users = response;
            console.log('this.users: ', _this.users);
          });
        }
      }, {
        key: "buscar",
        value: function buscar(CustomEvent) {
          this.textobuscar = CustomEvent.detail.value;
        }
      }, {
        key: "change",
        value: function change(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.router.navigateByUrl('/other-profile/' + "".concat(id));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onCancel",
        value: function onCancel($event) {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.menuCtrl.open();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.menuCtrl.close();

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openMessagePage",
        value: function openMessagePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.router.navigateByUrl('/message');

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openProfilePage",
        value: function openProfilePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.router.navigateByUrl('/profile');

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "openFriendsPage",
        value: function openFriendsPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.router.navigateByUrl('/friends');

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openGlobePage",
        value: function openGlobePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.router.navigateByUrl('/globe');

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openSettingPage",
        value: function openSettingPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.router.navigateByUrl('/login');

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "openHomePage",
        value: function openHomePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.router.navigateByUrl('/home');

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return FriendsPage;
    }();

    FriendsPage.ctorParameters = function () {
      return [{
        type: _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]
      }, {
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"]
      }];
    };

    FriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friends',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friends.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/friends/friends.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friends.page.scss */
      "./src/app/views/friends/friends.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"], _models_User_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"]])], FriendsPage);
    /***/
  }
}]);
//# sourceMappingURL=views-friends-friends-module-es5.js.map