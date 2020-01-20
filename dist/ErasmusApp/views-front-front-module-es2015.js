(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-front-front-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/front/front.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/front/front.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"\" color=\"medium\">\r\n  <ion-card color=\"light\">\r\n    <ion-card-content>\r\n      <img src=\"../../assets/img/LOGO MARIO.png\">\r\n    </ion-card-content>\r\n  </ion-card>\r\n    <ion-footer>\r\n      <div>\r\n      <h6>If you already have an account in ErasmusApp, <a routerLink='/login'>log in</a>!</h6>\r\n      <div></div>\r\n      <h6>If you not have already an account in ErasmusApp, <a routerLink='/register'>register</a>!</h6>\r\n      </div>\r\n  </ion-footer>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/views/front/front-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/front/front-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FrontPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageRoutingModule", function() { return FrontPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _front_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front.page */ "./src/app/views/front/front.page.ts");




const routes = [
    {
        path: '',
        component: _front_page__WEBPACK_IMPORTED_MODULE_3__["FrontPage"]
    }
];
let FrontPageRoutingModule = class FrontPageRoutingModule {
};
FrontPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FrontPageRoutingModule);



/***/ }),

/***/ "./src/app/views/front/front.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/front/front.module.ts ***!
  \*********************************************/
/*! exports provided: FrontPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageModule", function() { return FrontPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _front_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front-routing.module */ "./src/app/views/front/front-routing.module.ts");
/* harmony import */ var _front_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front.page */ "./src/app/views/front/front.page.ts");







let FrontPageModule = class FrontPageModule {
};
FrontPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _front_routing_module__WEBPACK_IMPORTED_MODULE_5__["FrontPageRoutingModule"]
        ],
        declarations: [_front_page__WEBPACK_IMPORTED_MODULE_6__["FrontPage"]]
    })
], FrontPageModule);



/***/ }),

/***/ "./src/app/views/front/front.page.scss":
/*!*********************************************!*\
  !*** ./src/app/views/front/front.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  height: 80%;\n}\n\nion-card-content {\n  padding-top: 40%;\n}\n\nion-footer {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZnJvbnQvQzpcXFVzZXJzXFxzZ2FsZVxcV2Vic3Rvcm1Qcm9qZWN0c1xcRXJhc211c0FwcC9zcmNcXGFwcFxcdmlld3NcXGZyb250XFxmcm9udC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Zyb250L2Zyb250LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZnJvbnQvZnJvbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICBwYWRkaW5nLXRvcDogNDAlO1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIiwiaW9uLWNhcmQge1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA0MCU7XG59XG5cbmlvbi1mb290ZXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/front/front.page.ts":
/*!*******************************************!*\
  !*** ./src/app/views/front/front.page.ts ***!
  \*******************************************/
/*! exports provided: FrontPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPage", function() { return FrontPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrontPage = class FrontPage {
    constructor() { }
    ngOnInit() {
    }
};
FrontPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-front',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./front.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/front/front.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./front.page.scss */ "./src/app/views/front/front.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FrontPage);



/***/ })

}]);
//# sourceMappingURL=views-front-front-module-es2015.js.map