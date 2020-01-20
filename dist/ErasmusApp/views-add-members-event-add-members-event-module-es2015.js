(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-members-event-add-members-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/add-members-event/add-members-event.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/add-members-event/add-members-event.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>addMembersEvent</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/views/add-members-event/add-members-event-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/add-members-event/add-members-event-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddMembersEventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersEventPageRoutingModule", function() { return AddMembersEventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_members_event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-members-event.page */ "./src/app/views/add-members-event/add-members-event.page.ts");




const routes = [
    {
        path: '',
        component: _add_members_event_page__WEBPACK_IMPORTED_MODULE_3__["AddMembersEventPage"]
    }
];
let AddMembersEventPageRoutingModule = class AddMembersEventPageRoutingModule {
};
AddMembersEventPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddMembersEventPageRoutingModule);



/***/ }),

/***/ "./src/app/views/add-members-event/add-members-event.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/add-members-event/add-members-event.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddMembersEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersEventPageModule", function() { return AddMembersEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_members_event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-members-event-routing.module */ "./src/app/views/add-members-event/add-members-event-routing.module.ts");
/* harmony import */ var _add_members_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-members-event.page */ "./src/app/views/add-members-event/add-members-event.page.ts");







let AddMembersEventPageModule = class AddMembersEventPageModule {
};
AddMembersEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_members_event_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddMembersEventPageRoutingModule"]
        ],
        declarations: [_add_members_event_page__WEBPACK_IMPORTED_MODULE_6__["AddMembersEventPage"]]
    })
], AddMembersEventPageModule);



/***/ }),

/***/ "./src/app/views/add-members-event/add-members-event.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/add-members-event/add-members-event.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkZC1tZW1iZXJzLWV2ZW50L2FkZC1tZW1iZXJzLWV2ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/add-members-event/add-members-event.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/add-members-event/add-members-event.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddMembersEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersEventPage", function() { return AddMembersEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddMembersEventPage = class AddMembersEventPage {
    constructor() { }
    ngOnInit() {
    }
};
AddMembersEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-members-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-members-event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/add-members-event/add-members-event.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-members-event.page.scss */ "./src/app/views/add-members-event/add-members-event.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddMembersEventPage);



/***/ })

}]);
//# sourceMappingURL=views-add-members-event-add-members-event-module-es2015.js.map