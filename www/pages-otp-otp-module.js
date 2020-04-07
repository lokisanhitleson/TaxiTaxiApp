(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-otp-otp-module"],{

/***/ "./src/app/pages/otp/otp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.module.ts ***!
  \*****************************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp.page */ "./src/app/pages/otp/otp.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_5__["OtpPage"]
    }
];
var OtpPageModule = /** @class */ (function () {
    function OtpPageModule() {
    }
    OtpPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_5__["OtpPage"]]
        })
    ], OtpPageModule);
    return OtpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/otp/otp.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\n    <div class=\"theme-bg\"></div>\n    <div class=\"auth-content\">\n\n        <!-- Logo -->\n        <div padding-horizontal text-center class=\"animated fadeInDown\">\n            <div class=\"logo\"></div>\n            <!-- <h4 no-margin>\n                <ion-text color=\"light\" class=\"fw700\">\n                    Taxi-Taxi\n                </ion-text>\n            </h4> -->\n        </div>\n\n        <!-- Login form -->\n        <form [formGroup]=\"onLoginForm\" class=\"list-form\">\n            <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"lock\" item-start></ion-icon>\n                    One Time Password\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"text\" formControlName=\"otp\"></ion-input>\n            </ion-item>\n            <p ion-text class=\"text08\" *ngIf=\"onLoginForm.get('otp').touched && onLoginForm.get('otp').hasError('required')\">\n                <ion-text color=\"warning\">\n                    Required Field\n                </ion-text>\n            </p>\n        </form>\n\n        <!-- <p text-right tappable (click)=\"forgotPass()\" class=\"paz\">\n            <ion-text color=\"light\">\n                <strong>Forgot Pass?</strong>\n            </ion-text>\n        </p> -->\n\n        <div class=\"ion-padding-top\">\n            <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"warning\" (click)=\"goToHome()\" [disabled]=\"!onLoginForm.valid\" tappable>\n                <ion-icon name=\"log-in\"></ion-icon>\n                Signin\n            </ion-button>\n\n            <!-- <p text-center>\n                <ion-text color=\"light\">\n                    Or Signin with:\n                </ion-text>\n            </p> -->\n\n            <!-- <ion-grid class=\"btn-group\">\n                <ion-row>\n                    <ion-col size=\"4\">\n                        <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n                            <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n                            <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n                            <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid> -->\n\n        </div>\n\n        <!-- Other links -->\n        <div text-center margin-top>\n            <span (click)=\"goToLogin()\" class=\"paz\" tappable>\n        <ion-text color=\"light\">\n          Already user? <strong>Sign in</strong>\n        </ion-text>\n      </span>\n        </div>\n\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/otp/otp.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-primary); }\n\n.paz {\n  position: relative;\n  z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3RwL0Q6XFx0YXhpLWFwcC9zcmNcXGFwcFxccGFnZXNcXG90cFxcb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHNDQUFhLEVBQUE7O0FBSXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL290cC9vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuXG4ucGF6IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/otp/otp.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/otp/otp.page.ts ***!
  \***************************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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



var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
    }
    OtpPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    OtpPage.prototype.ngOnInit = function () {
        this.onLoginForm = this.formBuilder.group({
            'otp': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    };
    OtpPage.prototype.forgotPass = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Forgot Password?',
                            message: 'Enter your mobile number to send a reset link password.',
                            inputs: [
                                {
                                    name: 'otp',
                                    type: 'text',
                                    placeholder: 'One Time Password'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
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
                                                                        message: 'OTP was sent successfully.',
                                                                        duration: 3000,
                                                                        position: 'bottom'
                                                                    })];
                                                                case 1:
                                                                    toast = _a.sent();
                                                                    toast.present();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // // //
    OtpPage.prototype.goToRegister = function () {
        this.navCtrl.navigateRoot('/register');
    };
    OtpPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    OtpPage.prototype.goToHome = function () {
        this.navCtrl.navigateRoot('/home-results');
    };
    OtpPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! ./otp.page.html */ "./src/app/pages/otp/otp.page.html"),
            styles: [__webpack_require__(/*! ./otp.page.scss */ "./src/app/pages/otp/otp.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], OtpPage);
    return OtpPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-otp-otp-module.js.map