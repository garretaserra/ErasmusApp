function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profiles-other-profile-other-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profiles/other-profile/other-profile.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profiles/other-profile/other-profile.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsProfilesOtherProfileOtherProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <div class=\"ion-page\" main>\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"\">\r\n  <ion-card class=\"vertical-margin\" style=\"height: fit-content\">\r\n    <div style=\"height: 200px\">\r\n      <div class=\"personal-icon\">\r\n        <img *ngIf=\"photo\" class=\"image-contain\" src=\"{{photo}}\" style=\"width: 200px; height: 200px;\"/>\r\n        <img *ngIf=\"!photo\" class=\"image-contain\" src=\"../../../assets/img/default_user.png\" style=\"width: 200px; height: 200px;\"/>\r\n      </div>\r\n    </div>\r\n    <ion-card-header *ngIf=\"otherUserProfile\">\r\n      <ion-card-title class=\"text-center\">{{otherUserProfile.name}}</ion-card-title>\r\n      <ion-card-subtitle class=\"text-center\" style=\"text-transform: inherit; font-size: 18px\" (click)=\"sendEmail(otherUserProfile.email)\">{{otherUserProfile.email}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <div *ngIf=\"otherUserProfile&&following\" class=\"vertical-margin\">\r\n      <ion-card *ngIf=\"erasmusInfo\">\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>{{'Course:'}}</h2>\r\n            <h5>{{erasmusInfo.course}}</h5>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>{{'Home University:'}}</h2>\r\n            <h5>{{erasmusInfo.homeUniversity}}</h5>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>{{'Destination University:'}}</h2>\r\n            <h5>{{erasmusInfo.destUniversity}}</h5>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>{{'Languages:'}}</h2>\r\n            <h5 *ngFor=\"let language of erasmusInfo.languages\">{{language.name}}</h5>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card>\r\n      <div style=\"width: 100%\">\r\n        <ion-button class=\"square-button\" (click)=\"seeMyPosts()\">\r\n          <div>\r\n            <div style=\"display: flex\">\r\n              <div>\r\n                <i style=\"margin-right: -15%\" class=\"material-icons button-icon\">post_add</i>\r\n              </div>\r\n              <div class=\"number\">\r\n                {{otherUserProfile.posts}}\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"button-title\">Posts</h3>\r\n            </div>\r\n          </div>\r\n        </ion-button>\r\n        <ion-button class=\"square-button\" (click)=\"seeMyEvents()\">\r\n          <div>\r\n            <div style=\"display: flex\">\r\n              <div>\r\n                <i style=\"margin-right: -15%\" class=\"material-icons button-icon\">event</i>\r\n              </div>\r\n              <div class=\"number\">\r\n                {{otherUserProfile.events}}\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"button-title\">Events</h3>\r\n            </div>\r\n          </div>\r\n        </ion-button>\r\n      </div>\r\n      <div style=\"width: 100%\">\r\n        <ion-button class=\"square-button\" (click)=\"seeMyFollowers()\">\r\n          <div>\r\n            <div style=\"display: flex\">\r\n              <div>\r\n                <i class=\"material-icons button-icon\">people_alt</i>\r\n              </div>\r\n              <div class=\"number\">\r\n                {{otherUserProfile.followers}}\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"button-title\">Followers</h3>\r\n            </div>\r\n          </div>\r\n        </ion-button>\r\n        <ion-button class=\"square-button\" (click)=\"seeMyFollowing()\">\r\n          <div>\r\n            <div style=\"display: flex\">\r\n              <div>\r\n                <i class=\"material-icons button-icon\">group_add</i>\r\n              </div>\r\n              <div class=\"number\">\r\n                {{otherUserProfile.following}}\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"button-title\">Following</h3>\r\n            </div>\r\n          </div>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n<!--  User is not being followed-->\r\n    <div *ngIf=\"!following\" style=\"display: flex; height: 50vh\">\r\n      <ion-button class=\"square-button\" style=\"margin: auto\" (click)=\"follow()\">\r\n        <div>\r\n          <i class=\"material-icons button-icon\">person_add</i>\r\n          <h3 class=\"button-title\">Follow</h3>\r\n        </div>\r\n      </ion-button>\r\n    </div>\r\n    <div *ngIf=\"following\" style=\"display: flex\">\r\n      <ion-button class=\"square-button\" style=\"margin: 20px auto\" (click)=\"unfollow()\">\r\n        <div>\r\n          <i class=\"material-icons button-icon\">person_add_disabled</i>\r\n          <h3 class=\"button-title\">Unfollow</h3>\r\n        </div>\r\n      </ion-button>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n  </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/profiles/other-profile/other-profile-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/views/profiles/other-profile/other-profile-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: OtherProfilePageRoutingModule */

  /***/
  function srcAppViewsProfilesOtherProfileOtherProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherProfilePageRoutingModule", function () {
      return OtherProfilePageRoutingModule;
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


    var _other_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./other-profile.page */
    "./src/app/views/profiles/other-profile/other-profile.page.ts");

    var routes = [{
      path: '',
      component: _other_profile_page__WEBPACK_IMPORTED_MODULE_3__["OtherProfilePage"]
    }];

    var OtherProfilePageRoutingModule = function OtherProfilePageRoutingModule() {
      _classCallCheck(this, OtherProfilePageRoutingModule);
    };

    OtherProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OtherProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/profiles/other-profile/other-profile.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/views/profiles/other-profile/other-profile.module.ts ***!
    \**********************************************************************/

  /*! exports provided: OtherProfilePageModule */

  /***/
  function srcAppViewsProfilesOtherProfileOtherProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherProfilePageModule", function () {
      return OtherProfilePageModule;
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


    var _other_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./other-profile-routing.module */
    "./src/app/views/profiles/other-profile/other-profile-routing.module.ts");
    /* harmony import */


    var _other_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./other-profile.page */
    "./src/app/views/profiles/other-profile/other-profile.page.ts");

    var OtherProfilePageModule = function OtherProfilePageModule() {
      _classCallCheck(this, OtherProfilePageModule);
    };

    OtherProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _other_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtherProfilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_other_profile_page__WEBPACK_IMPORTED_MODULE_6__["OtherProfilePage"]]
    })], OtherProfilePageModule);
    /***/
  },

  /***/
  "./src/app/views/profiles/other-profile/other-profile.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/views/profiles/other-profile/other-profile.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsProfilesOtherProfileOtherProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image-contain {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 50vw;\n  height: 50vw;\n  border-radius: 50%;\n  margin: 15px auto auto;\n  border: solid #0cd1e8;\n}\n\n.square-button {\n  width: 40%;\n  height: auto;\n  margin: 5%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.number {\n  width: 10px;\n  height: 10px;\n  background: red;\n  padding: 6px;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: -12px;\n  margin-top: 35px;\n  font-size: 12px;\n}\n\n.button-title {\n  margin: 0;\n}\n\n.button-icon {\n  font-size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZmlsZXMvb3RoZXItcHJvZmlsZS9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xccHJvZmlsZXNcXG90aGVyLXByb2ZpbGVcXG90aGVyLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3cy9wcm9maWxlcy9vdGhlci1wcm9maWxlL290aGVyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcHJvZmlsZXMvb3RoZXItcHJvZmlsZS9vdGhlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWlue1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogNTB2dztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG8gYXV0bztcclxuICBib3JkZXI6IHNvbGlkICMwY2QxZTg7XHJcbn1cclxuXHJcbi5zcXVhcmUtYnV0dG9ue1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5udW1iZXJ7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogLTEycHg7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idXR0b24tdGl0bGV7XHJcbiAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbi5idXR0b24taWNvbntcclxuICBmb250LXNpemU6IDY0cHg7XHJcbn1cclxuIiwiLmltYWdlLWNvbnRhaW4ge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2dztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDE1cHggYXV0byBhdXRvO1xuICBib3JkZXI6IHNvbGlkICMwY2QxZTg7XG59XG5cbi5zcXVhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDUlO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5udW1iZXIge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/profiles/other-profile/other-profile.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/views/profiles/other-profile/other-profile.page.ts ***!
    \********************************************************************/

  /*! exports provided: OtherProfilePage */

  /***/
  function srcAppViewsProfilesOtherProfileOtherProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherProfilePage", function () {
      return OtherProfilePage;
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

    var OtherProfilePage =
    /*#__PURE__*/
    function () {
      function OtherProfilePage(userService, route, router, storage, menuCtrl, profileService) {
        _classCallCheck(this, OtherProfilePage);

        this.userService = userService;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.profileService = profileService;
      }

      _createClass(OtherProfilePage, [{
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
          regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this._id = this.route.snapshot.paramMap.get('id');
                    this.user = JSON.parse(this.storage.getUser());
                    _context4.next = 4;
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
                                this.userProfile = response.profile;
                                this.otherUserProfile = this.userProfile;
                                _context3.next = 5;
                                return this.userService.getPhoto(this.otherUserProfile._id).toPromise();

                              case 5:
                                this.photo = _context3.sent.photo;
                                _context3.next = 8;
                                return this.profileService.getErasmusInfo(this._id).subscribe(function (res) {
                                  _this2.erasmusInfo = res.info;
                                  console.log(_this2.erasmusInfo);
                                });

                              case 8:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (error) {
                      console.log('error');
                    });

                  case 4:
                    _context4.next = 6;
                    return this.profileService.getFollowers(this._id).subscribe(function (res) {
                      var response = res;
                      _this.followers = response.followers;

                      _this.checkFol();
                    }, function (error) {
                      console.log('error');
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "follow",
        value: function follow() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.profileService.follow(this.user._id, this.userProfile._id).subscribe(function (res) {
                      _this3.load();
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "unfollow",
        value: function unfollow() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.profileService.unfollow(this.user._id, this.userProfile._id).toPromise();
                    this.following = false;

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "seeMyPosts",
        value: function seeMyPosts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.router.navigateByUrl('/posts/' + "".concat(this._id));

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "seeMyFollowers",
        value: function seeMyFollowers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.router.navigateByUrl('/followers/' + "".concat(this._id));

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "seeMyFollowing",
        value: function seeMyFollowing() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.router.navigateByUrl('/following/' + "".concat(this._id));

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "seeMyEvents",
        value: function seeMyEvents() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.router.navigateByUrl('/list-events/' + "".concat(this._id));

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "checkFol",
        value: function checkFol() {
          this.followcheck = this.profileService.checkFollow(this.followers, this.user._id);

          if (this.followcheck === 'not') {
            this.following = false;
          } else {
            this.following = true;
          }
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(email) {
          if (confirm('Estas seguro que quieres enviar un mensaje a ' + email)) {
            window.open("mailto:" + email, "_blank");
          }
        }
      }]);

      return OtherProfilePage;
    }();

    OtherProfilePage.ctorParameters = function () {
      return [{
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }];
    };

    OtherProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profiles/other-profile/other-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-profile.page.scss */
      "./src/app/views/profiles/other-profile/other-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], OtherProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=views-profiles-other-profile-other-profile-module-es5.js.map