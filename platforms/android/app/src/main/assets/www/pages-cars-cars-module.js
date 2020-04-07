(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cars-cars-module"],{

/***/ "./src/app/pages/cars/cars.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cars/cars.module.ts ***!
  \*******************************************/
/*! exports provided: CarsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsPageModule", function() { return CarsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cars_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cars.page */ "./src/app/pages/cars/cars.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _cars_page__WEBPACK_IMPORTED_MODULE_5__["CarsPage"]
    }
];
var CarsPageModule = /** @class */ (function () {
    function CarsPageModule() {
    }
    CarsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_cars_page__WEBPACK_IMPORTED_MODULE_5__["CarsPage"]]
        })
    ], CarsPageModule);
    return CarsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cars/cars.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/cars/cars.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Available Cars</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-toolbar color=\"secondary\" slot=\"fixed\">\n    <ion-item>\n        <ion-label class=\"date-label\">Select Date :</ion-label>\n        <ion-icon name=\"calendar\" class=\"calendar-icon\"></ion-icon>\n        <ion-datetime [(ngModel)]=\"selectedDate\" placeholder=\"24/03/2020\" displayFormat=\"DD/MM/YYYY\" min=\"{{today}}\" max=\"{{nextThirty}}\" value=\"{{today}}\">\n        </ion-datetime>\n    </ion-item>\n</ion-toolbar>\n<ion-content>\n    <div class=\"car-profile\" *ngFor=\"let car of cars\">\n        <ion-card class=\"bg-white\" no-margin>\n            <ion-card-content no-padding>\n                <ion-row>\n                    <ion-col>\n\n                        {{car.carname}}\n                        <ion-thumbnail class=\"car-avatar\">\n                            <img [src]=\"car.img\">\n                        </ion-thumbnail>\n                        <ion-text class=\"view-text\" routerLink=\"/vehicle-detail\">\n                            <ion-icon name=\"eye\"></ion-icon> View Details\n                        </ion-text>\n                    </ion-col>\n                    <ion-col>\n                        <ion-label class=\"ion-text-end\" routerLink=\"/agent-profile\">\n                            <ion-text color=\"dark ion-text-end\" class=\"agent-name\">\n                                <h4><strong>{{car.agentname}}</strong></h4>\n                            </ion-text>\n                            <ion-text color=\"dark ion-text-end\">\n                                <h3>\n                                    {{car.location}}\n                                </h3>\n                            </ion-text>\n                            <ion-text class=\"text-gray ion-text-end\">\n                                <h5>\n                                    {{car.seater}}\n                                </h5>\n                            </ion-text>\n                            <div class=\"ion-text-end mobnum-text\">\n                                <ion-text color=\"dark\">\n                                    +91 {{car.mobilenumber}}\n                                </ion-text>\n                            </div>\n                        </ion-label>\n                        <div class=\"ion-text-end\">\n                            <a href=\"tel:{{car.mobilenumber}}\">\n                                <ion-button shape=\"round\" size=\"small\" color=\"success\">\n                                    <ion-icon name=\"call\"></ion-icon>\n                                </ion-button>\n                            </a>\n                            <a (click)=\"openWhatsApp()\">\n                                <ion-button shape=\"round\" size=\"small\" color=\"success\">\n                                    <ion-icon name=\"logo-whatsapp\"></ion-icon>\n                                </ion-button>\n                            </a>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cars/cars.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cars/cars.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)); }\n\n:host ion-datetime {\n  color: #dcbbf5; }\n\n:host .date-label {\n  color: #dcbbf5; }\n\n:host .view-text {\n  color: #272983;\n  font-size: 12px;\n  text-decoration: underline; }\n\n:host .agent-name {\n  color: #272983;\n  text-decoration: underline; }\n\n:host .calendar-icon {\n  font-size: 25px;\n  color: #cfb7e2; }\n\n:host card-content-md {\n  padding: 0px !important; }\n\n:host ion-card {\n  padding: 5px;\n  margin-bottom: 5px;\n  border-left: 5px solid #0ec254; }\n\n:host .car-profile .car-avatar {\n  width: 90%;\n  max-width: 200px;\n  height: 100px;\n  margin-right: 5px; }\n\n:host .car-profile .car-avatar img {\n    width: 100%; }\n\n:host .car-profile .item-inner {\n  border-width: 0; }\n\n:host .car-profile ion-icon {\n  font-size: 14px; }\n\n:host .car-profile .mobnum-text {\n  margin-top: 25px; }\n\n:host ion-button {\n  text-transform: none !important; }\n\n:host ion-item {\n  border-bottom: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2Fycy9EOlxcdGF4aS1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxjYXJzXFxjYXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHVGQUFhLEVBQUE7O0FBRnJCO0VBS1EsY0FBYyxFQUFBOztBQUx0QjtFQVFRLGNBQ0osRUFBQTs7QUFUSjtFQVdRLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7O0FBYmxDO0VBZ0JRLGNBQWM7RUFDZCwwQkFBMEIsRUFBQTs7QUFqQmxDO0VBb0JRLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBckJ0QjtFQXdCUSx1QkFBc0IsRUFBQTs7QUF4QjlCO0VBMkJRLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCLEVBQUE7O0FBN0J0QztFQWlDWSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFwQzdCO0lBc0NnQixXQUFXLEVBQUE7O0FBdEMzQjtFQTBDWSxlQUFlLEVBQUE7O0FBMUMzQjtFQTZDWSxlQUFlLEVBQUE7O0FBN0MzQjtFQWdEWSxnQkFBZ0IsRUFBQTs7QUFoRDVCO0VBb0RRLCtCQUE4QixFQUFBOztBQXBEdEM7RUF1RFEsNkJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJzL2NhcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpO1xuICAgIH1cbiAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgICBjb2xvcjogI2RjYmJmNTtcbiAgICB9XG4gICAgLmRhdGUtbGFiZWwge1xuICAgICAgICBjb2xvcjogI2RjYmJmNVxuICAgIH1cbiAgICAudmlldy10ZXh0IHtcbiAgICAgICAgY29sb3I6ICMyNzI5ODM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICAgIC5hZ2VudC1uYW1lIHtcbiAgICAgICAgY29sb3I6ICMyNzI5ODM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICAuY2FsZW5kYXItaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgY29sb3I6ICNjZmI3ZTI7XG4gICAgfVxuICAgIGNhcmQtY29udGVudC1tZCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzBlYzI1NDtcbiAgICB9XG4gICAgLmNhci1wcm9maWxlIHtcbiAgICAgICAgLmNhci1hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vYm51bS10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwcHghaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cars/cars.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cars/cars.page.ts ***!
  \*****************************************/
/*! exports provided: CarsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsPage", function() { return CarsPage; });
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

var CarsPage = /** @class */ (function () {
    function CarsPage() {
        this.cars = [
            { carname: "Toyota Innova", agentname: "R.Satheesh Kumar", location: "Chennai", seater: "7 Seater", mobilenumber: "9884420042", img: "assets/img/innova.jpg" },
            { carname: "Indica v2", agentname: "S.Mahalingam", location: "Avadi", seater: "4 Seater", mobilenumber: "8754491205", img: "assets/img/indica-v2.jpg" },
            { carname: "Xylo", agentname: "A.Paneer Selvam", location: "Tambaram", seater: "7 Seater", mobilenumber: "8988756523", img: "assets/img/xylo.jpg" },
            { carname: "Ford Figo", agentname: "P.Yogaraj", location: "Porur", seater: "4 Seater", mobilenumber: "8798875679", img: "assets/img/figo.jpg" },
            { carname: "Hyundai i10", agentname: "M.Rajesh Kumar", location: "T.Nagar", seater: "4 Seater", mobilenumber: "998875659", img: "assets/img/i10.jpg" }
        ];
        this.today = new Date().toISOString();
        var now = new Date();
        now.setDate(now.getDate() + 30);
        this.nextThirty = now.toISOString();
    }
    CarsPage.prototype.ngOnInit = function () {
    };
    CarsPage.prototype.openWhatsApp = function () {
        window.open("https://api.whatsapp.com/send?phone=" + this.mobilenumber);
    };
    CarsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cars',
            template: __webpack_require__(/*! ./cars.page.html */ "./src/app/pages/cars/cars.page.html"),
            styles: [__webpack_require__(/*! ./cars.page.scss */ "./src/app/pages/cars/cars.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsPage);
    return CarsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cars-cars-module.js.map