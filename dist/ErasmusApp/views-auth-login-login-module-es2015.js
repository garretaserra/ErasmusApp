(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth/login/login.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth/login/login.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" color=\"tertiary\">\n  <ion-card class=\"item item-text-wrap\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n    <ion-grid>\n      <ion-row color=\"tertiary\" class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-lg=\"11\" size-xs=\"12\">\n          <div>\n            <h3 class=\"no-margin\">Inicia sesión para entrar en Erasmus!</h3>\n          </div>\n              <ion-item class=\"ion-padding-bottom\">\n                <ion-label color=\"tertiary\">Correo electrónico</ion-label>\n                <ion-input name=\"email\" type=\"email\" formControlName=\"email\" placeholder=\"tu@email.com\" required></ion-input>\n              </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\" >\n              <div *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                <ion-chip color=\"danger\">\n                  {{ validation.message }}\n                </ion-chip>\n              </div>\n            </ng-container>\n            <div *ngIf=\"loginForm.controls['email'].valid\">\n              <ion-chip color=\"success\">Correo electrónico válido!</ion-chip>\n            </div>\n          </div>\n            <ion-item class=\"ion-padding-bottom\">\n              <ion-label color=\"tertiary\">Contraseña</ion-label>\n              <ion-input name=\"password\" type=\"password\" formControlName=\"password\" placeholder=\"Password\" required></ion-input>\n            </ion-item>\n          <div>\n            <ion-button size=\"large\" color=\"tertiary\" type=\"submit\" [disabled]=\"loginForm.invalid\" expand=\"block\">LOGIN</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row color=\"tertiary\">\n        <h4>Si todavía no tienes una cuenta en Erasmus, <a routerLink='/register'>regístrate</a>!</h4>\n      </ion-row>\n    </ion-grid>\n  </form>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/models/User/userLogin.ts":
/*!******************************************!*\
  !*** ./src/app/models/User/userLogin.ts ***!
  \******************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
class UserLogin {
    constructor(email = '', pass = '') {
        this.email = email;
        this.password = pass;
    }
}
UserLogin.ctorParameters = () => [
    null,
    null
];


/***/ }),

/***/ "./src/app/views/auth/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/views/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/views/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/views/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/views/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/views/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/views/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/views/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody, html {\n  background: #fff;\n  color: #000;\n  font-family: monospace;\n  width: 100%;\n  height: 100%;\n}\n\nion-content {\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\nion-card {\n  width: 100%;\n  max-width: 400px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  --background: #fff;\n}\n\nh3 {\n  font-size: 20px;\n  text-align: center;\n  color: #7e57ff;\n  padding-top: 10%;\n  padding-bottom: 5%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nh4 {\n  font-size: 13px;\n  text-align: left;\n  margin-top: 5%;\n  margin-left: 5%;\n  margin-bottom: 3%;\n}\n\nion-item {\n  font-size: 16px;\n  margin-right: 5%;\n}\n\nion-chip {\n  margin-left: 5%;\n  margin-right: 5%;\n  padding: 5%;\n  text-align: center;\n}\n\nion-label {\n  margin-right: 5%;\n}\n\nion-text {\n  margin-left: 5%;\n}\n\nion-button {\n  width: 75%;\n  margin-left: 12.5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n}\n\nion-input, select, textarea {\n  color: #383a3e;\n}\n\n.no-margin {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2dhdHR1c28vR2l0SHViL0VyYXNtdXNBcHAvc3JjL2FwcC92aWV3cy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3MvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFFQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7QUNTRjs7QURQQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSxjQUFBO0FDV0Y7O0FEUkE7RUFDRSxTQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmJvZHksIGh0bWx7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8vZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3ZTU3ZmY7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OjEwJTtcbn1cbmg0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cbmlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuaW9uLWNoaXAge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHBhZGRpbmc6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuaW9uLXRleHQge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taW5wdXQsIHNlbGVjdCwgdGV4dGFyZWF7XG4gIGNvbG9yOiAjMzgzYTNlO1xufVxuXG4ubm8tbWFyZ2lue1xuICBtYXJnaW46IDA7XG59XG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5LCBodG1sIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjN2U1N2ZmO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbmlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG5pb24tY2hpcCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgcGFkZGluZzogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuaW9uLXRleHQge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogMTIuNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgY29sb3I6ICMzODNhM2U7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/views/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/views/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_User_userLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/User/userLogin */ "./src/app/models/User/userLogin.ts");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../storage/storage.component */ "./src/app/storage/storage.component.ts");








let LoginPage = class LoginPage {
    constructor(authService, userService, router, formBuilder, storage) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.validation_messages = {
                email: [
                    { type: 'required', message: 'Campo obligatorio.' },
                    { type: 'pattern', message: 'Debe ser un correo electrónico válido' }
                ]
            };
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let storageUser = this.storage.getUser();
            //If user is present redirect to home
            if (!!storageUser) {
                yield this.router.navigateByUrl('/home');
            }
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.login(new _models_User_userLogin__WEBPACK_IMPORTED_MODULE_5__["UserLogin"](this.loginForm.controls.email.value, this.loginForm.controls.password.value)).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const response = res;
                this.user = response.user;
                this.user.jwt = response.jwt;
                //Save info locally
                yield this.storage.saveToken(this.user.jwt);
                yield this.storage.saveUser(JSON.stringify(this.user));
                yield this.router.navigateByUrl('/home');
            }), err => {
                console.log(err);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__["StorageComponent"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/views/auth/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _models_User_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_7__["StorageComponent"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=views-auth-login-login-module-es2015.js.map