function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-followings-following-following-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/followings/following/following.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/followings/following/following.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsFollowingsFollowingFollowingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    <ion-title>Following</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let user of following\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"user.profilePhoto\" (click)=\"change(user._id)\" src=\"{{user.profilePhoto}}\"/>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 (click)=\"change(user._id)\">{{user.name}}</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n  </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/followings/following/following-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/views/followings/following/following-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: FollowingPageRoutingModule */

  /***/
  function srcAppViewsFollowingsFollowingFollowingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPageRoutingModule", function () {
      return FollowingPageRoutingModule;
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


    var _following_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./following.page */
    "./src/app/views/followings/following/following.page.ts");

    var routes = [{
      path: '',
      component: _following_page__WEBPACK_IMPORTED_MODULE_3__["FollowingPage"]
    }];

    var FollowingPageRoutingModule = function FollowingPageRoutingModule() {
      _classCallCheck(this, FollowingPageRoutingModule);
    };

    FollowingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FollowingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/followings/following/following.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/views/followings/following/following.module.ts ***!
    \****************************************************************/

  /*! exports provided: FollowingPageModule */

  /***/
  function srcAppViewsFollowingsFollowingFollowingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function () {
      return FollowingPageModule;
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


    var _following_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./following-routing.module */
    "./src/app/views/followings/following/following-routing.module.ts");
    /* harmony import */


    var _following_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./following.page */
    "./src/app/views/followings/following/following.page.ts");

    var FollowingPageModule = function FollowingPageModule() {
      _classCallCheck(this, FollowingPageModule);
    };

    FollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _following_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowingPageRoutingModule"]],
      declarations: [_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowingPage"]]
    })], FollowingPageModule);
    /***/
  },

  /***/
  "./src/app/views/followings/following/following.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/views/followings/following/following.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsFollowingsFollowingFollowingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZvbGxvd2luZ3MvZm9sbG93aW5nL2ZvbGxvd2luZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/views/followings/following/following.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/views/followings/following/following.page.ts ***!
    \**************************************************************/

  /*! exports provided: FollowingPage */

  /***/
  function srcAppViewsFollowingsFollowingFollowingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingPage", function () {
      return FollowingPage;
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
    /*! ../../../models/User/user.service */
    "./src/app/models/User/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _following_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../following.service */
    "./src/app/views/followings/following.service.ts");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../storage/storage.component */
    "./src/app/storage/storage.component.ts");

    var FollowingPage =
    /*#__PURE__*/
    function () {
      function FollowingPage(userService, route, followingService, storage, router, menuCtrl) {
        _classCallCheck(this, FollowingPage);

        this.userService = userService;
        this.route = route;
        this.followingService = followingService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
      }

      _createClass(FollowingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.load();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "load",
        value: function load() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this._id = this.route.snapshot.paramMap.get('id');
                    _context2.next = 3;
                    return this.followingService.getFollowing(this._id).subscribe(function (res) {
                      var response = res;
                      console.log(res);
                      _this.following = response.following;
                    }, function (error) {
                      console.log('error');
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "change",
        value: function change(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(id === JSON.parse(this.storage.getUser())._id)) {
                      _context3.next = 5;
                      break;
                    }

                    _context3.next = 3;
                    return this.router.navigateByUrl('/profile');

                  case 3:
                    _context3.next = 7;
                    break;

                  case 5:
                    _context3.next = 7;
                    return this.router.navigateByUrl('/other-profile/' + "".concat(id));

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.menuCtrl.open();

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.menuCtrl.close();

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "openMessagePage",
        value: function openMessagePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.router.navigateByUrl('/message');

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openProfilePage",
        value: function openProfilePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.router.navigateByUrl('/profile');

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openFriendsPage",
        value: function openFriendsPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.router.navigateByUrl('/friends');

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "openGlobePage",
        value: function openGlobePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.router.navigateByUrl('/globe');

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "openSettingPage",
        value: function openSettingPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.router.navigateByUrl('/login');

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "openHomePage",
        value: function openHomePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.router.navigateByUrl('/home');

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return FollowingPage;
    }();

    FollowingPage.ctorParameters = function () {
      return [{
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _following_service__WEBPACK_IMPORTED_MODULE_5__["FollowingService"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./following.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/followings/following/following.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./following.page.scss */
      "./src/app/views/followings/following/following.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _following_service__WEBPACK_IMPORTED_MODULE_5__["FollowingService"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])], FollowingPage);
    /***/
  }
}]);
//# sourceMappingURL=views-followings-following-following-module-es5.js.map