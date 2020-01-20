function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n    <app-notification></app-notification>\r\n    <ion-menu type=\"overlay\" class=\"mobile-menu\">\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-menu-toggle *ngFor=\"let p of appPages\">\r\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{p.title}}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle>\r\n            <ion-item (click)=\"logOff()\">\r\n              <ion-icon slot=\"start\" name='power'></ion-icon>\r\n              <ion-label>\r\n                Log Off\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/storage/storage.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storage/storage.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStorageStorageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  storage works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app class=\"mobile\">\r\n  <div class=\"ion-page\" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title slot=\"start\">Home</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      <form [formGroup]=\"homeForm\">\r\n        <div>\r\n          <ion-card class=\"vertical-margin \">\r\n            <div>\r\n              <ion-item class=\"textarea\">\r\n                <ion-textarea name=\"post\" type=\"post\" formControlName=\"post\" placeholder=\"Write here if is a post and click button, if is a event, only click button.\" required></ion-textarea>\r\n              </ion-item>\r\n            </div>\r\n            <div>\r\n              <ionalert>\r\n                <section>\r\n                  <ion-button (click)=\"alert()\" color=\"medium\" expand=\"block\">Post / Event</ion-button>\r\n                </section>\r\n              </ionalert>\r\n            </div>\r\n          </ion-card>\r\n          <div *ngIf=\"activity\">\r\n            <ion-card color=\"light\" class=\"vertical-margin\" >\r\n              <ion-card-title class=\"ion-text-center\">ACTIVITY</ion-card-title>\r\n              <div *ngFor=\"let thing of activity\">\r\n                <ion-card color=\"medium\">\r\n                  <ion-card-content  *ngIf=\"thing.type == 'Post';else other_content\">\r\n                    <ion-toolbar class=\"main-content\" color=\"light\">\r\n                      <ion-item color=\"light\" >\r\n                      <ion-avatar >\r\n                        <img *ngIf=\"thing.owner.profilePhoto\" src=\"{{thing.owner.profilePhoto}}\"/>\r\n                      </ion-avatar>\r\n                        <ion-label>\r\n                          <h3>{{thing.owner.name}}</h3>\r\n                        </ion-label>\r\n                      </ion-item>\r\n                    </ion-toolbar>\r\n                    <ion-item >\r\n                      <ion-label class=\"ion-text-center\">\r\n                      <h4>{{thing.message}}</h4>\r\n                      </ion-label>\r\n                    </ion-item>\r\n                    <ion-item color=\"light\">\r\n                      <ion-col class=\"send_form_input\">\r\n                        <ion-textarea #box placeholder=\"Write a comment...\"\r\n                                      (keyup.enter)=\"onEnter(box.value,thing._id); box.value = '' \">\r\n                        </ion-textarea>\r\n                      </ion-col>\r\n                    </ion-item>\r\n                    <ion-item color=\"medium\">\r\n                        <ion-button (click)=\"onEnter(box.value,thing._id); box.value = '' \">Comment\r\n                          <ion-icon slot=\"start\" name=\"send\" size=\"large\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button color=\"secondary\" slot=\"end\" (click)=\"changePageComments(thing._id)\" >View all comments {{'('+thing.comments.length+')'}}</ion-button>\r\n                    </ion-item>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n                <ng-template #other_content>\r\n                  <div *ngIf=\"thing.owner.name == this.user.name; else other_person\">\r\n                  <ion-card color=\"light\">\r\n                      <ion-card-content>\r\n                        <ion-toolbar class=\"main-content\" color=\"medium\">\r\n                          <ion-item color=\"medium\" >\r\n                            <ion-avatar slot=\"start\">\r\n                              <img *ngIf=\"thing.owner.profilePhoto\" src=\"{{thing.owner.profilePhoto}}\" />\r\n                            </ion-avatar>\r\n                            <ion-label>\r\n                              <h3>{{thing.owner.name}}</h3>\r\n                            </ion-label>\r\n                          </ion-item>\r\n                        </ion-toolbar>\r\n                        <ion-item >\r\n                          <ion-label class=\"ion-text-center\">\r\n                            <h4>{{thing.description}}</h4>\r\n                          </ion-label>\r\n                        </ion-item>\r\n                        <ion-toolbar color=\"light\" class=\"ion-text-center\">\r\n                          <h4><ion-icon name=\"pin\"></ion-icon> Location: {{thing.location}}</h4>\r\n                        </ion-toolbar>\r\n                        <ion-toolbar color=\"light\">\r\n                          <ion-button color=\"secondary\" class=\"middle-card\" size=\"small\" (click)=\"seeEvent(thing._id)\" >See event</ion-button>\r\n                        </ion-toolbar>\r\n                      </ion-card-content>\r\n                    </ion-card>\r\n                  </div>\r\n                  <ng-template #other_person>\r\n                    <div *ngFor=\"let user of checklist\">\r\n                      <div *ngIf=\"user.idEvent === thing._id\">\r\n                        <div *ngIf=\"user.check === 'yes'; else other_thing\" >\r\n                          <ion-card color=\"light\">\r\n                            <ion-card-content>\r\n                              <ion-toolbar class=\"main-content\" color=\"medium\">\r\n                                <ion-item color=\"medium\">\r\n                                  <ion-avatar>\r\n                                    <img *ngIf=\"thing.owner.profilePhoto\" src=\"{{thing.owner.profilePhoto}}\"/>\r\n                                  </ion-avatar>\r\n                                  <ion-label>\r\n                                    <h3>{{thing.owner.name}}</h3>\r\n                                  </ion-label>\r\n                                </ion-item>\r\n                              </ion-toolbar>\r\n                              <ion-item>\r\n                                <ion-label class=\"ion-text-center\">\r\n                                  <h4>{{thing.description}}</h4>\r\n                                </ion-label>\r\n                              </ion-item>\r\n                              <ion-toolbar color=\"light\" class=\"ion-text-center\">\r\n                                <h4><ion-icon name=\"pin\"></ion-icon> Location: {{thing.location}}</h4>\r\n                              </ion-toolbar>\r\n                              <ion-toolbar color=\"light\">\r\n                                <ion-button color=\"secondary\" size=\"small\" (click)=\"seeEvent(thing._id)\" slot=\"start\">See event</ion-button>\r\n                                <ion-button color=\"secondary\" size=\"small\" (click)=\"leave(thing._id)\" slot=\"end\">Leave</ion-button>\r\n                              </ion-toolbar>\r\n                            </ion-card-content>\r\n                          </ion-card>\r\n                        </div>\r\n                      </div>\r\n                      <ng-template #other_thing>\r\n                        <ion-card color=\"light\">\r\n                          <ion-card-content>\r\n                            <ion-toolbar class=\"main-content\" color=\"medium\">\r\n                              <ion-item color=\"medium\">\r\n                                <ion-avatar slot=\"start\">\r\n                                  <img *ngIf=\"thing.owner.profilePhoto\" src=\"{{thing.owner.profilePhoto}}\"/>\r\n                                </ion-avatar>\r\n                                <ion-label>\r\n                                  <h3>{{thing.owner.name}}</h3>\r\n                                </ion-label>\r\n                              </ion-item>\r\n                            </ion-toolbar>\r\n                            <ion-item >\r\n                              <ion-label class=\"ion-text-center\">\r\n                                <h4>{{thing.description}}</h4>\r\n                              </ion-label>\r\n                            </ion-item>\r\n                            <ion-toolbar color=\"light\" class=\"ion-text-center\">\r\n\r\n                              <h4><ion-icon name=\"pin\"></ion-icon> Location: {{thing.location}}</h4>\r\n                            </ion-toolbar>\r\n                            <ion-toolbar color=\"light\">\r\n                              <ion-button color=\"secondary\" size=\"small\" (click)=\"seeEvent(thing._id)\" slot=\"start\">See event</ion-button>\r\n                              <ion-button color=\"secondary\" size=\"small\" (click)=\"asistir(thing._id)\" slot=\"end\">Attend</ion-button>\r\n                            </ion-toolbar>\r\n                          </ion-card-content>\r\n                        </ion-card>\r\n                      </ng-template>\r\n                    </div>\r\n                  </ng-template>\r\n                </ng-template>\r\n              </div>\r\n            </ion-card>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n\r\n<div class=\"web\">\r\n<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row class=\"background-primary\">\r\n    <span class=\"margin-left-auto\" style=\"color: white\">Erasmus</span>\r\n    <form [formGroup]=\"form\" class=\"search-form margin-right-auto\">\r\n      <div>\r\n        <label class=\"search-input\">\r\n          <input matInput (keyup)=\"updateSuggestions($event)\" [matAutocomplete]=\"auto\" placeholder=\"Search...\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let suggestion of suggestions\" [value]=\"suggestion\">{{suggestion}}</mat-option>\r\n          </mat-autocomplete>\r\n        </label>\r\n        <button type=\"submit\" class=\"search-button\">\r\n          <i class=\"material-icons search-icon\">search</i>\r\n        </button>\r\n      </div>\r\n    </form>\r\n    <div class=\"toolbar-container margin-right-auto\">\r\n      <div class=\"toolbar-buttons\">\r\n        <div class=\"pointer\" [routerLink]=\"'/home'\">\r\n          <div>\r\n            <i class=\"material-icons\">home</i>\r\n          </div>\r\n          <div class=\"menu-title white-text\">\r\n              Home\r\n          </div>\r\n        </div>\r\n        <div class=\"pointer\" [routerLink]=\"'/profile'\">\r\n          <div>\r\n            <i class=\"material-icons\">person</i>\r\n          </div>\r\n          <div class=\"menu-title white-text\">\r\n            Profile\r\n          </div>\r\n        </div>\r\n        <div class=\"pointer\" [routerLink]=\"'/friends'\">\r\n          <div>\r\n            <i class=\"material-icons\">group</i>\r\n          </div>\r\n          <div class=\"menu-title white-text\">\r\n            Friends\r\n          </div>\r\n        </div>\r\n        <div class=\"pointer\" [routerLink]=\"'/message'\">\r\n          <div>\r\n            <i class=\"material-icons\">chat</i>\r\n          </div>\r\n          <div class=\"menu-title white-text\">\r\n            Chat\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div routerLink=\"/login\" class=\"pointer margin-right-auto\" style=\"color: white\" (click)=\"logOff()\">Log Off</div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<!--Body of the Web Page-->\r\n<div class=\"container\">\r\n  <div class=\"main-content\">\r\n    <!--Left Column-->\r\n    <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n      <mat-card class=\"vertical-margin no-padding\">\r\n        <div style=\"height: 250px\">\r\n          <div style=\"background: #3880ff; height: 50%; display: flex\">\r\n            <div class=\"personal-icon\">\r\n              <img *ngIf=\"this.photo\" class=\"image-contain\" src=\"{{this.photo}}\"/>\r\n              <img *ngIf=\"!this.photo\" class=\"image-contain\" src=\"../../../assets/img/default_user.png\"/>\r\n            </div>\r\n            <div class=\"personal-icon\" style=\"position: absolute; width: auto;\">\r\n              <input #imageInput\r\n                     style=\"width: 100%; height: 100%;\"\r\n                     class=\"image-input\"\r\n                     type = 'file'\r\n                     accept=\"image/*\"\r\n                     (change) = \"processPhoto(imageInput)\">\r\n            </div>\r\n          </div>\r\n          <div style=\"height: 70%\">\r\n            <div class=\"personal-info-container\">\r\n              <div *ngIf=\"user\" class=\"personal-name\">\r\n                {{user.name}}\r\n              </div>\r\n              <div class=\"personal-status\">\r\n                Status\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"followers\" class=\"personal-item\">\r\n          <p class=\"personal-item-title\">Followers</p>\r\n          {{followers.length}}\r\n        </div>\r\n        <div *ngIf=\"following\" class=\"personal-item\">\r\n          <p class=\"personal-item-title\">Following</p>\r\n          {{following.length}}\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n    <!--Middle Column-->\r\n    <div class=\"col-lg-5 col-md-5 col-sm-5\">\r\n      <!--Post Card-->\r\n      <div>\r\n        <mat-card class=\"vertical-margin border-top\">\r\n          <div>\r\n            <mat-form-field class=\"textarea\">\r\n                <textarea matInput\r\n                          cdkTextareaAutosize\r\n                          #autosize=\"cdkTextareaAutosize\"\r\n                          cdkAutosizeMinRows=\"3\"\r\n                          cdkAutosizeMaxRows=\"7\"\r\n                          [(ngModel)]=\"postMessage\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <button mat-raised-button class=\"background-primary white-text\" (click)=\"publishPost()\">Post</button>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <!--Wall Card-->\r\n      <div *ngIf=\"user\">\r\n        <div *ngFor=\"let thing of activity\">\r\n          <mat-card class=\"vertical-margin middle-card\">\r\n            <div>\r\n              {{thing.owner.name}}:{{thing.message}}\r\n            </div>\r\n            <i class=\"material-icons delete-icon\" (click)=\"deleteEvent(activity)\">delete_forever</i>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Right Column-->\r\n    <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n      <mat-card class=\"vertical-margin\">\r\n        <div class=\"vertical-margin\">\r\n          FOLLOWING\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <mat-list *ngIf=\"user\">\r\n          <div *ngFor=\"let follow of following\">\r\n          <mat-list-item>\r\n            <div (click)=\"goToProfile(follow._id)\" style=\"width: 100%; height: 100%\">\r\n              <h5 style=\"text-align: left; margin: 16px auto;\" >{{follow.name}}</h5>\r\n            </div>\r\n            <div (click)=\"startChat(follow.name)\" class=\"chat chat-unavailable\">\r\n              <i  style=\"margin-top: 5px\" class=\"material-icons\">chat</i>\r\n            </div>\r\n          </mat-list-item>\r\n          </div>\r\n        </mat-list>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./views/home/home.module */
        "./src/app/views/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-auth-register-register-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-auth-register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./views/auth/register/register.module */
        "./src/app/views/auth/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-auth-login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-auth-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./views/auth/login/login.module */
        "./src/app/views/auth/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'message',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-message-message-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-message-message-module")]).then(__webpack_require__.bind(null,
        /*! ./views/message/message.module */
        "./src/app/views/message/message.module.ts")).then(function (m) {
          return m.MessagePageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-profiles-profile-profile-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-profiles-profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./views/profiles/profile/profile.module */
        "./src/app/views/profiles/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'friends',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-friends-friends-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-friends-friends-module")]).then(__webpack_require__.bind(null,
        /*! ./views/friends/friends.module */
        "./src/app/views/friends/friends.module.ts")).then(function (m) {
          return m.FriendsPageModule;
        });
      }
    }, {
      path: 'globe',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-globe-globe-module */
        "views-globe-globe-module").then(__webpack_require__.bind(null,
        /*! ./views/globe/globe.module */
        "./src/app/views/globe/globe.module.ts")).then(function (m) {
          return m.GlobePageModule;
        });
      }
    }, {
      path: 'geolocation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | geolocation-geolocation-module */
        "geolocation-geolocation-module").then(__webpack_require__.bind(null,
        /*! ./geolocation/geolocation.module */
        "./src/app/geolocation/geolocation.module.ts")).then(function (m) {
          return m.GeolocationPageModule;
        });
      }
    }, {
      path: 'other-profile/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-profiles-other-profile-other-profile-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-profiles-other-profile-other-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./views/profiles/other-profile/other-profile.module */
        "./src/app/views/profiles/other-profile/other-profile.module.ts")).then(function (m) {
          return m.OtherProfilePageModule;
        });
      }
    }, {
      path: 'posts/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-post-posts-posts-module */
        "views-post-posts-posts-module").then(__webpack_require__.bind(null,
        /*! ./views/post/posts/posts.module */
        "./src/app/views/post/posts/posts.module.ts")).then(function (m) {
          return m.PostsPageModule;
        });
      }
    }, {
      path: 'followers/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-follower-followers-followers-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-follower-followers-followers-module")]).then(__webpack_require__.bind(null,
        /*! ./views/follower/followers/followers.module */
        "./src/app/views/follower/followers/followers.module.ts")).then(function (m) {
          return m.FollowersPageModule;
        });
      }
    }, {
      path: 'following/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-followings-following-following-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-followings-following-following-module")]).then(__webpack_require__.bind(null,
        /*! ./views/followings/following/following.module */
        "./src/app/views/followings/following/following.module.ts")).then(function (m) {
          return m.FollowingPageModule;
        });
      }
    }, {
      path: 'front',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-front-front-module */
        "views-front-front-module").then(__webpack_require__.bind(null,
        /*! ./views/front/front.module */
        "./src/app/views/front/front.module.ts")).then(function (m) {
          return m.FrontPageModule;
        });
      }
    }, {
      path: 'myposts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-post-myposts-myposts-module */
        "views-post-myposts-myposts-module").then(__webpack_require__.bind(null,
        /*! ./views/post/myposts/myposts.module */
        "./src/app/views/post/myposts/myposts.module.ts")).then(function (m) {
          return m.MypostsPageModule;
        });
      }
    }, {
      path: 'myfollowing',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-followings-myfollowing-myfollowing-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-followings-myfollowing-myfollowing-module")]).then(__webpack_require__.bind(null,
        /*! ./views/followings/myfollowing/myfollowing.module */
        "./src/app/views/followings/myfollowing/myfollowing.module.ts")).then(function (m) {
          return m.MyfollowingPageModule;
        });
      }
    }, {
      path: 'myfollowers',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-follower-myfollowers-myfollowers-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-follower-myfollowers-myfollowers-module")]).then(__webpack_require__.bind(null,
        /*! ./views/follower/myfollowers/myfollowers.module */
        "./src/app/views/follower/myfollowers/myfollowers.module.ts")).then(function (m) {
          return m.MyfollowersPageModule;
        });
      }
    }, {
      path: 'conversation/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-conversation-conversation-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-conversation-conversation-module")]).then(__webpack_require__.bind(null,
        /*! ./views/conversation/conversation.module */
        "./src/app/views/conversation/conversation.module.ts")).then(function (m) {
          return m.ConversationPageModule;
        });
      }
    }, {
      path: 'notifications',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-notifications-notifications-module */
        "views-notifications-notifications-module").then(__webpack_require__.bind(null,
        /*! ./views/notifications/notifications.module */
        "./src/app/views/notifications/notifications.module.ts")).then(function (m) {
          return m.NotificationsPageModule;
        });
      }
    }, {
      path: 'event',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-event-event-module */
        "views-event-event-module").then(__webpack_require__.bind(null,
        /*! ./views/event/event.module */
        "./src/app/views/event/event.module.ts")).then(function (m) {
          return m.EventPageModule;
        });
      }
    }, {
      path: 'add-members-event',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-add-members-event-add-members-event-module */
        "views-add-members-event-add-members-event-module").then(__webpack_require__.bind(null,
        /*! ./views/add-members-event/add-members-event.module */
        "./src/app/views/add-members-event/add-members-event.module.ts")).then(function (m) {
          return m.AddMembersEventPageModule;
        });
      }
    }, {
      path: 'profile-event/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-profile-event-profile-event-module */
        "views-profile-event-profile-event-module").then(__webpack_require__.bind(null,
        /*! ./views/profile-event/profile-event.module */
        "./src/app/views/profile-event/profile-event.module.ts")).then(function (m) {
          return m.ProfileEventPageModule;
        });
      }
    }, {
      path: 'erasmus-info',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-datos-erasmus-datos-erasmus-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-datos-erasmus-datos-erasmus-module")]).then(__webpack_require__.bind(null,
        /*! ./views/datos-erasmus/datos-erasmus.module */
        "./src/app/views/datos-erasmus/datos-erasmus.module.ts")).then(function (m) {
          return m.DatosErasmusPageModule;
        });
      }
    }, {
      path: 'comments/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-comments-comments-module */
        "views-comments-comments-module").then(__webpack_require__.bind(null,
        /*! ./views/comments/comments.module */
        "./src/app/views/comments/comments.module.ts")).then(function (m) {
          return m.CommentsPageModule;
        });
      }
    }, {
      path: 'erasmusInfo/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-datos-erasmus-register-datos-erasmus-register-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-datos-erasmus-register-datos-erasmus-register-module")]).then(__webpack_require__.bind(null,
        /*! ./views/datos-erasmus-register/datos-erasmus-register.module */
        "./src/app/views/datos-erasmus-register/datos-erasmus-register.module.ts")).then(function (m) {
          return m.DatosErasmusRegisterPageModule;
        });
      }
    }, {
      path: 'list-events/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-list-events-list-events-module */
        "views-list-events-list-events-module").then(__webpack_require__.bind(null,
        /*! ./views/list-events/list-events.module */
        "./src/app/views/list-events/list-events.module.ts")).then(function (m) {
          return m.ListEventsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pointer {\n  cursor: pointer;\n}\n\n@media (min-width: 500px) {\n  .mobile-menu {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzZ2FsZVxcV2Vic3Rvcm1Qcm9qZWN0c1xcRXJhc211c0FwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGFBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLm1vYmlsZS1tZW51e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAubW9iaWxlLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./storage/storage.component */
    "./src/app/storage/storage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, router, storage, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.router = router;
        this.storage = storage;
        this.statusBar = statusBar;
        this.appPages = [{
          title: 'Home',
          url: '/home',
          icon: 'home'
        }, {
          title: 'Profile',
          url: '/profile',
          icon: 'person'
        }, {
          title: 'Friends',
          url: '/friends',
          icon: 'contact'
        }, {
          title: 'Messages',
          url: '/message',
          icon: 'chatboxes'
        }, {
          title: 'Globe',
          url: '/globe',
          icon: 'globe'
        }, {
          title: 'Erasmus Info',
          url: '/erasmus-info',
          icon: 'information-circle'
        }, {
          title: 'Notifications',
          url: '/notifications',
          icon: 'notifications'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "logOff",
        value: function logOff() {
          this.storage.clearStorage();
          this.router.navigateByUrl('/login');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_5__["StorageComponent"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./views/auth/auth.module */
    "./src/app/views/auth/auth.module.ts");
    /* harmony import */


    var _views_home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./views/home/home.module */
    "./src/app/views/home/home.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./storage/storage.component */
    "./src/app/storage/storage.component.ts");
    /* harmony import */


    var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/auth-interceptor.service */
    "./src/app/services/auth-interceptor.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/notification/notification.component */
    "./src/app/components/notification/notification.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__["NotificationComponent"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_16__["StorageComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"], _views_home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomePageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"]],
      providers: [_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__["NotificationComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_chat_service__WEBPACK_IMPORTED_MODULE_13__["ChatService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeStorage"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBar"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMaps"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_16__["StorageComponent"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/notification/notification.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/notification/notification.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotificationNotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/notification/notification.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/notification/notification.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppComponentsNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var NotificationComponent =
    /*#__PURE__*/
    function () {
      function NotificationComponent(toastController, navCtrl) {
        _classCallCheck(this, NotificationComponent);

        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.sound = new Audio();
        this.sound.src = '../../../assets/sounds/when.mp3';
        this.sound.load();
        this.innerSound = new Audio();
        this.innerSound.src = '../../../assets/sounds/clearly.mp3';
        this.innerSound.load();
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generateToast",
        value: function generateToast(message, goToUrl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      position: 'top',
                      message: message,
                      duration: 5000,
                      showCloseButton: true,
                      closeButtonText: 'Show'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present().then(function () {
                      return _this2.sound.play();
                    }).catch(function (err) {
                      return console.log(err);
                    });
                    toast.onDidDismiss().then(function (arg) {
                      if (arg.role === 'cancel') {
                        _this2.navCtrl.navigateForward(goToUrl);
                      }
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "playInnerSound",
        value: function playInnerSound() {
          this.innerSound.play().catch(function (err) {
            return console.log(err);
          });
        }
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.component.scss */
      "./src/app/components/notification/notification.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], NotificationComponent);
    /***/
  },

  /***/
  "./src/app/models/Posts/postSend.ts":
  /*!******************************************!*\
    !*** ./src/app/models/Posts/postSend.ts ***!
    \******************************************/

  /*! exports provided: PostSend */

  /***/
  function srcAppModelsPostsPostSendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostSend", function () {
      return PostSend;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PostSend = function PostSend() {
      var owner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      _classCallCheck(this, PostSend);

      this.type = type;
      this.message = message;
      this.owner = owner;
    };
    /***/

  },

  /***/
  "./src/app/models/User/checkUser.ts":
  /*!******************************************!*\
    !*** ./src/app/models/User/checkUser.ts ***!
    \******************************************/

  /*! exports provided: CheckUser */

  /***/
  function srcAppModelsUserCheckUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckUser", function () {
      return CheckUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CheckUser = function CheckUser() {
      var check = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _idEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      _classCallCheck(this, CheckUser);

      this.check = check;
      this.idEvent = _idEvent;
    };
    /***/

  },

  /***/
  "./src/app/models/User/user.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/User/user.service.ts ***!
    \*********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppModelsUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this.USER_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUri + '/user';
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(UserService, [{
        key: "saveUser",
        value: function saveUser(user) {
          this.user = user;
        }
      }, {
        key: "sendUser",
        value: function sendUser() {
          return this.user;
        }
      }, {
        key: "savePostsUsers",
        value: function savePostsUsers(id) {
          return this.httpClient.get("".concat(this.USER_SERVER_ADDRESS, "/posts/") + "".concat(id) + "/0");
        }
      }, {
        key: "search",
        value: function search(searchString) {
          return this.httpClient.get("".concat(this.USER_SERVER_ADDRESS, "/search?searchString=") + searchString);
        }
      }, {
        key: "editPhoto",
        value: function editPhoto(photo, userId) {
          return this.httpClient.post("".concat(this.USER_SERVER_ADDRESS, "/image/edit"), {
            id: userId,
            photo: photo
          });
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(userId) {
          return this.httpClient.get("".concat(this.USER_SERVER_ADDRESS, "/image?id=") + userId);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService);
    /***/
  },

  /***/
  "./src/app/pipes/filtro.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/filtro.pipe.ts ***!
    \**************************************/

  /*! exports provided: FiltroPipe */

  /***/
  function srcAppPipesFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltroPipe", function () {
      return FiltroPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FiltroPipe =
    /*#__PURE__*/
    function () {
      function FiltroPipe() {
        _classCallCheck(this, FiltroPipe);
      }

      _createClass(FiltroPipe, [{
        key: "transform",
        value: function transform(arreglo, texto, columna) {
          if (texto === '') {
            return arreglo;
          }

          texto = texto.toLowerCase();
          return arreglo.filter(function (item) {
            return item[columna].toLowerCase().includes(texto);
          });
        }
      }]);

      return FiltroPipe;
    }();

    FiltroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filtro'
    })], FiltroPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _filtro_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./filtro.pipe */
    "./src/app/pipes/filtro.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"]],
      exports: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"]],
      imports: []
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/services/auth-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/auth-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppServicesAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var AuthInterceptorService =
    /*#__PURE__*/
    function () {
      function AuthInterceptorService(router, snackBar) {
        _classCallCheck(this, AuthInterceptorService);

        this.router = router;
        this.snackBar = snackBar;
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this3 = this;

          var token = localStorage.getItem('token');
          var request = req;

          if (token) {
            request = req.clone({
              setHeaders: {
                authorization: "Token ".concat(token)
              }
            });
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
              localStorage.clear();

              _this3.router.navigateByUrl('/login');

              _this3.snackBar.open('Session has expired, log in again');
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }));
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])], AuthInterceptorService);
    /***/
  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(http) {
        var _this4 = this;

        _classCallCheck(this, ChatService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUri;

        this.getList = function () {
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this4.socket.on('userList', function (data) {
              observer.next(data);
            });
          });
        };

        this.getPostNotification = function () {
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this4.socket.on('postnoti', function (data) {
              observer.next(data);
            });
          });
        };

        this.getACK = function () {
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this4.socket.on('ACK', function (arg) {
              observer.next(arg);
            });
          });
        };

        this.getMessage = function () {
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this4.socket.on('message', function (data) {
              observer.next(data);
            });
          });
        };
      }

      _createClass(ChatService, [{
        key: "connectSocket",
        value: function connectSocket(email) {
          if (!this.socket) {
            this.email = email;
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url, {
              query: 'email=' + email
            });
            console.log('connection');
          }
        }
      }, {
        key: "getStoredMessages",
        value: function getStoredMessages() {
          return this.http.get("".concat(this.url, "/user/messages/").concat(this.email));
        }
      }, {
        key: "forceGetList",
        value: function forceGetList() {
          this.socket.emit('giveMeUserList');
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message, destination) {
          this.socket.emit('message', {
            message: message,
            destination: destination
          });
          var body = {
            author: this.email,
            destination: destination,
            text: message
          };
          this.http.post("".concat(this.url, "/user/message/"), body).toPromise().catch(function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "sendPostNotification",
        value: function sendPostNotification(postId) {
          this.socket.emit('postnoti', postId);
        }
      }, {
        key: "ackMsg",
        value: function ackMsg(sender) {
          this.socket.emit('ACK', sender);
          this.http.put("".concat(this.url, "/user/message/").concat(sender, "/").concat(this.email), null).toPromise().catch(function (err) {
            return console.log(err);
          });
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ChatService);
    /***/
  },

  /***/
  "./src/app/storage/storage.component.scss":
  /*!************************************************!*\
    !*** ./src/app/storage/storage.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStorageStorageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2Uvc3RvcmFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/storage/storage.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/storage/storage.component.ts ***!
    \**********************************************/

  /*! exports provided: StorageComponent */

  /***/
  function srcAppStorageStorageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageComponent", function () {
      return StorageComponent;
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


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var StorageComponent =
    /*#__PURE__*/
    function () {
      function StorageComponent(nativeStorage, platform) {
        _classCallCheck(this, StorageComponent);

        this.nativeStorage = nativeStorage;
        this.platform = platform;
      }

      _createClass(StorageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    localStorage.setItem('token', token);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    localStorage.setItem('user', user);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return localStorage.getItem('user');
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          return localStorage.clear();
        }
      }]);

      return StorageComponent;
    }();

    StorageComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    StorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-storage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./storage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/storage/storage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./storage.component.scss */
      "./src/app/storage/storage.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], StorageComponent);
    /***/
  },

  /***/
  "./src/app/views/auth/auth.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/views/auth/auth.module.ts ***!
    \*******************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppViewsAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/views/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/views/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppViewsHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/views/home/home.page.ts");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["TextFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/views/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/views/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (min-width: 500px) {\n  .mobile {\n    display: none;\n  }\n\n  .web {\n    display: block;\n  }\n}\n@media (max-width: 500px) {\n  .mobile {\n    display: block;\n  }\n\n  .web {\n    display: none;\n  }\n}\nion-item.main-content {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n}\nimg {\n  margin: auto;\n}\nion-avatar {\n  margin: auto;\n}\nion-toolbar.main-content {\n  margin-bottom: 5%;\n}\n.margin-right-auto {\n  margin-right: auto;\n}\n.margin-left-auto {\n  margin-left: auto;\n}\n.background-primary {\n  background: #3880ff;\n}\n.menu-title {\n  margin: -15px 10px 0 10px;\n}\n.toolbar-buttons {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  margin-right: 20px;\n}\n.toolbar-container {\n  margin-right: auto;\n  margin-left: auto;\n}\n.white-text {\n  color: white;\n}\n.search-form {\n  margin: 0 30px 0 50px;\n  background: white;\n  color: #b2b2b2;\n  padding-left: 10px;\n  max-width: 250px;\n  min-width: 100px;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.search-input {\n  margin-top: 8px;\n  float: left;\n}\n.search-button {\n  padding: 7px 7px;\n  border: none;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.search-icon {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  color: #3880ff;\n}\n.main-content {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n}\n.container {\n  padding-top: 30px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.image-contain {\n  border: 5px solid white;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.image-input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  opacity: 0;\n}\n.vertical-margin {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.border-top {\n  border-top: 4px solid #3880ff;\n}\n.float-right {\n  float: right;\n}\n.textarea {\n  width: 100%;\n}\n.chat {\n  margin-left: auto;\n}\n.chat-unavailable {\n  color: red;\n}\n.personal-icon {\n  height: 120px;\n  width: 120px;\n  margin: 0 auto;\n  padding-top: 64px;\n}\n.no-padding {\n  padding: 0;\n}\n.personal-item {\n  padding: 15px 0;\n  border-top: 1px solid #f2f2f2;\n}\n.personal-item-title {\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-size: 20px;\n  color: #686868;\n}\n.personal-info-container {\n  margin-top: 22%;\n}\n.personal-name {\n  font-size: 2vw;\n  margin: 65px 5px 5px;\n}\n.personal-status {\n  color: #686868;\n  margin: 5px;\n}\n.delete-icon {\n  color: red;\n  margin-left: auto;\n}\n.middle-card {\n  display: -webkit-box;\n  display: flex;\n}\nion-label {\n  padding-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9DOlxcVXNlcnNcXHNnYWxlXFxXZWJzdG9ybVByb2plY3RzXFxFcmFzbXVzQXBwL3NyY1xcYXBwXFx2aWV3c1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQUE7RUNDRjs7RURDQTtJQUNFLGNBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRTtJQUNFLGNBQUE7RUNDRjs7RURDQTtJQUNFLGFBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0FDRUY7QURBQTtFQUNFLFlBQUE7QUNHRjtBRERBO0VBQ0UsaUJBQUE7QUNJRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBREZBO0VBQ0UsaUJBQUE7QUNLRjtBREZBO0VBQ0UsbUJBQUE7QUNLRjtBREZBO0VBQ0UseUJBQUE7QUNLRjtBREZBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0tGO0FERkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDS0Y7QURGQTtFQUNFLFlBQUE7QUNLRjtBREZBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDS0Y7QURGQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDS0Y7QURGQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNLRjtBREZBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGNBQUE7QUNLRjtBREZBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNLRjtBREZBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS0Y7QURGQTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNLRjtBREZBO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFVBQUE7QUNLRjtBREZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0tGO0FERkE7RUFDRSw2QkFBQTtBQ0tGO0FERkE7RUFDRSxZQUFBO0FDS0Y7QURGQTtFQUNFLFdBQUE7QUNLRjtBREZBO0VBQ0UsaUJBQUE7QUNLRjtBREZBO0VBQ0UsVUFBQTtBQ0tGO0FERkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tGO0FERkE7RUFDRSxVQUFBO0FDS0Y7QURGQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQ0tGO0FERkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0tGO0FESEE7RUFDRSxlQUFBO0FDTUY7QURKQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQ09GO0FETEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ1FGO0FETEE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNRRjtBRExBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDUUY7QUROQTtFQUNFLGdCQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLm1vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC53ZWJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5tb2JpbGV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLndlYntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbS5tYWluLWNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG5pbWd7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuaW9uLWF2YXRhcntcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5pb24tdG9vbGJhci5tYWluLWNvbnRlbnR7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5tYXJnaW4tcmlnaHQtYXV0b3tcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1hcmdpbi1sZWZ0LWF1dG97XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcclxufVxyXG5cclxuLm1lbnUtdGl0bGV7XHJcbiAgbWFyZ2luOiAtMTVweCAxMHB4IDAgMTBweDtcclxufVxyXG5cclxuLnRvb2xiYXItYnV0dG9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWNvbnRhaW5lcntcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi53aGl0ZS10ZXh0e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaC1mb3Jte1xyXG4gIG1hcmdpbjogMCAzMHB4IDAgNTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogI2IyYjJiMjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDdweCA3cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWljb257XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW57XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmltYWdlLWlucHV0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1tYXJnaW57XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLXRvcHtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzM4ODBmZjtcclxufVxyXG5cclxuLmZsb2F0LXJpZ2h0e1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRleHRhcmVhe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2hhdHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmNoYXQtdW5hdmFpbGFibGV7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnBlcnNvbmFsLWljb257XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDY0cHg7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pdGVte1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxuLnBlcnNvbmFsLWl0ZW0tdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNjg2ODY4O1xyXG59XHJcbi5wZXJzb25hbC1pbmZvLWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAyMiU7XHJcbn1cclxuLnBlcnNvbmFsLW5hbWV7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgbWFyZ2luOiA2NXB4IDVweCA1cHg7XHJcbn1cclxuLnBlcnNvbmFsLXN0YXR1c3tcclxuICBjb2xvcjogIzY4Njg2ODtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmRlbGV0ZS1pY29ue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5taWRkbGUtY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbiIsIkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLndlYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC53ZWIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmlvbi1pdGVtLm1haW4tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tdG9vbGJhci5tYWluLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLm1hcmdpbi1yaWdodC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWFyZ2luLWxlZnQtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbn1cblxuLm1lbnUtdGl0bGUge1xuICBtYXJnaW46IC0xNXB4IDEwcHggMCAxMHB4O1xufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50b29sYmFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi53aGl0ZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoLWZvcm0ge1xuICBtYXJnaW46IDAgMzBweCAwIDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogI2IyYjJiMjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBwYWRkaW5nOiA3cHggN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uaW1hZ2UtY29udGFpbiB7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1hZ2UtaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzODgwZmY7XG59XG5cbi5mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jaGF0LXVuYXZhaWxhYmxlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBlcnNvbmFsLWljb24ge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucGVyc29uYWwtaXRlbSB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMmYyZjI7XG59XG5cbi5wZXJzb25hbC1pdGVtLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNjg2ODY4O1xufVxuXG4ucGVyc29uYWwtaW5mby1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMiU7XG59XG5cbi5wZXJzb25hbC1uYW1lIHtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbjogNjVweCA1cHggNXB4O1xufVxuXG4ucGVyc29uYWwtc3RhdHVzIHtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZGVsZXRlLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm1pZGRsZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/views/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppViewsHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_User_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/User/user.service */
    "./src/app/models/User/user.service.ts");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/views/home/home.service.ts");
    /* harmony import */


    var _models_Posts_postSend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/Posts/postSend */
    "./src/app/models/Posts/postSend.ts");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../storage/storage.component */
    "./src/app/storage/storage.component.ts");
    /* harmony import */


    var _post_post_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../post/post.service */
    "./src/app/views/post/post.service.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/notification/notification.component */
    "./src/app/components/notification/notification.component.ts");
    /* harmony import */


    var _models_User_checkUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../models/User/checkUser */
    "./src/app/models/User/checkUser.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(formBuilder, homeService, userService, postService, router, menuCtrl, alertCtrl, toastCtrl, storage, chatService, notificationComponent) {
        _classCallCheck(this, HomePage);

        this.formBuilder = formBuilder;
        this.homeService = homeService;
        this.userService = userService;
        this.postService = postService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.chatService = chatService;
        this.notificationComponent = notificationComponent;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.homeForm = this.formBuilder.group({
                      post: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
                    });
                    this.checklist = [];

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var storageUser;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    storageUser = this.storage.getUser(); //If user is not present redirect to login

                    if (storageUser) {
                      _context5.next = 7;
                      break;
                    }

                    console.log('goto front');
                    _context5.next = 5;
                    return this.router.navigateByUrl('/front');

                  case 5:
                    _context5.next = 25;
                    break;

                  case 7:
                    this.user = JSON.parse(storageUser);
                    _context5.next = 10;
                    return this.storage.saveUser(storageUser);

                  case 10:
                    this.checklist = [];
                    _context5.next = 13;
                    return this.userService.getPhoto(this.user._id).toPromise();

                  case 13:
                    this.photo = _context5.sent.photo;
                    _context5.next = 16;
                    return this.homeService.getFollowers(this.user._id).toPromise();

                  case 16:
                    this.followers = _context5.sent.followers;
                    _context5.next = 19;
                    return this.getActivity().then();

                  case 19:
                    _context5.next = 21;
                    return this.homeService.getFollowing(this.user._id).toPromise();

                  case 21:
                    this.following = _context5.sent.following;
                    this.chatService.connectSocket(this.user.name);
                    this.chatService.getMessage().subscribe(function (data) {
                      console.log('true?', data.everyone);

                      if (data.everyone !== true) {
                        console.log(data);
                        var goToUrl = '/conversation/' + data.email;
                        var msg = data.email + ' says: ' + data.message;

                        if (_this5.router.url !== goToUrl) {
                          _this5.notificationComponent.generateToast(msg, goToUrl).catch(function (err) {
                            return console.log(err);
                          });
                        } else {
                          _this5.notificationComponent.playInnerSound();
                        }
                      }
                    });
                    this.chatService.getPostNotification().subscribe(function (data) {
                      var goToUrl = '/home';
                      var msg = data.author + ' has made a new post';

                      _this5.notificationComponent.generateToast(msg, goToUrl).catch(function (err) {
                        return console.log(err);
                      });
                    });

                  case 25:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getActivity",
        value: function getActivity() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.homeService.getActivity(this.user._id).subscribe(function (res) {
                      if (res.status === 204) {
                        console.log('204');
                      } else {
                        console.log('res: ', res);
                        var response = res;
                        _this6.activity = response.body.activity;

                        _this6.checkMember();
                      }
                    }, function (error) {
                      console.log('error', error);
                    });

                  case 2:
                    console.log('activity: ', this.activity);
                    _context6.next = 5;
                    return this.userService.saveUser(this.user);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "alert",
        value: function alert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.alertCtrl.create({
                      header: 'TYPE',
                      message: 'Post or event',
                      buttons: [{
                        text: 'Event',
                        handler: function handler() {
                          _this7.router.navigateByUrl('/event');
                        }
                      }, {
                        text: 'Post',
                        handler: function handler() {
                          console.log('message: ', _this7.homeForm.controls.post.value);
                          _this7.postSend = new _models_Posts_postSend__WEBPACK_IMPORTED_MODULE_7__["PostSend"](_this7.user._id, 'Post', _this7.homeForm.controls.post.value);

                          _this7.homeService.sendPost(_this7.postSend).subscribe(function (res) {
                            // this.router.navigateByUrl('/profile');
                            _this7.chatService.sendPostNotification(res.post._id);
                          });
                        }
                      }]
                    }).then(function (alert) {
                      alert.present();
                    });

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "seeEvent",
        value: function seeEvent(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.router.navigateByUrl('/profile-event/' + "".concat(id));

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "updateSuggestions",
        value: function updateSuggestions(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var users;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.searchValue = event.target.value;
                    _context9.next = 3;
                    return this.userService.search(this.searchValue).toPromise();

                  case 3:
                    users = _context9.sent;
                    //Get emails of all users
                    this.suggestions = users.map(function (a) {
                      return a.email;
                    });

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "logOff",
        value: function logOff() {
          this.storage.clearStorage();
        }
      }, {
        key: "publishPost",
        value: function publishPost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this8 = this;

            var postSend;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    postSend = new _models_Posts_postSend__WEBPACK_IMPORTED_MODULE_7__["PostSend"](this.user._id, 'Post', this.postMessage);
                    this.homeService.sendPost(postSend).subscribe(function (res) {
                      _this8.getActivity();

                      _this8.chatService.sendPostNotification(res.post._id);
                    });

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.storage.saveUser(JSON.stringify(this.user));

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "asistir",
        value: function asistir(eventId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.homeService.asistir(eventId, this.user._id).subscribe(function (res) {
                      _this9.router.navigateByUrl('/profile-event/' + "".concat(eventId));

                      console.log(res);
                    }, function (error) {
                      if (error.status === 304) {
                        _this9.launchToast('You are already in');
                      }
                    });

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "leave",
        value: function leave(eventId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.homeService.leave(eventId, this.user._id).subscribe(function (res) {
                      _this10.launchToast('You leave successfully');

                      console.log(res);
                    }, function (error) {
                      if (error.status === 304) {
                        _this10.launchToast('You not are in');
                      }
                    });

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "launchToast",
        value: function launchToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var toast;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000
                    });

                  case 2:
                    toast = _context14.sent;
                    _context14.next = 5;
                    return toast.present();

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "checkMember",
        value: function checkMember() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var _this11 = this;

            var count;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    count = 0;
                    this.activity.forEach(function (x) {
                      if (x.type === 'Event') {
                        console.log('owner', x.owner.name);

                        if (x.members === null) {
                          _this11.checklist.push(new _models_User_checkUser__WEBPACK_IMPORTED_MODULE_12__["CheckUser"]('no', x._id));
                        } else {
                          x.members.forEach(function (a) {
                            console.log(a.name);

                            if (a._id === _this11.user._id) {
                              _this11.checklist.push(new _models_User_checkUser__WEBPACK_IMPORTED_MODULE_12__["CheckUser"]('yes', x._id));

                              count = 1;
                            }
                          });

                          if (count !== 1) {
                            _this11.checklist.push(new _models_User_checkUser__WEBPACK_IMPORTED_MODULE_12__["CheckUser"]('no', x._id));
                          } else {
                            count = 0;
                          }
                        }

                        console.log('separacion');
                      }
                    });

                  case 2:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "changePageComments",
        value: function changePageComments(idPost) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.router.navigateByUrl('/comments/' + "".concat(idPost));

                  case 2:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(activity) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.postService.deletePost(activity._id).toPromise();

                  case 2:
                    _context17.next = 4;
                    return this.getActivity();

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "processPhoto",
        value: function processPhoto(imageInput) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var _this12 = this;

            var file, reader;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    file = imageInput.files[0];
                    reader = new FileReader();
                    reader.addEventListener('load', function (event) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee18() {
                        return regeneratorRuntime.wrap(function _callee18$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                this.photo = event.target.result;
                                _context18.next = 3;
                                return this.userService.editPhoto(event.target.result, this.user._id).toPromise();

                              case 3:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee18, this);
                      }));
                    });
                    reader.readAsDataURL(file);

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));
        }
      }, {
        key: "onEnter",
        value: function onEnter(value, postId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.comment = value;
                    this.postId = postId;
                    console.log(postId);
                    console.log(this.postId);
                    _context20.next = 6;
                    return this.sendComment();

                  case 6:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "sendComment",
        value: function sendComment() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    if (!this.comment.replace(/\s/g, '').length) {
                      _context21.next = 4;
                      break;
                    }

                    /*let comment = {
                        postId: this.postId,
                        owner: this.user._id,
                        message: this.comment
                    };*/
                    console.log(this.comment);
                    _context21.next = 4;
                    return this.homeService.comment(this.comment, this.postId, this.user._id).subscribe(function (res) {
                      _this13.router.navigateByUrl('/comments/' + "".concat(_this13.postId));
                    });

                  case 4:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "goToProfile",
        value: function goToProfile(_id) {
          this.router.navigateByUrl('/other-profile/' + _id);
        }
      }, {
        key: "startChat",
        value: function startChat(name) {
          this.router.navigateByUrl('/conversation/' + name);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"]
      }, {
        type: _models_User_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _post_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_8__["StorageComponent"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"]
      }, {
        type: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/views/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"], _models_User_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _post_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_8__["StorageComponent"], _services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"], _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/views/home/home.service.ts":
  /*!********************************************!*\
    !*** ./src/app/views/home/home.service.ts ***!
    \********************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppViewsHomeHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var HomeService =
    /*#__PURE__*/
    function () {
      function HomeService(httpClient, storage) {
        _classCallCheck(this, HomeService);

        this.httpClient = httpClient;
        this.storage = storage; // HOME_SERVER_ADDRESS = 'http://localhost:3000/';

        this.HOME_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUri;
        this.homeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(HomeService, [{
        key: "sendPost",
        value: function sendPost(post) {
          return this.httpClient.post("".concat(this.HOME_SERVER_ADDRESS, "/post"), {
            post: post
          });
        }
      }, {
        key: "getActivity",
        value: function getActivity(id) {
          return this.httpClient.put("".concat(this.HOME_SERVER_ADDRESS, "/user/activity/") + "".concat(id) + "/0", {}, {
            observe: 'response'
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile(id) {
          return this.httpClient.get("".concat(this.HOME_SERVER_ADDRESS, "/user/profile/") + "".concat(id));
        }
      }, {
        key: "getFollowers",
        value: function getFollowers(_id) {
          return this.httpClient.get("".concat(this.HOME_SERVER_ADDRESS, "/user/followers/") + "".concat(_id));
        }
      }, {
        key: "asistir",
        value: function asistir(idEvent, idUser) {
          return this.httpClient.put("".concat(this.HOME_SERVER_ADDRESS, "/event/join"), {
            eventId: idEvent,
            userId: idUser
          });
        }
      }, {
        key: "leave",
        value: function leave(idEvent, idUser) {
          return this.httpClient.put("".concat(this.HOME_SERVER_ADDRESS, "/event/leave"), {
            eventId: idEvent,
            userId: idUser
          });
        }
      }, {
        key: "getFollowing",
        value: function getFollowing(_id) {
          return this.httpClient.get("".concat(this.HOME_SERVER_ADDRESS, "/user/following/") + "".concat(_id));
        }
      }, {
        key: "comment",
        value: function comment(_comment, postId, owner) {
          return this.httpClient.put("".concat(this.HOME_SERVER_ADDRESS, "/post/comment"), {
            postId: postId,
            owner: owner,
            message: _comment
          });
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], HomeService);
    /***/
  },

  /***/
  "./src/app/views/post/post.service.ts":
  /*!********************************************!*\
    !*** ./src/app/views/post/post.service.ts ***!
    \********************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppViewsPostPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var PostService =
    /*#__PURE__*/
    function () {
      function PostService(httpClient, storage) {
        _classCallCheck(this, PostService);

        this.httpClient = httpClient;
        this.storage = storage;
        this.POST_SERVER_ADDRESS = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUri;
        this.homeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(PostService, [{
        key: "getPosts",
        value: function getPosts(id) {
          return this.httpClient.get("".concat(this.POST_SERVER_ADDRESS, "/user/posts/") + "".concat(id) + "/0");
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          return this.httpClient.delete("".concat(this.POST_SERVER_ADDRESS, "/post/") + "".concat(id));
        }
      }]);

      return PostService;
    }();

    PostService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], PostService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      apiUri: 'http://147.83.7.156:3000'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\sgale\WebstormProjects\ErasmusApp\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map