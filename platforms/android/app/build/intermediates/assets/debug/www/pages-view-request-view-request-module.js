(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-request-view-request-module"],{

/***/ "./src/app/pages/view-request/view-request.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-request/view-request.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRequestPageModule", function() { return ViewRequestPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_request_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-request.page */ "./src/app/pages/view-request/view-request.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _view_request_page__WEBPACK_IMPORTED_MODULE_5__["ViewRequestPage"]
    }
];
var ViewRequestPageModule = /** @class */ (function () {
    function ViewRequestPageModule() {
    }
    ViewRequestPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_request_page__WEBPACK_IMPORTED_MODULE_5__["ViewRequestPage"]]
        })
    ], ViewRequestPageModule);
    return ViewRequestPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-request/view-request.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-request/view-request.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>View Request</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"bg-profile\" text-center padding>\n        <img src=\"assets/img/ionic4start-ico.png\">\n    </div>\n\n    <ion-card class=\"bg-white\" no-margin>\n        <ion-card-content>\n            <h1 margin-bottom>\n                <ion-text color=\"primary\"><strong>Taxi Application</strong></ion-text>\n            </h1>\n\n            <p margin-bottom>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n            </p>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/view-request/view-request.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-request/view-request.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n    ; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy1yZXF1ZXN0L0Q6XFx0YXhpLWFwcC9zcmNcXGFwcFxccGFnZXNcXHZpZXctcmVxdWVzdFxcdmlldy1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRO0lBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctcmVxdWVzdC92aWV3LXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/view-request/view-request.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/view-request/view-request.page.ts ***!
  \*********************************************************/
/*! exports provided: ViewRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRequestPage", function() { return ViewRequestPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewRequestPage = /** @class */ (function () {
    function ViewRequestPage() {
    }
    ViewRequestPage.prototype.ngOnInit = function () {
    };
    ViewRequestPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-request',
            template: __webpack_require__(/*! ./view-request.page.html */ "./src/app/pages/view-request/view-request.page.html"),
            styles: [__webpack_require__(/*! ./view-request.page.scss */ "./src/app/pages/view-request/view-request.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewRequestPage);
    return ViewRequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-request-view-request-module.js.map