(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-post-myposts-myposts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/post/myposts/myposts.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/post/myposts/myposts.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Posts</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-card class=\"vertical-margin\" *ngFor=\"let post of this.posts\">\r\n        <ion-card-header color=\"light\" class=\"text-center\" style=\"font-size: 22px\">\r\n          {{post.message}}\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <ion-item>\r\n                <ion-button class=\"middle-card\" (click)=\"changePageComments(this.post._id)\">View comments</ion-button>\r\n                <ion-icon name=\"close\" slot=\"end\" (click)=\"deletePost(post._id)\"></ion-icon>\r\n            </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n\nion-toolbar {\n  margin-left: 5%;\n}\n\n.toolbar-buttons {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  margin-right: 20px;\n}\n\n.toolbar-container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.middle-card {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcG9zdC9teXBvc3RzL0M6XFxVc2Vyc1xcc2dhbGVcXFdlYnN0b3JtUHJvamVjdHNcXEVyYXNtdXNBcHAvc3JjXFxhcHBcXHZpZXdzXFxwb3N0XFxteXBvc3RzXFxteXBvc3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3MvcG9zdC9teXBvc3RzL215cG9zdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcG9zdC9teXBvc3RzL215cG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLnRvb2xiYXItYnV0dG9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLnRvb2xiYXItY29udGFpbmVye1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4ubWlkZGxlLWNhcmR7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iLCIudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50b29sYmFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5taWRkbGUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");

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
    ionViewDidEnter() {
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
    changePageComments(idPost) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/comments/' + `${idPost}`);
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myposts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/post/myposts/myposts.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myposts.page.scss */ "./src/app/views/post/myposts/myposts.page.scss")).default]
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