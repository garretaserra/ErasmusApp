(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-event-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/event/event.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/event/event.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app class=\"mobile\">\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Event</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      <form [formGroup]=\"eventForm\">\r\n        <div>\r\n          <ion-card class=\"vertical-margin border-top\" color=\"light\">\r\n            <ion-card-content>\r\n              <ion-toolbar>\r\n                <div>\r\n                  <ion-item class=\"textarea\">\r\n                    <ion-textarea name=\"event\" type=\"event\" formControlName=\"event\" placeholder=\"Write here...\" required></ion-textarea>\r\n                  </ion-item>\r\n                </div>\r\n              </ion-toolbar>\r\n              <ion-toolbar>\r\n                <div>\r\n                <ion-item class=\"textarea\">\r\n                  <ion-textarea name=\"location\" type=\"location\" formControlName=\"location\" placeholder=\"Location\" required></ion-textarea>\r\n                </ion-item>\r\n                 </div>\r\n              </ion-toolbar>\r\n              <ion-toolbar>\r\n                <div>\r\n                  <ion-item class=\"textarea\">\r\n                    <ion-textarea name=\"eventDate\" type=\"eventDate\" formControlName=\"eventDate\" placeholder=\"eventDate\" required></ion-textarea>\r\n                  </ion-item>\r\n                </div>\r\n              </ion-toolbar>\r\n              <div>\r\n              </div>\r\n              <div>\r\n                <ion-button (click)=\"event()\" expand=\"block\">Event</ion-button>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n      </form>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/models/Events/eventSend.ts":
/*!********************************************!*\
  !*** ./src/app/models/Events/eventSend.ts ***!
  \********************************************/
/*! exports provided: EventSend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSend", function() { return EventSend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EventSend {
    constructor(owner_id = '', type = '', message = '', location = '', eventDate = '') {
        this.type = type;
        this.description = message;
        this.owner = owner_id;
        this.location = location;
        this.eventDate = eventDate;
    }
}


/***/ }),

/***/ "./src/app/views/event/event-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/event/event-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageRoutingModule", function() { return EventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.page */ "./src/app/views/event/event.page.ts");




const routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_3__["EventPage"]
    }
];
let EventPageRoutingModule = class EventPageRoutingModule {
};
EventPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventPageRoutingModule);



/***/ }),

/***/ "./src/app/views/event/event.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/event/event.module.ts ***!
  \*********************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-routing.module */ "./src/app/views/event/event-routing.module.ts");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "./src/app/views/event/event.page.ts");







let EventPageModule = class EventPageModule {
};
EventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _event_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
    })
], EventPageModule);



/***/ }),

/***/ "./src/app/views/event/event.page.scss":
/*!*********************************************!*\
  !*** ./src/app/views/event/event.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/event/event.page.ts":
/*!*******************************************!*\
  !*** ./src/app/views/event/event.page.ts ***!
  \*******************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event.service */ "./src/app/views/event/event.service.ts");
/* harmony import */ var _models_Events_eventSend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Events/eventSend */ "./src/app/models/Events/eventSend.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let EventPage = class EventPage {
    constructor(formBuilder, alertCtrl, eventService, router, storage, toastCtrl) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.eventService = eventService;
        this.router = router;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.eventForm = this.formBuilder.group({
                event: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                eventDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
            });
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let storageUser = this.storage.getUser();
            if (!storageUser) {
                console.log('goto login');
                yield this.router.navigateByUrl('/login');
            }
            else {
                this.user = JSON.parse(storageUser);
                console.log('this.user: ', this.user);
                this.eventForm = this.formBuilder.group({
                    event: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                    location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                    eventDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
                });
            }
        });
    }
    event() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.eventSend = new _models_Events_eventSend__WEBPACK_IMPORTED_MODULE_5__["EventSend"](this.user._id, 'Event', this.eventForm.controls.event.value, this.eventForm.controls.location.value, this.eventForm.controls.eventDate.value);
            yield this.eventService.sendEvent(this.eventSend).subscribe(res => {
                console.log('res: ', res);
            });
        });
    }
    aggregateMember() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('/add-members-event');
        });
    }
    launchToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000
            });
            yield toast.present();
        });
    }
};
EventPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
EventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/event/event.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event.page.scss */ "./src/app/views/event/event.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__["StorageComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], EventPage);



/***/ }),

/***/ "./src/app/views/event/event.service.ts":
/*!**********************************************!*\
  !*** ./src/app/views/event/event.service.ts ***!
  \**********************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let EventService = class EventService {
    constructor(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.EVENT_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUri;
        this.homeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    sendEvent(event) {
        return this.httpClient.post(`${this.EVENT_SERVER_ADDRESS}/event`, {
            event
        });
    }
};
EventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], EventService);



/***/ })

}]);
//# sourceMappingURL=views-event-event-module-es2015.js.map