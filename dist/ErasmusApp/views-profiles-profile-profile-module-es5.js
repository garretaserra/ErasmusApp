(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profiles-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/profiles/profile/profile.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/profiles/profile/profile.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <div class=\"ion-page\" main>\n        <ion-header>\n          <ion-toolbar>\n              <ion-buttons slot=\"start\">\n                  <ion-menu-button></ion-menu-button>\n              </ion-buttons>\n            <ion-title>Profile</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content fullscreen=\"\">\n                <ion-card class=\"vertical-margin\">\n                    <div style=\"background: #e44d3a; height: 50%\">\n                      <div class=\"personal-icon\">\n<!--                          <ion-img class=\"image-contain\" src=\"../../../assets/img/default_user.png\" style=\"width: 200px; height: 200px;\"></ion-img>-->\n                        <img *ngIf=\"photo\" class=\"image-contain\" src=\"{{photo}}\" style=\"width: 200px; height: 200px;\"/>\n                        <img *ngIf=\"!photo\" class=\"image-contain\" src=\"../../../assets/img/default_user.png\" style=\"width: 200px; height: 200px;\"/>\n                      </div>\n                    </div>\n                      <ion-card-header *ngIf=\"userTest\">\n                        <ion-card-subtitle>{{userTest.email}}</ion-card-subtitle>\n                        <ion-card-title>{{userTest.name}}</ion-card-title>\n                      </ion-card-header>\n                </ion-card>\n            <ion-card class=\"vertical-margin\">\n                <ion-card-content *ngIf=\"userTest\">\n                    <ion-toolbar color=\"primary\">\n                        <ion-button (click)=\"seeMyPosts()\">Posts: {{userTest.posts}}</ion-button>\n                    </ion-toolbar>\n                    <ion-toolbar color=\"primary\">\n                        <ion-button (click)=\"seeMyPosts()\">Events: {{userTest.events}}</ion-button>\n                    </ion-toolbar>\n                    <ion-toolbar color=\"secondary\">\n                        <ion-button (click)=\"seeMyFollowers()\">Followers: {{userTest.followers}}</ion-button>\n                    </ion-toolbar>\n                    <ion-toolbar color=\"tertiary\">\n                        <ion-button (click)=\"seeMyFollowing()\">Following: {{userTest.following}}</ion-button>\n                    </ion-toolbar>\n                </ion-card-content>\n            </ion-card>\n        </ion-content>\n    </div>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/views/profiles/profile/profile-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/profiles/profile/profile-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/views/profiles/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/profiles/profile/profile.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/profiles/profile/profile.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/views/profiles/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/views/profiles/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/views/profiles/profile/profile.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/profiles/profile/profile.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGVzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/profiles/profile/profile.page.ts":
/*!********************************************************!*\
  !*** ./src/app/views/profiles/profile/profile.page.ts ***!
  \********************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profiles/profile.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService, route, router, menuCtrl, storage, profileService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.profileService = profileService;
    }
    ProfilePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._id = JSON.parse(this.storage.getUser())._id;
                        return [4 /*yield*/, this.profileService.getProfile(this._id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var response, _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            response = res;
                                            console.log(res);
                                            this.userTest = response.profile;
                                            _a = this;
                                            return [4 /*yield*/, this.userService.getPhoto(this.userTest._id).toPromise()];
                                        case 1:
                                            _a.photo = (_b.sent()).photo;
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) { console.log('error'); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.seeMyPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/myposts')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.seeMyFollowers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/myfollowers')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.seeMyFollowing = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/myfollowing')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
        { type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/profiles/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/views/profiles/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
            _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=views-profiles-profile-profile-module-es5.js.map