function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/notifications.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/notifications.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Notifications</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-list>\r\n  <ion-item *ngFor=\"let notification of notifications\">\r\n      <p>{{notification.text}}</p>\r\n    <ion-button *ngIf=\"notification.goToUrl\" (click)=\"goTo(notification.goToUrl)\">View</ion-button>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/services/notifications.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/notifications.service.ts ***!
    \***************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppServicesNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../storage/storage.component */
    "./src/app/storage/storage.component.ts");

    var NotificationsService =
    /*#__PURE__*/
    function () {
      function NotificationsService(http, storage) {
        _classCallCheck(this, NotificationsService);

        this.http = http;
        this.storage = storage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUri;
        this.user = JSON.parse(this.storage.getUser());
      }

      _createClass(NotificationsService, [{
        key: "getNotifications",
        value: function getNotifications() {
          return this.http.get("".concat(this.url, "/user/notifications/").concat(this.user.name));
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"]
      }];
    };

    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"]])], NotificationsService);
    /***/
  },

  /***/
  "./src/app/views/notifications/notifications-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsPageRoutingModule */

  /***/
  function srcAppViewsNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
      return NotificationsPageRoutingModule;
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


    var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/views/notifications/notifications.page.ts");

    var routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }];

    var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
      _classCallCheck(this, NotificationsPageRoutingModule);
    };

    NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/notifications/notifications.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/notifications/notifications.module.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppViewsNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
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


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/views/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/views/notifications/notifications.page.ts");

    var NotificationsPageModule = function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    };

    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/views/notifications/notifications.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/views/notifications/notifications.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/views/notifications/notifications.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/notifications/notifications.page.ts ***!
    \***********************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppViewsNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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


    var _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/notifications.service */
    "./src/app/services/notifications.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var NotificationsPage =
    /*#__PURE__*/
    function () {
      function NotificationsPage(notificationsService, navCtrl) {
        _classCallCheck(this, NotificationsPage);

        this.notificationsService = notificationsService;
        this.navCtrl = navCtrl;
      }

      _createClass(NotificationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.notificationsService.getNotifications().toPromise();

                  case 2:
                    this.notifications = _context.sent;
                    this.notifications = this.notifications.reverse();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goTo",
        value: function goTo(url) {
          this.navCtrl.navigateForward(url);
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/notifications.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.page.scss */
      "./src/app/views/notifications/notifications.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], NotificationsPage);
    /***/
  }
}]);
//# sourceMappingURL=views-notifications-notifications-module-es5.js.map