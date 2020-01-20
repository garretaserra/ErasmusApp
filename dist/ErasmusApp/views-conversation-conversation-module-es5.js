function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-conversation-conversation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/conversation/conversation.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/conversation/conversation.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsConversationConversationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"name != 'everyone'\">{{name}} - Conversation</ion-title>\r\n    <ion-title *ngIf=\"name === 'everyone'\">Global Conversation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"scroll-this\">\r\n  <ion-list class=\"messages_list\">\r\n    <ion-item lines=\"none\" *ngFor=\"let msg of messages\">\r\n      <div *ngIf=\"msg.author === user.name\" class=\"message_bubble yours\">\r\n        <div class=\"message\">\r\n          <span class=\"faded\">Me: </span>\r\n          {{msg.text}}\r\n          <br>\r\n          <ion-icon *ngIf=\"msg.read == false\" color=\"primary\" name=\"checkmark\"></ion-icon>\r\n          <ion-icon *ngIf=\"msg.read == true\" color=\"success\" name=\"done-all\"></ion-icon>\r\n          <span class=\"faded\" style=\"font-size: x-small\">{{formatDate(msg.timestamp)}}</span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"msg.author !== user.name\" class=\"message_bubble mine\">\r\n        <span class=\"message\">\r\n          <span class=\"faded\">{{msg.author}}: </span>\r\n          {{msg.text}}\r\n          <br>\r\n          <span class=\"faded\" style=\"font-size: x-small\">{{formatDate(msg.timestamp)}}</span>\r\n        </span>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"send_form\">\r\n  <ion-col class=\"send_form_input\">\r\n    <ion-textarea #box placeholder=\"Type a message...\"\r\n                  (keyup.enter)=\"onEnter(box.value); box.value = '' \">\r\n    </ion-textarea>\r\n  </ion-col>\r\n  <ion-col class=\"send_form_button\">\r\n    <ion-button (click)=\"onEnter(box.value); box.value = '' \">\r\n      Send\r\n      <ion-icon slot=\"end\" name=\"send\" size=\"large\"></ion-icon>\r\n    </ion-button>\r\n  </ion-col>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./src/app/views/conversation/conversation-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/views/conversation/conversation-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ConversationPageRoutingModule */

  /***/
  function srcAppViewsConversationConversationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConversationPageRoutingModule", function () {
      return ConversationPageRoutingModule;
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


    var _conversation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conversation.page */
    "./src/app/views/conversation/conversation.page.ts");

    var routes = [{
      path: '',
      component: _conversation_page__WEBPACK_IMPORTED_MODULE_3__["ConversationPage"]
    }];

    var ConversationPageRoutingModule = function ConversationPageRoutingModule() {
      _classCallCheck(this, ConversationPageRoutingModule);
    };

    ConversationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConversationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/conversation/conversation.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/conversation/conversation.module.ts ***!
    \***********************************************************/

  /*! exports provided: ConversationPageModule */

  /***/
  function srcAppViewsConversationConversationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function () {
      return ConversationPageModule;
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


    var _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./conversation-routing.module */
    "./src/app/views/conversation/conversation-routing.module.ts");
    /* harmony import */


    var _conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./conversation.page */
    "./src/app/views/conversation/conversation.page.ts");

    var ConversationPageModule = function ConversationPageModule() {
      _classCallCheck(this, ConversationPageModule);
    };

    ConversationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConversationPageRoutingModule"]],
      declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]]
    })], ConversationPageModule);
    /***/
  },

  /***/
  "./src/app/views/conversation/conversation.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/views/conversation/conversation.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsConversationConversationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".messages_list .item {\n  border: 0 !important;\n  border-color: transparent !important;\n}\n.messages_list .message_bubble {\n  width: 100%;\n  margin: 0 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.messages_list .message {\n  border-radius: 10px;\n  padding: 8px 15px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: inline-block;\n  color: #333;\n}\n.messages_list .message .faded {\n  opacity: 0.5;\n}\n.messages_list .mine {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.messages_list .mine .message {\n  margin-right: 25%;\n  background-color: #eee;\n  position: relative;\n}\n.messages_list .mine .message:before {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  left: -7px;\n  height: 20px;\n  width: 20px;\n  background: #eee;\n  border-bottom-right-radius: 15px;\n}\n.messages_list .mine .message:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: -10px;\n  width: 10px;\n  height: 20px;\n  background: white;\n  border-bottom-right-radius: 10px;\n}\n.messages_list .yours {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.messages_list .yours .message {\n  color: white;\n  margin-left: 25%;\n  background: #3880ff;\n  background-attachment: fixed;\n  position: relative;\n}\n.messages_list .yours .message:before {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  right: -8px;\n  height: 20px;\n  width: 20px;\n  background: #3880ff;\n  background-attachment: fixed;\n  border-bottom-left-radius: 15px;\n}\n.messages_list .yours .message:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  right: -10px;\n  width: 10px;\n  height: 20px;\n  background: white;\n  border-bottom-left-radius: 10px;\n}\n.send_form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n}\n.send_form_input {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.send_form_button {\n  text-align: right;\n  max-width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29udmVyc2F0aW9uL0M6XFxVc2Vyc1xcc2dhbGVcXFdlYnN0b3JtUHJvamVjdHNcXEVyYXNtdXNBcHAvc3JjXFxhcHBcXHZpZXdzXFxjb252ZXJzYXRpb25cXGNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksb0JBQUE7RUFDQSxvQ0FBQTtBQ0RSO0FESUk7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGUjtBREtNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0hSO0FESVE7RUFDSSxZQUFBO0FDRlo7QURNTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNKUjtBRE9NO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTFI7QURRTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ05SO0FEUU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNOUjtBRFNNO0VBQ0Usc0JBQUE7VUFBQSxxQkFBQTtBQ1BSO0FEVU07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFdNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNUUjtBRFlNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDVlI7QURnQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7QUNiSjtBRGVBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDWko7QURjQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VzX2xpc3Qge1xyXG5cclxuICAgIC5pdGVtIHtcclxuICAgICAgICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlX2J1YmJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAuZmFkZWQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWluZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5taW5lIC5tZXNzYWdlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLm1pbmUgLm1lc3NhZ2U6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAtN3B4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5taW5lIC5tZXNzYWdlOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC55b3VycyB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAueW91cnMgLm1lc3NhZ2Uge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC55b3VycyAubWVzc2FnZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnlvdXJzIC5tZXNzYWdlOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBcclxuXHJcbn1cclxuLnNlbmRfZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5zZW5kX2Zvcm1faW5wdXQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG4uc2VuZF9mb3JtX2J1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbn1cclxuIiwiLm1lc3NhZ2VzX2xpc3QgLml0ZW0ge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLm1lc3NhZ2VzX2xpc3QgLm1lc3NhZ2VfYnViYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1lc3NhZ2VzX2xpc3QgLm1lc3NhZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMzMzM7XG59XG4ubWVzc2FnZXNfbGlzdCAubWVzc2FnZSAuZmFkZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubWVzc2FnZXNfbGlzdCAubWluZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1lc3NhZ2VzX2xpc3QgLm1pbmUgLm1lc3NhZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lc3NhZ2VzX2xpc3QgLm1pbmUgLm1lc3NhZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC03cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLm1lc3NhZ2VzX2xpc3QgLm1pbmUgLm1lc3NhZ2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogLTEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5tZXNzYWdlc19saXN0IC55b3VycyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tZXNzYWdlc19saXN0IC55b3VycyAubWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lc3NhZ2VzX2xpc3QgLnlvdXJzIC5tZXNzYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLThweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbn1cbi5tZXNzYWdlc19saXN0IC55b3VycyAubWVzc2FnZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VuZF9mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNlbmRfZm9ybV9pbnB1dCB7XG4gIGZsZXg6IDE7XG59XG5cbi5zZW5kX2Zvcm1fYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1heC13aWR0aDogMTIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/views/conversation/conversation.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/conversation/conversation.page.ts ***!
    \*********************************************************/

  /*! exports provided: ConversationPage */

  /***/
  function srcAppViewsConversationConversationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConversationPage", function () {
      return ConversationPage;
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


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../storage/storage.component */
    "./src/app/storage/storage.component.ts");
    /* harmony import */


    var _models_Message_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/Message/message */
    "./src/app/models/Message/message.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ConversationPage =
    /*#__PURE__*/
    function () {
      function ConversationPage(route, chatService, storage, router) {
        var _this = this;

        _classCallCheck(this, ConversationPage);

        this.route = route;
        this.chatService = chatService;
        this.storage = storage;
        this.router = router;
        this.name = this.route.snapshot.paramMap.get('name');
        setTimeout(function () {
          return _this.scrollToBottom();
        }, 500);
      }

      _createClass(ConversationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.user = JSON.parse(this.storage.getUser());

                    if (!(this.name !== 'everyone')) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 4;
                    return this.chatService.getStoredMessages().toPromise().then(function (data) {
                      // tslint:disable-next-line:max-line-length
                      _this2.messages = data.filter(function (item) {
                        return (item.author === _this2.name || item.destination === _this2.name) && item.destination !== 'everyone';
                      });

                      _this2.chatService.ackMsg(_this2.name);
                    });

                  case 4:
                    _context.next = 9;
                    break;

                  case 6:
                    if (!(this.name === 'everyone')) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 9;
                    return this.chatService.getStoredMessages().toPromise().then(function (data) {
                      _this2.messages = data.filter(function (item) {
                        return item.destination === 'everyone';
                      });
                    });

                  case 9:
                    this.chatService.getMessage().subscribe(function (data) {
                      if (_this2.name !== 'everyone') {
                        if (data.email === _this2.name) {
                          _this2.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', data.email, _this2.name, data.message, new Date(), true, 0));

                          setTimeout(function () {
                            return _this2.scrollToBottom();
                          }, 50);

                          if (_this2.router.url === '/conversation/' + _this2.name) {
                            _this2.chatService.ackMsg(_this2.name);
                          }
                        }
                      } else if (_this2.name === 'everyone') {
                        _this2.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', data.email, 'everyone', data.message, new Date(), true, 0));

                        setTimeout(function () {
                          return _this2.scrollToBottom();
                        }, 50); // TODO: ack everyone
                      }
                    });
                    this.chatService.getACK().subscribe(function (data) {
                      console.log('ACK received from ' + data);

                      _this2.messages.forEach(function (message) {
                        return message.read = true;
                      });
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onEnter",
        value: function onEnter(value) {
          this.message = value;
          this.sendMessage();
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this3 = this;

          if (this.message.replace(/\s/g, '').length) {
            if (this.name !== 'everyone') {
              this.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', this.user.name, this.name, this.message, new Date(), false, 0));
              this.chatService.sendMessage(this.message, this.name);
              setTimeout(function () {
                return _this3.scrollToBottom();
              }, 50);
            } else if (this.name === 'everyone') {
              this.messages.push(new _models_Message_message__WEBPACK_IMPORTED_MODULE_5__["Message"]('', this.user.name, 'everyone', this.message, new Date(), false, 0));
              this.chatService.sendMessage(this.message, 'everyone');
              setTimeout(function () {
                return _this3.scrollToBottom();
              }, 50);
            }
          }
        }
      }, {
        key: "zeroPad",
        value: function zeroPad(a) {
          var s = a.toString();

          if (s.length < 2) {
            return '0' + a;
          } else {
            return a;
          }
        }
      }, {
        key: "formatDate",
        value: function formatDate(timestamp) {
          var date = new Date(timestamp);
          var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          var day = date.getDate();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();
          var hour = this.zeroPad(date.getHours());
          var min = this.zeroPad(date.getMinutes());
          var sec = this.zeroPad(date.getSeconds());
          return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.myContent.scrollToBottom(500);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ConversationPage;
    }();

    ConversationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }, {
        type: _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])], ConversationPage.prototype, "myContent", void 0);
    ConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conversation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conversation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/conversation/conversation.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conversation.page.scss */
      "./src/app/views/conversation/conversation.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ConversationPage);
    /***/
  }
}]);
//# sourceMappingURL=views-conversation-conversation-module-es5.js.map