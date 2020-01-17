(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-follower-followers-followers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/follower/followers/followers.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/follower/followers/followers.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <div class=\"ion-page\" main>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Followers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"vertical-margin\" *ngFor=\"let user of followers\">\n    <ion-toolbar>\n      <ion-button size=\"large\" color=\"tertiary\" (click)=\"change(user._id)\" expand=\"block\">{{user.name}}</ion-button>\n    </ion-toolbar>\n  </ion-card>\n</ion-content>\n  </div>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/views/follower/followers/followers-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/follower/followers/followers-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: FollowersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPageRoutingModule", function() { return FollowersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _followers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./followers.page */ "./src/app/views/follower/followers/followers.page.ts");




var routes = [
    {
        path: '',
        component: _followers_page__WEBPACK_IMPORTED_MODULE_3__["FollowersPage"]
    }
];
var FollowersPageRoutingModule = /** @class */ (function () {
    function FollowersPageRoutingModule() {
    }
    FollowersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FollowersPageRoutingModule);
    return FollowersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/follower/followers/followers.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/follower/followers/followers.module.ts ***!
  \**************************************************************/
/*! exports provided: FollowersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPageModule", function() { return FollowersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _followers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./followers-routing.module */ "./src/app/views/follower/followers/followers-routing.module.ts");
/* harmony import */ var _followers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./followers.page */ "./src/app/views/follower/followers/followers.page.ts");







var FollowersPageModule = /** @class */ (function () {
    function FollowersPageModule() {
    }
    FollowersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _followers_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowersPageRoutingModule"]
            ],
            declarations: [_followers_page__WEBPACK_IMPORTED_MODULE_6__["FollowersPage"]]
        })
    ], FollowersPageModule);
    return FollowersPageModule;
}());



/***/ }),

/***/ "./src/app/views/follower/followers/followers.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/follower/followers/followers.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZvbGxvd2VyL2ZvbGxvd2Vycy9mb2xsb3dlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/follower/followers/followers.page.ts":
/*!************************************************************!*\
  !*** ./src/app/views/follower/followers/followers.page.ts ***!
  \************************************************************/
/*! exports provided: FollowersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPage", function() { return FollowersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _followers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../followers.service */ "./src/app/views/follower/followers.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");







var FollowersPage = /** @class */ (function () {
    function FollowersPage(userService, route, followersService, storage, router, menuCtrl) {
        this.userService = userService;
        this.route = route;
        this.followersService = followersService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    FollowersPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.load();
                return [2 /*return*/];
            });
        });
    };
    FollowersPage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._id = this.route.snapshot.paramMap.get('id');
                        return [4 /*yield*/, this.followersService.getFollowers(this._id).subscribe(function (res) {
                                var response = res;
                                console.log('res: ', res);
                                _this.followers = response.followers;
                            }, function (error) { console.log('error'); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowersPage.prototype.change = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(id === JSON.parse(this.storage.getUser())._id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.router.navigateByUrl('/profile')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.router.navigateByUrl('/other-profile/' + ("" + id))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FollowersPage.prototype.openMenu = function () {
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
    FollowersPage.prototype.closeMenu = function () {
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
    FollowersPage.prototype.openMessagePage = function () {
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
    FollowersPage.prototype.openProfilePage = function () {
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
    FollowersPage.prototype.openFriendsPage = function () {
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
    FollowersPage.prototype.openGlobePage = function () {
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
    FollowersPage.prototype.openSettingPage = function () {
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
    FollowersPage.prototype.openHomePage = function () {
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
    FollowersPage.ctorParameters = function () { return [
        { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _followers_service__WEBPACK_IMPORTED_MODULE_5__["FollowersService"] },
        { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    FollowersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! raw-loader!./followers.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/follower/followers/followers.page.html"),
            styles: [__webpack_require__(/*! ./followers.page.scss */ "./src/app/views/follower/followers/followers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _followers_service__WEBPACK_IMPORTED_MODULE_5__["FollowersService"],
            _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], FollowersPage);
    return FollowersPage;
}());



/***/ })

}]);
//# sourceMappingURL=views-follower-followers-followers-module-es5.js.map