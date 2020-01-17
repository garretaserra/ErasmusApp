(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-globe-globe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/globe/globe.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/globe/globe.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Maps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapElement class=\"map\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/views/globe/globe-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/globe/globe-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GlobePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobePageRoutingModule", function() { return GlobePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _globe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globe.page */ "./src/app/views/globe/globe.page.ts");




const routes = [
    {
        path: '',
        component: _globe_page__WEBPACK_IMPORTED_MODULE_3__["GlobePage"]
    }
];
let GlobePageRoutingModule = class GlobePageRoutingModule {
};
GlobePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GlobePageRoutingModule);



/***/ }),

/***/ "./src/app/views/globe/globe.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/globe/globe.module.ts ***!
  \*********************************************/
/*! exports provided: GlobePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobePageModule", function() { return GlobePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _globe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globe-routing.module */ "./src/app/views/globe/globe-routing.module.ts");
/* harmony import */ var _globe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globe.page */ "./src/app/views/globe/globe.page.ts");







let GlobePageModule = class GlobePageModule {
};
GlobePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _globe_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlobePageRoutingModule"]
        ],
        declarations: [_globe_page__WEBPACK_IMPORTED_MODULE_6__["GlobePage"]]
    })
], GlobePageModule);



/***/ }),

/***/ "./src/app/views/globe/globe.page.scss":
/*!*********************************************!*\
  !*** ./src/app/views/globe/globe.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2dhdHR1c28vR2l0SHViL0VyYXNtdXNBcHAvc3JjL2FwcC92aWV3cy9nbG9iZS9nbG9iZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2dsb2JlL2dsb2JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dsb2JlL2dsb2JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/globe/globe.page.ts":
/*!*******************************************!*\
  !*** ./src/app/views/globe/globe.page.ts ***!
  \*******************************************/
/*! exports provided: GlobePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobePage", function() { return GlobePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GlobePage = class GlobePage {
    constructor() { }
    ngOnInit() {
    }
    ngAfterContentInit() {
        console.log("entra");
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GlobePage.prototype, "mapElement", void 0);
GlobePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-globe',
        template: __webpack_require__(/*! raw-loader!./globe.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/globe/globe.page.html"),
        styles: [__webpack_require__(/*! ./globe.page.scss */ "./src/app/views/globe/globe.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GlobePage);



/***/ })

}]);
//# sourceMappingURL=views-globe-globe-module-es2015.js.map