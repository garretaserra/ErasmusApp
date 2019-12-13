(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-followings-myfollowing-myfollowing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/followings/myfollowing/myfollowing.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/followings/myfollowing/myfollowing.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Following</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-card class=\"vertical-margin\" *ngFor=\"let userName of this.following\">\r\n        <ion-toolbar>\r\n          <ion-button size=\"large\" color=\"tertiary\" (click)=\"change(userName._id)\" expand=\"block\">{{userName.name}}</ion-button>\r\n        </ion-toolbar>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/views/followings/myfollowing/myfollowing-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/followings/myfollowing/myfollowing-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MyfollowingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowingPageRoutingModule", function() { return MyfollowingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myfollowing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myfollowing.page */ "./src/app/views/followings/myfollowing/myfollowing.page.ts");




const routes = [
    {
        path: '',
        component: _myfollowing_page__WEBPACK_IMPORTED_MODULE_3__["MyfollowingPage"]
    }
];
let MyfollowingPageRoutingModule = class MyfollowingPageRoutingModule {
};
MyfollowingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyfollowingPageRoutingModule);



/***/ }),

/***/ "./src/app/views/followings/myfollowing/myfollowing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/followings/myfollowing/myfollowing.module.ts ***!
  \********************************************************************/
/*! exports provided: MyfollowingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowingPageModule", function() { return MyfollowingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myfollowing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myfollowing-routing.module */ "./src/app/views/followings/myfollowing/myfollowing-routing.module.ts");
/* harmony import */ var _myfollowing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myfollowing.page */ "./src/app/views/followings/myfollowing/myfollowing.page.ts");







let MyfollowingPageModule = class MyfollowingPageModule {
};
MyfollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myfollowing_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyfollowingPageRoutingModule"]
        ],
        declarations: [_myfollowing_page__WEBPACK_IMPORTED_MODULE_6__["MyfollowingPage"]]
    })
], MyfollowingPageModule);



/***/ }),

/***/ "./src/app/views/followings/myfollowing/myfollowing.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/followings/myfollowing/myfollowing.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZvbGxvd2luZ3MvbXlmb2xsb3dpbmcvbXlmb2xsb3dpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/followings/myfollowing/myfollowing.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/followings/myfollowing/myfollowing.page.ts ***!
  \******************************************************************/
/*! exports provided: MyfollowingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowingPage", function() { return MyfollowingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _following_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../following.service */ "./src/app/views/followings/following.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");







let MyfollowingPage = class MyfollowingPage {
    constructor(userService, followingService, storage, router, menuCtrl) {
        this.userService = userService;
        this.followingService = followingService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.load();
        });
    }
    change(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/other-profile/' + `${id}`);
        });
    }
    load() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._id = JSON.parse(this.storage.getUser())._id;
            this.followingService.getFollowing(this._id).subscribe(res => {
                const response = res;
                console.log(res);
                this.following = response.following;
            }, error => { console.log('error'); });
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
MyfollowingPage.ctorParameters = () => [
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _following_service__WEBPACK_IMPORTED_MODULE_5__["FollowingService"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
MyfollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myfollowing',
        template: __webpack_require__(/*! raw-loader!./myfollowing.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/followings/myfollowing/myfollowing.page.html"),
        styles: [__webpack_require__(/*! ./myfollowing.page.scss */ "./src/app/views/followings/myfollowing/myfollowing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _following_service__WEBPACK_IMPORTED_MODULE_5__["FollowingService"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], MyfollowingPage);



/***/ })

}]);
//# sourceMappingURL=views-followings-myfollowing-myfollowing-module-es2015.js.map