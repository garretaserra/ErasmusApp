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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _other_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-profile.page */ "./src/app/views/profiles/other-profile/other-profile.page.ts");




const routes = [
    {
        path: '',
        component: _other_profile_page__WEBPACK_IMPORTED_MODULE_3__["OtherProfilePage"]
    }
];
let OtherProfilePageRoutingModule = class OtherProfilePageRoutingModule {
};
OtherProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtherProfilePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _other_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other-profile-routing.module */ "./src/app/views/profiles/other-profile/other-profile-routing.module.ts");
/* harmony import */ var _other_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-profile.page */ "./src/app/views/profiles/other-profile/other-profile.page.ts");







let OtherProfilePageModule = class OtherProfilePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profiles/profile.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");







let OtherProfilePage = class OtherProfilePage {
    constructor(userService, route, router, storage, menuCtrl, profileService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.profileService = profileService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.load();
        });
    }
    load() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._id = this.route.snapshot.paramMap.get('id');
            this.user = JSON.parse(this.storage.getUser());
            yield this.profileService.getProfile(this._id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const response = res;
                this.userProfile = response.profile;
                this.otherUserProfile = this.userProfile;
                this.photo = (yield this.userService.getPhoto(this.otherUserProfile._id).toPromise()).photo;
            }), error => { console.log('error'); });
            yield this.profileService.getFollowers(this._id).subscribe(res => {
                const response = res;
                this.followers = response.followers;
                this.checkFol();
            }, error => { console.log('error'); });
        });
    }
    follow() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.profileService.follow(this.user._id, this.userProfile._id).subscribe(res => {
                console.log(res);
                this.router.navigateByUrl('/profile');
            });
        });
    }
    unfollow() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.profileService.unfollow(this.user._id, this.userProfile._id).subscribe(res => {
                console.log(res);
                this.router.navigateByUrl('/profile');
            });
        });
    }
    seeMyPosts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/posts/' + `${this._id}`);
        });
    }
    seeMyFollowers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/followers/' + `${this._id}`);
        });
    }
    seeMyFollowing() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/following/' + `${this._id}`);
        });
    }
    checkFol() {
        this.followcheck = this.profileService.checkFollow(this.followers, this.user._id);
        console.log('followcheck: ', this.followcheck);
        if (this.followcheck === 'not') {
            this.following = false;
        }
        else {
            this.following = true;
        }
    }
};
OtherProfilePage.ctorParameters = () => [
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=views-profiles-other-profile-other-profile-module-es2015.js.map