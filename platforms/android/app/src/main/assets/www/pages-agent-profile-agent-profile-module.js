(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agent-profile-agent-profile-module"],{

/***/ "./src/app/pages/agent-profile/agent-profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/agent-profile/agent-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: AgentProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentProfilePageModule", function() { return AgentProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agent_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-profile.page */ "./src/app/pages/agent-profile/agent-profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _agent_profile_page__WEBPACK_IMPORTED_MODULE_5__["AgentProfilePage"]
    }
];
var AgentProfilePageModule = /** @class */ (function () {
    function AgentProfilePageModule() {
    }
    AgentProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_agent_profile_page__WEBPACK_IMPORTED_MODULE_5__["AgentProfilePage"]]
        })
    ], AgentProfilePageModule);
    return AgentProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/agent-profile/agent-profile.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/agent-profile/agent-profile.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Agent Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"agent-title\" slot=\"fixed\">\n    <ion-item>\n        <ion-thumbnail slot=\"start\">\n            <img src=\"assets/img/sunu.jpg\">\n        </ion-thumbnail>\n        <ion-label>\n            <h1 class=\"fw500\">Satheesh Kumar</h1>\n            <h2 color=\"light\" margin-bottom>S.A. Agency Chennai</h2>\n        </ion-label>\n    </ion-item>\n\n    <ion-list-header color=\"light\">\n        <ion-label color=\"primary\" class=\"fw700\"><strong>Agent Information</strong> </ion-label>\n    </ion-list-header>\n</div>\n<ion-content class=\"agent-profile\">\n    <ion-card no-margin>\n        <ion-card class=\"bg-white\" no-margin>\n            <ion-card-content no-padding>\n\n                <ion-item detail *ngFor=\"let info of vehicleInfo\">\n                    <ion-label class=\"ion-text-wrap\">\n                        <strong>{{info.label}} :</strong> {{info.value}}\n                    </ion-label>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/agent-profile/agent-profile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/agent-profile/agent-profile.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)); }\n\n:host .agent-title {\n  background: #e7e6e6;\n  border-bottom: 1px dashed #5d1396; }\n\n:host .agent-title ion-thumbnail {\n    width: 100px;\n    height: 100px; }\n\n:host .agent-title ion-list-header {\n    font-weight: 600;\n    font-size: 17px; }\n\n.agent-profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff; }\n\n.agent-profile ion-card ion-card-content {\n    background-color: var(--ion-color-light);\n    color: #fff;\n    text-align: center; }\n\n.agent-profile ion-card ion-card-content img {\n      height: 128px;\n      width: 128px;\n      border-radius: 50%;\n      border: solid 4px #fff;\n      display: inline;\n      box-shadow: 0 0 28px rgba(255, 255, 255, 0.65); }\n\n.agent-profile ion-card ion-card-content h1 {\n      margin-top: .5rem; }\n\n.agent-profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary); }\n\n.agent-profile ion-buttom button {\n  margin: 0; }\n\n.agent-profile ion-item:nth-child(even) {\n  background: #f2eff5; }\n\n.agent-profile ion-item:nth-child(odd) {\n  background: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWdlbnQtcHJvZmlsZS9EOlxcdGF4aS1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxhZ2VudC1wcm9maWxlXFxhZ2VudC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHVGQUFhLEVBQUE7O0FBRnJCO0VBS1EsbUJBQW1CO0VBQ25CLGlDQUFpQyxFQUFBOztBQU56QztJQVFZLFlBQVk7SUFDWixhQUFhLEVBQUE7O0FBVHpCO0lBWVksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFLM0I7RUFFUSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUo5QjtJQU1ZLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBUjlCO01BVWdCLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsOENBQTZDLEVBQUE7O0FBZjdEO01Ba0JnQixpQkFBaUIsRUFBQTs7QUFsQmpDO0VBd0JZLGtEQUFrRCxFQUFBOztBQXhCOUQ7RUE2QlksU0FBUyxFQUFBOztBQTdCckI7RUFpQ1EsbUJBQ0osRUFBQTs7QUFsQ0o7RUFvQ1EsbUJBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50LXByb2ZpbGUvYWdlbnQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSk7XG4gICAgfVxuICAgIC5hZ2VudC10aXRsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlN2U2ZTY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkMTM5NjtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWdlbnQtcHJvZmlsZSB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC42NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbSB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZWZmNVxuICAgIH1cbiAgICBpb24taXRlbTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmRcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/agent-profile/agent-profile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/agent-profile/agent-profile.page.ts ***!
  \***********************************************************/
/*! exports provided: AgentProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentProfilePage", function() { return AgentProfilePage; });
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


var AgentProfilePage = /** @class */ (function () {
    function AgentProfilePage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.vehicleInfo = [
            { label: "Date of Birth", value: "23-Mar-1988" },
            { label: "Address", value: "No 456, Gopalapuram,12th Street,Padi, Chennai" },
            { label: "Mobile Number", value: "+91 9956432187" },
            { label: "Email", value: "sath@gmail.com" },
            { label: "Agency Name", value: "S.A. Agency" },
            { label: "Agency Reg.No", value: "417/895" },
            { label: "Establishment on", value: "11/02/2016" },
            { label: "Agency Address", value: "No 23/45, CTH High Road, Padi" }
        ];
    }
    AgentProfilePage.prototype.ngOnInit = function () {
    };
    AgentProfilePage.prototype.sendData = function () {
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
    AgentProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-profile',
            template: __webpack_require__(/*! ./agent-profile.page.html */ "./src/app/pages/agent-profile/agent-profile.page.html"),
            styles: [__webpack_require__(/*! ./agent-profile.page.scss */ "./src/app/pages/agent-profile/agent-profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], AgentProfilePage);
    return AgentProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-agent-profile-agent-profile-module.js.map