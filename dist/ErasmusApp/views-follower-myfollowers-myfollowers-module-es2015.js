(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-follower-myfollowers-myfollowers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/follower/myfollowers/myfollowers.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/follower/myfollowers/myfollowers.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Followers</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-card class=\"vertical-margin\">\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let user of followers\">\r\n            <ion-avatar slot=\"start\">\r\n              <img *ngIf=\"user.profilePhoto\" (click)=\"change(user._id)\" src=\"{{user.profilePhoto}}\"/>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2 (click)=\"change(user._id)\">{{user.name}}</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZvbGxvd2VyL215Zm9sbG93ZXJzL215Zm9sbG93ZXJzLnBhZ2Uuc2NzcyJ9 */");

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
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");







let MyfollowersPage = class MyfollowersPage {
    constructor(userService, followersService, router, storage, menuCtrl) {
        this.userService = userService;
        this.followersService = followersService;
        this.router = router;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.load();
        });
    }
    load() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = JSON.parse(this.storage.getUser());
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
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
MyfollowersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myfollowers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myfollowers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/follower/myfollowers/myfollowers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myfollowers.page.scss */ "./src/app/views/follower/myfollowers/myfollowers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _followers_service__WEBPACK_IMPORTED_MODULE_5__["FollowersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], MyfollowersPage);



/***/ })

}]);
//# sourceMappingURL=views-follower-myfollowers-myfollowers-module-es2015.js.map