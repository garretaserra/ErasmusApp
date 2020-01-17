(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth/register/register.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth/register/register.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" color=\"tertiary\">\n  <ion-card>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"ion-align-self-center\" size-lg=\"11\" size-xs=\"12\">\n            <div>\n              <h3>Crea tu cuenta!</h3>\n            </div>\n            <div>\n              <h5>Haz amigos y encuentra planes para tu estancia en el extranjero</h5>\n            </div>\n            <ion-list>\n              <div class=\"formGroup\">\n                <ion-item>\n                  <ion-label color=\"tertiary\">Nombre</ion-label>\n                  <ion-input  name=\"name\" type=\"text\" formControlName=\"name\" placeholder=\"Nombre\" required></ion-input>\n                </ion-item>\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.name\" >\n                    <div *ngIf=\"registerForm.get('name').hasError(validation.type) && (registerForm.get('name').dirty || registerForm.get('name').touched)\">\n                      <ion-chip color=\"danger\">\n                        {{ validation.message }}\n                      </ion-chip>\n                    </div>\n                  </ng-container>\n                  <div *ngIf=\"registerForm.controls['name'].valid\">\n                    <ion-chip color=\"success\">Nombre válido!</ion-chip>\n                  </div>\n                </div>\n              </div>\n              <div class=\"formGroup\">\n                <ion-item>\n                  <ion-label color=\"tertiary\">Correo electrónico</ion-label>\n                  <ion-input name=\"email\" type=\"email\" formControlName=\"email\" placeholder=\"tu@email.com\" required></ion-input>\n                </ion-item>\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.email\" >\n                    <div *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n                      <ion-chip color=\"danger\">\n                        {{ validation.message }}\n                      </ion-chip>\n                    </div>\n                  </ng-container>\n                  <div class=\"error-message\" *ngIf=\"!registerForm.get('email').errors && registerForm.hasError('emailNotValid') && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n                    <ion-chip color=\"danger\">Email existente, inténtelo con otro</ion-chip>\n                  </div>\n                  <div *ngIf=\"registerForm.controls['email'].valid\">\n                    <ion-chip color=\"success\">Correo electrónico válido!</ion-chip>\n                  </div>\n                </div>\n              </div>\n              <div class=\"formGroup\">\n                <ion-item>\n                  <ion-label color=\"tertiary\">Contraseña</ion-label>\n                  <ion-input name=\"pass\" type=\"password\" formControlName=\"pass\" placeholder=\"Contraseña\" required></ion-input>\n                </ion-item>\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.pass\" >\n                    <div *ngIf=\"registerForm.get('pass').hasError(validation.type) && (registerForm.get('pass').dirty || registerForm.get('pass').touched)\">\n                      <ion-chip color=\"danger\">\n                        {{ validation.message }}\n                      </ion-chip>\n                    </div>\n                  </ng-container>\n                  <div *ngIf=\"registerForm.controls['pass'].valid\">\n                    <ion-chip color=\"success\">Contraseña válida!</ion-chip>\n                  </div>\n                </div>\n              </div>\n              <div class=\"formGroup\">\n                <ion-item>\n                  <ion-label color=\"tertiary\">Confirmar Contraseña</ion-label>\n                  <ion-input name=\"confirm\" type=\"password\" formControlName=\"confirm\" placeholder=\"Contraseña\" required></ion-input>\n                </ion-item>\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.confirm\" >\n                    <div *ngIf=\"registerForm.get('confirm').hasError(validation.type) && (registerForm.get('confirm').dirty || registerForm.get('confirm').touched)\">\n                      <ion-chip color=\"danger\">\n                        {{ validation.message }}\n                      </ion-chip>\n                    </div>\n                  </ng-container>\n                  <div class=\"error-message\" *ngIf=\"!registerForm.get('confirm').errors && registerForm.hasError('passwordNotMatch') && (registerForm.get('confirm').dirty || registerForm.get('confirm').touched)\">\n                    <ion-chip color=\"danger\">Las contraseñas no coinciden</ion-chip>\n                  </div>\n                  <div *ngIf=\"registerForm.controls['confirm'].valid && !registerForm.hasError('passwordNotMatch')\">\n                    <ion-chip color=\"success\">Las contraseñas coinciden!</ion-chip>\n                  </div>\n                </div>\n              </div>\n            </ion-list>\n              <div class=\"formGroup\">\n                  <ion-item lines=\"none\" class=\"terms\">\n                      <ion-checkbox color=\"tertiary\" formControlName=\"terms\" checked=\"false\" required></ion-checkbox>\n                      <ion-text color=\"tertiary\">Acepto los Términos y las Condiciones de Servicio</ion-text>\n                  </ion-item>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validation_messages.terms\" >\n                        <div *ngIf=\"registerForm.get('confirm').hasError(validation.type) && (registerForm.get('terms').dirty || registerForm.get('terms').touched)\">\n                            <ion-chip color=\"danger\">\n                                {{ validation.message }}\n                            </ion-chip>\n                        </div>\n                    </ng-container>\n                </div>\n              </div>\n            <div>\n              <ion-button color=\"tertiary\" size=\"large\" type=\"submit\" [disabled]=\"!registerForm.valid\" expand=\"block\">REGISTRARME</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row color=\"tertiary\">\n          <h4 class=\"final-line\">Si ya dispones de una cuenta en Erasmus, <a routerLink='/login'>inicia sesión</a>!</h4>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card>\n</ion-content>\n"

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
class UserRegister {
    constructor(email = '', pass = '', name = '') {
        this.email = email;
        this.name = name;
        this.password = pass;
    }
}
UserRegister.ctorParameters = () => [
    null,
    null,
    null
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/views/auth/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/views/auth/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/views/auth/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
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



/***/ }),

/***/ "./src/app/views/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/views/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody, html {\n  background: #fff;\n  color: #000;\n  font-family: monospace;\n  width: 100%;\n  height: 100%;\n}\n\n/* Web development */\n\n@media (min-width: 50rem) {\n  ion-card {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 720px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    --background: #fff;\n  }\n\n  h3 {\n    color: #7e57ff;\n    text-align: center;\n    padding: 5%;\n  }\n\n  h5 {\n    color: #7e57ff;\n    text-align: center;\n    margin-right: 5%;\n    margin-left: 5%;\n  }\n\n  ion-label {\n    margin-right: 15px;\n  }\n\n  ion-text {\n    margin-left: 15px;\n  }\n\n  ion-button {\n    margin-bottom: 15px;\n  }\n\n  ion-input, select, textarea {\n    color: #383a3e;\n  }\n}\n\n/* Narrow web and mobile development */\n\n@media (max-width: 50rem) {\n  ion-content {\n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n\n  ion-card {\n    width: 100%;\n    max-width: 400px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    --background: #fff;\n  }\n\n  h3 {\n    font-size: 20px;\n    text-align: center;\n    color: #7e57ff;\n    padding-top: 10%;\n  }\n\n  h5 {\n    font-size: 16px;\n    color: #7e57ff;\n    text-align: center;\n    margin-right: 5%;\n    margin-left: 5%;\n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n\n  ion-item {\n    font-size: 16px;\n    margin-right: 5%;\n  }\n\n  ion-chip {\n    margin-left: 5%;\n    margin-right: 5%;\n    padding: 3px;\n    text-align: center;\n    font-size: 8pt;\n  }\n\n  .terms {\n    padding-top: 5%;\n    padding-left: 5%;\n    padding-bottom: 5%;\n  }\n\n  ion-label {\n    margin-right: 5%;\n  }\n\n  ion-text {\n    margin-left: 5%;\n  }\n\n  ion-checkbox {\n    width: 13%;\n  }\n\n  ion-button {\n    width: 75%;\n    margin-left: 12.5%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n  }\n\n  h4 {\n    font-size: 13px;\n    text-align: left;\n    margin-top: 5%;\n    margin-left: 5%;\n    margin-bottom: 3%;\n  }\n\n  ion-input, select, textarea {\n    color: #383a3e;\n  }\n\n  ion-list {\n    max-height: 315px;\n    overflow: hidden;\n    overflow-y: auto;\n  }\n  ion-list ::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n.final-line {\n  margin: 10px auto 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2dhdHR1c28vR2l0SHViL0VyYXNtdXNBcHAvc3JjL2FwcC92aWV3cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFFQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBLG9CQUFBOztBQUNBO0VBQ0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0Esa0JBQUE7RUNBRjs7RURFQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNDRjs7RURDQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQ0VGOztFREFBO0lBQ0Usa0JBQUE7RUNHRjs7RUREQTtJQUNFLGlCQUFBO0VDSUY7O0VERkE7SUFDRSxtQkFBQTtFQ0tGOztFREhBO0lBQ0UsY0FBQTtFQ01GO0FBQ0Y7O0FESEEsc0NBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQ0tGOztFREhBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0Esa0JBQUE7RUNNRjs7RURKQTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ09GOztFRExBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ1FGOztFRE5BO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDU0Y7O0VEUEE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDVUY7O0VEUkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ1dGOztFRFRBO0lBQ0UsZ0JBQUE7RUNZRjs7RURWQTtJQUNFLGVBQUE7RUNhRjs7RURYQTtJQUNFLFVBQUE7RUNjRjs7RURaQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGtCQUFBO0VDZUY7O0VEYkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDZ0JGOztFRGRBO0lBQ0UsY0FBQTtFQ2lCRjs7RURmQTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ2tCRjtFRGpCRTtJQUNFLGFBQUE7RUNtQko7QUFDRjs7QURmQTtFQUNFLHFCQUFBO0FDaUJGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHksIGh0bWx7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8vZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogV2ViIGRldmVsb3BtZW50ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTByZW0pIHtcbiAgaW9uLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICBoMyB7XG4gICAgY29sb3I6ICM3ZTU3ZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG4gIGg1IHtcbiAgICBjb2xvcjogIzdlNTdmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDo1JTtcbiAgfVxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICBpb24tdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBpb24taW5wdXQsIHNlbGVjdCwgdGV4dGFyZWF7XG4gICAgY29sb3I6ICMzODNhM2U7XG4gIH1cbn1cblxuLyogTmFycm93IHdlYiBhbmQgbW9iaWxlIGRldmVsb3BtZW50ICovXG5AbWVkaWEgKG1heC13aWR0aDogNTByZW0pIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIH1cbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzdlNTdmZjtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM3ZTU3ZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6NSU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuICBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gIH1cbiAgaW9uLWNoaXAge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA4cHQ7XG4gIH1cbiAgLnRlcm1ze1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gIH1cbiAgaW9uLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICBpb24tY2hlY2tib3gge1xuICAgIHdpZHRoOiAxMyU7XG4gIH1cbiAgaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICB9XG4gIGlvbi1pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYXtcbiAgICBjb2xvcjogIzM4M2EzZTtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMzE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmZpbmFsLWxpbmV7XG4gIG1hcmdpbjogMTBweCBhdXRvIDVweDtcbn1cbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHksIGh0bWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogV2ViIGRldmVsb3BtZW50ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTByZW0pIHtcbiAgaW9uLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIGgzIHtcbiAgICBjb2xvcjogIzdlNTdmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNSU7XG4gIH1cblxuICBoNSB7XG4gICAgY29sb3I6ICM3ZTU3ZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cblxuICBpb24tdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgaW9uLWlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgICBjb2xvcjogIzM4M2EzZTtcbiAgfVxufVxuLyogTmFycm93IHdlYiBhbmQgbW9iaWxlIGRldmVsb3BtZW50ICovXG5AbWVkaWEgKG1heC13aWR0aDogNTByZW0pIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3ZTU3ZmY7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM3ZTU3ZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDhwdDtcbiAgfVxuXG4gIC50ZXJtcyB7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB9XG5cbiAgaW9uLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuXG4gIGlvbi1jaGVja2JveCB7XG4gICAgd2lkdGg6IDEzJTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICB9XG5cbiAgaW9uLWlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgICBjb2xvcjogIzM4M2EzZTtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgaW9uLWxpc3QgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmZpbmFsLWxpbmUge1xuICBtYXJnaW46IDEwcHggYXV0byA1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/views/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_User_userRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/User/userRegister */ "./src/app/models/User/userRegister.ts");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");







let RegisterPage = class RegisterPage {
    constructor(authService, userService, router, formBuilder) {
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
    ngOnInit() {
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
                { type: 'pattern', message: 'Debe contener almenos una minúsucla, mayúscula, un número y un carácter especial' },
                { type: 'minlength', message: 'Mínimo 8 caracteres' }
            ],
            confirm: [
                { type: 'required', message: 'Campo obligatorio.' },
                { type: 'pattern', message: 'Debe contener almenos una minúsucla, mayúscula, un número y un carácter especial' },
                { type: 'minlength', message: 'Mínimo 8 caracteres' }
            ],
            terms: [
                { type: 'requiredtrue', message: 'Debes aceptar los Términos y Condiciones de Servicio' }
            ]
        };
    }
    email(formGroup) {
        const email = formGroup.get('email');
        setTimeout(() => {
            if (email.value === 'pepito@gmail.com') {
                console.log('coinciden');
                return null;
            }
            else {
                console.log('no coinciden');
                return { emailNotValid: true };
            }
        }, 2000);
    }
    password(formGroup) {
        const { value: pass } = formGroup.get('pass');
        const { value: confirm } = formGroup.get('confirm');
        return pass === confirm ? null : { passwordNotMatch: true };
    }
    register() {
        const user = new _models_User_userRegister__WEBPACK_IMPORTED_MODULE_5__["UserRegister"](this.registerForm.controls.email.value, this.registerForm.controls.pass.value, this.registerForm.controls.name.value);
        console.log(user);
        this.authService.register(user).subscribe(res => {
            console.log(res);
            this.router.navigateByUrl('/home');
        }, err => {
            console.log(err);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/views/auth/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=views-auth-register-register-module-es2015.js.map