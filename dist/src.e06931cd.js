parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Kmq6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return 50*e+2*e};exports.default=e;
},{}],"6HEM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return Object.entries(e)};exports.default=e;
},{}],"vb6L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){return new Promise(function(o,r){setTimeout(function(){o(t)},e)})};exports.default=e;
},{}],"H99C":[function(require,module,exports) {
"use strict";var e=l(require("./arrow")),o=l(require("./entries")),r=l(require("./promise"));function l(e){return e&&e.__esModule?e:{default:e}}var n={a:1,b:2,c:3};console.log((0,e.default)(20)),console.log((0,o.default)(n));var u=(0,r.default)(500,"Hello!");u.then(console.log).finally(function(){return console.log("fiji!")});
},{"./arrow":"Kmq6","./entries":"6HEM","./promise":"vb6L"}]},{},["H99C"], null)
//# sourceMappingURL=/src.e06931cd.map