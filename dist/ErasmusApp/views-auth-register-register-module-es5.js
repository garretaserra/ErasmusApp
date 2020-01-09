(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth/register/register.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth/register/register.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" color=\"tertiary\">\r\n  <ion-card class=\"item item-text-wrap\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col class=\"ion-align-self-center\" size-lg=\"11\" size-xs=\"12\">\r\n            <div>\r\n              <h3>Crea tu cuenta!</h3>\r\n            </div>\r\n            <div>\r\n              <h5>Haz amigos y encuentra planes para tu estancia en el extranjero</h5>\r\n            </div>\r\n            <ion-list>\r\n              <div class=\"formGroup\">\r\n                <ion-item>\r\n                  <ion-label color=\"tertiary\">Nombre</ion-label>\r\n                  <ion-input  name=\"name\" type=\"text\" formControlName=\"name\" placeholder=\"Nombre\" required></ion-input>\r\n                </ion-item>\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validation_messages.name\" >\r\n                    <div *ngIf=\"registerForm.get('name').hasError(validation.type) && (registerForm.get('name').dirty || registerForm.get('name').touched)\">\r\n                      <ion-chip color=\"danger\">\r\n                        {{ validation.message }}\r\n                      </ion-chip>\r\n                    </div>\r\n                  </ng-container>\r\n                  <div *ngIf=\"registerForm.controls['name'].valid\">\r\n                    <ion-chip color=\"success\">Nombre válido!</ion-chip>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"formGroup\">\r\n                <ion-item>\r\n                  <ion-label color=\"tertiary\">Correo electrónico</ion-label>\r\n                  <ion-input name=\"email\" type=\"email\" formControlName=\"email\" placeholder=\"tu@email.com\" required></ion-input>\r\n                </ion-item>\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validation_messages.email\" >\r\n                    <div *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\r\n                      <ion-chip color=\"danger\">\r\n                        {{ validation.message }}\r\n                      </ion-chip>\r\n                    </div>\r\n                  </ng-container>\r\n                  <div class=\"error-message\" *ngIf=\"!registerForm.get('email').errors && registerForm.hasError('emailNotValid') && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\r\n                    <ion-chip color=\"danger\">Email existente, inténtelo con otro</ion-chip>\r\n                  </div>\r\n                  <div *ngIf=\"registerForm.controls['email'].valid\">\r\n                    <ion-chip color=\"success\">Correo electrónico válido!</ion-chip>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"formGroup\">\r\n                <ion-item>\r\n                  <ion-label color=\"tertiary\">Contraseña</ion-label>\r\n                  <ion-input name=\"pass\" type=\"password\" formControlName=\"pass\" placeholder=\"Contraseña\" required></ion-input>\r\n                </ion-item>\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validation_messages.pass\" >\r\n                    <div *ngIf=\"registerForm.get('pass').hasError(validation.type) && (registerForm.get('pass').dirty || registerForm.get('pass').touched)\">\r\n                      <ion-chip color=\"danger\">\r\n                        {{ validation.message }}\r\n                      </ion-chip>\r\n                    </div>\r\n                  </ng-container>\r\n                  <div *ngIf=\"registerForm.controls['pass'].valid\">\r\n                    <ion-chip color=\"success\">Contraseña válida!</ion-chip>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"formGroup\">\r\n                <ion-item>\r\n                  <ion-label color=\"tertiary\">Confirmar Contraseña</ion-label>\r\n                  <ion-input name=\"confirm\" type=\"password\" formControlName=\"confirm\" placeholder=\"Contraseña\" required></ion-input>\r\n                </ion-item>\r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validation_messages.confirm\" >\r\n                    <div *ngIf=\"registerForm.get('confirm').hasError(validation.type) && (registerForm.get('confirm').dirty || registerForm.get('confirm').touched)\">\r\n                      <ion-chip color=\"danger\">\r\n                        {{ validation.message }}\r\n                      </ion-chip>\r\n                    </div>\r\n                  </ng-container>\r\n                  <div class=\"error-message\" *ngIf=\"!registerForm.get('confirm').errors && registerForm.hasError('passwordNotMatch') && (registerForm.get('confirm').dirty || registerForm.get('confirm').touched)\">\r\n                    <ion-chip color=\"danger\">Las contraseñas no coinciden</ion-chip>\r\n                  </div>\r\n                  <div *ngIf=\"registerForm.controls['confirm'].valid && !registerForm.hasError('passwordNotMatch')\">\r\n                    <ion-chip color=\"success\">Las contraseñas coinciden!</ion-chip>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-list>\r\n              <div class=\"formGroup\">\r\n                  <ion-item lines=\"none\" class=\"terms\">\r\n                      <ion-checkbox color=\"tertiary\" formControlName=\"terms\" checked=\"false\" required></ion-checkbox>\r\n                      <ion-text color=\"tertiary\">Acepto los Términos y las Condiciones de Servicio</ion-text>\r\n                  </ion-item>\r\n                <div class=\"validation-errors\">\r\n                    <ng-container *ngFor=\"let validation of validation_messages.terms\" >\r\n                        <div *ngIf=\"registerForm.get('confirm').hasError(validation.type) && (registerForm.get('terms').dirty || registerForm.get('terms').touched)\">\r\n                            <ion-chip color=\"danger\">\r\n                                {{ validation.message }}\r\n                            </ion-chip>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n              </div>\r\n            <div>\r\n              <ion-button color=\"tertiary\" size=\"large\" type=\"submit\" [disabled]=\"!registerForm.valid\" expand=\"block\">REGISTRARME</ion-button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row color=\"tertiary\">\r\n          <h4>Si ya dispones de una cuenta en Erasmus, <a routerLink='/login'>inicia sesión</a>!</h4>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/models/User/userRegister.ts":
/*!*********************************************!*\
  !*** ./src/app/models/User/userRegister.ts ***!
  \*********************************************/
/*! exports provided: UserRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegister", function() { return UserRegister; });
var UserRegister = /** @class */ (function () {
    function UserRegister(email, pass, name) {
        if (email === void 0) { email = ''; }
        if (pass === void 0) { pass = ''; }
        if (name === void 0) { name = ''; }
        this.email = email;
        this.name = name;
        this.password = pass;
    }
    UserRegister.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return UserRegister;
}());



/***/ }),

/***/ "./src/app/views/auth/register/register-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/views/auth/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/views/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/views/auth/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/views/auth/register/register.page.ts");







var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/views/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/views/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody, html {\n  background: #fff;\n  color: #000;\n  font-family: monospace;\n  width: 100%;\n  height: 100%;\n}\n\n/* Web development */\n\n@media (min-width: 50rem) {\n  ion-card {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 720px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    margin-top: 100px;\n    --background: #fff;\n  }\n\n  h3 {\n    color: #7e57ff;\n    text-align: center;\n    padding: 5%;\n  }\n\n  h5 {\n    color: #7e57ff;\n    text-align: center;\n    margin-right: 5%;\n    margin-left: 5%;\n  }\n\n  ion-label {\n    margin-right: 15px;\n  }\n\n  ion-text {\n    margin-left: 15px;\n  }\n\n  ion-button {\n    margin-bottom: 15px;\n  }\n\n  ion-input, select, textarea {\n    color: #383a3e;\n  }\n}\n\n/* Narrow web and mobile development */\n\n@media (max-width: 50rem) {\n  ion-content {\n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n\n  ion-card {\n    width: 100%;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    --background: #fff;\n  }\n\n  h3 {\n    font-size: 20px;\n    text-align: center;\n    color: #7e57ff;\n    padding-top: 10%;\n  }\n\n  h5 {\n    font-size: 16px;\n    color: #7e57ff;\n    text-align: center;\n    margin-right: 5%;\n    margin-left: 5%;\n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n\n  ion-item {\n    font-size: 16px;\n    margin-right: 5%;\n  }\n\n  ion-chip {\n    margin-left: 5%;\n    margin-right: 5%;\n    padding: 5%;\n    text-align: center;\n  }\n\n  .terms {\n    padding-top: 5%;\n    padding-left: 5%;\n    padding-bottom: 5%;\n  }\n\n  ion-label {\n    margin-right: 5%;\n  }\n\n  ion-text {\n    margin-left: 5%;\n  }\n\n  ion-checkbox {\n    width: 13%;\n  }\n\n  ion-button {\n    width: 75%;\n    margin-left: 12.5%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n  }\n\n  h4 {\n    font-size: 13px;\n    text-align: left;\n    margin-top: 5%;\n    margin-left: 5%;\n    margin-bottom: 3%;\n  }\n\n  ion-input, select, textarea {\n    color: #383a3e;\n  }\n\n  ion-list {\n    max-height: 315px;\n    overflow: hidden;\n    overflow-y: auto;\n  }\n  ion-list ::-webkit-scrollbar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xcYXV0aFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFFQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBLG9CQUFBOztBQUNBO0VBQ0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0FGOztFREVBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ0NGOztFRENBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDRUY7O0VEQUE7SUFDRSxrQkFBQTtFQ0dGOztFRERBO0lBQ0UsaUJBQUE7RUNJRjs7RURGQTtJQUNFLG1CQUFBO0VDS0Y7O0VESEE7SUFDRSxjQUFBO0VDTUY7QUFDRjs7QURIQSxzQ0FBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VDS0Y7O0VESEE7SUFDRSxXQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0Esa0JBQUE7RUNNRjs7RURKQTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ09GOztFRExBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ1FGOztFRE5BO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDU0Y7O0VEUEE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNVRjs7RURSQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VDV0Y7O0VEVEE7SUFDRSxnQkFBQTtFQ1lGOztFRFZBO0lBQ0UsZUFBQTtFQ2FGOztFRFhBO0lBQ0UsVUFBQTtFQ2NGOztFRFpBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0Esa0JBQUE7RUNlRjs7RURiQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNnQkY7O0VEZEE7SUFDRSxjQUFBO0VDaUJGOztFRGZBO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDa0JGO0VEakJFO0lBQ0UsYUFBQTtFQ21CSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5LCBodG1se1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLy9mb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFdlYiBkZXZlbG9wbWVudCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTByZW0pIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA3MjBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICM3ZTU3ZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICB9XHJcbiAgaDUge1xyXG4gICAgY29sb3I6ICM3ZTU3ZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYXtcclxuICAgIGNvbG9yOiAjMzgzYTNlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTmFycm93IHdlYiBhbmQgbW9iaWxlIGRldmVsb3BtZW50ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MHJlbSkge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICB9XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzdlNTdmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgfVxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjN2U1N2ZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIH1cclxuICBpb24tY2hpcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXJtc3tcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIH1cclxuICBpb24tdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgfVxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogMTMlO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYXtcclxuICAgIGNvbG9yOiAjMzgzYTNlO1xyXG4gIH1cclxuICBpb24tbGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5LCBodG1sIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIFdlYiBkZXZlbG9wbWVudCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDUwcmVtKSB7XG4gIGlvbi1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDcyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICBoMyB7XG4gICAgY29sb3I6ICM3ZTU3ZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG5cbiAgaDUge1xuICAgIGNvbG9yOiAjN2U1N2ZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgaW9uLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIGlvbi1pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgY29sb3I6ICMzODNhM2U7XG4gIH1cbn1cbi8qIE5hcnJvdyB3ZWIgYW5kIG1vYmlsZSBkZXZlbG9wbWVudCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDUwcmVtKSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzdlNTdmZjtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzdlNTdmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGVybXMge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxuXG4gIGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICBpb24tY2hlY2tib3gge1xuICAgIHdpZHRoOiAxMyU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgfVxuXG4gIGlvbi1pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgY29sb3I6ICMzODNhM2U7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMzE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIGlvbi1saXN0IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/views/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/views/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_User_userRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/User/userRegister */ "./src/app/models/User/userRegister.ts");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, userService, router, formBuilder) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.registerForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[A-Z]+(([',. -][A-Z ])?[a-zA-Z]*)*$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
            ])),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).+$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
            ])),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).+$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
            ])),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue)
        }, { validators: this.password.bind(this)
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.validation_messages = {
            name: [
                { type: 'required', message: 'Campo obligatorio' },
                { type: 'pattern', message: 'Debe empezar con mayúsculas y no contener ni números ni espacios' },
                { type: 'minlength', message: 'Demasiado corto' }
            ],
            email: [
                { type: 'required', message: 'Campo obligatorio.' },
                { type: 'pattern', message: 'Debe ser un correo electrónico válido' }
            ],
            pass: [
                { type: 'required', message: 'Campo obligatorio.' },
                { type: 'pattern', message: 'Debe contener almenos una mayúscula, un número y un carácter especial' },
                { type: 'minlength', message: 'Mínimo 8 caracteres' }
            ],
            confirm: [
                { type: 'required', message: 'Campo obligatorio.' },
                { type: 'pattern', message: 'Debe contener almenos una mayúscula, un número y un carácter especial' },
                { type: 'minlength', message: 'Mínimo 8 caracteres' }
            ],
            terms: [
                { type: 'requiredtrue', message: 'Debes aceptar los Términos y Condiciones de Servicio' }
            ]
        };
    };
    RegisterPage.prototype.email = function (formGroup) {
        var email = formGroup.get('email');
        setTimeout(function () {
            if (email.value === 'pepito@gmail.com') {
                console.log('coinciden');
                return null;
            }
            else {
                console.log('no coinciden');
                return { emailNotValid: true };
            }
        }, 2000);
    };
    RegisterPage.prototype.password = function (formGroup) {
        var pass = formGroup.get('pass').value;
        var confirm = formGroup.get('confirm').value;
        return pass === confirm ? null : { passwordNotMatch: true };
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var user = new _models_User_userRegister__WEBPACK_IMPORTED_MODULE_5__["UserRegister"](this.registerForm.controls.email.value, this.registerForm.controls.pass.value, this.registerForm.controls.name.value);
        console.log(user);
        this.authService.register(user).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/views/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-register-register-module-es5.js.map