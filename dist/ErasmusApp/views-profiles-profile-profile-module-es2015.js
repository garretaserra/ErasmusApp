(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profiles-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/profiles/profile/profile.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/profiles/profile/profile.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n    <ion-menu side=\"start\">\r\n        <ion-header>\r\n            <ion-toolbar translucent>\r\n                <ion-item>\r\n                    <ion-title>Menu</ion-title>\r\n                    <ion-icon name=\"close\" slot=\"end\" (click)=\"closeMenu()\"></ion-icon>\r\n                </ion-item>\r\n            </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content>\r\n            <ion-list>\r\n                <ion-item>\r\n                    <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n                    <ion-button (click)=\"openHomePage()\">Home</ion-button>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                    <ion-button (click)=\"openProfilePage()\">Profile</ion-button>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\r\n                    <ion-button (click)=\"openFriendsPage()\">Friends</ion-button>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n                    <ion-button (click)=\"openMessagePage()\">Messages</ion-button>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\r\n                    <ion-button (click)=\"openGlobePage()\">Globe</ion-button>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\r\n                    <ion-button (click)=\"openSettingPage()\">Settings</ion-button>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-menu>\r\n    <div class=\"ion-page\" main>\r\n        <ion-header>\r\n          <ion-toolbar>\r\n              <ion-buttons slot=\"start\">\r\n                  <ion-menu-button type=\"submit\" (click)=\"openMenu()\"></ion-menu-button>\r\n              </ion-buttons>\r\n            <ion-title>Profile</ion-title>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content fullscreen=\"\">\r\n                <ion-card class=\"vertical-margin\">\r\n                    <div style=\"background: #e44d3a; height: 50%\">\r\n                      <div class=\"personal-icon\">\r\n                          <ion-img class=\"image-contain\" src=\"../../../assets/img/default_user.png\" style=\"width: 200px; height: 200px;\"></ion-img>\r\n                      </div>\r\n                    </div>\r\n                      <ion-card-header *ngIf=\"userTest\">\r\n                        <ion-card-subtitle>{{userTest.email}}</ion-card-subtitle>\r\n                        <ion-card-title>{{userTest.name}}</ion-card-title>\r\n                      </ion-card-header>\r\n                </ion-card>\r\n            <ion-card class=\"vertical-margin\">\r\n                <ion-card-content *ngIf=\"userTest\">\r\n                    <ion-toolbar color=\"primary\">\r\n                        <ion-button (click)=\"seeMyPosts()\">Posts: {{userTest.posts}}</ion-button>\r\n                    </ion-toolbar>\r\n                    <ion-toolbar color=\"secondary\">\r\n                        <ion-button (click)=\"seeMyFollowers()\">Followers: {{userTest.followers}}</ion-button>\r\n                    </ion-toolbar>\r\n                    <ion-toolbar color=\"tertiary\">\r\n                        <ion-button (click)=\"seeMyFollowing()\">Following: {{userTest.following}}</ion-button>\r\n                    </ion-toolbar>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-content>\r\n    </div>\r\n</ion-app>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/views/profiles/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/views/profiles/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/views/profiles/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profiles/profile.service.ts");






let ProfilePage = class ProfilePage {
    constructor(userService, route, router, menuCtrl, profileService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.profileService = profileService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.load();
        });
    }
    load() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._id = this.userService.sendUser()._id;
            yield this.profileService.getProfile(this._id).subscribe(res => {
                const response = res;
                console.log(res);
                this.userTest = response.profile;
            }, error => { console.log('error'); });
        });
    }
    seeMyPosts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/myposts');
        });
    }
    seeMyFollowers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/myfollowers');
        });
    }
    seeMyFollowing() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/myfollowing');
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
            yield this.menuCtrl.close();
            this.router.navigateByUrl('/home');
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/profiles/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/views/profiles/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=views-profiles-profile-profile-module-es2015.js.map