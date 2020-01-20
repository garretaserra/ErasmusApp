function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-datos-erasmus-datos-erasmus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/datos-erasmus/datos-erasmus.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/datos-erasmus/datos-erasmus.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsDatosErasmusDatosErasmusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app class=\"mobile\">\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title slot=\"start\">Erasmus Info</ion-title>\r\n      </ion-toolbar>\r\n        <ion-text class=\"toolbar-buttons\">Hi! To enjoy the full experience of Erasmus, you should fill these fields to improve people search...</ion-text>\r\n    </ion-header>\r\n    <ion-content>\r\n      <form [formGroup]=\"erasmusForm\">\r\n        <div>\r\n          <ion-card class=\"vertical-margin border-top\">\r\n              <ion-item class=\"textarea\">\r\n                <ion-textarea name=\"age\" type=\"text\" formControlName=\"age\" placeholder=\"Edad\" required></ion-textarea>\r\n              </ion-item>\r\n              <ion-item class=\"textarea\">\r\n                <ion-textarea name=\"course\" type=\"text\" formControlName=\"course\" placeholder=\"Curso actual\" required></ion-textarea>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>Home University</ion-label>\r\n                <ion-select [interfaceOptions]=\"customAlertHomeOptions\" interface=\"alert\" class=\"ion-text-lg-wrap\" formControlName=\"homeUniversity\"\r\n                            multiple=\"false\" cancelText=\"Cancel\" okText=\"Okay!\" required placeholder=\"Select One\">\r\n                  <ion-select-option *ngFor=\"let university of universities\">{{university.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item>\r\n                  <ion-label>Destination University</ion-label>\r\n                  <ion-select [interfaceOptions]=\"customAlertDestOptions\" interface=\"alert\" class=\"ion-text-lg-wrap\" formControlName=\"destUniversity\"\r\n                              multiple=\"false\" cancelText=\"Cancel\" okText=\"Okay!\" placeholder=\"Select One\">\r\n                      <div *ngIf=\"homeUniversity;else noHomeUniversity\">\r\n                          <div *ngFor=\"let university of universities\">\r\n                              <ion-select-option *ngIf=\"university.name!==this.homeUniversity\" >\r\n                                  {{university.name}}\r\n                              </ion-select-option>\r\n                          </div>\r\n                      </div>\r\n                      <ng-template #noHomeUniversity>\r\n                          <ion-text>Select first home university</ion-text>\r\n                      </ng-template>\r\n                  </ion-select>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>Languages</ion-label>\r\n                <ion-select formControlName=\"languages\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Okay!\" required>\r\n                  <ion-select-option *ngFor=\"let language of languages\">{{language}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            <div>\r\n              <ion-button [disabled]=\"!erasmusForm.valid\" (click)=\"add()\" color=\"medium\" expand=\"block\">Add</ion-button>\r\n            </div>\r\n          </ion-card>\r\n        </div>\r\n      </form>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/views/datos-erasmus/datos-erasmus-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/datos-erasmus/datos-erasmus-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DatosErasmusPageRoutingModule */

  /***/
  function srcAppViewsDatosErasmusDatosErasmusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosErasmusPageRoutingModule", function () {
      return DatosErasmusPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _datos_erasmus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./datos-erasmus.page */
    "./src/app/views/datos-erasmus/datos-erasmus.page.ts");

    var routes = [{
      path: '',
      component: _datos_erasmus_page__WEBPACK_IMPORTED_MODULE_3__["DatosErasmusPage"]
    }];

    var DatosErasmusPageRoutingModule = function DatosErasmusPageRoutingModule() {
      _classCallCheck(this, DatosErasmusPageRoutingModule);
    };

    DatosErasmusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DatosErasmusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/datos-erasmus/datos-erasmus.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/datos-erasmus/datos-erasmus.module.ts ***!
    \*************************************************************/

  /*! exports provided: DatosErasmusPageModule */

  /***/
  function srcAppViewsDatosErasmusDatosErasmusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosErasmusPageModule", function () {
      return DatosErasmusPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _datos_erasmus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./datos-erasmus-routing.module */
    "./src/app/views/datos-erasmus/datos-erasmus-routing.module.ts");
    /* harmony import */


    var _datos_erasmus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./datos-erasmus.page */
    "./src/app/views/datos-erasmus/datos-erasmus.page.ts");

    var DatosErasmusPageModule = function DatosErasmusPageModule() {
      _classCallCheck(this, DatosErasmusPageModule);
    };

    DatosErasmusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _datos_erasmus_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatosErasmusPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_datos_erasmus_page__WEBPACK_IMPORTED_MODULE_6__["DatosErasmusPage"]]
    })], DatosErasmusPageModule);
    /***/
  },

  /***/
  "./src/app/views/datos-erasmus/datos-erasmus.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/views/datos-erasmus/datos-erasmus.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsDatosErasmusDatosErasmusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-buttons {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  margin: 5%;\n}\n\nion-select-option {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGF0b3MtZXJhc211cy9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xcZGF0b3MtZXJhc211c1xcZGF0b3MtZXJhc211cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2RhdG9zLWVyYXNtdXMvZGF0b3MtZXJhc211cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RhdG9zLWVyYXNtdXMvZGF0b3MtZXJhc211cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qtb3B0aW9uIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuIiwiLnRvb2xiYXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1JTtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/views/datos-erasmus/datos-erasmus.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/datos-erasmus/datos-erasmus.page.ts ***!
    \***********************************************************/

  /*! exports provided: DatosErasmusPage */

  /***/
  function srcAppViewsDatosErasmusDatosErasmusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosErasmusPage", function () {
      return DatosErasmusPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../storage/storage.component */
    "./src/app/storage/storage.component.ts");
    /* harmony import */


    var _datos_erasmus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./datos-erasmus.service */
    "./src/app/views/datos-erasmus/datos-erasmus.service.ts");
    /* harmony import */


    var _models_User_userErasmus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/User/userErasmus */
    "./src/app/models/User/userErasmus.ts");
    /* harmony import */


    var _models_language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/language */
    "./src/app/models/language.ts");

    var DatosErasmusPage =
    /*#__PURE__*/
    function () {
      function DatosErasmusPage(formBuilder, erasmusService, router, menuCtrl, alertCtrl, storage, toastCtrl) {
        _classCallCheck(this, DatosErasmusPage);

        this.formBuilder = formBuilder;
        this.erasmusService = erasmusService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
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

      _createClass(DatosErasmusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.erasmusForm = this.formBuilder.group({
                      age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                      course: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                      homeUniversity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                      destUniversity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                      languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
                    });
                    this.load();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.load();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "load",
        value: function load() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var storageUser;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    storageUser = this.storage.getUser();

                    if (storageUser) {
                      _context3.next = 7;
                      break;
                    }

                    console.log('goto login');
                    _context3.next = 5;
                    return this.router.navigateByUrl('/login');

                  case 5:
                    _context3.next = 11;
                    break;

                  case 7:
                    this.user = JSON.parse(storageUser);
                    console.log('this.user: ', this.user);
                    _context3.next = 11;
                    return this.storage.saveUser(storageUser);

                  case 11:
                    _context3.next = 13;
                    return this.erasmusService.getUniversities().subscribe(function (res) {
                      _this.universities = res.universities;
                    });

                  case 13:
                    this.languages = ['Spanish', 'French', 'Italian', 'German', 'English'];
                    this.onChanges();

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "add",
        value: function add() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var spokenLanguages;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.languages = this.erasmusForm.controls.languages.value;
                    spokenLanguages = [];
                    this.languages.forEach(function (language) {
                      spokenLanguages.push(new _models_language__WEBPACK_IMPORTED_MODULE_8__["Language"](language));
                    });
                    console.log(spokenLanguages);
                    if (this.erasmusForm.controls.destUniversity.value) this.destUniversity = this.erasmusForm.controls.destUniversity.value.split(',')[0];
                    _context4.next = 7;
                    return this.erasmusService.sendInformation(this.user._id, new _models_User_userErasmus__WEBPACK_IMPORTED_MODULE_7__["UserErasmus"](this.erasmusForm.controls.age.value, this.erasmusForm.controls.course.value, this.homeUniversity, this.destUniversity, spokenLanguages)).subscribe(function (res) {
                      return console.log(res);
                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onChanges",
        value: function onChanges() {
          var _this2 = this;

          this.erasmusForm.get('homeUniversity').valueChanges.subscribe(function (val) {
            _this2.homeUniversity = val.split(',')[0];
          });
        }
      }]);

      return DatosErasmusPage;
    }();

    DatosErasmusPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _datos_erasmus_service__WEBPACK_IMPORTED_MODULE_6__["DatosErasmusService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    DatosErasmusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-datos-erasmus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./datos-erasmus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/datos-erasmus/datos-erasmus.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./datos-erasmus.page.scss */
      "./src/app/views/datos-erasmus/datos-erasmus.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _datos_erasmus_service__WEBPACK_IMPORTED_MODULE_6__["DatosErasmusService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], DatosErasmusPage);
    /***/
  }
}]);
//# sourceMappingURL=views-datos-erasmus-datos-erasmus-module-es5.js.map