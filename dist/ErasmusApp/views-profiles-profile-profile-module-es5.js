function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profiles-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profiles/profile/profile.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profiles/profile/profile.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsProfilesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n    <div class=\"ion-page\" main>\r\n        <ion-header>\r\n          <ion-toolbar>\r\n              <ion-buttons slot=\"start\">\r\n                  <ion-menu-button></ion-menu-button>\r\n              </ion-buttons>\r\n            <ion-title>Profile</ion-title>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content fullscreen=\"\">\r\n            <ion-card class=\"vertical-margin\" style=\"height: fit-content\">\r\n                <div style=\"display: flex; height: 200px\">\r\n                    <div style=\"width: 100%\">\r\n                        <img *ngIf=\"photo\" class=\"image-contain\" src=\"{{photo}}\"/>\r\n                        <img *ngIf=\"!photo\" class=\"image-contain\" src=\"../../../assets/img/default_user.png\"/>\r\n                    </div>\r\n                    <div class=\"personal-icon\" style=\"position: absolute; width: 100%; height: 200px\">\r\n                        <input #imageInput\r\n                             style=\"width: 100%; height: 200px;\"\r\n                             class=\"image-input\"\r\n                             type = 'file'\r\n                             accept=\"image/*\"\r\n                             (change) = \"processPhoto(imageInput)\">\r\n                    </div>\r\n                </div>\r\n                <ion-card-header *ngIf=\"userTest\">\r\n                  <ion-card-title class=\"text-center\">{{userTest.name}}</ion-card-title>\r\n                  <ion-card-subtitle class=\"text-center\" style=\"text-transform: inherit; font-size: 18px\" (click)=\"sendEmail(userTest.email)\">{{userTest.email}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card *ngIf=\"erasmusInfo\">\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>{{'Course:'}}</h2>\r\n                            <h5>{{erasmusInfo.course}}</h5>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>{{'Home University:'}}</h2>\r\n                            <h5>{{erasmusInfo.homeUniversity}}</h5>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>{{'Destination University:'}}</h2>\r\n                            <h5>{{erasmusInfo.destUniversity}}</h5>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>{{'Languages:'}}</h2>\r\n                            <h5 *ngFor=\"let language of erasmusInfo.languages\">{{language.name}}</h5>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-card>\r\n                <div *ngIf=\"userTest\" class=\"vertical-margin\">\r\n                    <div style=\"width: 100%\">\r\n                        <ion-button class=\"square-button\" (click)=\"seeMyPosts()\">\r\n                            <div>\r\n                                <i class=\"material-icons button-icon\">post_add</i>\r\n                                <h3 class=\"button-title\">Posts</h3>\r\n                            </div>\r\n                            <div class=\"number\">\r\n                                {{userTest.posts}}\r\n                            </div>\r\n                        </ion-button>\r\n                        <ion-button class=\"square-button\" (click)=\"seeMyEvents()\">\r\n                            <div>\r\n                              <i class=\"material-icons button-icon\">event</i>\r\n                              <h3 class=\"button-title\">Events</h3>\r\n                            </div>\r\n                          <div class=\"number\">\r\n                            {{userTest.events}}\r\n                          </div>\r\n                        </ion-button>\r\n                    </div>\r\n                  <div style=\"width: 100%\">\r\n                    <ion-button class=\"square-button\" (click)=\"seeMyFollowers()\">\r\n                      <div>\r\n                        <i class=\"material-icons button-icon\">people_alt</i>\r\n                        <h3 class=\"button-title\">Followers</h3>\r\n                      </div>\r\n                      <div class=\"number\">\r\n                        {{userTest.followers}}\r\n                      </div>\r\n                    </ion-button>\r\n                    <ion-button class=\"square-button\" (click)=\"seeMyFollowing()\">\r\n                      <div>\r\n                        <i class=\"material-icons button-icon\">group_add</i>\r\n                        <h3 class=\"button-title\">Following</h3>\r\n                      </div>\r\n                      <div class=\"number\">\r\n                        {{userTest.following}}\r\n                      </div>\r\n                    </ion-button>\r\n                  </div>\r\n                </div>\r\n            </ion-card>\r\n        </ion-content>\r\n    </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/profiles/profile/profile-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/views/profiles/profile/profile-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppViewsProfilesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/views/profiles/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/profiles/profile/profile.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/views/profiles/profile/profile.module.ts ***!
    \**********************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppViewsProfilesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/views/profiles/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/views/profiles/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/views/profiles/profile/profile.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/views/profiles/profile/profile.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsProfilesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image-contain {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 50vw;\n  height: 50vw;\n  border-radius: 50%;\n  margin: 15px auto auto;\n  border: solid #0cd1e8;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.square-button {\n  width: 40%;\n  height: auto;\n  margin: 5%;\n}\n\n.number {\n  width: 10px;\n  height: 10px;\n  background: red;\n  padding: 6px;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: -25px;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\n.button-title {\n  margin: 0;\n}\n\n.button-icon {\n  font-size: 64px;\n}\n\n.image-input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZmlsZXMvcHJvZmlsZS9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xccHJvZmlsZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3cy9wcm9maWxlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGVzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY29udGFpbntcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogNTB2dztcclxuICBoZWlnaHQ6IDUwdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMTVweCBhdXRvIGF1dG87XHJcbiAgYm9yZGVyOiBzb2xpZCAjMGNkMWU4O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3F1YXJlLWJ1dHRvbntcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4ubnVtYmVye1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRpdGxle1xyXG4gIG1hcmdpbjogMFxyXG59XHJcblxyXG4uYnV0dG9uLWljb257XHJcbiAgZm9udC1zaXplOiA2NHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtaW5wdXR7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4iLCIuaW1hZ2UtY29udGFpbiB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA1MHZ3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTVweCBhdXRvIGF1dG87XG4gIGJvcmRlcjogc29saWQgIzBjZDFlODtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3F1YXJlLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1JTtcbn1cblxuLm51bWJlciB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgcGFkZGluZzogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uLWljb24ge1xuICBmb250LXNpemU6IDY0cHg7XG59XG5cbi5pbWFnZS1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBvcGFjaXR5OiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/profiles/profile/profile.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/views/profiles/profile/profile.page.ts ***!
    \********************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppViewsProfilesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../profile.service */
    "./src/app/views/profiles/profile.service.ts");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../storage/storage.component */
    "./src/app/storage/storage.component.ts");

    var ProfilePage =
    /*#__PURE__*/
    function () {
      function ProfilePage(userService, route, router, menuCtrl, storage, profileService) {
        _classCallCheck(this, ProfilePage);

        this.userService = userService;
        this.route = route;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.profileService = profileService;
      }

      _createClass(ProfilePage, [{
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
                    return this.load();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewEnter",
        value: function ionViewEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.load();

                  case 2:
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
          regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this._id = JSON.parse(this.storage.getUser())._id;
                    _context4.next = 3;
                    return this.profileService.getProfile(this._id).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        var _this2 = this;

                        var response;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                response = res;
                                this.userTest = response.profile;
                                _context3.next = 4;
                                return this.userService.getPhoto(this.userTest._id).toPromise();

                              case 4:
                                this.photo = _context3.sent.photo;
                                _context3.next = 7;
                                return this.profileService.getErasmusInfo(this._id).subscribe(function (res) {
                                  _this2.erasmusInfo = res.info;
                                  console.log(_this2.erasmusInfo);
                                });

                              case 7:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (error) {
                      console.log('error');
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "seeMyPosts",
        value: function seeMyPosts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.router.navigateByUrl('/myposts');

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "seeMyEvents",
        value: function seeMyEvents() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.router.navigateByUrl('/list-events/' + "".concat(this._id));

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "seeMyFollowers",
        value: function seeMyFollowers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.router.navigateByUrl('/myfollowers');

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "seeMyFollowing",
        value: function seeMyFollowing() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.router.navigateByUrl('/myfollowing');

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(email) {
          if (confirm('Estas seguro que quieres enviar un mensaje a ' + email)) {
            window.open("mailto:" + email, "_blank");
          }
        }
      }, {
        key: "processPhoto",
        value: function processPhoto(imageInput) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this3 = this;

            var file, reader;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    file = imageInput.files[0];
                    reader = new FileReader();
                    reader.addEventListener('load', function (event) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                this.photo = event.target.result;
                                _context9.next = 3;
                                return this.userService.editPhoto(event.target.result, this.userTest._id).toPromise();

                              case 3:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });
                    reader.readAsDataURL(file);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profiles/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/views/profiles/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"], _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=views-profiles-profile-profile-module-es5.js.map