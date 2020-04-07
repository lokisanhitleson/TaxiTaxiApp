(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-results-home-results-module"],{

/***/ "./src/app/components/popmenu/popmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\">\n    <ion-fab-button (click)=\"togglePopupMenu()\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-icon name=\"apps\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n\n<div class=\"popup-menu\">\n    <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\n    <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\n        <div class=\"popup-menu-item\" routerLink=\"/view-request\" (click)=\"closePopupMenu()\">\n            <ion-icon name=\"eye\" slot=\"middle\" size=\"large\"></ion-icon>\n            <span>View Request</span>\n        </div>\n        <div class=\"popup-menu-item\" routerLink=\"/request-vehicle\" (click)=\"closePopupMenu()\">\n            <ion-icon name=\"car\" slot=\"middle\" size=\"large\"></ion-icon>\n            <span>Request</span>\n        </div>\n        <div class=\"popup-menu-item\" routerLink=\"/add-vehicle\" (click)=\"closePopupMenu()\">\n            <!-- <ion-icon name=\"person\" ></ion-icon> -->\n            <ion-icon name=\"add-circle\" slot=\"middle\" size=\"large\"></ion-icon>\n            <span>Add Vehicle</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%); }\n  .popup-menu-overlay.in {\n    opacity: 1;\n    visibility: visible; }\n  .popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all .25s ease-in-out; }\n  .popup-menu-toggle.out {\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(0);\n    transition: all .15s ease-in-out; }\n  .popup-menu-toggle.out:before {\n      transition: all .15s ease-in-out;\n      transform: scale(0); }\n  .popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all .25s ease-in-out;\n  transition-delay: .15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap; }\n  .popup-menu-panel .popup-menu-item {\n    margin: auto;\n    -moz-flex: 1 0 30%;\n    flex: 1 0 30%;\n    display: -moz-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    flex-direction: column;\n    transform: scale(0);\n    opacity: 0;\n    transition: all .25s ease-in-out; }\n  .popup-menu-panel .popup-menu-item ion-icon {\n      margin: 0 auto;\n      text-align: center;\n      color: #fff; }\n  .popup-menu-panel .popup-menu-item span {\n      padding: 0;\n      margin: 0 0 auto 0;\n      color: #fff;\n      text-align: center;\n      font-size: 12px;\n      text-transform: uppercase;\n      font-weight: 500;\n      line-height: 18px; }\n  .popup-menu-panel .popup-menu-item:active i {\n      color: #dd4135;\n      transition: all 0.15s; }\n  .popup-menu-panel .popup-menu-item:active span {\n      color: #dd4135;\n      transition: all .15s; }\n  .popup-menu-panel.in {\n    transform: scale(1);\n    transition-delay: 0s; }\n  .popup-menu-panel.in .popup-menu-item {\n      transform: scale(1);\n      opacity: 1;\n      transition-delay: .15s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L0Q6XFx0YXhpLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wbWVudVxccG9wbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFFbEIsaUNBQWlDO0VBRWpDLDJGQUFxRixFQUFBO0VBWnpGO0lBY1EsVUFBVTtJQUNWLG1CQUFtQixFQUFBO0VBSTNCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosZ0NBQWdDLEVBQUE7RUFYcEM7SUFhUSxVQUFVO0lBQ1Ysa0JBQWtCO0lBRWxCLG1CQUFtQjtJQUVuQixnQ0FBZ0MsRUFBQTtFQWxCeEM7TUFxQlksZ0NBQWdDO01BRWhDLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFFWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxZQUFZO0VBRVosZ0NBQWdDO0VBRWhDLHNCQUFzQjtFQUV0QiwwQkFBMEI7RUFFMUIsbUJBQW1CO0VBSW5CLGtCQUFrQjtFQUVsQixhQUFhO0VBSWIsZUFBZSxFQUFBO0VBNUJuQjtJQThCUSxZQUFZO0lBSVosa0JBQWtCO0lBRWxCLGFBQWE7SUFJYixrQkFBa0I7SUFFbEIsYUFBYTtJQUliLDJCQUEyQjtJQUUzQixzQkFBc0I7SUFFdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFFVixnQ0FBZ0MsRUFBQTtFQXJEeEM7TUF1RFksY0FBYztNQUNkLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7RUF6RHZCO01BNERZLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixpQkFBaUIsRUFBQTtFQW5FN0I7TUF1RWdCLGNBQXFCO01BRXJCLHFCQUFxQixFQUFBO0VBekVyQztNQTRFZ0IsY0FBcUI7TUFFckIsb0JBQW9CLEVBQUE7RUE5RXBDO0lBb0ZRLG1CQUFtQjtJQUVuQixvQkFBb0IsRUFBQTtFQXRGNUI7TUF5RlksbUJBQW1CO01BQ25CLFVBQVU7TUFFVixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wbWVudS9wb3BtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9wdXAgTWVudSAvL1xuLnBvcHVwLW1lbnUtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoNzksMzYsMTcyLCAuODUpIDAlLCByZ2JhKDc5LDM2LDE3MiwgLjY1KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg3OSwzNiwxNzIsIC44NSkgMCUsIHJnYmEoNzksMzYsMTcyLCAuNjUpIDEwMCUpO1xuICAgICYuaW4ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMTAxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgJi5vdXQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYm90dG9tOiA4MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHotaW5kZXg6IDEwMjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5wb3B1cC1tZW51LWl0ZW0ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC13ZWJraXQtZmxleDogMSAwIDMwJTtcbiAgICAgICAgLW1vei1ib3gtZmxleDogMSAwIDMwJTtcbiAgICAgICAgLW1vei1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtbXMtZmxleDogMSAwIDMwJTtcbiAgICAgICAgZmxleDogMSAwIDMwJTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgYXV0byAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIxLDY1LDUzKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIxLDY1LDUzKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYuaW4ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAucG9wdXAtbWVudS1pdGVtIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
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


var PopmenuComponent = /** @class */ (function () {
    function PopmenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    PopmenuComponent.prototype.ngOnInit = function () {
    };
    PopmenuComponent.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    PopmenuComponent.prototype.closePopupMenu = function () {
        this.openMenu = false;
    };
    PopmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popmenu',
            template: __webpack_require__(/*! ./popmenu.component.html */ "./src/app/components/popmenu/popmenu.component.html"),
            styles: [__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], PopmenuComponent);
    return PopmenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"]
    }
];
var HomeResultsPageModule = /** @class */ (function () {
    function HomeResultsPageModule() {
    }
    HomeResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__["PopmenuComponent"]]
        })
    ], HomeResultsPageModule);
    return HomeResultsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-text color=\"light\">\n                <ion-text color=\"light\" class=\"fw700\">Home</ion-text>\n            </ion-text>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications($event)\">\n                <ion-icon name=\"notifications\"></ion-icon>\n                <ion-badge color=\"danger\" slot=\"end\">2</ion-badge>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"primary\">\n        <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n                <ion-icon name=\"options\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar> -->\n</ion-header>\n<ion-card no-margin class=\"no-radius\" slot=\"fixed\">\n    <ion-item lines=\"none\" color=\"secondary\">\n        <ion-label>\n            <h2 no-margin class=\"fw500 no-margin\">\n                <ion-text color=\"medium\">Location : </ion-text>\n                <ion-text color=\"medium\" class=\"location-text\">{{yourLocation}}</ion-text>\n            </h2>\n\n            <!-- <p class=\"text-11x no-margin\">\n\n            </p> -->\n        </ion-label>\n        <ion-button shape=\"round\" fill=\"outline\" size=\"small\" color=\"medium\" (click)=\"alertLocation()\">\n            Change\n            <ion-icon name=\"locate\"></ion-icon>\n        </ion-button>\n    </ion-item>\n</ion-card>\n<ion-content>\n\n    <div class=\"slide-container\">\n        <ion-slides [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n            <ion-slide *ngFor=\"let ad of ads\">\n                <img [src]=\"ad.img\">\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <ion-title class=\"ion-text-center ion-padding-top\">\n        <ion-text color=\"primary\" class=\"fw700 \">Vehicle Availability</ion-text>\n    </ion-title>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"4\" *ngFor=\"let count of vehicles \">\n                <div class=\"vehicle-card \" routerLink=\"/cars\">\n                    <ion-card class=\"bg-white ion-text-center \">\n                        <ion-img [src]=\"count.img \">\n                        </ion-img>\n                        <ion-text class=\"count-text\" color=\"primary\">\n                            {{count.num}}\n                        </ion-text>\n                    </ion-card>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n    <!-- <ion-button margin shape=\"round \" expand=\"full \" color=\"secondary \" (click)=\"searchFilter() \">\n        Modal 2: Search Filter\n    </ion-button> -->\n\n    <popmenu></popmenu>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n\n:host ion-item {\n  border-radius: 0; }\n\n:host ion-card.no-radius {\n  border-radius: 0; }\n\n:host .vehicle-card ion-card {\n  border: 1px solid #662d91; }\n\n:host .vehicle-card ion-card ion-text.count-text {\n    font-size: 25px;\n    font-weight: 600; }\n\n:host .vehicle-card ion-img {\n  border-bottom: .4px solid #662d91; }\n\n:host .location-text {\n  font-size: 14px; }\n\n:host .slide-container {\n  height: 120px;\n  background: #fff;\n  padding-bottom: 5px;\n  border-bottom: 1px dashed #c2c1c1; }\n\n:host ion-slides {\n  height: 100%; }\n\n:host .swiper-slide {\n  display: block; }\n\n:host .swiper-slide h2 {\n  margin-top: 2.8rem; }\n\n:host .swiper-slide img {\n  width: 100%;\n  max-width: 98%;\n  margin: 10px 0 10px;\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL0Q6XFx0YXhpLWFwcC9zcmNcXGFwcFxccGFnZXNcXGhvbWUtcmVzdWx0c1xcaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG9DQUFhLEVBQUE7O0FBRnJCO0VBS1EsZ0JBQWdCLEVBQUE7O0FBTHhCO0VBVVksZ0JBQWdCLEVBQUE7O0FBVjVCO0VBZVkseUJBQXlCLEVBQUE7O0FBZnJDO0lBaUJnQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBbEJoQztFQXdCWSxpQ0FBaUMsRUFBQTs7QUF4QjdDO0VBNEJRLGVBQWUsRUFBQTs7QUE1QnZCO0VBK0JRLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlDQUFpQyxFQUFBOztBQWxDekM7RUFxQ1EsWUFBWSxFQUFBOztBQXJDcEI7RUF3Q1EsY0FBYyxFQUFBOztBQXhDdEI7RUEyQ1Esa0JBQWtCLEVBQUE7O0FBM0MxQjtFQThDUSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcmVzdWx0cy9ob21lLXJlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgJi5uby1yYWRpdXMge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudmVoaWNsZS1jYXJkIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2MmQ5MTtcbiAgICAgICAgICAgIGlvbi10ZXh0LmNvdW50LXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC52ZWhpY2xlLWNhcmQge1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC40cHggc29saWQgIzY2MmQ5MTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubG9jYXRpb24tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnNsaWRlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2MyYzFjMTtcbiAgICB9XG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLnN3aXBlci1zbGlkZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICAgIH1cbiAgICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDk4JTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
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


// Modals


// Call notifications test by Popover and Custom Component.

var HomeResultsPage = /** @class */ (function () {
    // themeCover = [
    //   {car:'assets/svg/car.svg'},
    //   {car1:'assets/svg/car1.svg'},
    // ];
    function HomeResultsPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.searchKey = '';
        this.yourLocation = 'Chennai 600 072';
        this.vehicles = [
            { img: "assets/svg/car.svg", num: 45 },
            { img: "assets/svg/car1.svg", num: 23 },
            { img: "assets/svg/van.svg", num: 32 },
            { img: "assets/svg/bus.svg", num: 13 },
            { img: "assets/svg/auto.svg", num: 27 },
            { img: "assets/svg/load_vehicle.svg", num: 0 }
        ];
        this.ads = [
            { img: "assets/img/ad1.jpg" },
            { img: "assets/img/ad2.jpg" }
        ];
        this.slideOptions = {
            initialSlide: 1,
            speed: 400,
        };
    }
    HomeResultsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    HomeResultsPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    HomeResultsPage.prototype.settings = function () {
        this.navCtrl.navigateForward('settings');
    };
    HomeResultsPage.prototype.alertLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Change Location',
                            // message: 'Type your Address.',
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Enter your new Location',
                                    type: 'text'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Change',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Change clicked', data);
                                                    this.yourLocation = data.location;
                                                    return [4 /*yield*/, this.toastCtrl.create({
                                                            message: 'Location was change successfully',
                                                            duration: 3000,
                                                            position: 'top',
                                                            closeButtonText: 'OK',
                                                            showCloseButton: true
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        changeLocation = _a.sent();
                        changeLocation.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__["ImagePage"],
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.notifications = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
                            event: ev,
                            animated: true,
                            showBackdrop: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-results',
            template: __webpack_require__(/*! ./home-results.page.html */ "./src/app/pages/home-results/home-results.page.html"),
            styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], HomeResultsPage);
    return HomeResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-results-home-results-module.js.map