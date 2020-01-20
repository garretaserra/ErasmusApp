function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-post-posts-posts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/post/posts/posts.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/post/posts/posts.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsPostPostsPostsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Posts</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-card class=\"vertical-margin\" *ngFor=\"let post of this.posts\">\r\n        <ion-card-header color=\"light\" class=\"text-center\" style=\"font-size: 22px\">\r\n          {{post.message}}\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-button class=\"align-content-center\"(click)=\"changePageComments(this.post._id)\">View comments</ion-button>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/post/posts/posts-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/views/post/posts/posts-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: PostsPageRoutingModule */

  /***/
  function srcAppViewsPostPostsPostsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsPageRoutingModule", function () {
      return PostsPageRoutingModule;
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


    var _posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts.page */
    "./src/app/views/post/posts/posts.page.ts");

    var routes = [{
      path: '',
      component: _posts_page__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]
    }];

    var PostsPageRoutingModule = function PostsPageRoutingModule() {
      _classCallCheck(this, PostsPageRoutingModule);
    };

    PostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/post/posts/posts.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/views/post/posts/posts.module.ts ***!
    \**************************************************/

  /*! exports provided: PostsPageModule */

  /***/
  function srcAppViewsPostPostsPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsPageModule", function () {
      return PostsPageModule;
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


    var _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts-routing.module */
    "./src/app/views/post/posts/posts-routing.module.ts");
    /* harmony import */


    var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts.page */
    "./src/app/views/post/posts/posts.page.ts");

    var PostsPageModule = function PostsPageModule() {
      _classCallCheck(this, PostsPageModule);
    };

    PostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsPageRoutingModule"]],
      declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]]
    })], PostsPageModule);
    /***/
  },

  /***/
  "./src/app/views/post/posts/posts.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/views/post/posts/posts.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsPostPostsPostsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-center {\n  text-align: center;\n}\n\nion-toolbar {\n  margin-left: 5%;\n}\n\n.toolbar-buttons {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  margin-right: 20px;\n}\n\n.toolbar-container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.middle-card {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-item {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-button.align-content-center {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcG9zdC9wb3N0cy9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xccG9zdFxccG9zdHNcXHBvc3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3MvcG9zdC9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREZBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDS0Y7O0FERkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3QvcG9zdHMvcG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLnRvb2xiYXItYnV0dG9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLnRvb2xiYXItY29udGFpbmVye1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4ubWlkZGxlLWNhcmR7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5pb24tYnV0dG9uLmFsaWduLWNvbnRlbnQtY2VudGVye1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iLCIudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50b29sYmFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5taWRkbGUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWJ1dHRvbi5hbGlnbi1jb250ZW50LWNlbnRlciB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/post/posts/posts.page.ts":
  /*!************************************************!*\
    !*** ./src/app/views/post/posts/posts.page.ts ***!
    \************************************************/

  /*! exports provided: PostsPage */

  /***/
  function srcAppViewsPostPostsPostsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsPage", function () {
      return PostsPage;
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


    var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/views/post/post.service.ts");

    var PostsPage =
    /*#__PURE__*/
    function () {
      function PostsPage(userService, postService, route, router, menuCtrl) {
        _classCallCheck(this, PostsPage);

        this.userService = userService;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.menuCtrl = menuCtrl;
      }

      _createClass(PostsPage, [{
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
                    return this.postService.getPosts(this._id).subscribe(function (res) {
                      var response = res;
                      console.log(res);
                      _this.posts = response.posts;
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
        key: "openMenu",
        value: function openMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.menuCtrl.open();

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.menuCtrl.close();

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openMessagePage",
        value: function openMessagePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.router.navigateByUrl('/message');

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "openProfilePage",
        value: function openProfilePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.router.navigateByUrl('/profile');

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openFriendsPage",
        value: function openFriendsPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.router.navigateByUrl('/friends');

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openGlobePage",
        value: function openGlobePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.router.navigateByUrl('/globe');

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "openSettingPage",
        value: function openSettingPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.router.navigateByUrl('/login');

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "openHomePage",
        value: function openHomePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.router.navigateByUrl('/home');

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "changePageComments",
        value: function changePageComments(idPost) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.router.navigateByUrl('/comments/' + "".concat(idPost));

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return PostsPage;
    }();

    PostsPage.ctorParameters = function () {
      return [{
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    PostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/post/posts/posts.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.page.scss */
      "./src/app/views/post/posts/posts.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])], PostsPage);
    /***/
  }
}]);
//# sourceMappingURL=views-post-posts-posts-module-es5.js.map