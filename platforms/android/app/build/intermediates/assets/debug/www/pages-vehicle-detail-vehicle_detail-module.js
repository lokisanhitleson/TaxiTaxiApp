(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vehicle-detail-vehicle_detail-module"],{

/***/ "./src/app/pages/vehicle-detail/vehicle_detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/vehicle-detail/vehicle_detail.module.ts ***!
  \***************************************************************/
/*! exports provided: VehicleDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailPageModule", function() { return VehicleDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle_detail.page */ "./src/app/pages/vehicle-detail/vehicle_detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _vehicle_detail_page__WEBPACK_IMPORTED_MODULE_5__["VehicleDetailPage"]
    }
];
var VehicleDetailPageModule = /** @class */ (function () {
    function VehicleDetailPageModule() {
    }
    VehicleDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_vehicle_detail_page__WEBPACK_IMPORTED_MODULE_5__["VehicleDetailPage"]]
        })
    ], VehicleDetailPageModule);
    return VehicleDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/vehicle-detail/vehicle_detail.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/vehicle-detail/vehicle_detail.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Vehicle Overview</ion-title>\n    </ion-toolbar>\n</ion-header>\n<div class=\"slide-container\" slot=\"fixed\">\n    <ion-slides [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n        <ion-slide *ngFor=\"let vehicle of vehicles\">\n            <img [src]=\"vehicle.img\">\n        </ion-slide>\n    </ion-slides>\n</div>\n<div slot=\"fixed\" class=\"vehicle-title\">\n    <div class=\"ion-text-center\" no-margin>\n        <ion-text color=\"dark\"><strong>Toyota Innova</strong></ion-text>\n    </div>\n</div>\n<ion-content>\n    <ion-card class=\"bg-white\" no-margin>\n        <ion-card-content>\n\n            <ion-item detail *ngFor=\"let info of vehicleInfo\">\n                <ion-label class=\"ion-text-wrap\">\n                    <span>{{info.label}} :</span> {{info.value}}\n                </ion-label>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/vehicle-detail/vehicle_detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/vehicle-detail/vehicle_detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n    ; }\n\n:host .slide-container {\n  height: 200px;\n  background: #fff;\n  padding-bottom: 5px; }\n\n:host ion-slides {\n  height: 100%; }\n\n:host .swiper-slide {\n  display: block; }\n\n:host .swiper-slide h2 {\n  margin-top: 2.8rem; }\n\n:host .swiper-slide img {\n  width: 100%;\n  max-width: 98%;\n  margin: 10px 0 10px;\n  pointer-events: none; }\n\n:host b {\n  font-weight: 500; }\n\n:host p {\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b); }\n\n:host p b {\n  color: var(--ion-text-color, #000000); }\n\n:host ion-item:nth-child(even) {\n  background: #f2eff5; }\n\n:host ion-item:nth-child(odd) {\n  background: #fdfdfd; }\n\n:host .ion-text-wrap span {\n  font-weight: 500; }\n\n:host .vehicle-title {\n  padding: 5px;\n  background: #e7e5e8;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVoaWNsZS1kZXRhaWwvRDpcXHRheGktYXBwL3NyY1xcYXBwXFxwYWdlc1xcdmVoaWNsZS1kZXRhaWxcXHZlaGljbGVfZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRO0lBQWEsRUFBQTs7QUFGckI7RUFLUSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQVAzQjtFQVdRLFlBQVksRUFBQTs7QUFYcEI7RUFjUSxjQUFjLEVBQUE7O0FBZHRCO0VBaUJRLGtCQUFrQixFQUFBOztBQWpCMUI7RUFvQlEsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBdkI1QjtFQTBCUSxnQkFBZ0IsRUFBQTs7QUExQnhCO0VBNkJRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDLEVBQUE7O0FBL0JqRDtFQWtDUSxxQ0FBcUMsRUFBQTs7QUFsQzdDO0VBcUNRLG1CQUNKLEVBQUE7O0FBdENKO0VBd0NRLG1CQUNKLEVBQUE7O0FBekNKO0VBNENZLGdCQUFnQixFQUFBOztBQTVDNUI7RUFnRFEsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZWhpY2xlLWRldGFpbC92ZWhpY2xlX2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSlcbiAgICB9XG4gICAgLnNsaWRlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2ZmY2UwMDtcbiAgICB9XG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLnN3aXBlci1zbGlkZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICAgIH1cbiAgICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDk4JTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbiAgICB9XG4gICAgcCBiIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbiAgICB9XG4gICAgaW9uLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZWZmNVxuICAgIH1cbiAgICBpb24taXRlbTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmRcbiAgICB9XG4gICAgLmlvbi10ZXh0LXdyYXAge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnZlaGljbGUtdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlN2U1ZTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/vehicle-detail/vehicle_detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/vehicle-detail/vehicle_detail.page.ts ***!
  \*************************************************************/
/*! exports provided: VehicleDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailPage", function() { return VehicleDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleDetailPage = /** @class */ (function () {
    function VehicleDetailPage(datePicker) {
        this.datePicker = datePicker;
        this.vehicles = [
            { img: "assets/img/innova1.jpg" },
            { img: "assets/img/Toyota_Innova_Interior.jpg" }
        ];
        this.vehicleInfo = [
            { label: "Registration Number", value: "TN-18-AN-2345" },
            { label: "Registration date", value: "12/09/2016" },
            { label: "Owner Name", value: "K. Ramakrishnan" },
            { label: "Ownership Serial", value: "1" },
            { label: "Type of Vehicle", value: "LMV (Car)" },
            { label: "Maker", value: "Toyota" },
            { label: "Fuel", value: "Petrol" },
            { label: "Color", value: "Cherry Red" },
            { label: "Year of Manufacture", value: "2014" },
            { label: "Chasis Number", value: "755111000" },
            { label: "Seating Capacity", value: "7" },
            { label: "F.C", value: "March 2028" },
            { label: "Insurance", value: "20/08/2019 - 19/08/2020" },
        ];
        this.slideOptions = {
            initialSlide: 0,
            speed: 400,
        };
    }
    VehicleDetailPage.prototype.showDatepicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
            okText: "Save Date",
            todayText: "Set Today"
        }).then(function (date) {
            _this.myDate = date.getDate() + "/" + date.toLocaleString('default', { month: 'long' }) + "/" + date.getFullYear();
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    VehicleDetailPage.prototype.showTimepicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            okText: "Save Time",
            nowText: "Set Now"
        }).then(function (time) {
            _this.myTime = time.getHours() + ":" + time.getMinutes();
        }, function (err) { return console.log('Error occurred while getting time: ', err); });
    };
    VehicleDetailPage.prototype.showDateTimepicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL,
            doneButtonLabel: "Save Date & Time",
            is24Hour: false
        }).then(function (dateTime) {
            _this.myDateNTime = dateTime.getDate() + "/" + dateTime.toLocaleString('default', { month: 'long' }) + "/" + dateTime.getFullYear() + " " + dateTime.getHours() + ":" + dateTime.getMinutes();
        }, function (err) { return console.log('Error occurred while getting dateTime: ', err); });
    };
    VehicleDetailPage.prototype.slidesDidLoad = function (slides) {
        slides.stopAutoplay();
    };
    VehicleDetailPage.prototype.ngOnInit = function () {
    };
    VehicleDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-detail',
            template: __webpack_require__(/*! ./vehicle_detail.page.html */ "./src/app/pages/vehicle-detail/vehicle_detail.page.html"),
            styles: [__webpack_require__(/*! ./vehicle_detail.page.scss */ "./src/app/pages/vehicle-detail/vehicle_detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_1__["DatePicker"]])
    ], VehicleDetailPage);
    return VehicleDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-vehicle-detail-vehicle_detail-module.js.map