function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{TpdJ:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_tab",(function(){return a})),n.d(t,"ion_tabs",(function(){return s}));var i=n("dSyh"),r=(n("AfW+"),n("m9yc")),a=function(){function e(t){_classCallCheck(this,e),Object(i.l)(this,t),this.loaded=!1,this.active=!1}return _createClass(e,[{key:"componentWillLoad",value:function(){}},{key:"setActive",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.prepareLazyLoaded());case 2:this.active=!0;case 3:case"end":return e.stop()}}),null,this)}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(r.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var e=this.tab,t=this.active,n=this.component;return Object(i.i)(i.a,{role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":"tab-button-".concat(e),class:{"ion-page":void 0===n,"tab-hidden":!t}},Object(i.i)("slot",null))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return":host(.tab-hidden){display:none!important}"}}]),e}(),s=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(e){var t=e.detail,i=t.href,r=t.tab;if(n.useRouter&&void 0!==i){var a=document.querySelector("ion-router");a&&a.push(i)}else n.select(r)},this.ionNavWillLoad=Object(i.d)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(i.d)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(i.d)(this,"ionTabsDidChange",3)}return _createClass(e,[{key:"componentWillLoad",value:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){t.next=4;break}return e=this.tabs,t.next=4,regeneratorRuntime.awrap(this.select(e[0]));case 4:this.ionNavWillLoad.emit();case 5:case"end":return t.stop()}}),null,this)}},{key:"componentWillRender",value:function(){var e=this.el.querySelector("ion-tab-bar");e&&(e.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:function(e){var t;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=o(this.tabs,e),n.t0=!!this.shouldSwitch(t),!n.t0){n.next=9;break}return n.next=5,regeneratorRuntime.awrap(this.setActive(t));case 5:return n.next=7,regeneratorRuntime.awrap(this.notifyRouter());case 7:this.tabSwitch(),n.t0=!0;case 9:return n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),null,this)}},{key:"getTab",value:function(e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o(this.tabs,e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(e){var t,n=this;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=o(this.tabs,e),!this.shouldSwitch(t)){i.next=7;break}return i.next=4,regeneratorRuntime.awrap(this.setActive(t));case 4:i.t0={changed:!0,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}},i.next=8;break;case 7:i.t0={changed:!1,element:this.selectedTab};case 8:return i.abrupt("return",i.t0);case 9:case"end":return i.stop()}}),null,this)}},{key:"getRouteId",value:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.selectedTab&&this.selectedTab.tab,t.abrupt("return",void 0!==e?{id:e,element:this.selectedTab}:void 0);case 2:case"end":return t.stop()}}),null,this)}},{key:"setActive",value:function(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.setActive())}},{key:"tabSwitch",value:function(){var e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(e){return void 0!==e&&e!==this.selectedTab&&!this.transitioning}},{key:"render",value:function(){return Object(i.i)(i.a,{onIonTabButtonClick:this.onTabClicked},Object(i.i)("slot",{name:"top"}),Object(i.i)("div",{class:"tabs-inner"},Object(i.i)("slot",null)),Object(i.i)("slot",{name:"bottom"}))}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"}}]),e}(),o=function(e,t){var n="string"==typeof t?e.find((function(e){return e.tab===t})):t;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n}}}]);