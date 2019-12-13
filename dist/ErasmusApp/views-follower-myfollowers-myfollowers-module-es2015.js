(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-follower-myfollowers-myfollowers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/follower/myfollowers/myfollowers.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/follower/myfollowers/myfollowers.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-menu side=\"start\">\r\n    <ion-header>\r\n      <ion-toolbar translucent>\r\n        <ion-item>\r\n          <ion-title>Menu</ion-title>\r\n          <ion-icon name=\"close\" slot=\"end\" (click)=\"closeMenu()\"></ion-icon>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openHomePage()\">Home</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openProfilePage()\">Profile</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openFriendsPage()\">Friends</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openMessagePage()\">Messages</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openGlobePage()\">Globe</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openSettingPage()\">Settings</ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button type=\"submit\" (click)=\"openMenu()\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Followers</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-card class=\"vertical-margin\" *ngFor=\"let userName of this.followers\">\r\n        <ion-toolbar>\r\n          <ion-button size=\"large\" color=\"tertiary\" (click)=\"change(userName._id)\" expand=\"block\">{{userName.name}}</ion-button>\r\n        </ion-toolbar>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/views/follower/myfollowers/myfollowers-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/follower/myfollowers/myfollowers-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MyfollowersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowersPageRoutingModule", function() { return MyfollowersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myfollowers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myfollowers.page */ "./src/app/views/follower/myfollowers/myfollowers.page.ts");




const routes = [
    {
        path: '',
        component: _myfollowers_page__WEBPACK_IMPORTED_MODULE_3__["MyfollowersPage"]
    }
];
let MyfollowersPageRoutingModule = class MyfollowersPageRoutingModule {
};
MyfollowersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyfollowersPageRoutingModule);



/***/ }),

/***/ "./src/app/views/follower/myfollowers/myfollowers.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/follower/myfollowers/myfollowers.module.ts ***!
  \******************************************************************/
/*! exports provided: MyfollowersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowersPageModule", function() { return MyfollowersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myfollowers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myfollowers-routing.module */ "./src/app/views/follower/myfollowers/myfollowers-routing.module.ts");
/* harmony import */ var _myfollowers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myfollowers.page */ "./src/app/views/follower/myfollowers/myfollowers.page.ts");







let MyfollowersPageModule = class MyfollowersPageModule {
};
MyfollowersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myfollowers_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyfollowersPageRoutingModule"]
        ],
        declarations: [_myfollowers_page__WEBPACK_IMPORTED_MODULE_6__["MyfollowersPage"]]
    })
], MyfollowersPageModule);



/***/ }),

/***/ "./src/app/views/follower/myfollowers/myfollowers.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/follower/myfollowers/myfollowers.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZvbGxvd2VyL215Zm9sbG93ZXJzL215Zm9sbG93ZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/follower/myfollowers/myfollowers.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/follower/myfollowers/myfollowers.page.ts ***!
  \****************************************************************/
/*! exports provided: MyfollowersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowersPage", function() { return MyfollowersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _followers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../followers.service */ "./src/app/views/follower/followers.service.ts");






let MyfollowersPage = class MyfollowersPage {
    constructor(userService, followersService, router, menuCtrl) {
        this.userService = userService;
        this.followersService = followersService;
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.load();
        });
    }
    load() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = this.userService.sendUser();
            this.followersService.getFollowers(this.user._id).subscribe(res => {
                const response = res;
                this.followers = response.followers;
            }, error => { console.log('error'); });
        });
    }
    change(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/other-profile/' + `${id}`);
        });
    }
    openMenu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.menuCtrl.open();
        });
    }
    closeMenu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.menuCtrl.close();
        });
    }
    openMessagePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/message');
        });
    }
    openProfilePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/profile');
        });
    }
    openFriendsPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/friends');
        });
    }
    openGlobePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/globe');
        });
    }
    openSettingPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/login');
        });
    }
    openHomePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/home');
        });
    }
};
MyfollowersPage.ctorParameters = () => [
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _followers_service__WEBPACK_IMPORTED_MODULE_5__["FollowersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
MyfollowersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myfollowers',
        template: __webpack_require__(/*! raw-loader!./myfollowers.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/follower/myfollowers/myfollowers.page.html"),
        styles: [__webpack_require__(/*! ./myfollowers.page.scss */ "./src/app/views/follower/myfollowers/myfollowers.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _followers_service__WEBPACK_IMPORTED_MODULE_5__["FollowersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], MyfollowersPage);



/***/ })

}]);
//# sourceMappingURL=views-follower-myfollowers-myfollowers-module-es2015.js.map