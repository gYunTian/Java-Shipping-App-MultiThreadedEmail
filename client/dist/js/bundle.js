!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return d}));const r={signInEmailInput:document.querySelector(".sign-in-email-input"),signInPasswordInput:document.querySelector(".sign-in-password-input"),signInBtn:document.querySelector("#sign-in"),resetPwBtn:document.querySelector("#reset-password"),signUpDisplayNameInput:document.querySelector(".sign-up-display-name-input"),signUpEmailInput:document.querySelector(".sign-up-email-input"),signUpPasswordInput:document.querySelector(".sign-up-password-input"),signUpPasswordCfmInput:document.querySelector(".sign-up-password-cfm-input"),signUpBtn:document.querySelector("#sign-up"),signOutBtn:document.querySelector("#sign-out"),spinner:document.querySelector(".spinner-wrapper"),greeting:document.querySelector(".greeting"),dateSelectionContainer:document.querySelector(".date-selection-container"),dataTableContainer:document.querySelector(".data-table-container"),dataTableBody:document.querySelector(".data-table-body"),dataTableHead:document.querySelector(".data-table-head"),navFavsBtn:document.getElementById("favourites"),navSubsBtn:document.getElementById("subscriptions"),navBtns:[document.getElementById("favourites"),document.getElementById("subscriptions")],modalBg:document.querySelector(".modal-bg"),modalBox:document.querySelector(".modal"),requestResetBtn:document.getElementById("request-reset-btn"),modalCloseBtn:document.getElementById("modal-close-btn"),resetEmailInput:document.querySelector(".reset-email-input"),modalBg2:document.querySelector(".modal-bg-2"),modalBox2:document.querySelector(".modal-2"),resetEmailInput2:document.querySelector(".reset-email-input-2"),resetTokenInput:document.querySelector(".reset-token-input"),newPwInput:document.querySelector(".newpw-input "),confirmNewPwBtn:document.querySelector(".confirm-newpw-btn"),modalCloseBtn2:document.querySelector(".modal-close-2")},o="http://localhost:8080/api",s={registerUser:o+"/registerUser",loginUser:o+"/loginUser",requestToken:o+"/resetPasswordRequest",resetPassword:o+"/resetPassword",getVessels:o+"/vessels",addFav:o+"/addFavourite",getFavs:o+"/favouritesByUserId",deleteFav:o+"/deleteFavourite",addSub:o+"/addSubscription",getSubs:o+"/subscriptionsByUserId",deleteSub:o+"/deleteSubscriptions"},a=()=>{r.spinner&&r.spinner.parentElement&&r.spinner.parentElement.removeChild(r.spinner)},i={authorization:"Basic "+window.btoa("g1t9:999000")},c=e=>{const t={};return e.forEach(e=>{const{first_arrival:n,abbrVslM:r,inVoyN:o,outVoyN:s,bthgDt:a,bthgDt_change_count:i,unbthgDt:c,berthN:d,status:l,uniqueId:f}=e,p=u(new Date(a)),{date:h,time:m}=p,g=new Date(a),b=new Date(n),v=Math.abs(b-g)/36e5,{date:y,time:w}=u(new Date(c)),S={vesselName:r,inVoyN:o,outVoyN:s,berthingTime:m,degreeOfChange:v,changeCount:i,departureTime:w,berthN:d,status:l,uniqueID:f};t[h]?t[h].push(S):t[h]=[S]}),t},u=e=>{const t={},n=e.getFullYear().toString(10),r=("0"+(e.getMonth()+1).toString(10)).slice(-2),o=("0"+e.getDate().toString(10)).slice(-2);return t.date=`${n}-${r}-${o}`,t.time=e.toLocaleTimeString("en",{timeStyle:"short",hour12:!1}),t},d=(e,t="asc")=>function(n,r){if(!n.hasOwnProperty(e)||!r.hasOwnProperty(e))return 0;const o="string"==typeof n[e]?n[e].toUpperCase():n[e],s="string"==typeof r[e]?r[e].toUpperCase():r[e];let a=0;return o>s?a=1:o<s&&(a=-1),"desc"===t?-1*a:a}},function(e,t,n){"use strict";var r=n(3),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:d,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(1);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(17),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(i=n(7)),i),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c}).call(this,n(16))},function(e,t,n){"use strict";var r=n(1),o=n(18),s=n(20),a=n(4),i=n(21),c=n(24),u=n(25),d=n(8);e.exports=function(e){return new Promise((function(t,n){var l=e.data,f=e.headers;r.isFormData(l)&&delete f["Content-Type"],(r.isBlob(l)||r.isFile(l))&&l.type&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=unescape(encodeURIComponent(e.auth.password))||"";f.Authorization="Basic "+btoa(h+":"+m)}var g=i(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,s),p=null}},p.onabort=function(){p&&(n(d("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(d("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(d(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;b&&(f[e.xsrfHeaderName]=b)}if("setRequestHeader"in p&&r.forEach(f,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),l||(l=null),p.send(l)}))}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t,n,o,s){var a=new Error(e);return r(a,t,n,o,s)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],s=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(i,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var d=o.concat(s).concat(a).concat(i),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===d.indexOf(e)}));return r.forEach(l,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(1),o=n(3),s=n(12),a=n(9);function i(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=i(n(6));c.Axios=s,c.create=function(e){return i(a(c.defaults,e))},c.Cancel=n(10),c.CancelToken=n(26),c.isCancel=n(5),c.all=function(e){return Promise.all(e)},c.spread=n(27),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(1),o=n(4),s=n(13),a=n(14),i=n(9);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(1);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(1),o=n(15),s=n(5),a=n(6);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],d=!1,l=-1;function f(){d&&c&&(d=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!d){var e=i(f);d=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||d||i(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(8);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(22),o=n(23);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(1),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,a={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(10);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(0);const o=e=>{Array.from(document.querySelectorAll(".btn-date")).forEach(e=>{e.classList.contains("btn-selected")&&e.classList.remove("btn-selected")}),document.getElementById(e).classList.add("btn-selected")},s=e=>{const t=e.charAt(0).toUpperCase()+e.slice(1);r.d.dateSelectionContainer.innerHTML=`<div class="special-heading">${t}</div>`},a=()=>{r.d.dataTableBody.innerHTML=""},i=(e,t,n,o)=>{r.d.dataTableBody.innerHTML="";const{by:s,order:a}=t;e.sort(Object(r.c)(s,a)),e.forEach(e=>{let{vesselName:t,inVoyN:s,outVoyN:a,berthingTime:i,degreeOfChange:c,changeCount:u,departureTime:d,berthN:l,status:f,uniqueID:p}=e;l=l||"-";const h=n.includes(p),m=o.includes(p),g=`\n        <tr>\n            <td>${t}</td>\n            <td>${s}</td>\n            <td>${a}</td>\n            <td class=${0==c?"":c>=1?"big-change":"small-change"}>${i}</td>\n            <td>${u}</td>\n            <td>${d}</td>\n            <td>${l}</td>\n            <td>${f}</td>\n            <td>\n                <div class=${h?"btn-favourited":"btn-favourite"} uniqueID="${p}">${h?"Unfavourite":"Favourite"}</div>\n            </td>\n            <td>\n                <div class=${m?"btn-subscribed":"btn-subscribe"} uniqueID="${p}">${m?"Unsubscribe":"Subscribe"}</div>\n            </td>\n        </tr>\n        `;r.d.dataTableBody.insertAdjacentHTML("beforeend",g)})},c=(e,t,n,o,s)=>{r.d.dataTableBody.innerHTML="";const a=[];for(const[t,r]of Object.entries(e))r.forEach(e=>{const{uniqueID:r}=e;"favourites"==s?n.includes(r)&&a.push({...e,berthingTime:`${t}, ${e.berthingTime}`,departureTime:`${t}, ${e.departureTime}`}):"subscriptions"==s&&o.includes(r)&&a.push({...e,berthingTime:`${t}, ${e.berthingTime}`})});const{by:i,order:c}=t;if(a.sort(Object(r.c)(i,c)),a.length)a.forEach(e=>{let{vesselName:t,inVoyN:s,outVoyN:a,berthingTime:i,degreeOfChange:c,changeCount:u,departureTime:d,berthN:l,status:f,uniqueID:p}=e;l=l||"-";const h=n.includes(p),m=o.includes(p),g=`\n            <tr>\n                <td>${t}</td>\n                <td>${s}</td>\n                <td>${a}</td>\n                <td class=${0==c?"":c>=1?"big-change":"small-change"}>${i}</td>\n                <td>${u}</td>\n                <td>${d}</td>\n                <td>${l}</td>\n                <td>${f}</td>\n                <td>\n                    <div class=${h?"btn-favourited":"btn-favourite"} uniqueID="${p}">${h?"Unfavourite":"Favourite"}</div>\n                </td>\n                <td>\n                    <div class=${m?"btn-subscribed":"btn-subscribe"} uniqueID="${p}">${m?"Unsubscribe":"Subscribe"}</div>\n                </td>\n            </tr>\n            `;r.d.dataTableBody.insertAdjacentHTML("beforeend",g)});else if("favourites"==s){const e="\n            <tr>\n                <td colspan='10'>No Favourites Found</td>\n            </tr>\n            ";r.d.dataTableBody.insertAdjacentHTML("beforeend",e)}else if("subscriptions"==s){const e="\n            <tr>\n                <td colspan='10'>No Subscriptions Found</td>\n            </tr>\n            ";r.d.dataTableBody.insertAdjacentHTML("beforeend",e)}},u=e=>{e.classList.contains("btn-favourite")?(e.classList.remove("btn-favourite"),e.classList.add("btn-favourited"),e.innerHTML="Unfavourite"):e.classList.contains("btn-favourited")?(e.classList.remove("btn-favourited"),e.classList.add("btn-favourite"),e.innerHTML="Favourite"):e.classList.contains("btn-subscribe")?(e.classList.remove("btn-subscribe"),e.classList.add("btn-subscribed"),e.innerHTML="Unsubscribe"):e.classList.contains("btn-subscribed")&&(e.classList.remove("btn-subscribed"),e.classList.add("btn-subscribe"),e.innerHTML="Subscribe")};var d=n(2),l=n.n(d);class f{constructor(e,t){this.startDate=e,this.endDate=t}async getNext7Days(){const e=`${r.a.getVessels}?startDate=${this.startDate}&endDate=${this.endDate}`;try{const t=await l()({method:"GET",url:e,headers:r.e});this.allData=t.data,this.niceData=Object(r.f)(t.data)}catch(e){console.log("Vessel.js getNext7Days error: "+e)}}}class p{constructor(e,t){this.userID=e,this.voyageID=t}setVoyageID(e){this.voyageID=e}async addFav(){const e=""+r.a.addFav;try{const t=await l()({method:"POST",url:e,data:{userId:this.userID,voyageId:this.voyageID},headers:r.e});this.addFavStatus=t.status,this.addFavMessage=t.data,alert(this.addFavMessage)}catch(e){console.log("Favourite.js addFav error: "+e)}}async getFavs(){const e=`${r.a.getFavs}/${this.userID}`;try{const t=await l()({method:"GET",url:e,headers:r.e});this.favsArr=[],t.data.forEach(e=>{const{voyageId:t}=e;this.favsArr.push(t)})}catch(e){console.log("Favourite.js getFavs error: "+e)}}async deleteFav(){const e=""+r.a.deleteFav;try{const t=await l()({method:"DELETE",url:e,data:{userId:this.userID,voyageId:this.voyageID},headers:r.e});this.deleteFavStatus=t.status,this.deleteFavMessage=t.data,alert(this.deleteFavMessage)}catch(e){console.log("Favourite.js deleteFav error: "+e)}}}class h{constructor(e,t){this.userID=e,this.voyageID=t}setVoyageID(e){this.voyageID=e}async addSub(){const e=""+r.a.addSub;try{const t=await l()({method:"POST",url:e,data:{userId:this.userID,voyageId:this.voyageID},headers:r.e});this.addSubStatus=t.status,this.addSubMessage=t.data,alert(this.addSubMessage)}catch(e){console.log("Subscription.js addSub error: "+e)}}async getSubs(){const e=`${r.a.getSubs}/${this.userID}`;try{const t=await l()({method:"GET",url:e,headers:r.e});this.subsArr=[],t.data.forEach(e=>{const{voyageId:t}=e;this.subsArr.push(t)})}catch(e){console.log("Subscription.js getSubs error: "+e)}}async deleteSub(){const e=""+r.a.deleteSub;try{const t=await l()({method:"DELETE",url:e,data:{userId:this.userID,voyageId:this.voyageID},headers:r.e});this.deleteSubStatus=t.status,this.deleteSubMessage=t.data,alert(this.deleteSubMessage)}catch(e){console.log("Subscription.js deleteSub error: "+e)}}}const m={};console.log({state:m}),window.addEventListener("load",async()=>{g();const e=window.location.hash.replace("#","");var t;!e||"favourites"!=e&&"subscriptions"!=e?(t=m.time.dateRange.slice(0,-1),r.d.dateSelectionContainer.innerHTML="",t.forEach(e=>{const[t,n]=e,o=`\n        <a id="${t}" class="btn-date" href="#${t}">\n            ${t} ${n.toUpperCase()}\n        </a>\n        `;r.d.dateSelectionContainer.insertAdjacentHTML("beforeend",o)})):s(e),b(),await v(),await w(),await S(),y()});const g=()=>{const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let t=new Date;m.time={};let n=[t];for(let e=1;e<=7;e++){const e=new Date(t);e.setDate(t.getDate()+1),n.push(e),t=e}m.time.dateRange=[],n.forEach(t=>{const n=t.getFullYear().toString(10),r=("0"+(t.getMonth()+1).toString(10)).slice(-2),o=("0"+t.getDate().toString(10)).slice(-2),s=e[t.getDay()];m.time.dateRange.push([`${n}-${r}-${o}`,s])})},b=()=>{const e=JSON.parse(localStorage.getItem("user"));var t;e?(Object(r.b)(),m.user=e,t=m.user.name,r.d.greeting.innerHTML=`Welcome, ${t}!`):window.location.replace("login.html")};r.d.signOutBtn.addEventListener("click",e=>{e.preventDefault(),localStorage.setItem("user","null"),window.location.replace("login.html")});const v=async()=>{console.log("Refetching vessel data...");const e=m.time.dateRange[0][0],t=m.time.dateRange[7][0];m.vessel=new f(e,t);try{await m.vessel.getNext7Days()}catch(e){console.log("Error at controlVessel getNext7Days(): "+e)}},y=async(e={by:"berthingTime",order:"asc"})=>{const t=window.location.hash.replace("#","");t?"favourites"==t||"subscriptions"==t?(s(t),a(),g(),await v(),await w(),await S(),c(m.vessel.niceData,e,m.favourite.favsArr,m.subscription.subsArr,t)):(o(t),g(),await v(),await w(),await S(),i(m.vessel.niceData[t],e,m.favourite.favsArr,m.subscription.subsArr),r.d.dataTableContainer.scrollTop=0):(o(m.time.dateRange[0][0]),i(m.vessel.niceData[m.time.dateRange[0][0]],e,m.favourite.favsArr,m.subscription.subsArr))};window.addEventListener("hashchange",e=>{y()}),r.d.dataTableHead.addEventListener("click",e=>{const t=e.target.closest(".btn-sort");if(t){console.log(t);const e=t.getAttribute("sortby"),n=t.getAttribute("order"),r=t.innerHTML.split(" "),o=r.slice(0,r.length-1).join(" ");y({by:e,order:n}),t.setAttribute("order","asc"==n?"desc":"asc"),t.innerHTML=`${o} ${"desc"==n?"&#9660":"&#9650"}`}});const w=async(e=null,t=null)=>{const n=window.location.hash.replace("#","");if(m.favourite?m.favourite.setVoyageID(e):m.favourite=new p(m.user.userID,e),e&&t){if(t.classList.contains("btn-favourite"))try{u(t),await m.favourite.addFav()}catch(e){console.log("Error at controlFavs addFav: "+e)}else if(t.classList.contains("btn-favourited")){try{u(t),await m.favourite.deleteFav()}catch(e){console.log("Error at controlFavs deleteFav: "+e)}"favourites"==n&&y()}}else try{await m.favourite.getFavs()}catch(e){console.log("Error at controlFavs getFavs: "+e)}},S=async(e=null,t=null)=>{const n=window.location.hash.replace("#","");if(m.subscription?m.subscription.setVoyageID(e):m.subscription=new h(m.user.userID,e),e&&t){if(t.classList.contains("btn-subscribe"))try{u(t),await m.subscription.addSub()}catch(e){console.log("Error at controlSubs addSub: "+e)}else if(t.classList.contains("btn-subscribed")){try{u(t),await m.subscription.deleteSub()}catch(e){console.log("Error at controlSubs deleteSub: "+e)}"subscriptions"==n&&y()}}else try{await m.subscription.getSubs()}catch(e){console.log("Error at controlSubs getSubs: "+e)}};r.d.dataTableBody.addEventListener("click",e=>{const t=e.target.closest(".btn-favourite"),n=e.target.closest(".btn-favourited"),r=e.target.closest(".btn-subscribe"),o=e.target.closest(".btn-subscribed");if(t){const e=t.getAttribute("uniqueID");w(e,t)}if(n){const e=n.getAttribute("uniqueID");w(e,n)}if(r){const e=r.getAttribute("uniqueID");S(e,r)}if(o){const e=o.getAttribute("uniqueID");S(e,o)}}),r.d.navBtns.forEach(e=>{e.addEventListener("click",t=>{window.location.hash.replace("#","")==e.id&&y()})})}]);