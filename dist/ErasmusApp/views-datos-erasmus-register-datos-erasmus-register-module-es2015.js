(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-datos-erasmus-register-datos-erasmus-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/datos-erasmus-register/datos-erasmus-register.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/datos-erasmus-register/datos-erasmus-register.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app class=\"mobile\">\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title slot=\"start\">Erasmus Info</ion-title>\r\n      </ion-toolbar>\r\n      <ion-text class=\"toolbar-buttons\">Hi! To enjoy the full experience of Erasmus, you should fill these fields to improve people search...</ion-text>\r\n    </ion-header>\r\n    <ion-content>\r\n      <form [formGroup]=\"erasmusForm\">\r\n        <div>\r\n          <ion-card class=\"vertical-margin border-top\">\r\n            <ion-item class=\"textarea\">\r\n              <ion-textarea name=\"age\" type=\"text\" formControlName=\"age\" placeholder=\"Edad\" required></ion-textarea>\r\n            </ion-item>\r\n            <ion-item class=\"textarea\">\r\n              <ion-textarea name=\"course\" type=\"text\" formControlName=\"course\" placeholder=\"Curso actual\" required></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Home University</ion-label>\r\n              <ion-select [interfaceOptions]=\"customAlertHomeOptions\" interface=\"alert\" class=\"ion-text-lg-wrap\" formControlName=\"homeUniversity\"\r\n                          multiple=\"false\" cancelText=\"Cancel\" okText=\"Okay!\" required placeholder=\"Select One\">\r\n                <ion-select-option *ngFor=\"let university of universities\">{{university.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Destination University</ion-label>\r\n              <ion-select [interfaceOptions]=\"customAlertDestOptions\" interface=\"alert\" class=\"ion-text-lg-wrap\" formControlName=\"destUniversity\"\r\n                          multiple=\"false\" cancelText=\"Cancel\" okText=\"Okay!\" placeholder=\"Select One\">\r\n                <div *ngIf=\"homeUniversity;else noHomeUniversity\">\r\n                  <div *ngFor=\"let university of universities\">\r\n                    <ion-select-option *ngIf=\"university.name!==this.homeUniversity\" >\r\n                      {{university.name}}\r\n                    </ion-select-option>\r\n                  </div>\r\n                </div>\r\n                <ng-template #noHomeUniversity>\r\n                  <ion-text>Select first home university</ion-text>\r\n                </ng-template>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Languages</ion-label>\r\n              <ion-select formControlName=\"languages\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Okay!\" required>\r\n                <ion-select-option *ngFor=\"let language of languages\">{{language}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div>\r\n              <ion-button [disabled]=\"!erasmusForm.valid\" (click)=\"add()\" color=\"medium\" expand=\"block\">Add</ion-button>\r\n            </div>\r\n            <div>\r\n              <ion-button (click)=\"changePage()\" color=\"medium\" expand=\"block\">Do it later</ion-button>\r\n            </div>\r\n          </ion-card>\r\n        </div>\r\n      </form>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/views/datos-erasmus-register/datos-erasmus-register-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/datos-erasmus-register/datos-erasmus-register-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DatosErasmusRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosErasmusRegisterPageRoutingModule", function() { return DatosErasmusRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _datos_erasmus_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datos-erasmus-register.page */ "./src/app/views/datos-erasmus-register/datos-erasmus-register.page.ts");




const routes = [
    {
        path: '',
        component: _datos_erasmus_register_page__WEBPACK_IMPORTED_MODULE_3__["DatosErasmusRegisterPage"]
    }
];
let DatosErasmusRegisterPageRoutingModule = class DatosErasmusRegisterPageRoutingModule {
};
DatosErasmusRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatosErasmusRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/views/datos-erasmus-register/datos-erasmus-register.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/datos-erasmus-register/datos-erasmus-register.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DatosErasmusRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosErasmusRegisterPageModule", function() { return DatosErasmusRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _datos_erasmus_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos-erasmus-register-routing.module */ "./src/app/views/datos-erasmus-register/datos-erasmus-register-routing.module.ts");
/* harmony import */ var _datos_erasmus_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datos-erasmus-register.page */ "./src/app/views/datos-erasmus-register/datos-erasmus-register.page.ts");







let DatosErasmusRegisterPageModule = class DatosErasmusRegisterPageModule {
};
DatosErasmusRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _datos_erasmus_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatosErasmusRegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_datos_erasmus_register_page__WEBPACK_IMPORTED_MODULE_6__["DatosErasmusRegisterPage"]]
    })
], DatosErasmusRegisterPageModule);



/***/ }),

/***/ "./src/app/views/datos-erasmus-register/datos-erasmus-register.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/datos-erasmus-register/datos-erasmus-register.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-buttons {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  margin: 5%;\n}\n\nion-select-option {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGF0b3MtZXJhc211cy1yZWdpc3Rlci9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xcZGF0b3MtZXJhc211cy1yZWdpc3RlclxcZGF0b3MtZXJhc211cy1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2RhdG9zLWVyYXNtdXMtcmVnaXN0ZXIvZGF0b3MtZXJhc211cy1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RhdG9zLWVyYXNtdXMtcmVnaXN0ZXIvZGF0b3MtZXJhc211cy1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qtb3B0aW9uIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuIiwiLnRvb2xiYXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1JTtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/datos-erasmus-register/datos-erasmus-register.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/datos-erasmus-register/datos-erasmus-register.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DatosErasmusRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosErasmusRegisterPage", function() { return DatosErasmusRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _datos_erasmus_datos_erasmus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datos-erasmus/datos-erasmus.service */ "./src/app/views/datos-erasmus/datos-erasmus.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _models_language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/language */ "./src/app/models/language.ts");
/* harmony import */ var _models_User_userErasmus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/User/userErasmus */ "./src/app/models/User/userErasmus.ts");









let DatosErasmusRegisterPage = class DatosErasmusRegisterPage {
    constructor(formBuilder, erasmusService, router, menuCtrl, alertCtrl, route, storage, toastCtrl) {
        this.formBuilder = formBuilder;
        this.erasmusService = erasmusService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.customAlertHomeOptions = {
            header: 'Home university',
            subHeader: 'Select your home university',
            message: '',
            translucent: true
        };
        this.customAlertDestOptions = {
            header: 'Destination university',
            subHeader: 'Select your destination university',
            message: 'It is not mandatory if you are not abroad yet!',
            translucent: true
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.erasmusForm = this.formBuilder.group({
                age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                course: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                homeUniversity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                destUniversity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
            });
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
            this._id = this.route.snapshot.paramMap.get('id');
            yield this.erasmusService.getUniversities().subscribe(res => {
                this.universities = res.universities;
            });
            this.languages = [
                'Spanish',
                'French',
                'Italian',
                'German',
                'English'
            ];
            this.onChanges();
        });
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.languages = this.erasmusForm.controls.languages.value;
            let spokenLanguages = [];
            this.languages.forEach(language => { spokenLanguages.push(new _models_language__WEBPACK_IMPORTED_MODULE_7__["Language"](language)); });
            console.log(spokenLanguages);
            if (this.erasmusForm.controls.destUniversity.value)
                this.destUniversity = this.erasmusForm.controls.destUniversity.value.split(',')[0];
            yield this.erasmusService.sendInformation(this._id, new _models_User_userErasmus__WEBPACK_IMPORTED_MODULE_8__["UserErasmus"](this.erasmusForm.controls.age.value, this.erasmusForm.controls.course.value, this.homeUniversity, this.destUniversity, spokenLanguages)).subscribe(res => console.log(res));
        });
    }
    onChanges() {
        this.erasmusForm.get('homeUniversity').valueChanges.subscribe(val => {
            this.homeUniversity = val.split(',')[0];
        });
    }
    changePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/login');
        });
    }
};
DatosErasmusRegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _datos_erasmus_datos_erasmus_service__WEBPACK_IMPORTED_MODULE_3__["DatosErasmusService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
DatosErasmusRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datos-erasmus-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datos-erasmus-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/datos-erasmus-register/datos-erasmus-register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datos-erasmus-register.page.scss */ "./src/app/views/datos-erasmus-register/datos-erasmus-register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _datos_erasmus_datos_erasmus_service__WEBPACK_IMPORTED_MODULE_3__["DatosErasmusService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], DatosErasmusRegisterPage);



/***/ })

}]);
//# sourceMappingURL=views-datos-erasmus-register-datos-erasmus-register-module-es2015.js.map