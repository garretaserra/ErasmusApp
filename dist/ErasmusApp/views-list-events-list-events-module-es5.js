function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-list-events-list-events-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/list-events/list-events.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/list-events/list-events.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsListEventsListEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Events</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-card class=\"vertical-margin\" *ngFor=\"let post of this.events\">\r\n        <ion-card-header color=\"light\" class=\"text-center\" style=\"font-size: 22px\">\r\n          {{post.description}}\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-button class=\"middle-card\" (click)=\"changePageComments(this.post._id)\">View event</ion-button>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/list-events/list-events-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/views/list-events/list-events-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ListEventsPageRoutingModule */

  /***/
  function srcAppViewsListEventsListEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListEventsPageRoutingModule", function () {
      return ListEventsPageRoutingModule;
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


    var _list_events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-events.page */
    "./src/app/views/list-events/list-events.page.ts");

    var routes = [{
      path: '',
      component: _list_events_page__WEBPACK_IMPORTED_MODULE_3__["ListEventsPage"]
    }];

    var ListEventsPageRoutingModule = function ListEventsPageRoutingModule() {
      _classCallCheck(this, ListEventsPageRoutingModule);
    };

    ListEventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListEventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/list-events/list-events.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/list-events/list-events.module.ts ***!
    \*********************************************************/

  /*! exports provided: ListEventsPageModule */

  /***/
  function srcAppViewsListEventsListEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListEventsPageModule", function () {
      return ListEventsPageModule;
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


    var _list_events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-events-routing.module */
    "./src/app/views/list-events/list-events-routing.module.ts");
    /* harmony import */


    var _list_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-events.page */
    "./src/app/views/list-events/list-events.page.ts");

    var ListEventsPageModule = function ListEventsPageModule() {
      _classCallCheck(this, ListEventsPageModule);
    };

    ListEventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_events_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListEventsPageRoutingModule"]],
      declarations: [_list_events_page__WEBPACK_IMPORTED_MODULE_6__["ListEventsPage"]]
    })], ListEventsPageModule);
    /***/
  },

  /***/
  "./src/app/views/list-events/list-events.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/views/list-events/list-events.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsListEventsListEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGlzdC1ldmVudHMvQzpcXFVzZXJzXFxzZ2FsZVxcV2Vic3Rvcm1Qcm9qZWN0c1xcRXJhc211c0FwcC9zcmNcXGFwcFxcdmlld3NcXGxpc3QtZXZlbnRzXFxsaXN0LWV2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xpc3QtZXZlbnRzL2xpc3QtZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9saXN0LWV2ZW50cy9saXN0LWV2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsImlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/list-events/list-events.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/list-events/list-events.page.ts ***!
    \*******************************************************/

  /*! exports provided: ListEventsPage */

  /***/
  function srcAppViewsListEventsListEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListEventsPage", function () {
      return ListEventsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../storage/storage.component */
    "./src/app/storage/storage.component.ts");
    /* harmony import */


    var _list_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-events.service */
    "./src/app/views/list-events/list-events.service.ts");

    var ListEventsPage =
    /*#__PURE__*/
    function () {
      function ListEventsPage(userService, eventService, router, menuCtrl, storage, route, alertCtrl) {
        _classCallCheck(this, ListEventsPage);

        this.userService = userService;
        this.eventService = eventService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.route = route;
        this.alertCtrl = alertCtrl;
      }

      _createClass(ListEventsPage, [{
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
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.load();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "load",
        value: function load() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this._id = this.route.snapshot.paramMap.get('id');
                    _context3.next = 3;
                    return this.eventService.getEvents(this._id).subscribe(function (res) {
                      console.log('response', res);
                      var response = res;
                      _this.events = response.events;
                    }, function (error) {
                      console.log('error');
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.alertCtrl.create({
                      header: 'TYPE',
                      message: 'Are you sure that you want delete this message?',
                      buttons: [{
                        text: 'Yes',
                        handler: function handler() {
                          _this2.eventService.deleteEvents(id).subscribe(function (res) {
                            console.log(res);

                            _this2.router.navigateByUrl('/profile');
                          }, function (error) {
                            console.log(error);
                          });
                        }
                      }, {
                        text: 'No',
                        handler: function handler() {}
                      }]
                    }).then(function (alert) {
                      alert.present();
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "changePageComments",
        value: function changePageComments(idPost) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.router.navigateByUrl('/profile-event/' + "".concat(idPost));

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ListEventsPage;
    }();

    ListEventsPage.ctorParameters = function () {
      return [{
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _list_events_service__WEBPACK_IMPORTED_MODULE_6__["ListEventsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    ListEventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/list-events/list-events.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-events.page.scss */
      "./src/app/views/list-events/list-events.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _list_events_service__WEBPACK_IMPORTED_MODULE_6__["ListEventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], ListEventsPage);
    /***/
  },

  /***/
  "./src/app/views/list-events/list-events.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/views/list-events/list-events.service.ts ***!
    \**********************************************************/

  /*! exports provided: ListEventsService */

  /***/
  function srcAppViewsListEventsListEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListEventsService", function () {
      return ListEventsService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var ListEventsService =
    /*#__PURE__*/
    function () {
      function ListEventsService(httpClient, storage) {
        _classCallCheck(this, ListEventsService);

        this.httpClient = httpClient;
        this.storage = storage;
        this.POST_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUri;
        this.homeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(ListEventsService, [{
        key: "getEvents",
        value: function getEvents(id) {
          return this.httpClient.get("".concat(this.POST_SERVER_ADDRESS, "/user/events/") + "".concat(id) + "/0");
        }
      }, {
        key: "deleteEvents",
        value: function deleteEvents(id) {
          return this.httpClient.delete("".concat(this.POST_SERVER_ADDRESS, "/event/") + "".concat(id));
        }
      }]);

      return ListEventsService;
    }();

    ListEventsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    ListEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], ListEventsService);
    /***/
  }
}]);
//# sourceMappingURL=views-list-events-list-events-module-es5.js.map