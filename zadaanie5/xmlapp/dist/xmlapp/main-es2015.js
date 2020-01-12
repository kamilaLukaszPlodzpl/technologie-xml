(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-game-list></app-game-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-list/game-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-list/game-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class = \"flexbox \" *ngFor=\"let game of gameList\">\r\n    <app-game [g]=\"game\"></app-game>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"root\">\r\n    <div #data class=\"data\">\r\n        <img src=\"/assets/coverart/{{g.coverArt}}\"/>\r\n        <div>\r\n            <h1>{{g.title}}</h1>\r\n            <p *ngIf=\"g.price > 0 \"> {{g.price}} {{g.price_currency}} </p>\r\n            <p *ngIf=\"g.price == 0\">darmowe</p>\r\n        </div>\r\n    </div>\r\n    <div #descr class=\"fullDescription\" *ngIf=\"openFull\">\r\n        <p>Gatunek: {{g.relatedGenre_id | genre}} </p>\r\n        <p>Wersja językowa: {{g.language}} </p>\r\n        <p>Producent: {{g.developer}} </p>\r\n        <p>Wydawca: {{g.publisher}} </p>\r\n        <p>Ocena według {{g.rating.source}}: {{g.rating.value}} / {{g.rating.max}} </p>\r\n        <p>Data premiery: {{g.releaseDate | date }} </p>\r\n        <p *ngIf=\"g.pegi.label > 0\"> Ograniczenia wiekowe: od {{g.pegi.label}} lat</p>\r\n        <div *ngFor=\"let item of g.pegi.related\">\r\n            <img class=\"pegi\" src=\"/assets/pegi/{{item}}.webp\"/>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"root\">\r\n    <div class=\"input input-style\" appSetPlatformFilter=\"\">\r\n        <div>\r\n            <span>Wszystko</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"input input-style\" appSetPlatformFilter=\"p4,p6,p7\">\r\n        <div>\r\n            <span>PC</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"input input-style\" appSetPlatformFilter=\"p2,p3,p1\">\r\n        <div>\r\n            <span>PlayStation</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"input input-style\" appSetPlatformFilter=\"p5,p8,p10\">\r\n        <div>\r\n            <span>Xbox</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"input input-style\" appSetPlatformFilter=\"p9,p11\">\r\n        <div>\r\n            <span>Inne</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"input\">\r\n        <app-search-box></app-search-box>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-box/search-box.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-box/search-box.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <span>\n        <input type=\"text\" placeholder=\"Wyszukaj\"\n        [(ngModel)]=\"inputBox\" #inputBoxCtrl=\"ngModel\" id=\"inputBoxCtrl\"\n        />\n    </span>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'kappa';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "./src/app/components/game-list/game-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _pipes_genre_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/genre.pipe */ "./src/app/pipes/genre.pipe.ts");
/* harmony import */ var _pipes_platforms_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/platforms.pipe */ "./src/app/pipes/platforms.pipe.ts");
/* harmony import */ var _directives_set_platform_filter_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/set-platform-filter.directive */ "./src/app/directives/set-platform-filter.directive.ts");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search-box/search-box.component */ "./src/app/components/search-box/search-box.component.ts");
/* harmony import */ var _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/date.pipe */ "./src/app/pipes/date.pipe.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_7__["GameListComponent"],
            _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
            _pipes_genre_pipe__WEBPACK_IMPORTED_MODULE_10__["GenrePipe"],
            _pipes_platforms_pipe__WEBPACK_IMPORTED_MODULE_11__["PlatformsPipe"],
            _directives_set_platform_filter_directive__WEBPACK_IMPORTED_MODULE_12__["SetPlatformFilterDirective"],
            _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_13__["SearchBoxComponent"],
            _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/game-list/game-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/game-list/game-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flexbox {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWxpc3QvQzpcXFVzZXJzXFxCb256b1xcRG9jdW1lbnRzXFxHaXRcXHRlY2hub2xvZ2llLXhtbFxcemFkYWFuaWU1XFx4bWxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWUtbGlzdFxcZ2FtZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbGlzdC9nYW1lLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbGlzdC9nYW1lLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufSIsIi5mbGV4Ym94IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/game-list/game-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-list/game-list.component.ts ***!
  \*************************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-api.service */ "./src/app/services/game-api.service.ts");



let GameListComponent = class GameListComponent {
    constructor(gameApi) {
        this.gameApi = gameApi;
        this.gameList = this.gameApi.getGameList();
        this.gameApi.getGameListUpdate().subscribe((o) => { this.gameList = o; });
    }
    ngOnInit() { }
};
GameListComponent.ctorParameters = () => [
    { type: _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__["GameApiService"] }
];
GameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-list/game-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-list.component.scss */ "./src/app/components/game-list/game-list.component.scss")).default]
    })
], GameListComponent);



/***/ }),

/***/ "./src/app/components/game/game.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.data {\n  width: 250px;\n  display: inline-block;\n  text-align: center;\n  margin: 0 0px 45px 40px;\n}\n\n.data :hover {\n  color: blue;\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n\n.data img {\n  width: 250px;\n  max-height: 285px;\n}\n\n.data h1 {\n  margin: 4px;\n  font-family: \"Baskervville\", serif;\n  font-size: 20px;\n}\n\n.data p {\n  margin: 4px 4px 15px 4px;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 16px;\n}\n\n.fullDescription {\n  font-size: 16px;\n  width: 250px;\n  display: inline-block;\n  border-style: solid;\n  padding: 5px 10px 5px 10px;\n  margin: 0 0px 45px 0px;\n}\n\n.fullDescription div {\n  padding: 2px;\n  text-align: center;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.fullDescription div .pegi {\n  border: 1px solid;\n  display: block;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL0M6XFxVc2Vyc1xcQm9uem9cXERvY3VtZW50c1xcR2l0XFx0ZWNobm9sb2dpZS14bWxcXHphZGFhbmllNVxceG1sYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnYW1lXFxnYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNFUjs7QURBSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0VSOztBREFRO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ0VaOztBREFRO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUNFWjs7QURFQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNDUjs7QURBUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Rcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmRhdGF7XHJcbiAgICB3aWR0aDoyNTBweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDBweCA0NXB4IDQwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjg1cHg7XHJcbiAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjo0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFza2VydnZpbGxlJywgc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luOjRweCA0cHggMTVweCA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICBcclxufVxyXG4uZnVsbERlc2NyaXB0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDBweCA0NXB4IDBweDtcclxuICAgIGRpdntcclxuICAgICAgICBwYWRkaW5nOjJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIC5wZWdpe1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIucm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kYXRhIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDBweCA0NXB4IDQwcHg7XG59XG4uZGF0YSA6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uZGF0YSBpbWcge1xuICB3aWR0aDogMjUwcHg7XG4gIG1heC1oZWlnaHQ6IDI4NXB4O1xufVxuLmRhdGEgaDEge1xuICBtYXJnaW46IDRweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFza2VydnZpbGxlXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGF0YSBwIHtcbiAgbWFyZ2luOiA0cHggNHB4IDE1cHggNHB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZ1bGxEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBtYXJnaW46IDAgMHB4IDQ1cHggMHB4O1xufVxuLmZ1bGxEZXNjcmlwdGlvbiBkaXYge1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZnVsbERlc2NyaXB0aW9uIGRpdiAucGVnaSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameComponent = class GameComponent {
    constructor() {
        this.openFull = false;
    }
    onGameClick() {
        this.setDescriptionHeight();
        this.openFull = !this.openFull;
        this.setDescriptionHeight();
    }
    ngOnInit() {
    }
    setDescriptionHeight() {
        if (this.openFull) {
            if ('nativeElement' in this.rootDiv) {
                let h = this.rootDiv.nativeElement.offsetHeight + "px";
                //this.full.nativeElement.style.height = h;
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GameComponent.prototype, "g", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
], GameComponent.prototype, "onGameClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('data', { static: false })
], GameComponent.prototype, "rootDiv", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('descr', { static: false })
], GameComponent.prototype, "full", void 0);
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.scss */ "./src/app/components/game/game.component.scss")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root {\n  width: 100%;\n  min-width: 300px;\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n  background-color: #323234;\n  margin-bottom: 10px;\n  padding-left: 0px 10px;\n}\n.root .input-style:hover {\n  background-color: #404040;\n}\n.root .input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  flex-wrap: nowrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 50px;\n}\n.root .input div {\n  padding: 5px;\n  height: 90px;\n}\n.root .input span {\n  vertical-align: middle;\n  padding: 5px;\n}\n@media all and (min-width: 0px) {\n  .root {\n    height: 500px;\n  }\n}\n@media all and (min-width: 490px) {\n  .root {\n    height: 300px;\n  }\n}\n@media all and (min-width: 660px) {\n  .root {\n    height: 200px;\n  }\n}\n@media all and (min-width: 1260px) {\n  .root {\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxCb256b1xcRG9jdW1lbnRzXFxHaXRcXHRlY2hub2xvZ2llLXhtbFxcemFkYWFuaWU1XFx4bWxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNBSjtBRENJO0VBRUkseUJBQUE7QUNBUjtBREVJO0VBRUksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDRFI7QURFUTtFQUVJLFlBQUE7RUFDQSxZQUFBO0FDRFo7QURHUTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZaO0FETUE7RUFFSTtJQUNJLGFBQUE7RUNKTjtBQUNGO0FET0E7RUFFSTtJQUNJLGFBQUE7RUNOTjtBQUNGO0FEU0E7RUFFSTtJQUNJLGFBQUE7RUNSTjtBQUNGO0FEV0E7RUFFSTtJQUNJLGFBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Rcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjM0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4IDEwcHg7XHJcbiAgICAuaW5wdXQtc3R5bGU6aG92ZXJcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKGJsYWNrLDI1KTtcclxuICAgIH1cclxuICAgIC5pbnB1dFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBkaXZcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6MHB4KVxyXG57XHJcbiAgICAucm9vdCB7ICBcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOjQ5MHB4KVxyXG57XHJcbiAgICAucm9vdCB7ICAgIFxyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6NjYwcHgpXHJcbntcclxuICAgIC5yb290IHsgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDoxMjYwcHgpXHJcbntcclxuICAgIC5yb290IHsgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLnJvb3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4IDEwcHg7XG59XG4ucm9vdCAuaW5wdXQtc3R5bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xufVxuLnJvb3QgLmlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5yb290IC5pbnB1dCBkaXYge1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogOTBweDtcbn1cbi5yb290IC5pbnB1dCBzcGFuIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcbiAgLnJvb3Qge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ5MHB4KSB7XG4gIC5yb290IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2NjBweCkge1xuICAucm9vdCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XG4gIC5yb290IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/search-box/search-box.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div span {\n  vertical-align: middle;\n  padding: 5px;\n}\ndiv span input {\n  height: 40px;\n  width: 300px;\n  position: relative;\n  color: #323234;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 40px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYm94L0M6XFxVc2Vyc1xcQm9uem9cXERvY3VtZW50c1xcR2l0XFx0ZWNobm9sb2dpZS14bWxcXHphZGFhbmllNVxceG1sYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWFyY2gtYm94XFxzZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FER1E7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdlxyXG57XHJcbiAgICBzcGFuXHJcbiAgICB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgaW5wdXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjM0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZGl2IHNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5kaXYgc3BhbiBpbnB1dCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMzIzMjM0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/search-box/search-box.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_game_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game-api.service */ "./src/app/services/game-api.service.ts");



let SearchBoxComponent = class SearchBoxComponent {
    constructor(gamepApi) {
        this.gamepApi = gamepApi;
    }
    onClick() {
        let filter = this.gamepApi.getFilter();
        filter.other = this.inputBox;
        this.gamepApi.setFilter(filter);
    }
    ngOnInit() {
    }
};
SearchBoxComponent.ctorParameters = () => [
    { type: src_app_services_game_api_service__WEBPACK_IMPORTED_MODULE_2__["GameApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputBoxCtrl', { static: false })
], SearchBoxComponent.prototype, "inputBoxCtrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup')
], SearchBoxComponent.prototype, "onClick", null);
SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-box/search-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-box.component.scss */ "./src/app/components/search-box/search-box.component.scss")).default]
    })
], SearchBoxComponent);



/***/ }),

/***/ "./src/app/directives/set-platform-filter.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/set-platform-filter.directive.ts ***!
  \*************************************************************/
/*! exports provided: SetPlatformFilterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPlatformFilterDirective", function() { return SetPlatformFilterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game-api.service */ "./src/app/services/game-api.service.ts");



let SetPlatformFilterDirective = class SetPlatformFilterDirective {
    constructor(gameApi) {
        this.gameApi = gameApi;
    }
    onClick() {
        let platforms;
        if (this.value == "")
            platforms = new Array();
        else
            platforms = this.value.split(",");
        let newFilter = this.gameApi.getFilter();
        newFilter.platforms = platforms;
        this.gameApi.setFilter(newFilter);
    }
};
SetPlatformFilterDirective.ctorParameters = () => [
    { type: _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__["GameApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appSetPlatformFilter')
], SetPlatformFilterDirective.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], SetPlatformFilterDirective.prototype, "onClick", null);
SetPlatformFilterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSetPlatformFilter]'
    })
], SetPlatformFilterDirective);



/***/ }),

/***/ "./src/app/model/Date.ts":
/*!*******************************!*\
  !*** ./src/app/model/Date.ts ***!
  \*******************************/
/*! exports provided: Date */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return Date; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Date {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}


/***/ }),

/***/ "./src/app/model/Filter.ts":
/*!*********************************!*\
  !*** ./src/app/model/Filter.ts ***!
  \*********************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Filter {
    constructor() {
        this.platforms = new Array();
        this.other = "";
    }
}


/***/ }),

/***/ "./src/app/model/Game.ts":
/*!*******************************!*\
  !*** ./src/app/model/Game.ts ***!
  \*******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Game {
    constructor() {
        this.relatedPlatforms_id = new Array(0);
    }
}


/***/ }),

/***/ "./src/app/model/Pegi.ts":
/*!*******************************!*\
  !*** ./src/app/model/Pegi.ts ***!
  \*******************************/
/*! exports provided: Pegi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pegi", function() { return Pegi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Pegi {
    constructor(label, related) {
        this.label = label;
        this.related = related;
    }
}


/***/ }),

/***/ "./src/app/model/Rating.ts":
/*!*********************************!*\
  !*** ./src/app/model/Rating.ts ***!
  \*********************************/
/*! exports provided: Rating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Rating {
    constructor(source, value, max) {
        this.source = source;
        this.value = value;
        this.max = max;
    }
}


/***/ }),

/***/ "./src/app/model/model.ts":
/*!********************************!*\
  !*** ./src/app/model/model.ts ***!
  \********************************/
/*! exports provided: Game, Date, Pegi, Rating, Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/app/model/Game.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _Game__WEBPACK_IMPORTED_MODULE_1__["Game"]; });

/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Date */ "./src/app/model/Date.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return _Date__WEBPACK_IMPORTED_MODULE_2__["Date"]; });

/* harmony import */ var _Pegi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pegi */ "./src/app/model/Pegi.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pegi", function() { return _Pegi__WEBPACK_IMPORTED_MODULE_3__["Pegi"]; });

/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rating */ "./src/app/model/Rating.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return _Rating__WEBPACK_IMPORTED_MODULE_4__["Rating"]; });

/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Filter */ "./src/app/model/Filter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _Filter__WEBPACK_IMPORTED_MODULE_5__["Filter"]; });









/***/ }),

/***/ "./src/app/pipes/date.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/date.pipe.ts ***!
  \************************************/
/*! exports provided: DatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePipe", function() { return DatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatePipe = class DatePipe {
    transform(date) {
        return date.day + " " + date.month + " " + date.year;
    }
};
DatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'date'
    })
], DatePipe);



/***/ }),

/***/ "./src/app/pipes/genre.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/genre.pipe.ts ***!
  \*************************************/
/*! exports provided: GenrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenrePipe", function() { return GenrePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game-api.service */ "./src/app/services/game-api.service.ts");



let GenrePipe = class GenrePipe {
    constructor(gameApi) {
        this.gameApi = gameApi;
    }
    transform(id) {
        return this.gameApi.getGenreList().get(id);
    }
};
GenrePipe.ctorParameters = () => [
    { type: _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__["GameApiService"] }
];
GenrePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'genre'
    })
], GenrePipe);



/***/ }),

/***/ "./src/app/pipes/platforms.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/platforms.pipe.ts ***!
  \*****************************************/
/*! exports provided: PlatformsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformsPipe", function() { return PlatformsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game-api.service */ "./src/app/services/game-api.service.ts");



let PlatformsPipe = class PlatformsPipe {
    constructor(gameApi) {
        this.gameApi = gameApi;
    }
    transform(ids) {
        let out = " ";
        for (let id of ids) {
            out += this.gameApi.getPlatformList().get(id) + ", ";
        }
        return out;
    }
};
PlatformsPipe.ctorParameters = () => [
    { type: _services_game_api_service__WEBPACK_IMPORTED_MODULE_2__["GameApiService"] }
];
PlatformsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'platforms'
    })
], PlatformsPipe);



/***/ }),

/***/ "./src/app/services/game-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/game-api.service.ts ***!
  \**********************************************/
/*! exports provided: GameApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameApiService", function() { return GameApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model */ "./src/app/model/model.ts");





let GameApiService = class GameApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.filter = new _model_model__WEBPACK_IMPORTED_MODULE_4__["Filter"]();
        this.gameListUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gameListUpdate.subscribe(x => { console.log("Update game list"); console.log(this.getFilter()); });
        this.loadGamesList();
    }
    getGenreList() { return this.genreList; }
    getPlatformList() { return this.platformList; }
    getPegiDescriptorList() { return this.pegiDescriptorList; }
    getGameList() {
        let nothing = false;
        nothing = ((this.filter.platforms.length == 0) && (this.filter.other == ""));
        if (nothing)
            return this.gameList;
        //filter gameList
        let list = this.gameList;
        if (this.filter.platforms.length != 0) {
            list = list.filter((game) => {
                for (let platform of this.filter.platforms) {
                    if (game.relatedPlatforms_id.findIndex((item) => { return item == platform; }) != -1) {
                        return true;
                    }
                }
                return false;
            });
        }
        if (this.filter.other != "") {
            list = list.filter((game) => {
                let regex = new RegExp(this.filter.other, 'gi');
                if (game.title.search(regex) != -1) {
                    return true;
                }
                if (game.publisher.search(regex) != -1) {
                    return true;
                }
                if (game.developer.search(regex) != -1) {
                    return true;
                }
                if (this.getGenreList().get(game.relatedGenre_id).search(regex) != -1) {
                    return true;
                }
            });
        }
        return list;
    }
    getGameListUpdate() { return this.gameListUpdate; }
    getFilter() { return this.filter; }
    setFilter(filter) {
        this.filter = filter;
        this.gameListUpdate.next(this.getGameList());
    }
    loadGamesList() {
        this.gameList = [];
        this.genreList = new Map();
        this.platformList = new Map();
        this.pegiDescriptorList = new Map();
        this.gameListUpdate.next(this.getGameList());
        this.httpClient.get("/assets/video_games.xml", { responseType: 'text' }).subscribe((data) => {
            this.parseGamesList(data);
        });
    }
    parseGamesList(data) {
        let parser = new xml2js__WEBPACK_IMPORTED_MODULE_3__["Parser"]();
        parser.parseString(data, (err, result) => {
            let data = result.root.data[0];
            for (let pegiDescriptor of data.pegiDescriptors[0].pegiDescriptor) {
                this.pegiDescriptorList.set(pegiDescriptor.$.id, pegiDescriptor._);
            }
            for (let platform of data.platforms[0].platform) {
                this.platformList.set(platform.$.id, platform._);
            }
            for (let genre of data.genres[0].genre) {
                this.genreList.set(genre.$.id, genre._);
            }
            let games = data.games[0].game;
            for (let game of games) {
                let obj = new _model_model__WEBPACK_IMPORTED_MODULE_4__["Game"]();
                obj.id = game.$.id;
                obj.title = game.title[0]._;
                obj.language = game.title[0].$.language;
                if ('price' in game) {
                    obj.price = game.price[0]._;
                    obj.price_currency = game.price[0].$.currency;
                }
                else {
                    obj.price = 0;
                    obj.price_currency = "";
                }
                obj.relatedGenre_id = game.relatedGenre[0].$.id;
                obj.releaseDate = new _model_model__WEBPACK_IMPORTED_MODULE_4__["Date"](game.releaseDate[0].day[0], game.releaseDate[0].month[0], game.releaseDate[0].year[0]);
                obj.developer = game.developer[0];
                for (let relatedPlatform of game.relatedPlatforms[0].relatedPlatform) {
                    obj.relatedPlatforms_id.push(relatedPlatform.$.id);
                }
                obj.publisher = game.publisher[0];
                obj.rating = new _model_model__WEBPACK_IMPORTED_MODULE_4__["Rating"](game.rating[0].$.source, game.rating[0]._, game.rating[0].$.max);
                let relatedPegi = new Array();
                if ('relatedPegi' in game.PEGI[0])
                    for (let r of game.PEGI[0].relatedPegi) {
                        relatedPegi.push(r.$.id);
                    }
                obj.pegi = new _model_model__WEBPACK_IMPORTED_MODULE_4__["Pegi"](game.PEGI[0].$.label, relatedPegi);
                obj.coverArt = game.coverArt[0].$.src;
                this.gameList.push(obj);
            }
            this.gameListUpdate.next(this.getGameList());
        });
    }
};
GameApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GameApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bonzo\Documents\Git\technologie-xml\zadaanie5\xmlapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map