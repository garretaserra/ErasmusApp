function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return a}));var r=n("dSyh"),i=n("kBU6"),a=function(e){return new Promise((function(t,n){Object(r.m)((function(){o(e),c(e).then((function(n){n.animation&&n.animation.destroy(),u(e),t(n)}),(function(t){u(e),n(t)}))}))}))},o=function(e){var t=e.enteringEl,n=e.leavingEl;R(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),n&&E(n,!1)},c=function(e){var t;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(s(e));case 2:return t=n.sent,n.abrupt("return",t?l(t,e):f(e));case 4:case"end":return n.stop()}}))},u=function(e){var t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},s=function(e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.leavingEl||!e.animated||0===e.duration){t.next=16;break}if(!e.animationBuilder){t.next=5;break}t.t0=e.animationBuilder,t.next=15;break;case 5:if("ios"!==e.mode){t.next=11;break}return t.next=8,regeneratorRuntime.awrap(n.e(116).then(n.bind(null,"Lu00")));case 8:t.t1=t.sent.iosTransitionAnimation,t.next=14;break;case 11:return t.next=13,regeneratorRuntime.awrap(n.e(117).then(n.bind(null,"wxTh")));case 13:t.t1=t.sent.mdTransitionAnimation;case 14:t.t0=t.t1;case 15:return t.abrupt("return",t.t0);case 16:case"end":return t.stop()}}))},l=function(e,t){var r,i,a;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(h(t,!0));case 2:return o.prev=2,o.next=5,regeneratorRuntime.awrap(n.e(5).then(n.bind(null,"gHMO")));case 5:return i=o.sent,o.next=8,regeneratorRuntime.awrap(i.create(e,t.baseEl,t));case 8:r=o.sent,o.next=14;break;case 11:o.prev=11,o.t0=o.catch(2),r=e(t.baseEl,t);case 14:return v(t.enteringEl,t.leavingEl),o.next=17,regeneratorRuntime.awrap(p(r,t));case 17:return a=o.sent,o.abrupt("return",(t.progressCallback&&t.progressCallback(void 0),a&&g(t.enteringEl,t.leavingEl),{hasCompleted:a,animation:r}));case 19:case"end":return o.stop()}}),null,null,[[2,11]])},f=function(e){var t,n;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.enteringEl,n=e.leavingEl,r.next=3,regeneratorRuntime.awrap(h(e,!1));case 3:return v(t,n),g(t,n),r.abrupt("return",{hasCompleted:!0});case 6:case"end":return r.stop()}}))},h=function(e,t){var n;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=(void 0!==e.deepWait?e.deepWait:t)?[b(e.enteringEl),b(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],r.next=3,regeneratorRuntime.awrap(Promise.all(n));case 3:return r.next=5,regeneratorRuntime.awrap(d(e.viewIsReady,e.enteringEl));case 5:case"end":return r.stop()}}))},d=function(e,t){return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=e,!n.t0){n.next=4;break}return n.next=4,regeneratorRuntime.awrap(e(t));case 4:case"end":return n.stop()}}))},p=function(e,t){var n=t.progressCallback,r=new Promise((function(t){e.onFinish((function(n){"number"==typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return n?(e.progressStart(!0),n(e)):e.play(),r},v=function(e,t){m(t,i.c),m(e,i.a)},g=function(e,t){m(e,i.b),m(t,i.d)},m=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},w=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},b=function e(t){var n;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n=t)){r.next=12;break}if(r.t0=null!=n.componentOnReady,!r.t0){r.next=8;break}return r.next=6,regeneratorRuntime.awrap(n.componentOnReady());case 6:r.t1=r.sent,r.t0=null!=r.t1;case 8:if(!r.t0){r.next=10;break}return r.abrupt("return");case 10:return r.next=12,regeneratorRuntime.awrap(Promise.all(Array.from(n.children).map(e)));case 12:case"end":return r.stop()}}))},E=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},R=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},y=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}},Dl6n:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c}));var r=function(e,t){return null!==t.closest(e)},i=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},a=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},o=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,n){var r;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(null==e||"#"===e[0]||o.test(e)){i.next=4;break}if(!(r=document.querySelector("ion-router"))){i.next=4;break}return i.abrupt("return",(null!=t&&t.preventDefault(),r.push(e,n)));case 4:return i.abrupt("return",!1);case 5:case"end":return i.stop()}}))}},"G+rn":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("2Vo4"),i=n("AytR"),a=n("8Y7J"),o=n("IheW"),c=n("xgBC"),u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.storage=n,this.FRIENDS_SERVER_ADDRESS=i.a.apiUri+"/user",this.authSubject=new r.a(!1)}return _createClass(e,[{key:"getUsers",value:function(e){return console.log(e),this.httpClient.get("".concat(this.FRIENDS_SERVER_ADDRESS,"/all/")+e)}}]),e}();return e.ngInjectableDef=a.bc({factory:function(){return new e(a.cc(o.c),a.cc(c.b))},token:e,providedIn:"root"}),e}()},PH8Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("2Vo4"),i=n("AytR"),a=n("8Y7J"),o=n("IheW"),c=n("xgBC"),u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.storage=n,this.FOLLOWERS_SERVER_ADDRESS=i.a.apiUri+"/user",this.followersSubject=new r.a(!1)}return _createClass(e,[{key:"getFollowers",value:function(e){return this.httpClient.get("".concat(this.FOLLOWERS_SERVER_ADDRESS,"/followers/")+"".concat(e))}}]),e}();return e.ngInjectableDef=a.bc({factory:function(){return new e(a.cc(o.c),a.cc(c.b))},token:e,providedIn:"root"}),e}()},"QQ+o":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("2Vo4"),i=n("AytR"),a=n("8Y7J"),o=n("IheW"),c=n("xgBC"),u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.storage=n,this.PROFILE_SERVER_ADDRESS=i.a.apiUri+"/user",this.authSubject=new r.a(!1)}return _createClass(e,[{key:"getProfile",value:function(e){return this.httpClient.get("".concat(this.PROFILE_SERVER_ADDRESS,"/profile/")+"".concat(e))}},{key:"follow",value:function(e,t){return this.httpClient.put("".concat(this.PROFILE_SERVER_ADDRESS,"/follow"),{userId:e,followedId:t})}},{key:"unfollow",value:function(e,t){return this.httpClient.put("".concat(this.PROFILE_SERVER_ADDRESS,"/unfollow"),{userId:e,followedId:t})}},{key:"getFollowers",value:function(e){return this.httpClient.get("".concat(this.PROFILE_SERVER_ADDRESS,"/followers/")+"".concat(e))}},{key:"checkFollow",value:function(e,t){var n=this;return console.log("followers: ",e),this.val="not",0===e.length||e.forEach((function(e){console.log("this.val:",n.val),e._id===t&&(n.val="following")})),console.log("this.val:",this.val),this.val}}]),e}();return e.ngInjectableDef=a.bc({factory:function(){return new e(a.cc(o.c),a.cc(c.b))},token:e,providedIn:"root"}),e}()},TVc2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(t,n,r,i,a,o,c){_classCallCheck(this,e),this._id=t,this.author=n,this.destination=r,this.text=i,this.timestamp=a,this.read=o,this.__v=c}},YtD4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,c.forEach((function(e){for(var n=t.querySelectorAll(e),r=n.length-1;r>=0;r--){var o=n[r];o.parentNode?o.parentNode.removeChild(o):t.removeChild(o);for(var c=a(o),u=0;u<c.length;u++)i(c[u])}}));for(var r=a(t),o=0;o<r.length;o++)i(r[o]);var u=document.createElement("div");u.appendChild(t);var s=u.querySelector("div");return null!==s?s.innerHTML:u.innerHTML}catch(l){return console.error(l),""}},i=function e(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var r=t.attributes.item(n),i=r.name;if(o.includes(i.toLowerCase())){var c=r.value;null!=c&&c.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}else t.removeAttribute(i)}for(var u=a(t),s=0;s<u.length;s++)e(u[s])}},a=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},cZc3:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("2Vo4"),i=n("AytR"),a=n("8Y7J"),o=n("IheW"),c=n("xgBC"),u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.storage=n,this.FOLLOWING_SERVER_ADDRESS=i.a.apiUri+"/user",this.followingSubject=new r.a(!1)}return _createClass(e,[{key:"getFollowing",value:function(e){return this.httpClient.get("".concat(this.FOLLOWING_SERVER_ADDRESS,"/following/")+"".concat(e))}}]),e}();return e.ngInjectableDef=a.bc({factory:function(){return new e(a.cc(o.c),a.cc(c.b))},token:e,providedIn:"root"}),e}()},m9yc:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(e,t,n,r,i){var a;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e){o.next=2;break}return o.abrupt("return",e.attachViewToDom(t,n,i,r));case 2:if("string"==typeof n||n instanceof HTMLElement){o.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,r&&r.forEach((function(e){return a.classList.add(e)})),i&&Object.assign(a,i),t.appendChild(a),o.t0=a.componentOnReady,!o.t0){o.next=12;break}return o.next=12,regeneratorRuntime.awrap(a.componentOnReady());case 12:return o.abrupt("return",a);case 13:case"end":return o.stop()}}))},i=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},"nN+u":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var r=function(e,t,n){var r=new MutationObserver((function(e){n(i(e,t))}));return r.observe(e,{childList:!0,subtree:!0}),r},i=function(e,t){var n;return e.forEach((function(e){for(var r=0;r<e.addedNodes.length;r++)n=a(e.addedNodes[r],t)||n})),n},a=function(e,t){if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find((function(e){return!0===e.checked}))}},opz7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},qaSm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function e(t,n){_classCallCheck(this,e),this.x=t,this.y=n},i=function(e,t,n,r,i){var c=o(e.y,t.y,n.y,r.y,i);return a(e.x,t.x,n.x,r.x,c[0])},a=function(e,t,n,r,i){return i*(3*t*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-e*Math.pow(i-1,3)},o=function(e,t,n,r,i){return c((r-=i)-3*(n-=i)+3*(t-=i)-(e-=i),3*n-6*t+3*e,3*t-3*e,e).filter((function(e){return e>=0&&e<=1}))},c=function(e,t,n,r){if(0===e)return function(e,t,n){var r=t*t-4*e*n;return r<0?[]:[(-t+Math.sqrt(r))/(2*e),(-t-Math.sqrt(r))/(2*e)]}(t,n,r);var i=(3*(n/=e)-(t/=e)*t)/3,a=(2*t*t*t-9*t*n+27*(r/=e))/27;if(0===i)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-i),-Math.sqrt(-i)];var o=Math.pow(a/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(a/2,.5)-t/3];if(o>0)return[Math.pow(-a/2+Math.sqrt(o),1/3)-Math.pow(a/2+Math.sqrt(o),1/3)-t/3];var c=Math.sqrt(Math.pow(-i/3,3)),u=Math.acos(-a/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(c,1/3);return[s*Math.cos(u/3)-t/3,s*Math.cos((u+2*Math.PI)/3)-t/3,s*Math.cos((u+4*Math.PI)/3)-t/3]}},"wo+Y":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("2Vo4"),i=n("AytR"),a=n("8Y7J"),o=n("IheW"),c=n("xgBC"),u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.storage=n,this.AUTH_SERVER_ADDRESS=i.a.apiUri+"/user",this.authSubject=new r.a(!1)}return _createClass(e,[{key:"register",value:function(e){return this.httpClient.post("".concat(this.AUTH_SERVER_ADDRESS,"/register"),e)}},{key:"login",value:function(e){return this.httpClient.post("".concat(this.AUTH_SERVER_ADDRESS,"/login"),e)}},{key:"sendUserPages",value:function(e){return e}}]),e}();return e.ngInjectableDef=a.bc({factory:function(){return new e(a.cc(o.c),a.cc(c.b))},token:e,providedIn:"root"}),e}()}}]);