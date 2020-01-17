(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-conversation-conversation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/conversation/conversation.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/conversation/conversation.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{name}} - Conversation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"scroll-this\">\n  <ion-list class=\"messages_list\">\n    <ion-item lines=\"none\" *ngFor=\"let msg of messages\">\n      <div *ngIf=\"msg.author === user.name\" class=\"message_bubble yours\">\n        <div class=\"message\">\n          <span class=\"faded\">Me: </span>\n          {{msg.text}}\n          <br>\n          <ion-icon *ngIf=\"msg.read == false\" color=\"primary\" name=\"checkmark\"></ion-icon>\n          <ion-icon *ngIf=\"msg.read == true\" color=\"success\" name=\"done-all\"></ion-icon>\n          <span class=\"faded\" style=\"font-size: x-small\">{{formatDate(msg.timestamp)}}</span>\n        </div>\n      </div>\n      <div *ngIf=\"msg.author !== user.name\" class=\"message_bubble mine\">\n        <span class=\"message\">\n          <span class=\"faded\">{{name}}: </span>\n          {{msg.text}}\n          <br>\n          <span class=\"faded\" style=\"font-size: x-small\">{{formatDate(msg.timestamp)}}</span>\n        </span>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"send_form\">\n  <ion-col class=\"send_form_input\">\n    <ion-textarea #box placeholder=\"Type a message...\"\n                  (keyup.enter)=\"onEnter(box.value); box.value = '' \">\n    </ion-textarea>\n  </ion-col>\n  <ion-col class=\"send_form_button\">\n    <ion-button (click)=\"onEnter(box.value); box.value = '' \">\n      Send\n      <ion-icon slot=\"end\" name=\"send\" size=\"large\"></ion-icon>\n    </ion-button>\n  </ion-col>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/views/conversation/conversation-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/conversation/conversation-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConversationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageRoutingModule", function() { return ConversationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation.page */ "./src/app/views/conversation/conversation.page.ts");




const routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_3__["ConversationPage"]
    }
];
let ConversationPageRoutingModule = class ConversationPageRoutingModule {
};
ConversationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConversationPageRoutingModule);



/***/ }),

/***/ "./src/app/views/conversation/conversation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/conversation/conversation.module.ts ***!
  \***********************************************************/
/*! exports provided: ConversationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function() { return ConversationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversation-routing.module */ "./src/app/views/conversation/conversation-routing.module.ts");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation.page */ "./src/app/views/conversation/conversation.page.ts");







let ConversationPageModule = class ConversationPageModule {
};
ConversationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConversationPageRoutingModule"]
        ],
        declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]]
    })
], ConversationPageModule);



/***/ }),

/***/ "./src/app/views/conversation/conversation.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/views/conversation/conversation.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messages_list .item {\n  border: 0 !important;\n  border-color: transparent !important;\n}\n.messages_list .message_bubble {\n  width: 100%;\n  margin: 0 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.messages_list .message {\n  border-radius: 10px;\n  padding: 8px 15px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: inline-block;\n  color: #333;\n}\n.messages_list .message .faded {\n  opacity: 0.5;\n}\n.messages_list .yours {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.messages_list .yours .message {\n  margin-right: 25%;\n  background-color: #eee;\n  position: relative;\n}\n.messages_list .yours .message:before {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  left: -7px;\n  height: 20px;\n  width: 20px;\n  background: #eee;\n  border-bottom-right-radius: 15px;\n}\n.messages_list .yours .message:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: -10px;\n  width: 10px;\n  height: 20px;\n  background: white;\n  border-bottom-right-radius: 10px;\n}\n.messages_list .mine {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.messages_list .mine .message {\n  color: white;\n  margin-left: 25%;\n  background: #3880ff;\n  background-attachment: fixed;\n  position: relative;\n}\n.messages_list .mine .message:before {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  right: -8px;\n  height: 20px;\n  width: 20px;\n  background: #3880ff;\n  background-attachment: fixed;\n  border-bottom-left-radius: 15px;\n}\n.messages_list .mine .message:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  right: -10px;\n  width: 10px;\n  height: 20px;\n  background: white;\n  border-bottom-left-radius: 10px;\n}\n.send_form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n}\n.send_form_input {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.send_form_button {\n  text-align: right;\n  max-width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2dhdHR1c28vR2l0SHViL0VyYXNtdXNBcHAvc3JjL2FwcC92aWV3cy9jb252ZXJzYXRpb24vY29udmVyc2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3MvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxvQkFBQTtFQUNBLG9DQUFBO0FDRFI7QURJSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZSO0FES007RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDSFI7QURJUTtFQUNJLFlBQUE7QUNGWjtBRE1NO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0pSO0FET007RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNMUjtBRFFNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDTlI7QURRTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ05SO0FEU007RUFDRSxzQkFBQTtVQUFBLHFCQUFBO0FDUFI7QURVTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ1JSO0FEV007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQ1RSO0FEWU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNWUjtBRGdCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtBQ2JKO0FEZUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7QUNaSjtBRGNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXNfbGlzdCB7XG5cbiAgICAuaXRlbSB7XG4gICAgICAgIGJvcmRlcjogMCFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tZXNzYWdlX2J1YmJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIC5mYWRlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnlvdXJzIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC55b3VycyAubWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC55b3VycyAubWVzc2FnZTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogLTdweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICB9XG4gICAgICAueW91cnMgLm1lc3NhZ2U6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1pbmUge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5taW5lIC5tZXNzYWdlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5taW5lIC5tZXNzYWdlOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogLThweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1pbmUgLm1lc3NhZ2U6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgIFxuXG59XG4uc2VuZF9mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnNlbmRfZm9ybV9pbnB1dCB7XG4gICAgZmxleDogMTtcbn1cbi5zZW5kX2Zvcm1fYnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuIiwiLm1lc3NhZ2VzX2xpc3QgLml0ZW0ge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLm1lc3NhZ2VzX2xpc3QgLm1lc3NhZ2VfYnViYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1lc3NhZ2VzX2xpc3QgLm1lc3NhZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMzMzM7XG59XG4ubWVzc2FnZXNfbGlzdCAubWVzc2FnZSAuZmFkZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubWVzc2FnZXNfbGlzdCAueW91cnMge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5tZXNzYWdlc19saXN0IC55b3VycyAubWVzc2FnZSB7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVzc2FnZXNfbGlzdCAueW91cnMgLm1lc3NhZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC03cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLm1lc3NhZ2VzX2xpc3QgLnlvdXJzIC5tZXNzYWdlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC0xMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ubWVzc2FnZXNfbGlzdCAubWluZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tZXNzYWdlc19saXN0IC5taW5lIC5tZXNzYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVzc2FnZXNfbGlzdCAubWluZSAubWVzc2FnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC04cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG59XG4ubWVzc2FnZXNfbGlzdCAubWluZSAubWVzc2FnZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VuZF9mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNlbmRfZm9ybV9pbnB1dCB7XG4gIGZsZXg6IDE7XG59XG5cbi5zZW5kX2Zvcm1fYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1heC13aWR0aDogMTIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/conversation/conversation.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/conversation/conversation.page.ts ***!
  \*********************************************************/
/*! exports provided: ConversationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPage", function() { return ConversationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _models_Message_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Message/message */ "./src/app/models/Message/message.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let ConversationPage = class ConversationPage {
    constructor(route, chatService, storage, router) {
        this.route = route;
        this.chatService = chatService;
        this.storage = storage;
        this.router = router;
        this.name = this.route.snapshot.paramMap.get('name');
        setTimeout(() => this.scrollToBottom(), 500);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = JSON.parse(this.storage.getUser());
            yield this.chatService.getStoredMessages().toPromise().then((data) => {
                this.messages = data.filter((item) => item.author === this.name || item.destination === this.name);
                this.chatService.ackMsg(this.name);
            });
            this.chatService.getMessage().subscribe((data) => {
                if (data.email === this.name) {
                    this.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', data.email, this.name, data.message, new Date(), true, 0));
                    setTimeout(() => this.scrollToBottom(), 50);
                    if (this.router.url === ('/conversation/' + this.name)) {
                        this.chatService.ackMsg(this.name);
                    }
                }
            });
            this.chatService.getACK().subscribe((data) => {
                console.log('ACK received from ' + data);
                this.messages.forEach(message => message.read = true);
            });
        });
    }
    onEnter(value) {
        this.message = value;
        this.sendMessage();
    }
    sendMessage() {
        if (this.message.replace(/\s/g, '').length) {
            let pepe = this.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', this.user.email, this.name, this.message, new Date(), false, 0)); // TODO: Swap name email
            console.log(pepe);
            this.chatService.sendMessage(this.message, this.name); // TODO: noo
            setTimeout(() => this.scrollToBottom(), 50);
        }
    }
    zeroPad(a) {
        const s = a.toString();
        if (s.length < 2) {
            return '0' + a;
        }
        else {
            return a;
        }
    }
    formatDate(timestamp) {
        const date = new Date(timestamp);
        const monthNames = [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sep', 'Oct',
            'Nov', 'Dec'
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        const hour = this.zeroPad(date.getHours());
        const min = this.zeroPad(date.getMinutes());
        const sec = this.zeroPad(date.getSeconds());
        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    }
    scrollToBottom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.myContent.scrollToBottom(500);
        });
    }
};
ConversationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], ConversationPage.prototype, "myContent", void 0);
ConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conversation',
        template: __webpack_require__(/*! raw-loader!./conversation.page.html */ "./node_modules/raw-loader/index.js!./src/app/views/conversation/conversation.page.html"),
        styles: [__webpack_require__(/*! ./conversation.page.scss */ "./src/app/views/conversation/conversation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
        _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ConversationPage);



/***/ })

}]);
//# sourceMappingURL=views-conversation-conversation-module-es2015.js.map