(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profile-event-profile-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile-event/profile-event.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile-event/profile-event.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app class=\"mobile\">\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Event</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n        <div *ngIf=\"event\">\r\n          <ion-card class=\"vertical-margin border-top\" color=\"medium\">\r\n            <ion-card-content>\r\n              <ion-toolbar class=\"ion-text-center\" color=\"light\">\r\n                <h2><strong>{{event.description}}</strong></h2>\r\n              </ion-toolbar>\r\n              <ion-toolbar class=\"ion-text-center\" color=\"light\">\r\n                <ion-icon name=\"pin\"></ion-icon>{{event.location}}\r\n              </ion-toolbar>\r\n              <ion-toolbar class=\"ion-text-center\" color=\"light\">\r\n                {{event.eventDate}}\r\n              </ion-toolbar>\r\n              <ion-card color=\"light\">\r\n                <ion-card-title class=\"ion-text-center\"> Members</ion-card-title>\r\n                <div *ngFor=\"let user of this.event.members\">\r\n                <ion-card-content>\r\n                  <ion-toolbar class=\"ion-text-center\">\r\n                    {{user.name}}\r\n                  </ion-toolbar>\r\n                </ion-card-content>\r\n                </div>\r\n              </ion-card>\r\n              <div *ngIf=\"check === 'no'; else other\">\r\n                <ion-button expand=\"block\" (click)=\"asistir()\">Asistir</ion-button>\r\n              </div>\r\n              <ng-template #other>\r\n                <ion-button expand=\"block\" (click)=\"leave()\">Leave</ion-button>\r\n              </ng-template>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/views/profile-event/profile-event-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/profile-event/profile-event-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileEventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEventPageRoutingModule", function() { return ProfileEventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-event.page */ "./src/app/views/profile-event/profile-event.page.ts");




const routes = [
    {
        path: '',
        component: _profile_event_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEventPage"]
    }
];
let ProfileEventPageRoutingModule = class ProfileEventPageRoutingModule {
};
ProfileEventPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileEventPageRoutingModule);



/***/ }),

/***/ "./src/app/views/profile-event/profile-event.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/profile-event/profile-event.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfileEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEventPageModule", function() { return ProfileEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-event-routing.module */ "./src/app/views/profile-event/profile-event-routing.module.ts");
/* harmony import */ var _profile_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-event.page */ "./src/app/views/profile-event/profile-event.page.ts");







let ProfileEventPageModule = class ProfileEventPageModule {
};
ProfileEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_event_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEventPageRoutingModule"]
        ],
        declarations: [_profile_event_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEventPage"]]
    })
], ProfileEventPageModule);



/***/ }),

/***/ "./src/app/views/profile-event/profile-event.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/profile-event/profile-event.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-title.ion-text-center {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZmlsZS1ldmVudC9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xccHJvZmlsZS1ldmVudFxccHJvZmlsZS1ldmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUtZXZlbnQvcHJvZmlsZS1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9maWxlLWV2ZW50L3Byb2ZpbGUtZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUuaW9uLXRleHQtY2VudGVye1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiIsImlvbi1jYXJkLXRpdGxlLmlvbi10ZXh0LWNlbnRlciB7XG4gIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/profile-event/profile-event.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/profile-event/profile-event.page.ts ***!
  \***********************************************************/
/*! exports provided: ProfileEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEventPage", function() { return ProfileEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _profile_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-event.service */ "./src/app/views/profile-event/profile-event.service.ts");







let ProfileEventPage = class ProfileEventPage {
    constructor(formBuilder, alertCtrl, profileEventService, router, route, storage, toastCtrl) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.profileEventService = profileEventService;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let storageUser = this.storage.getUser();
            this.user = JSON.parse(storageUser);
            console.log('this.user: ', this.user);
            yield this.getEvent();
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
                yield this.getEvent();
            }
        });
    }
    getEvent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._idEvent = this.route.snapshot.paramMap.get('id');
            yield this.profileEventService.getEvent(this._idEvent).subscribe(res => {
                console.log(res.event);
                this.event = res.event;
                this.checkMember();
            });
        });
    }
    checkMember() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let count = 0;
            console.log('this.event: ', this.event);
            if (this.event.members === null) {
                this.check = 'no';
            }
            else {
                this.event.members.forEach(a => {
                    if (a._id === this.user._id) {
                        this.check = 'yes';
                        count = 1;
                    }
                });
                if (count !== 1) {
                    this.check = 'no';
                }
            }
        });
    }
    asistir() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.profileEventService.asistir(this.event._id, this.user._id).subscribe(res => {
                this.router.navigateByUrl('/profile-event/' + `${this.event._id}`);
                console.log(res);
            }, error => {
                if (error.status === 304) {
                    this.launchToast('You are already in');
                }
            });
        });
    }
    leave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.profileEventService.leave(this.event._id, this.user._id).subscribe(res => {
                this.launchToast('You leave successfully');
                console.log(res);
            }, error => {
                if (error.status === 304) {
                    this.launchToast('You not are in');
                }
            });
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
ProfileEventPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _profile_event_service__WEBPACK_IMPORTED_MODULE_6__["ProfileEventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
ProfileEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile-event/profile-event.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-event.page.scss */ "./src/app/views/profile-event/profile-event.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _profile_event_service__WEBPACK_IMPORTED_MODULE_6__["ProfileEventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], ProfileEventPage);



/***/ }),

/***/ "./src/app/views/profile-event/profile-event.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/profile-event/profile-event.service.ts ***!
  \**************************************************************/
/*! exports provided: ProfileEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEventService", function() { return ProfileEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let ProfileEventService = class ProfileEventService {
    constructor(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.EVENT_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUri;
        this.homeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    getEvent(id) {
        return this.httpClient.get(`${this.EVENT_SERVER_ADDRESS}/event/` + `${id}`);
    }
    asistir(idEvent, idUser) {
        return this.httpClient.put(`${this.EVENT_SERVER_ADDRESS}/event/join`, {
            eventId: idEvent,
            userId: idUser
        });
    }
    leave(idEvent, idUser) {
        return this.httpClient.put(`${this.EVENT_SERVER_ADDRESS}/event/leave`, {
            eventId: idEvent,
            userId: idUser
        });
    }
};
ProfileEventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
ProfileEventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], ProfileEventService);



/***/ })

}]);
//# sourceMappingURL=views-profile-event-profile-event-module-es2015.js.map