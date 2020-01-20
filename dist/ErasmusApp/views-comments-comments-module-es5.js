function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-comments-comments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/comments/comments.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/comments/comments.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsCommentsCommentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app class=\"mobile\">\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title slot=\"start\">Post: comments</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      <ion-card *ngIf=\"post\">\r\n        <ion-card-header color=\"light\" class=\"ion-text-center\">\r\n         <ion-card-title class=\"text-center\">{{post.message}}</ion-card-title>\r\n        <ion-card-subtitle class=\"text-center\" style=\"text-transform: inherit; font-size: 18px\">{{post.owner.name}}</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content *ngFor=\"let comment of post.comments\">\r\n            <ion-list>\r\n            <ion-item>\r\n              <ion-label color=\"tertiary\">{{comment.owner.name}}</ion-label>\r\n              <ion-text>{{comment.message}}</ion-text>\r\n            </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/comments/comments-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/comments/comments-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CommentsPageRoutingModule */

  /***/
  function srcAppViewsCommentsCommentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function () {
      return CommentsPageRoutingModule;
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


    var _comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/views/comments/comments.page.ts");

    var routes = [{
      path: '',
      component: _comments_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPage"]
    }];

    var CommentsPageRoutingModule = function CommentsPageRoutingModule() {
      _classCallCheck(this, CommentsPageRoutingModule);
    };

    CommentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/comments/comments.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/comments/comments.module.ts ***!
    \***************************************************/

  /*! exports provided: CommentsPageModule */

  /***/
  function srcAppViewsCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function () {
      return CommentsPageModule;
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


    var _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comments-routing.module */
    "./src/app/views/comments/comments-routing.module.ts");
    /* harmony import */


    var _comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/views/comments/comments.page.ts");

    var CommentsPageModule = function CommentsPageModule() {
      _classCallCheck(this, CommentsPageModule);
    };

    CommentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentsPageRoutingModule"]],
      declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]]
    })], CommentsPageModule);
    /***/
  },

  /***/
  "./src/app/views/comments/comments.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/views/comments/comments.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsCommentsCommentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/views/comments/comments.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/views/comments/comments.page.ts ***!
    \*************************************************/

  /*! exports provided: CommentsPage */

  /***/
  function srcAppViewsCommentsCommentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPage", function () {
      return CommentsPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
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


    var _comments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comments.service */
    "./src/app/views/comments/comments.service.ts");

    var CommentsPage =
    /*#__PURE__*/
    function () {
      function CommentsPage(formBuilder, commentsService, router, route, menuCtrl, alertCtrl, storage, toastCtrl) {
        _classCallCheck(this, CommentsPage);

        this.formBuilder = formBuilder;
        this.commentsService = commentsService;
        this.router = router;
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
      }

      _createClass(CommentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._id = this.route.snapshot.paramMap.get('id');
                    _context.next = 3;
                    return this.getPost(this._id);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getPost",
        value: function getPost(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.commentsService.getPost(id).subscribe(function (res) {
                      console.log(res);
                      var response = res;
                      _this.post = response.post;
                      console.log('post:', _this.post);
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CommentsPage;
    }();

    CommentsPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _comments_service__WEBPACK_IMPORTED_MODULE_6__["CommentsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    CommentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/comments/comments.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comments.page.scss */
      "./src/app/views/comments/comments.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _comments_service__WEBPACK_IMPORTED_MODULE_6__["CommentsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], CommentsPage);
    /***/
  },

  /***/
  "./src/app/views/comments/comments.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/views/comments/comments.service.ts ***!
    \****************************************************/

  /*! exports provided: CommentsService */

  /***/
  function srcAppViewsCommentsCommentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsService", function () {
      return CommentsService;
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

    var CommentsService =
    /*#__PURE__*/
    function () {
      function CommentsService(httpClient, storage) {
        _classCallCheck(this, CommentsService);

        this.httpClient = httpClient;
        this.storage = storage;
        this.COMMENTS_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUri;
        this.homeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(CommentsService, [{
        key: "getPost",
        value: function getPost(idPost) {
          return this.httpClient.get("".concat(this.COMMENTS_SERVER_ADDRESS, "/post/") + "".concat(idPost));
        }
      }]);

      return CommentsService;
    }();

    CommentsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], CommentsService);
    /***/
  }
}]);
//# sourceMappingURL=views-comments-comments-module-es5.js.map