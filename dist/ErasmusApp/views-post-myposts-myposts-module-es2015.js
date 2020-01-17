(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-post-myposts-myposts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/post/myposts/myposts.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/post/myposts/myposts.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <div class=\"ion-page\" main>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Posts</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-card class=\"vertical-margin\" *ngFor=\"let post of this.posts\">\n        <ion-toolbar>{{post.message}}\n          <ion-item>\n            <ion-button slot=\"end\" class=\"home\" (click)=\"deletePost(post._id)\"><ion-icon name=\"close\" slot=\"end\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-toolbar>\n      </ion-card>\n    </ion-content>\n  </div>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/views/post/myposts/myposts-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/post/myposts/myposts-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MypostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypostsPageRoutingModule", function() { return MypostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myposts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myposts.page */ "./src/app/views/post/myposts/myposts.page.ts");




const routes = [
    {
        path: '',
        component: _myposts_page__WEBPACK_IMPORTED_MODULE_3__["MypostsPage"]
    }
];
let MypostsPageRoutingModule = class MypostsPageRoutingModule {
};
MypostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MypostsPageRoutingModule);



/***/ }),

/***/ "./src/app/views/post/myposts/myposts.module.ts":
/*!******************************************************!*\
  !*** ./src/app/views/post/myposts/myposts.module.ts ***!
  \******************************************************/
/*! exports provided: MypostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypostsPageModule", function() { return MypostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myposts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myposts-routing.module */ "./src/app/views/post/myposts/myposts-routing.module.ts");
/* harmony import */ var _myposts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myposts.page */ "./src/app/views/post/myposts/myposts.page.ts");







let MypostsPageModule = class MypostsPageModule {
};
MypostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myposts_routing_module__WEBPACK_IMPORTED_MODULE_5__["MypostsPageRoutingModule"]
        ],
        declarations: [_myposts_page__WEBPACK_IMPORTED_MODULE_6__["MypostsPage"]]
    })
], MypostsPageModule);



/***/ }),

/***/ "./src/app/views/post/myposts/myposts.page.scss":
/*!******************************************************!*\
  !*** ./src/app/views/post/myposts/myposts.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3QvbXlwb3N0cy9teXBvc3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/post/myposts/myposts.page.ts":
/*!****************************************************!*\
  !*** ./src/app/views/post/myposts/myposts.page.ts ***!
  \****************************************************/
/*! exports provided: MypostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypostsPage", function() { return MypostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post.service */ "./src/app/views/post/post.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");







let MypostsPage = class MypostsPage {
    constructor(userService, postService, router, menuCtrl, storage, alertCtrl) {
        this.userService = userService;
        this.postService = postService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.load();
        });
    }
    load() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('loading');
            this.user = JSON.parse(this.storage.getUser());
            console.log('this user', this.user);
            yield this.postService.getPosts(this.user._id).subscribe(res => {
                console.log('response', res);
                const response = res;
                this.posts = response.posts;
            }, error => {
                console.log('error');
            });
        });
    }
    deletePost(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertCtrl.create({
                header: 'TYPE',
                message: 'Are you sure that you want delete this message?',
                buttons: [{ text: 'Yes', handler: () => {
                            this.postService.deletePost(id).subscribe(res => {
                                console.log(res);
                                this.router.navigateByUrl('/profile');
                            }, error => {
                                console.log(error);
                            });
                        } },
                    { text: 'No', handler: () => {
                        } }]
            }).then(alert => {
                alert.present();
            });
        });
    }
};
MypostsPage.ctorParameters = () => [
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
MypostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myposts',
        template: __webpack_require__(/*! raw-loader!./myposts.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/post/myposts/myposts.page.html"),
        styles: [__webpack_require__(/*! ./myposts.page.scss */ "./src/app/views/post/myposts/myposts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], MypostsPage);



/***/ })

}]);
//# sourceMappingURL=views-post-myposts-myposts-module-es2015.js.map