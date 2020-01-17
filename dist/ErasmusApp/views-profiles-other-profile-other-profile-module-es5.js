(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profiles-other-profile-other-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/profiles/other-profile/other-profile.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/profiles/other-profile/other-profile.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <div class=\"ion-page\" main>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"\">\n  <ion-card class=\"vertical-margin\">\n    <div style=\"background: #e44d3a; height: 50%\">\n      <div class=\"personal-icon\">\n        <img *ngIf=\"photo\" class=\"image-contain\" src=\"{{photo}}\" style=\"width: 200px; height: 200px;\"/>\n        <img *ngIf=\"!photo\" class=\"image-contain\" src=\"../../../assets/img/default_user.png\" style=\"width: 200px; height: 200px;\"/>\n      </div>\n    </div>\n    <ion-card-header *ngIf=\"otherUserProfile\">\n      <ion-card-subtitle>{{otherUserProfile.email}}</ion-card-subtitle>\n      <ion-card-title>{{otherUserProfile.name}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card class=\"vertical-margin\">\n    <ion-card-content *ngIf=\"otherUserProfile\">\n      <div *ngIf=\"following\">\n      <ion-toolbar color=\"primary\">\n        <ion-button (click)=\"seeMyPosts()\">Posts: {{otherUserProfile.posts}}</ion-button>\n      </ion-toolbar>\n      <ion-toolbar color=\"secondary\">\n        <ion-button (click)=\"seeMyFollowers()\">Followers: {{otherUserProfile.followers}}</ion-button>\n      </ion-toolbar>\n      <ion-toolbar color=\"tertiary\">\n        <ion-button (click)=\"seeMyFollowing()\">Following: {{otherUserProfile.following}}</ion-button>\n      </ion-toolbar>\n      </div>\n      <ion-toolbar color=\"primary\">\n        <ion-button size=\"large\" color=\"tertiary\" (click)=\"follow()\" [disabled]=\"following\" expand=\"block\">Follow</ion-button>\n      </ion-toolbar>\n      <ion-toolbar color=\"secondary\">\n        <ion-button size=\"large\" color=\"tertiary\" (click)=\"unfollow()\" [disabled]=\"!following\" expand=\"block\">UnFollow</ion-button>\n      </ion-toolbar>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n  </div>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/views/profiles/other-profile/other-profile-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profiles/other-profile/other-profile-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: OtherProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherProfilePageRoutingModule", function() { return OtherProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _other_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-profile.page */ "./src/app/views/profiles/other-profile/other-profile.page.ts");




var routes = [
    {
        path: '',
        component: _other_profile_page__WEBPACK_IMPORTED_MODULE_3__["OtherProfilePage"]
    }
];
var OtherProfilePageRoutingModule = /** @class */ (function () {
    function OtherProfilePageRoutingModule() {
    }
    OtherProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OtherProfilePageRoutingModule);
    return OtherProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/profiles/other-profile/other-profile.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/profiles/other-profile/other-profile.module.ts ***!
  \**********************************************************************/
/*! exports provided: OtherProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherProfilePageModule", function() { return OtherProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _other_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other-profile-routing.module */ "./src/app/views/profiles/other-profile/other-profile-routing.module.ts");
/* harmony import */ var _other_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-profile.page */ "./src/app/views/profiles/other-profile/other-profile.page.ts");







var OtherProfilePageModule = /** @class */ (function () {
    function OtherProfilePageModule() {
    }
    OtherProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _other_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtherProfilePageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_other_profile_page__WEBPACK_IMPORTED_MODULE_6__["OtherProfilePage"]]
        })
    ], OtherProfilePageModule);
    return OtherProfilePageModule;
}());



/***/ }),

/***/ "./src/app/views/profiles/other-profile/other-profile.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/profiles/other-profile/other-profile.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGVzL290aGVyLXByb2ZpbGUvb3RoZXItcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/profiles/other-profile/other-profile.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/profiles/other-profile/other-profile.page.ts ***!
  \********************************************************************/
/*! exports provided: OtherProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherProfilePage", function() { return OtherProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profiles/profile.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");







var OtherProfilePage = /** @class */ (function () {
    function OtherProfilePage(userService, route, router, storage, menuCtrl, profileService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.profileService = profileService;
    }
    OtherProfilePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.load();
                return [2 /*return*/];
            });
        });
    };
    OtherProfilePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.load();
                return [2 /*return*/];
            });
        });
    };
    OtherProfilePage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._id = this.route.snapshot.paramMap.get('id');
                        this.user = JSON.parse(this.storage.getUser());
                        return [4 /*yield*/, this.profileService.getProfile(this._id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var response, _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            response = res;
                                            this.userProfile = response.profile;
                                            this.otherUserProfile = this.userProfile;
                                            _a = this;
                                            return [4 /*yield*/, this.userService.getPhoto(this.otherUserProfile._id).toPromise()];
                                        case 1:
                                            _a.photo = (_b.sent()).photo;
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) { console.log('error'); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.profileService.getFollowers(this._id).subscribe(function (res) {
                                var response = res;
                                _this.followers = response.followers;
                                _this.checkFol();
                            }, function (error) { console.log('error'); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.follow = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.profileService.follow(this.user._id, this.userProfile._id).subscribe(function (res) {
                            console.log(res);
                            _this.router.navigateByUrl('/profile');
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.unfollow = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.profileService.unfollow(this.user._id, this.userProfile._id).subscribe(function (res) {
                    console.log(res);
                    _this.router.navigateByUrl('/profile');
                });
                return [2 /*return*/];
            });
        });
    };
    OtherProfilePage.prototype.seeMyPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/posts/' + ("" + this._id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.seeMyFollowers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/followers/' + ("" + this._id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.seeMyFollowing = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/following/' + ("" + this._id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.checkFol = function () {
        this.followcheck = this.profileService.checkFollow(this.followers, this.user._id);
        console.log('followcheck: ', this.followcheck);
        if (this.followcheck === 'not') {
            this.following = false;
        }
        else {
            this.following = true;
        }
    };
    OtherProfilePage.ctorParameters = function () { return [
        { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
    ]; };
    OtherProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-profile',
            template: __webpack_require__(/*! raw-loader!./other-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/profiles/other-profile/other-profile.page.html"),
            styles: [__webpack_require__(/*! ./other-profile.page.scss */ "./src/app/views/profiles/other-profile/other-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
    ], OtherProfilePage);
    return OtherProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=views-profiles-other-profile-other-profile-module-es5.js.map