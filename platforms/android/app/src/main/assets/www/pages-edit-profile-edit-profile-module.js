(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Edit Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n    <ion-card no-margin>\n        <ion-card-content class=\"bg-profile\">\n            <img src=\"assets/img/sunu.jpg\">\n            <h1 class=\"fw500\">Sunu Sundar</h1>\n            <h2 color=\"light\" margin-bottom>Agency</h2>\n            <ion-button icon-left color=\"secondary\">\n                <ion-icon name=\"photos\"></ion-icon>\n                Edit / Add Picture\n            </ion-button>\n        </ion-card-content>\n\n        <ion-grid fixed no-padding>\n            <ion-row>\n                <ion-col size=\"12\" padding>\n\n                    <ion-list margin-bottom>\n                        <ion-list-header color=\"light\">\n                            <ion-label class=\"fw700\">Form</ion-label>\n                        </ion-list-header>\n\n                        <ion-item>\n                            <ion-label color=\"dark\" position=\"stacked\">Full Name:</ion-label>\n                            <ion-input inputmode=\"text\" placeholder=\"Ex..: Sunu\" value=\"Sunu Sundar\"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label color=\"dark\" position=\"stacked\">Email:</ion-label>\n                            <ion-input inputmode=\"email\" placeholder=\"Ex.: joe@doe.com\" value=\"19sunu@gmail.com\"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label color=\"dark\" position=\"stacked\">Address:</ion-label>\n                            <ion-input inputmode=\"text\" placeholder=\"Ex.: kellys Road 5\"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label color=\"dark\">City</ion-label>\n                            <ion-select>\n                                <ion-select-option value=\"nes\">New York</ion-select-option>\n                                <ion-select-option value=\"n64\">Los Angeles</ion-select-option>\n                                <ion-select-option value=\"ps\">London</ion-select-option>\n                                <ion-select-option value=\"genesis\">Paris</ion-select-option>\n                                <ion-select-option value=\"saturn\">São Paulo</ion-select-option>\n                                <ion-select-option value=\"snes\">Tokyo</ion-select-option>\n                                <ion-select-option value=\"snes\">New Delhi</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label color=\"dark\">State</ion-label>\n                            <ion-select>\n                                <ion-select-option value=\"nes\">NY</ion-select-option>\n                                <ion-select-option value=\"n64\">CA</ion-select-option>\n                                <ion-select-option value=\"ps\">Greater London</ion-select-option>\n                                <ion-select-option value=\"genesis\">Paris</ion-select-option>\n                                <ion-select-option value=\"saturn\">SP</ion-select-option>\n                                <ion-select-option value=\"snes\">Kantō</ion-select-option>\n                                <ion-select-option value=\"snes\">Delhi</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </ion-list>\n\n                    <ion-list>\n                        <ion-radio-group>\n                            <ion-list-header color=\"light\">\n                                <ion-label class=\"fw700\">User Type</ion-label>\n                            </ion-list-header>\n\n                            <ion-item>\n                                <ion-label color=\"primary\">Customer</ion-label>\n                                <ion-radio slot=\"start\" value=\"customer\" checked></ion-radio>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label color=\"primary\">Owner</ion-label>\n                                <ion-radio slot=\"start\" value=\"agent\"></ion-radio>\n                            </ion-item>\n                        </ion-radio-group>\n\n                        <ion-item>\n                            <ion-label class=\"text-1x\">Checkbox test</ion-label>\n                            <ion-checkbox></ion-checkbox>\n                        </ion-item>\n                    </ion-list>\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-button size=\"large\" expand=\"full\" color=\"secondary\" (click)=\"sendData()\" no-margin>Save</ion-button>\n    </ion-card>\n\n    <div padding>\n        <ion-text color=\"dark\" no-margin>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n        </ion-text>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n  ; }\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff; }\n\n.profile ion-card ion-card-content {\n    padding: 32px;\n    background-color: var(--ion-color-primary);\n    color: #fff;\n    text-align: center; }\n\n.profile ion-card ion-card-content img {\n      height: 128px;\n      width: 128px;\n      border-radius: 50%;\n      border: solid 4px #fff;\n      display: inline;\n      box-shadow: 0 0 28px rgba(255, 255, 255, 0.65); }\n\n.profile ion-card ion-card-content h1 {\n      margin-top: .5rem; }\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary); }\n\n.profile ion-buttom button {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0Q6XFx0YXhpLWFwcC9zcmNcXGFwcFxccGFnZXNcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0VBQWEsRUFBQTs7QUFJakI7RUFFSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUoxQjtJQU1NLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQVR4QjtNQVlRLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsOENBQTJDLEVBQUE7O0FBakJuRDtNQXFCUSxpQkFBaUIsRUFBQTs7QUFyQnpCO0VBNEJNLGtEQUFrRCxFQUFBOztBQTVCeEQ7RUFrQ00sU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSlcbiAgfVxufVxuXG4ucHJvZmlsZSB7XG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LDI1NSwyNTUsIC42NSk7XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9tIHtcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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


var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.sendData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            duration: 2000
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        loader.onWillDismiss().then(function (l) { return __awaiter(_this, void 0, void 0, function () {
                            var toast;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                                            showCloseButton: true,
                                            cssClass: 'bg-profile',
                                            message: 'Your Data was Edited!',
                                            duration: 3000,
                                            position: 'bottom'
                                        })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        this.navCtrl.navigateForward('/home-results');
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.page.html */ "./src/app/pages/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module.js.map