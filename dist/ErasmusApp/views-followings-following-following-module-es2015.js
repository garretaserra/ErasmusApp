(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-followings-following-following-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/followings/following/following.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/followings/following/following.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-menu side=\"start\">\r\n    <ion-header>\r\n      <ion-toolbar translucent>\r\n        <ion-item>\r\n          <ion-title>Menu</ion-title>\r\n          <ion-icon name=\"close\" slot=\"end\" (click)=\"closeMenu()\"></ion-icon>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openHomePage()\">Home</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openProfilePage()\">Profile</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openFriendsPage()\">Friends</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openMessagePage()\">Messages</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openGlobePage()\">Globe</ion-button>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\r\n          <ion-button (click)=\"openSettingPage()\">Settings</ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button type=\"submit\" (click)=\"openMenu()\"></ion-menu-button>\r\n        </ion-buttons>\r\n    <ion-title>Following</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"vertical-margin\" *ngFor=\"let user of following\">\r\n    <ion-toolbar>\r\n      <ion-button size=\"large\" color=\"tertiary\" (click)=\"change(user._id)\" expand=\"block\">{{user.name}}</ion-button>\r\n    </ion-toolbar>\r\n  </ion-card>\r\n</ion-content>\r\n  </div>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/views/followings/following/following-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/followings/following/following-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: FollowingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageRoutingModule", function() { return FollowingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _following_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./following.page */ "./src/app/views/followings/following/following.page.ts");




const routes = [
    {
        path: '',
        component: _following_page__WEBPACK_IMPORTED_MODULE_3__["FollowingPage"]
    }
];
let FollowingPageRoutingModule = class FollowingPageRoutingModule {
};
FollowingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FollowingPageRoutingModule);



/***/ }),

/***/ "./src/app/views/followings/following/following.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/followings/following/following.module.ts ***!
  \****************************************************************/
/*! exports provided: FollowingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _following_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./following-routing.module */ "./src/app/views/followings/following/following-routing.module.ts");
/* harmony import */ var _following_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./following.page */ "./src/app/views/followings/following/following.page.ts");







let FollowingPageModule = class FollowingPageModule {
};
FollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _following_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowingPageRoutingModule"]
        ],
        declarations: [_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowingPage"]]
    })
], FollowingPageModule);



/***/ }),

/***/ "./src/app/views/followings/following/following.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/followings/following/following.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZvbGxvd2luZ3MvZm9sbG93aW5nL2ZvbGxvd2luZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/followings/following/following.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/followings/following/following.page.ts ***!
  \**************************************************************/
/*! exports provided: FollowingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPage", function() { return FollowingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _following_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../following.service */ "./src/app/views/followings/following.service.ts");






let FollowingPage = class FollowingPage {
    constructor(userService, route, followingService, router, menuCtrl) {
        this.userService = userService;
        this.route = route;
        this.followingService = followingService;
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
            this._id = this.route.snapshot.paramMap.get('id');
            yield this.followingService.getFollowing(this._id).subscribe(res => {
                const response = res;
                console.log(res);
                this.following = response.following;
            }, error => { console.log('error'); });
        });
    }
    change(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (id === this.userService.sendUser()._id) {
                yield this.router.navigateByUrl('/profile');
            }
            else {
                yield this.router.navigateByUrl('/other-profile/' + `${id}`);
            }
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
FollowingPage.ctorParameters = () => [
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _following_service__WEBPACK_IMPORTED_MODULE_5__["FollowingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-following',
        template: __webpack_require__(/*! raw-loader!./following.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/followings/following/following.page.html"),
        styles: [__webpack_require__(/*! ./following.page.scss */ "./src/app/views/followings/following/following.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _following_service__WEBPACK_IMPORTED_MODULE_5__["FollowingService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], FollowingPage);



/***/ })

}]);
//# sourceMappingURL=views-followings-following-following-module-es2015.js.map