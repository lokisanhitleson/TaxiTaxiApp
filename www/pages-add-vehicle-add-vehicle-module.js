(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-vehicle-add-vehicle-module"],{

/***/ "./src/app/pages/add-vehicle/add-vehicle.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-vehicle/add-vehicle.module.ts ***!
  \*********************************************************/
/*! exports provided: AddVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehiclePageModule", function() { return AddVehiclePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_vehicle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-vehicle.page */ "./src/app/pages/add-vehicle/add-vehicle.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["AddVehiclePage"]
    }
];
var AddVehiclePageModule = /** @class */ (function () {
    function AddVehiclePageModule() {
    }
    AddVehiclePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["AddVehiclePage"]]
        })
    ], AddVehiclePageModule);
    return AddVehiclePageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-vehicle/add-vehicle.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-vehicle/add-vehicle.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Add Vehicle</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- <div class=\"bg-profile\" text-center padding>\n        <img src=\"assets/img/ionic4start-ico.png\">\n    </div> -->\n\n    <ion-card class=\"bg-white\" no-margin>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <p>\n                        <ion-icon name=\"alert\"></ion-icon> Please fill the requested details</p>\n                </ion-col>\n            </ion-row>\n            <ion-list class=\"request-form\">\n                <ion-item (click)=\"openCalendar()\">\n                    <ion-label position=\"floating\">Date</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"daterange\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Vehicle Type</ion-label>\n                    <ion-select class=\"myCustomSelect\" placeholder=\"-Select-\" ok-text=\"Okay\" cancel-text=\"Dismiss\">\n                        <ion-select-option *ngFor=\"let type of carType\">{{type}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Vehicle Model</ion-label>\n                    <ion-select class=\"myCustomSelect\" placeholder=\"-Select-\" ok-text=\"Okay\" cancel-text=\"Dismiss\">\n                        <ion-select-option *ngFor=\"let car of carModels\">{{car}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\">Person Count</ion-label>\n                    <ion-input type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">Mobile Number</ion-label>\n                    <ion-input type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">Description</ion-label>\n                    <ion-textarea></ion-textarea>\n                </ion-item>\n                <div margin-top>\n                    <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"warning\" tappable>\n                        <ion-icon name=\"log-in\"></ion-icon>\n                        Submit\n                    </ion-button>\n                </div>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/add-vehicle/add-vehicle.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-vehicle/add-vehicle.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n    ; }\n\n:host .myCustomSelect {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXZlaGljbGUvRDpcXHRheGktYXBwL3NyY1xcYXBwXFxwYWdlc1xcYWRkLXZlaGljbGVcXGFkZC12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRO0lBQWEsRUFBQTs7QUFGckI7RUFLUSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC12ZWhpY2xlL2FkZC12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICAgIH1cbiAgICAubXlDdXN0b21TZWxlY3Qge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/add-vehicle/add-vehicle.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-vehicle/add-vehicle.page.ts ***!
  \*******************************************************/
/*! exports provided: AddVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehiclePage", function() { return AddVehiclePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




var AddVehiclePage = /** @class */ (function () {
    function AddVehiclePage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.carModels = [
            "Toyota Platinum Etios",
            "Maruti Suzuki Dzire",
            "Renault Lodgy",
            "Mahindra Scorpio",
            "Toyota Innova Crysta",
            "Hyundai Xcent",
            "Nissan Sunny"
        ];
        this.carType = ["Mini", "Micro", "Prime"];
    }
    AddVehiclePage.prototype.openCalendar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, myCalendar, event, newFormat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            pickMode: 'single',
                            title: 'Calendar',
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModal"],
                                componentProps: { options: options }
                            })];
                    case 1:
                        myCalendar = _a.sent();
                        myCalendar.present();
                        return [4 /*yield*/, myCalendar.onDidDismiss()];
                    case 2:
                        event = _a.sent();
                        newFormat = moment__WEBPACK_IMPORTED_MODULE_3__(event.data.dateObj).format("DD-MMMM-YYYY");
                        this.daterange = newFormat;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddVehiclePage.prototype.ngOnInit = function () {
    };
    AddVehiclePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-vehicle',
            template: __webpack_require__(/*! ./add-vehicle.page.html */ "./src/app/pages/add-vehicle/add-vehicle.page.html"),
            styles: [__webpack_require__(/*! ./add-vehicle.page.scss */ "./src/app/pages/add-vehicle/add-vehicle.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AddVehiclePage);
    return AddVehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-vehicle-add-vehicle-module.js.map