(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profiles-other-profile-other-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/profiles/other-profile/other-profile.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/profiles/other-profile/other-profile.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-menu side=\"start\">\r\n    <ion-header>\r\n      <ion-toolbar translucent>\r\n        <ion-item>\r\n          <ion-title>Menu</ion-title>\r\n          <ion-icon name=\"close\" slot=\"end\" (click)=\"closeMenu()\"></ion-icon>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openHomePage()\">Home</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openProfilePage()\">Profile</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openFriendsPage()\">Friends</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openMessagePage()\">Messages</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openGlobePage()\">Globe</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openSettingPage()\">Settings</ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <div class=\"ion-page\" main>\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button type=\"submit\" (click)=\"openMenu()\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"\">\r\n  <ion-card class=\"vertical-margin\">\r\n    <div style=\"background: #e44d3a; height: 50%\">\r\n      <div class=\"personal-icon\">\r\n        <ion-img class=\"image-contain\" src=\"../../../assets/img/default_user.png\" style=\"width: 200px; height: 200px;\"></ion-img>\r\n      </div>\r\n    </div>\r\n    <ion-card-header *ngIf=\"otherUserProfile\">\r\n      <ion-card-subtitle>{{otherUserProfile.email}}</ion-card-subtitle>\r\n      <ion-card-title>{{otherUserProfile.name}}</ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card class=\"vertical-margin\">\r\n    <ion-card-content *ngIf=\"otherUserProfile\">\r\n      <div *ngIf=\"following\">\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-button (click)=\"seeMyPosts()\">Posts: {{otherUserProfile.posts}}</ion-button>\r\n      </ion-toolbar>\r\n      <ion-toolbar color=\"secondary\">\r\n        <ion-button (click)=\"seeMyFollowers()\">Followers: {{otherUserProfile.followers}}</ion-button>\r\n      </ion-toolbar>\r\n      <ion-toolbar color=\"tertiary\">\r\n        <ion-button (click)=\"seeMyFollowing()\">Following: {{otherUserProfile.following}}</ion-button>\r\n      </ion-toolbar>\r\n      </div>\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-button size=\"large\" color=\"tertiary\" (click)=\"follow()\" [disabled]=\"following\" expand=\"block\">Follow</ion-button>\r\n      </ion-toolbar>\r\n      <ion-toolbar color=\"secondary\">\r\n        <ion-button size=\"large\" color=\"tertiary\" (click)=\"unfollow()\" [disabled]=\"!following\" expand=\"block\">UnFollow</ion-button>\r\n      </ion-toolbar>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n  </div>\r\n</ion-app>\r\n"

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






var OtherProfilePage = /** @class */ (function () {
    function OtherProfilePage(userService, route, router, menuCtrl, profileService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
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
    OtherProfilePage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._id = this.route.snapshot.paramMap.get('id');
                        this.user = this.userService.sendUser();
                        console.log('this.user: ', this.user);
                        return [4 /*yield*/, this.profileService.getProfile(this._id).subscribe(function (res) {
                                var response = res;
                                console.log(res);
                                _this.userProfile = response.profile;
                                _this.otherUserProfile = _this.userProfile;
                            }, function (error) { console.log('error'); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.profileService.getFollowers(this._id).subscribe(function (res) {
                                var response = res;
                                console.log(res);
                                _this.followers = response.followers;
                                console.log('this.followers: ', _this.followers);
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
    OtherProfilePage.prototype.openMenu = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuCtrl.open()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.closeMenu = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuCtrl.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.openMessagePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/message')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.openProfilePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/profile')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.openFriendsPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/friends')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.openGlobePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/globe')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.openSettingPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/login')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.prototype.openHomePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/home')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage.ctorParameters = function () { return [
        { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
    ]; };
    OtherProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-profile',
            template: __webpack_require__(/*! raw-loader!./other-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/profiles/other-profile/other-profile.page.html"),
            styles: [__webpack_require__(/*! ./other-profile.page.scss */ "./src/app/views/profiles/other-profile/other-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
    ], OtherProfilePage);
    return OtherProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=views-profiles-other-profile-other-profile-module-es5.js.map