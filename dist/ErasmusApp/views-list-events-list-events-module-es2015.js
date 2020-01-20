(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-list-events-list-events-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/list-events/list-events.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/list-events/list-events.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Events</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-card class=\"vertical-margin\" *ngFor=\"let post of this.events\">\r\n        <ion-card-header color=\"light\" class=\"text-center\" style=\"font-size: 22px\">\r\n          {{post.description}}\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item>\r\n            <ion-button class=\"middle-card\" (click)=\"changePageComments(this.post._id)\">View event</ion-button>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/views/list-events/list-events-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/list-events/list-events-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListEventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsPageRoutingModule", function() { return ListEventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-events.page */ "./src/app/views/list-events/list-events.page.ts");




const routes = [
    {
        path: '',
        component: _list_events_page__WEBPACK_IMPORTED_MODULE_3__["ListEventsPage"]
    }
];
let ListEventsPageRoutingModule = class ListEventsPageRoutingModule {
};
ListEventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListEventsPageRoutingModule);



/***/ }),

/***/ "./src/app/views/list-events/list-events.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/list-events/list-events.module.ts ***!
  \*********************************************************/
/*! exports provided: ListEventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsPageModule", function() { return ListEventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-events-routing.module */ "./src/app/views/list-events/list-events-routing.module.ts");
/* harmony import */ var _list_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-events.page */ "./src/app/views/list-events/list-events.page.ts");







let ListEventsPageModule = class ListEventsPageModule {
};
ListEventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_events_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListEventsPageRoutingModule"]
        ],
        declarations: [_list_events_page__WEBPACK_IMPORTED_MODULE_6__["ListEventsPage"]]
    })
], ListEventsPageModule);



/***/ }),

/***/ "./src/app/views/list-events/list-events.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/views/list-events/list-events.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGlzdC1ldmVudHMvQzpcXFVzZXJzXFxzZ2FsZVxcV2Vic3Rvcm1Qcm9qZWN0c1xcRXJhc211c0FwcC9zcmNcXGFwcFxcdmlld3NcXGxpc3QtZXZlbnRzXFxsaXN0LWV2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xpc3QtZXZlbnRzL2xpc3QtZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9saXN0LWV2ZW50cy9saXN0LWV2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsImlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/list-events/list-events.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/list-events/list-events.page.ts ***!
  \*******************************************************/
/*! exports provided: ListEventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsPage", function() { return ListEventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User/user.service */ "./src/app/models/User/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _list_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-events.service */ "./src/app/views/list-events/list-events.service.ts");







let ListEventsPage = class ListEventsPage {
    constructor(userService, eventService, router, menuCtrl, storage, route, alertCtrl) {
        this.userService = userService;
        this.eventService = eventService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.route = route;
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
            this._id = this.route.snapshot.paramMap.get('id');
            yield this.eventService.getEvents(this._id).subscribe(res => {
                console.log('response', res);
                const response = res;
                this.events = response.events;
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
                            this.eventService.deleteEvents(id).subscribe(res => {
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
            yield this.router.navigateByUrl('/profile-event/' + `${idPost}`);
        });
    }
};
ListEventsPage.ctorParameters = () => [
    { type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _list_events_service__WEBPACK_IMPORTED_MODULE_6__["ListEventsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ListEventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-events.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/list-events/list-events.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-events.page.scss */ "./src/app/views/list-events/list-events.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_User_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _list_events_service__WEBPACK_IMPORTED_MODULE_6__["ListEventsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ListEventsPage);



/***/ }),

/***/ "./src/app/views/list-events/list-events.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/list-events/list-events.service.ts ***!
  \**********************************************************/
/*! exports provided: ListEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsService", function() { return ListEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let ListEventsService = class ListEventsService {
    constructor(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.POST_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUri;
        this.homeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    getEvents(id) {
        return this.httpClient.get(`${this.POST_SERVER_ADDRESS}/user/events/` + `${id}` + `/0`);
    }
    deleteEvents(id) {
        return this.httpClient.delete(`${this.POST_SERVER_ADDRESS}/event/` + `${id}`);
    }
};
ListEventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
ListEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], ListEventsService);



/***/ })

}]);
//# sourceMappingURL=views-list-events-list-events-module-es2015.js.map