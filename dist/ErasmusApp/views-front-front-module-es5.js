(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-front-front-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/front/front.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/front/front.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen=\"\">\n  <ion-card margin-top>\n    <ion-card-content>\n    <ion-title color=\"primary\">ERASMUS city</ion-title>\n\n  </ion-card-content>\n  </ion-card>\n  <ion-card margin-bottom>\n    <ion-card-content>\n      <h4>Si ya dispones de una cuenta en Erasmus, <a routerLink='/login'>inicia sesión</a>!</h4>\n      <div></div>\n      <h4>Si todavía no tienes una cuenta en Erasmus, <a routerLink='/register'>regístrate</a>!</h4>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _front_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front.page */ "./src/app/views/front/front.page.ts");




var routes = [
    {
        path: '',
        component: _front_page__WEBPACK_IMPORTED_MODULE_3__["FrontPage"]
    }
];
var FrontPageRoutingModule = /** @class */ (function () {
    function FrontPageRoutingModule() {
    }
    FrontPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FrontPageRoutingModule);
    return FrontPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _front_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front-routing.module */ "./src/app/views/front/front-routing.module.ts");
/* harmony import */ var _front_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front.page */ "./src/app/views/front/front.page.ts");







var FrontPageModule = /** @class */ (function () {
    function FrontPageModule() {
    }
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
    return FrontPageModule;
}());



/***/ }),

/***/ "./src/app/views/front/front.page.scss":
/*!*********************************************!*\
  !*** ./src/app/views/front/front.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zyb250L2Zyb250LnBhZ2Uuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrontPage = /** @class */ (function () {
    function FrontPage() {
    }
    FrontPage.prototype.ngOnInit = function () {
    };
    FrontPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-front',
            template: __webpack_require__(/*! raw-loader!./front.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/front/front.page.html"),
            styles: [__webpack_require__(/*! ./front.page.scss */ "./src/app/views/front/front.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrontPage);
    return FrontPage;
}());



/***/ })

}]);
//# sourceMappingURL=views-front-front-module-es5.js.map