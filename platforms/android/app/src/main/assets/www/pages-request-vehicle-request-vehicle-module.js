(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-vehicle-request-vehicle-module"],{

/***/ "./node_modules/ionic4-auto-complete/fesm5/ionic4-auto-complete.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ionic4-auto-complete/fesm5/ionic4-auto-complete.js ***!
  \*************************************************************************/
/*! exports provided: AutoCompleteComponent, AutoCompleteModule, AutoCompleteOptions, BoldPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function() { return AutoCompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteOptions", function() { return AutoCompleteOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoldPrefix", function() { return BoldPrefix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AutoCompleteOptions = /** @class */ (function () {
    function AutoCompleteOptions() {
        this.animated = false;
        this.color = null;
        this.autocomplete = 'off';
        this.autocorrect = 'off';
        this.cancelButtonIcon = 'arrow-round-back';
        this.cancelButtonText = 'Cancel';
        this.clearIcon = 'close-circle';
        this.clearInput = false;
        this.clearOnEdit = false;
        this.debounce = 250;
        this.mode = 'md';
        this.noItems = 'No items found.';
        this.placeholder = 'Search';
        this.searchIcon = 'search';
        this.showCancelButton = false;
        this.spellcheck = 'off';
        this.type = 'search';
        this.value = '';
    }
    return AutoCompleteOptions;
}());

var AutoCompleteStyles = /** @class */ (function () {
    function AutoCompleteStyles() {
        this.list = {};
        this.listItem = {};
        this.searchbar = {};
    }
    return AutoCompleteStyles;
}());

var AutoCompleteComponent = /** @class */ (function () {
    /**
     * Create a new instance
     */
    function AutoCompleteComponent() {
        this.enableBrowserAutoComplete = false;
        this.clearInvalidInput = true;
        this.disabled = false;
        this.exclude = [];
        this.frontIcon = false;
        this.hideListOnSelection = true;
        this.location = 'auto';
        this.maxResults = 8;
        this.maxSelected = null;
        this.multi = false;
        this.name = '';
        this.options = new AutoCompleteOptions();
        this.removeButtonClasses = '';
        this.removeButtonColor = 'primary';
        this.removeButtonIcon = 'close-circle';
        this.removeButtonSlot = 'end';
        this.removeDuplicateSuggestions = true;
        this.styles = new AutoCompleteStyles;
        this.useIonInput = false;
        this.onTouchedCallback = false;
        this.onChangeCallback = false;
        this.hasFocus = false;
        this.isLoading = false;
        this.focusedOption = -1;
        this.showListChanged = false;
        this.autoBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.autoFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ionAutoInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyword = '';
        this.suggestions = [];
        this._showList = false;
        this.options = new AutoCompleteOptions();
        this.defaultOpts = new AutoCompleteOptions();
        this.selected = [];
    }
    AutoCompleteComponent_1 = AutoCompleteComponent;
    Object.defineProperty(AutoCompleteComponent.prototype, "model", {
        get: function () {
            var model = this.selected;
            if (!this.multi && typeof this.selected.length !== 'undefined') {
                if (this.selected.length === 0) {
                    model = null;
                }
                else {
                    model = this.selected[0];
                }
            }
            return model;
        },
        set: function (selected) {
            if (typeof selected !== 'undefined' && selected !== null) {
                this.selected = selected;
                this.keyword = this.getLabel(selected);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteComponent.prototype, "eager", {
        set: function (eager) {
            if (eager) {
                this.getItems(null, false);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteComponent.prototype, "showList", {
        get: function () {
            return this._showList;
        },
        set: function (value) {
            if (this._showList === value) {
                return;
            }
            this._showList = value;
            this.showListChanged = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    AutoCompleteComponent.prototype.ngAfterViewChecked = function () {
        if (this.showListChanged) {
            this.showListChanged = false;
            this.showList ? this.itemsShown.emit() : this.itemsHidden.emit();
        }
    };
    AutoCompleteComponent.prototype.ngDoCheck = function () {
        if (!this.hasFocus) {
            if (this.clearInvalidInput && (this.selected === null || this.multi)) {
                if (this.keyword !== '') {
                    this.keyword = '';
                }
                if (this.inputElem && this.inputElem.nativeElement) {
                    if (this.inputElem.nativeElement.children && this.inputElem.nativeElement.children.length !== 0) {
                        if (this.inputElem.nativeElement.children[0].children && this.inputElem.nativeElement.children[0].children.length !== 0) {
                            if (this.inputElem.nativeElement.children[0].children[0].value) {
                                this.inputElem.nativeElement.children[0].children[0].value = '';
                            }
                        }
                    }
                }
                if (this.searchbarElem && this.searchbarElem.nativeElement) {
                    if (this.searchbarElem.nativeElement.children && this.searchbarElem.nativeElement.children.length !== 0) {
                        if (this.searchbarElem.nativeElement.children[0].children) {
                            if (this.searchbarElem.nativeElement.children[0].children.length !== 0) {
                                if (this.searchbarElem.nativeElement.children[0].children[0].value) {
                                    this.searchbarElem.nativeElement.children[0].children[0].value = '';
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * Handle document click
     *
     * @param event
     *
     * @private
     */
    AutoCompleteComponent.prototype.documentClickHandler = function (event) {
        if ((this.searchbarElem && this.searchbarElem.nativeElement && !this.searchbarElem.nativeElement.contains(event.target))
            ||
                (!this.inputElem && this.inputElem.nativeElement && this.inputElem.nativeElement.contains(event.target))) {
            this.hideItemList();
        }
    };
    /**
     * Get value from form
     *
     * @param selection
     *
     * @private
     */
    AutoCompleteComponent.prototype.getFormValue = function (selection) {
        if (selection == null || typeof this.dataProvider === 'function') {
            return null;
        }
        var attr = this.dataProvider.formValueAttribute == null ?
            this.dataProvider.labelAttribute : this.dataProvider.formValueAttribute;
        if (typeof selection === 'object' && attr) {
            return selection[attr];
        }
        return selection;
    };
    /**
     * Get element's position on screen
     *
     * @param el
     *
     * @private
     */
    AutoCompleteComponent.prototype._getPosition = function (el) {
        var xPos = 0;
        var yPos = 0;
        while (el) {
            if (el.tagName === 'BODY') {
                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                var yScroll = el.scrollTop || document.documentElement.scrollTop;
                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            }
            else {
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
            }
            el = el.offsetParent;
        }
        return {
            x: xPos,
            y: yPos
        };
    };
    AutoCompleteComponent.prototype.clickClear = function () {
        this.clearValue(true);
        this.itemsCleared.emit(true);
    };
    /**
     * Clear current input value
     *
     * @param hideItemList
     */
    AutoCompleteComponent.prototype.clearValue = function (hideItemList) {
        if (hideItemList === void 0) { hideItemList = false; }
        this.keyword = '';
        this.selection = null;
        this.formValue = null;
        if (hideItemList) {
            this.hideItemList();
        }
        this.focusedOption = -1;
        return;
    };
    AutoCompleteComponent.prototype.keyupIonSearchbar = function (event, show) {
        this.getItems(event.detail.target.value, show);
    };
    AutoCompleteComponent.prototype.keyupIonInput = function (event, show) {
        this.getItems(event.target.value, show);
    };
    /**
     * Get items for auto-complete
     *
     * @param keyword
     * @param show
     */
    AutoCompleteComponent.prototype.getItems = function (keyword, show) {
        var _this = this;
        this.isLoading = true;
        if (this.promise) {
            clearTimeout(this.promise);
        }
        this.promise = setTimeout(function () {
            if (event) {
                _this.keyword = keyword;
            }
            var result;
            if (_this.showResultsFirst && _this.keyword.trim() === '') {
                _this.keyword = '';
            }
            if (typeof _this.dataProvider === 'function') {
                result = _this.dataProvider(_this.keyword);
                _this.setSuggestions(result, show);
                _this.isLoading = false;
            }
            else {
                result = _this.dataProvider.getResults(_this.keyword);
                if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]) {
                    result = result.asObservable();
                }
                else if (result instanceof Promise) {
                    result = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(result);
                }
                if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]) {
                    result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                        _this.isLoading = false;
                    })).subscribe(function (results) {
                        _this.setSuggestions(results, show);
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.setSuggestions(result, show);
                    _this.isLoading = false;
                }
            }
            _this.ionAutoInput.emit(_this.keyword);
        }, this.options.debounce);
    };
    /**
     * Get an item's label
     *
     * @param selection
     */
    AutoCompleteComponent.prototype.getLabel = function (selection) {
        if (selection == null || typeof this.dataProvider === 'function') {
            return '';
        }
        var attr = this.dataProvider.formValueAttribute == null ?
            this.dataProvider.labelAttribute : this.dataProvider.formValueAttribute;
        var value = selection;
        if (this.dataProvider.getItemLabel) {
            value = this.dataProvider.getItemLabel(value);
        }
        if (!this.multi && typeof value !== 'undefined' && Object.prototype.toString.call(value) === '[object Array]') {
            if (value.length === 0) {
                return '';
            }
            else {
                value = value[0];
            }
        }
        if (typeof value === 'object' && attr) {
            return value[attr] || '';
        }
        return value || '';
    };
    /**
     * Get current selection
     */
    AutoCompleteComponent.prototype.getSelection = function () {
        if (this.multi) {
            return this.selection;
        }
        else {
            return this.selected;
        }
    };
    /**
     * Get menu style
     */
    AutoCompleteComponent.prototype.listStyles = function () {
        var listLocationStyles = this.listLocationStyles();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, listLocationStyles, this.styles.list);
    };
    AutoCompleteComponent.prototype.listLocationStyles = function () {
        var location = this.location;
        if (this.location === 'auto') {
            var elementY = this._getPosition(this.searchbarElem.nativeElement).y;
            var windowY = window.innerHeight;
            if (elementY > windowY - elementY) {
                location = 'top';
            }
            else {
                location = 'bottom';
            }
        }
        if (location === 'bottom') {
            return {};
        }
        else {
            return {
                'bottom': '37px'
            };
        }
    };
    /**
     * Get current input value
     */
    AutoCompleteComponent.prototype.getValue = function () {
        return this.formValue;
    };
    /**
     * Handle tap
     *
     * @param event
     */
    AutoCompleteComponent.prototype.handleTap = function (event) {
        if (this.showResultsFirst || this.keyword.length > 0) {
            this.getItems();
        }
    };
    /**
     * Handle tap when selecting an item
     *
     * @param $event
     * @param suggestion
     */
    AutoCompleteComponent.prototype.handleSelectTap = function ($event, suggestion) {
        this.selectItem(suggestion);
        if ($event.srcEvent) {
            if ($event.srcEvent.stopPropagation) {
                $event.srcEvent.stopPropagation();
            }
            if ($event.srcEvent.preventDefault) {
                $event.srcEvent.preventDefault();
            }
        }
        else if ($event.preventDefault) {
            $event.preventDefault();
        }
        return false;
    };
    /**
     * Hide item list
     */
    AutoCompleteComponent.prototype.hideItemList = function () {
        this.showList = this.alwaysShowList;
        this.focusedOption = -1;
    };
    AutoCompleteComponent.prototype.highlightItem = function (direction) {
        var max = this.suggestions.length - 1;
        if (direction < 0) {
            if (this.focusedOption === -1 || this.focusedOption === max) {
                this.focusedOption = 0;
            }
            else {
                this.focusedOption++;
            }
        }
        else if (direction > 0) {
            if (this.focusedOption === -1 || this.focusedOption === 0) {
                this.focusedOption = max;
            }
            else {
                this.focusedOption--;
            }
        }
    };
    /**
     * Fired when the input focused
     */
    AutoCompleteComponent.prototype.onFocus = function (event) {
        this.hasFocus = true;
        this.getItems();
        event = this._reflectName(event);
        this.autoFocus.emit(event);
        this.focus.emit(event);
    };
    /**
     * Fired when the input focused
     */
    AutoCompleteComponent.prototype.onBlur = function (event) {
        this.hasFocus = false;
        event = this._reflectName(event);
        this.autoBlur.emit(event);
        this.blur.emit(event);
    };
    AutoCompleteComponent.prototype._reflectName = function (event) {
        if (typeof event.srcElement.attributes['ng-reflect-name'] === 'object') {
            event.srcElement.name = event.srcElement.attributes['ng-reflect-name'].value;
        }
        return event;
    };
    /**
     * Register onChangeCallback
     *
     * @param fn
     */
    AutoCompleteComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * Register onTouchedCallback
     *
     * @param fn
     */
    AutoCompleteComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * Remove already selected suggestions
     *
     * @param suggestions
     */
    AutoCompleteComponent.prototype.removeDuplicates = function (suggestions) {
        var selectedCount = this.selected ? this.selected.length : 0;
        var suggestionCount = suggestions.length;
        for (var i = 0; i < selectedCount; i++) {
            var selectedLabel = this.getLabel(this.selected[i]);
            for (var j = 0; j < suggestionCount; j++) {
                var suggestedLabel = this.getLabel(suggestions[j]);
                if (selectedLabel === suggestedLabel) {
                    suggestions.splice(j, 1);
                }
            }
        }
        return suggestions;
    };
    AutoCompleteComponent.prototype.removeExcluded = function (suggestions) {
        var excludedCount = this.exclude.length;
        for (var i = 0; i < excludedCount; i++) {
            var excludeLabel = this.exclude[i];
            if (typeof excludeLabel === 'object') {
                excludeLabel = this.getLabel(excludeLabel);
            }
            var suggestionCount = suggestions.length;
            for (var j = 0; j < suggestionCount; j++) {
                var suggestedLabel = this.getLabel(suggestions[j]);
                if (excludeLabel === suggestedLabel) {
                    suggestions.splice(j, 1);
                    break;
                }
            }
        }
        return suggestions;
    };
    /**
     * Remove item from selected
     *
     * @param selection
     * @param notify?
     */
    AutoCompleteComponent.prototype.removeItem = function (selection, notify) {
        var count = this.selected ? this.selected.length : 0;
        for (var i = 0; i < count; i++) {
            var item = this.selected[i];
            var selectedLabel = this.getLabel(selection);
            var itemLabel = this.getLabel(item);
            if (selectedLabel === itemLabel) {
                this.selected.splice(i, 1);
            }
        }
        notify = typeof notify === 'undefined' ? true : notify;
        if (notify) {
            this.itemRemoved.emit(selection);
            this.itemsChange.emit(this.selected);
        }
        this.modelChange.emit(this.selected);
    };
    /**
     * Select item from list
     *
     * @param selection
     **/
    AutoCompleteComponent.prototype.selectItem = function (selection) {
        this.keyword = this.getLabel(selection);
        this.formValue = this.getFormValue(selection);
        this.hideItemList();
        this.updateModel(this.formValue);
        if (this.hideListOnSelection) {
            this.hideItemList();
        }
        if (this.multi) {
            if (this.maxSelected === null || this.selected.length <= this.maxSelected) {
                this.clearValue();
                this.selected.push(selection);
                this.itemsChange.emit(this.selected);
            }
            else {
                return;
            }
        }
        else {
            this.selection = selection;
            this.selected = [selection];
            this.itemsChange.emit(selection);
        }
        this.itemSelected.emit(selection);
        this.modelChange.emit(this.selected);
    };
    /**
     * Set focus of searchbar
     */
    AutoCompleteComponent.prototype.setFocus = function () {
        if (this.searchbarElem) {
            this.searchbarElem.nativeElement.setFocus();
        }
    };
    /**
     * Set suggestions
     *
     * @param suggestions
     * @param show
     */
    AutoCompleteComponent.prototype.setSuggestions = function (suggestions, show) {
        if (this.removeDuplicateSuggestions) {
            suggestions = this.removeDuplicates(suggestions);
            suggestions = this.removeExcluded(suggestions);
        }
        this.suggestions = suggestions;
        if (show || typeof show === 'undefined') {
            this.showItemList();
        }
    };
    /**
     * Set current input value
     *
     * @param selection
     */
    AutoCompleteComponent.prototype.setValue = function (selection) {
        this.formValue = this.getFormValue(selection);
        this.keyword = this.getLabel(selection);
        return;
    };
    /**
     * Show item list
     */
    AutoCompleteComponent.prototype.showItemList = function () {
        this.showList = true;
    };
    /**
     * Update the model
     */
    AutoCompleteComponent.prototype.updateModel = function (enteredText) {
        if (enteredText !== this.formValue) {
            this.formValue = enteredText;
            if (!this.multi) {
                this.selected = null;
            }
        }
        if (this.onChangeCallback) {
            this.onChangeCallback(this.formValue);
        }
        this.modelChange.emit(this.selected);
    };
    /**
     * Write value
     *
     * @param value
     */
    AutoCompleteComponent.prototype.writeValue = function (value) {
        if (value !== this.selection) {
            this.selection = value || null;
            this.formValue = this.getFormValue(this.selection);
            this.keyword = this.getLabel(this.selection);
        }
    };
    var AutoCompleteComponent_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "alwaysShowList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "enableBrowserAutoComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "clearInvalidInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "dataProvider", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "emptyTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "exclude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "frontIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "hideListOnSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "keyword", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "location", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "maxResults", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "maxSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "multi", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "removeButtonClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "removeButtonColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "removeButtonIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "removeButtonSlot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "removeDuplicateSuggestions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "selectionTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "showResultsFirst", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "styles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "useIonInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "model", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "modelChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AutoCompleteComponent.prototype, "eager", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "blur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "autoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "autoBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "ionAutoInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "itemsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "itemsCleared", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "itemsHidden", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "itemRemoved", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "itemSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AutoCompleteComponent.prototype, "itemsShown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbarElem', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        })
    ], AutoCompleteComponent.prototype, "searchbarElem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputElem', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        })
    ], AutoCompleteComponent.prototype, "inputElem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], AutoCompleteComponent.prototype, "documentClickHandler", null);
    AutoCompleteComponent = AutoCompleteComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: AutoCompleteComponent_1,
                    multi: true
                }
            ],
            selector: 'ion-auto-complete',
            template: "<ng-template #defaultSelection\n             let-attrs=\"attrs\">\n    <ion-chip class=\"{{ attrs.removeButtonClasses }}\"\n              [color]=\"attrs.removeButtonColor\"\n              [outline]=\"true\">\n        <ion-icon *ngIf=\"frontIcon\"\n                  [name]=\"frontIcon\"\n                  [slot]=\"'start'\"\n                  color=\"primary\"></ion-icon>\n\n        <ion-label>{{ attrs.label }}</ion-label>\n\n        <ion-icon *ngIf=\"attrs.removeButtonIcon\"\n                  [name]=\"attrs.removeButtonIcon\"\n                  [slot]=\"attrs.removeButtonSlot\"></ion-icon>\n    </ion-chip>\n</ng-template>\n\n<div *ngIf=\"multi\">\n    <div *ngFor=\"let item of selected\"\n         class=\"selected-items\"\n         (click)=\"removeItem(item)\">\n        <ng-template [ngTemplateOutlet]=\"selectionTemplate || defaultSelection\"\n                     [ngTemplateOutletContext]=\"{\n                            attrs: {\n                              data:                item,\n                              label:               getLabel(item),\n                              removeButtonClasses: removeButtonClasses,\n                              removeButtonColor:   removeButtonColor,\n                              removeButtonIcon:    removeButtonIcon,\n                              removeButtonSlot:    removeButtonSlot\n                            }\n                         }\"></ng-template>\n    </div>\n</div>\n\n<ion-input #inputElem\n           [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n           [name]=\"name\"\n           (keyup)=\"keyupIonInput($event)\"\n           (tap)=\"handleTap($event)\"\n           [(ngModel)]=\"keyword\"\n           (ngModelChange)=\"updateModel($event)\"\n           [placeholder]=\"options.placeholder == null ? defaultOpts.placeholder : options.placeholder\"\n           [type]=\"options.type == null ? defaultOpts.type : options.type\"\n           [clearOnEdit]=\"options.clearOnEdit == null ? defaultOpts.clearOnEdit : options.clearOnEdit\"\n           [clearInput]=\"options.clearInput == null ? defaultOpts.clearInput : options.clearInput\"\n           [color]=\"options.color == null ? null : options.color\"\n           [mode]=\"options.mode == null ? defaultOpts.mode : options.mode\"\n           [disabled]=\"disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected)\"\n           [ngClass]=\"{ 'hidden': !useIonInput, 'loading': isLoading }\"\n           [ngStyle]=\"styles.searchbar\"\n           (keyup.arrowDown)=\"highlightItem(-1)\"\n           (keyup.arrowUp)=\"highlightItem(1)\"\n           (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n           (keyup.escape)=\"hideItemList()\"\n           (ionFocus)=\"onFocus($event)\"\n           (ionBlur)=\"onBlur($event)\"></ion-input>\n\n<ion-searchbar #searchbarElem\n               [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n               [name]=\"name\"\n               [animated]=\"options.animated == null ? defaultOpts.animated : options.animated\"\n               (ionInput)=\"keyupIonSearchbar($event)\"\n               (tap)=\"handleTap($event)\"\n               [(ngModel)]=\"keyword\"\n               (ngModelChange)=\"updateModel($event)\"\n               [cancelButtonIcon]=\"options.cancelButtonIcon == null ? defaultOpts.cancelButtonIcon : options.cancelButtonIcon\"\n               [cancelButtonText]=\"options.cancelButtonText == null ? defaultOpts.cancelButtonText : options.cancelButtonText\"\n               [clearIcon]=\"options.clearIcon == null ? defaultOpts.clearIcon : options.clearIcon\"\n               [color]=\"options.color == null ? null : options.color\"\n               [showCancelButton]=\"options.showCancelButton == null ?\n                                        (defaultOpts.showCancelButton ? 'always' : 'never') :\n                                        (options.showCancelButton ? 'always' : 'never')\"\n               [debounce]=\"options.debounce == null ? defaultOpts.debounce : options.debounce\"\n               [placeholder]=\"options.placeholder == null ? defaultOpts.placeholder : options.placeholder\"\n               [autocorrect]=\"options.autocorrect == null ? defaultOpts.autocorrect : options.autocorrect\"\n               [mode]=\"options.mode == null ? defaultOpts.mode : options.mode\"\n               [searchIcon]=\"options.searchIcon == null ? defaultOpts.searchIcon : options.searchIcon\"\n               [spellcheck]=\"options.spellcheck == null ? defaultOpts.spellcheck : options.spellcheck\"\n               [type]=\"options.type == null ? defaultOpts.type : options.type\"\n               [ngClass]=\"{ 'hidden': useIonInput, 'loading': isLoading, 'disabled': disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected) }\"\n               [ngStyle]=\"styles.searchbar\"\n               (keyup.arrowDown)=\"highlightItem(-1)\"\n               (keyup.arrowUp)=\"highlightItem(1)\"\n               (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n               (keyup.escape)=\"hideItemList()\"\n               (ionClear)=\"clickClear()\"\n               (ionFocus)=\"onFocus($event)\"\n               (ionBlur)=\"onBlur($event)\"></ion-searchbar>\n\n<ng-template #defaultTemplate\n             let-attrs=\"attrs\">\n    <span [innerHTML]='attrs.label | boldprefix:attrs.keyword'></span>\n</ng-template>\n\n<ng-template #defaultEmptyTemplate\n             let-attrs=\"attrs\"\n             class=\"ion-text-center\">\n    {{ options.noItems }}\n</ng-template>\n\n<ul *ngIf=\"!(disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected)) && suggestions.length > 0 && showList\"\n    [ngStyle]=\"listStyles()\">\n    <li *ngFor=\"let suggestion of suggestions| slice:0:maxResults; let index = index\"\n        [ngClass]=\"{ 'focus': focusedOption === index }\"\n        [ngStyle]=\"styles.listItem\"\n        (click)=\"handleSelectTap($event, suggestion)\"\n        (tap)=\"handleSelectTap($event, suggestion)\">\n        <ng-template [ngTemplateOutlet]=\"template || defaultTemplate\"\n                     [ngTemplateOutletContext]=\"{\n                        attrs:{\n                          data:               suggestion,\n                          label:              getLabel(suggestion),\n                          keyword:            keyword,\n                          formValue:          getFormValue(suggestion),\n                          labelAttribute:     getLabel(suggestion),\n                          formValueAttribute: getFormValue(suggestion)\n                        }\n                     }\"></ng-template>\n    </li>\n</ul>\n\n<ul *ngIf=\"suggestions.length === 0 && showList && options.noItems\"\n    [ngStyle]=\"listStyles()\">\n    <li [ngStyle]=\"styles.listItem\">\n        <ng-template [ngTemplateOutlet]=\"emptyTemplate || defaultEmptyTemplate\"\n                     [ngTemplateOutletContext]=\"{\n                        attrs:{\n                          keyword: keyword\n                        }\n                     }\"></ng-template>\n    </li>\n</ul>\n",
            styles: ["ion-auto-complete{overflow:hidden!important;width:90vw;display:inline-block}ion-auto-complete ion-searchbar{padding:1px!important}ion-auto-complete .disabled input.searchbar-input{pointer-events:none;cursor:default}ion-auto-complete ul{position:absolute;width:90vw;margin-top:0;background:#fff;list-style-type:none;padding:0;left:16px;z-index:999;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}ion-auto-complete ul li{padding:15px;border-bottom:1px solid #c1c1c1}ion-auto-complete ul ion-auto-complete-item{height:40px;width:100%}ion-auto-complete ul li:last-child{border:none}ion-auto-complete ul li.focus,ion-auto-complete ul li:focus,ion-auto-complete ul li:hover{cursor:pointer;background:#f1f1f1}ion-auto-complete .hidden{display:none}ion-auto-complete .loading input.searchbar-input{background:url(/assets/loading.gif) right 4px center/25px 25px no-repeat #fff}ion-auto-complete .searchbar-clear-button.sc-ion-searchbar-md{right:34px}ion-auto-complete .selected-items{float:left}"]
        })
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
}());

/**
 * Bolds the beginning of the matching string in the item
 */
var BoldPrefix = /** @class */ (function () {
    function BoldPrefix() {
    }
    BoldPrefix.prototype.transform = function (value, keyword) {
        if (!keyword) {
            return value;
        }
        var escaped_keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return value.replace(new RegExp(escaped_keyword, 'gi'), function (str) {
            return str.bold();
        });
    };
    BoldPrefix = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'boldprefix'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BoldPrefix);
    return BoldPrefix;
}());

var AutoCompleteModule = /** @class */ (function () {
    function AutoCompleteModule() {
    }
    AutoCompleteModule_1 = AutoCompleteModule;
    AutoCompleteModule.forRoot = function () {
        return {
            ngModule: AutoCompleteModule_1,
            providers: []
        };
    };
    var AutoCompleteModule_1;
    AutoCompleteModule = AutoCompleteModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                AutoCompleteComponent,
                BoldPrefix
            ],
            exports: [
                AutoCompleteComponent,
                BoldPrefix
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ]
        })
    ], AutoCompleteModule);
    return AutoCompleteModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ionic4-auto-complete.js.map


/***/ }),

/***/ "./src/app/pages/request-vehicle/places.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/request-vehicle/places.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\" text-center>\r\n        <ion-title>{{Title}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Pickup Location</ion-label>\r\n            <ion-input [(ngModel)]=\"cityNames\" [value]=\"Text\" (ionInput)=\"getCities($event)\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-list *ngIf=\"isCityAvailable\">\r\n            <ion-item *ngFor=\"let city of cities\" (click)=\"citySelected(city)\">{{city}}</ion-item>\r\n        </ion-list>\r\n    </div>\r\n    <!-- <ion-grid slot=\"bottom\">\r\n        <ion-row>\r\n            <ion-col text-center>\r\n                <ion-button color=\"medium\" (click)=\"cancelModal()\">Cancel</ion-button>\r\n            </ion-col>\r\n            <ion-col text-center>\r\n                <ion-button color=\"warning\" (click)=\"submitModal()\">Submit</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid> -->\r\n\r\n    <ion-footer no-shadow>\r\n        <ion-toolbar position=\"bottom\">\r\n            <ion-row>\r\n                <ion-col text-center>\r\n                    <ion-button color=\"medium\" (click)=\"cancelModal()\">Cancel</ion-button>\r\n                </ion-col>\r\n                <ion-col text-center>\r\n                    <ion-button color=\"warning\" (click)=\"submitModal()\">Submit</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-toolbar>\r\n    </ion-footer>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/request-vehicle/places.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/request-vehicle/places.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-footer {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC12ZWhpY2xlL0Q6XFx0YXhpLWFwcC9zcmNcXGFwcFxccGFnZXNcXHJlcXVlc3QtdmVoaWNsZVxccGxhY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3QtdmVoaWNsZS9wbGFjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWZvb3RlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/request-vehicle/places.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/request-vehicle/places.page.ts ***!
  \******************************************************/
/*! exports provided: PlacesModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesModalPage", function() { return PlacesModalPage; });
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


var PlacesModalPage = /** @class */ (function () {
    function PlacesModalPage(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.isCityAvailable = false;
    }
    PlacesModalPage.prototype.ngOnInit = function () {
        console.table(this.navParams);
        this.modelId = this.navParams.data.paramID;
        this.modalTitle = this.navParams.data.paramTitle;
    };
    PlacesModalPage.prototype.cancelModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    PlacesModalPage.prototype.submitModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var onSubmitedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onSubmitedData = this.cityNames;
                        return [4 /*yield*/, this.modalController.dismiss(onSubmitedData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlacesModalPage.prototype.initializeItems = function () {
        this.cities = [
            "Avadi", "Ambattur", "Chengalpatu", "Ekattuthangal", "Padi",
            "Manali new town",
            "Kodungaiyur East",
            "Kodungaiyur West",
            "Madhavaram",
            "Madhavaram Milk Colony",
            "Mathur MMDA",
            "Puzhal",
            "Moolakadai",
            "Kolathur",
            "Parry's Corner",
            "Royapuram",
            "Villivakkam",
            "Perambur",
            "Korukkupet",
            "Tiruvottiyur",
            "Vyasarpadi",
            "Manali",
            "Tondiarpet",
            "Vallalar Nagar",
            "Ennore",
            "Old Washermenpet",
            "Kavangarai",
            "New Washermenpet",
            "Korukkupet",
            "Mannadi",
            "George Town",
            "Seven Wells",
            "Basin Bridge",
            "Sowcarpet",
            "Park Town",
            "Periametu",
            "Choolai",
            "Veppery",
            "Pattalam",
            "Pulinanthope",
            "M.K.B Nagar",
            "Sharma Nagar",
            "Selavoyal",
            "Edapalayam",
            "Manjambakkam",
            "Ponniammanmedu",
            "Sembiam",
            "T.V.K Nagar",
            "ICF Colony north",
            "Central",
            "Padi",
            "Korattur",
            "Lakshmi puram",
            "Ambattur north",
            "Oragadam",
            "Ayapakkam",
            "Pattravakkam",
            "Thirumullaivoyal north",
            "Avadi north",
            "Redhills",
            "Ajax",
            "Kathivakkam",
            "Ernavur",
            "WIMCO",
            "Sathangadu",
            "Rajakadai",
            "Kadambakkam",
            "Kathirvedu",
            "Moolakothiram",
            "Erukanchery",
            "Broadway",
            "Jamalia",
            "Kallikuppam",
            "Pattabiram",
            "Kosapet",
        ];
        // {name:"Avadi"},{name:"Ambattur"},{name:"Chengalpatu"},{name:"Ekattuthangal"},{name:"Padi"}
    };
    PlacesModalPage.prototype.getCities = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.isCityAvailable = true;
            this.cities = this.cities.filter(function (city) {
                return (city.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PlacesModalPage.prototype.citySelected = function (selected) {
        this.cityNames = selected;
        this.cities = [];
    };
    PlacesModalPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'places-modal',
            template: __webpack_require__(/*! ./places.page.html */ "./src/app/pages/request-vehicle/places.page.html"),
            styles: [__webpack_require__(/*! ./places.page.scss */ "./src/app/pages/request-vehicle/places.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]])
    ], PlacesModalPage);
    return PlacesModalPage;
}());



/***/ }),

/***/ "./src/app/pages/request-vehicle/request-vehicle.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request-vehicle/request-vehicle.module.ts ***!
  \*****************************************************************/
/*! exports provided: RequestVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestVehiclePageModule", function() { return RequestVehiclePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/fesm5/ionic4-auto-complete.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-vehicle.page */ "./src/app/pages/request-vehicle/request-vehicle.page.ts");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./places.page */ "./src/app/pages/request-vehicle/places.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _request_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["RequestVehiclePage"]
    },
    {
        path: 'places-modal',
        component: _places_page__WEBPACK_IMPORTED_MODULE_7__["PlacesModalPage"]
    }
];
var RequestVehiclePageModule = /** @class */ (function () {
    function RequestVehiclePageModule() {
    }
    RequestVehiclePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["RequestVehiclePage"], _places_page__WEBPACK_IMPORTED_MODULE_7__["PlacesModalPage"]]
        })
    ], RequestVehiclePageModule);
    return RequestVehiclePageModule;
}());



/***/ }),

/***/ "./src/app/pages/request-vehicle/request-vehicle.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request-vehicle/request-vehicle.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Request Vehicle</ion-title>\n    </ion-toolbar>\n</ion-header>\n<!-- <ion-toolbar color=\"secondary\" class=\"date-filter\">\n    <ion-input class=\"date-picker\" placeholder=\"DD/MM/YYYY\" [(ngModel)]=\"daterange\"></ion-input>\n    <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" class=\"calendar-icon\" shape=\"round\" color=\"medium\" (click)=\"openCalendar()\">\n            <ion-icon name=\"calendar\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-toolbar> -->\n<ion-content>\n\n    <!-- <div class=\"bg-profile\" text-center padding>\n        <img src=\"assets/img/ionic4start-ico.png\">\n    </div> -->\n\n    <ion-card class=\"bg-white\" no-margin>\n        <ion-card-content>\n            <div>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <p>\n                                <ion-icon name=\"alert\"></ion-icon> Please fill the requested details</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"grid-btns\">\n                        <ion-col size=\"6\">\n                            <ion-item (click)=\"openPlacesModal()\">\n                                <ion-icon name=\"ios-arrow-down\" slot=\"end\"></ion-icon>\n                                <ion-label class=\"ion-text-wrap\" no-padding>From:<br>\n                                    <p *ngIf=\"!selectedCity\">Select a place</p>\n                                    <strong *ngIf=\"selectedCity\">{{selectedCity}}</strong>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <ion-item (click)=\"openPlacesModal()\">\n                                <ion-icon name=\"ios-arrow-down\" slot=\"end\"></ion-icon>\n                                <ion-label class=\"ion-text-wrap\">To:<br>\n                                    <p *ngIf=\"!selectedCity\">Select a place</p>\n                                    <strong *ngIf=\"selectedCity\">{{selectedCity}}</strong>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"grid-btns\">\n                        <ion-col size=\"6\">\n                            <ion-item (click)=\"openCalendar()\">\n                                <ion-icon name=\"ios-arrow-down\" slot=\"end\"></ion-icon>\n                                <ion-label class=\"ion-text-wrap\">Start Date:<br>\n                                    <strong>{{startDate}}</strong>\n                                    <p *ngIf=\"!startDate\">Select date</p>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <ion-item (click)=\"openCalendar()\">\n                                <ion-icon name=\"ios-arrow-down\" slot=\"end\"></ion-icon>\n                                <ion-label class=\"ion-text-wrap\">End Date:<br>\n                                    <!-- <ion-input type=\"text\" [(ngModel)]=\"daterange\" readonly></ion-input> -->\n                                    <strong>{{endDate}}</strong>\n                                    <p *ngIf=\"!endDate\">Select date</p>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"grid-btns\">\n                        <ion-col size=\"6\">\n                            <ion-item>\n                                <ion-icon name=\"ios-arrow-down\" slot=\"end\"></ion-icon>\n                                <ion-label class=\"ion-text-wrap\">Vehicle Type:<br>\n                                    <strong>Prime</strong>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <ion-item>\n                                <ion-icon name=\"ios-arrow-down\" slot=\"end\"></ion-icon>\n                                <ion-label class=\"ion-text-wrap\">Model:<br>\n                                    <strong>Tata Indica</strong>\n                                </ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <div margin-top>\n                    <ion-button (click)=\"goToHome()\" icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"warning\" tappable>\n                        Submit\n                    </ion-button>\n                </div>\n                <!-- <ion-list class=\"request-form\">\n\n                    <ion-item (click)=\"openCalendar()\">\n                        <ion-label position=\"floating\">Date</ion-label>\n                        <ion-input type=\"text\" [(ngModel)]=\"daterange\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Vehicle Type</ion-label>\n                        <ion-select class=\"myCustomSelect\" placeholder=\"-Select-\" ok-text=\"Okay\" cancel-text=\"Dismiss\">\n                            <ion-select-option *ngFor=\"let type of carType\">{{type}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Vehicle Model</ion-label>\n                        <ion-select class=\"myCustomSelect\" placeholder=\"-Select-\" ok-text=\"Okay\" cancel-text=\"Dismiss\">\n                            <ion-select-option *ngFor=\"let car of carModels\">{{car}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label position=\"floating\">Person Count</ion-label>\n                        <ion-input type=\"text\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Mobile Number</ion-label>\n                        <ion-input type=\"text\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Description</ion-label>\n                        <ion-textarea></ion-textarea>\n                    </ion-item>\n                    <div margin-top>\n                        <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"warning\" tappable>\n                            <ion-icon name=\"log-in\"></ion-icon>\n                            Submit\n                        </ion-button>\n                    </div>\n                </ion-list> -->\n            </div>\n\n            <p margin-bottom>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n            </p>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/request-vehicle/request-vehicle.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request-vehicle/request-vehicle.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n    ; }\n\n:host .date-filter ion-input.date-picker {\n  background: #fff;\n  color: #444;\n  width: 98%;\n  margin: 0 10px; }\n\n:host .date-filter .calendar-icon ion-icon {\n  font-size: 30px; }\n\n:host .request-form ion-item {\n  --border-color: var(--ion-color-secondary); }\n\n:host .myCustomSelect {\n  max-width: 100% !important; }\n\n:host .grid-btns ion-col ion-item {\n  max-width: 100%;\n  --background: var(--ion-color-medium); }\n\n:host .grid-btns ion-col ion-item ion-label {\n    font-size: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC12ZWhpY2xlL0Q6XFx0YXhpLWFwcC9zcmNcXGFwcFxccGFnZXNcXHJlcXVlc3QtdmVoaWNsZVxccmVxdWVzdC12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRO0lBQWEsRUFBQTs7QUFGckI7RUFNWSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBVDFCO0VBYWdCLGVBQWUsRUFBQTs7QUFiL0I7RUFtQlksMENBQWUsRUFBQTs7QUFuQjNCO0VBdUJRLDBCQUEwQixFQUFBOztBQXZCbEM7RUE0QmdCLGVBQWU7RUFDZixxQ0FBYSxFQUFBOztBQTdCN0I7SUErQm9CLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3QtdmVoaWNsZS9yZXF1ZXN0LXZlaGljbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gICAgfVxuICAgIC5kYXRlLWZpbHRlciB7XG4gICAgICAgIGlvbi1pbnB1dC5kYXRlLXBpY2tlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGVuZGFyLWljb24ge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVxdWVzdC1mb3JtIHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5teUN1c3RvbVNlbGVjdCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZ3JpZC1idG5zIHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/request-vehicle/request-vehicle.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/request-vehicle/request-vehicle.page.ts ***!
  \***************************************************************/
/*! exports provided: RequestVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestVehiclePage", function() { return RequestVehiclePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places.page */ "./src/app/pages/request-vehicle/places.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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





var RequestVehiclePage = /** @class */ (function () {
    function RequestVehiclePage(modalCtrl, popoverCtrl, alertCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.fromLocation = 'Avadi';
        this.toLocation = 'T.Nagar';
        this.selectedCity = "Avadi";
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
    RequestVehiclePage.prototype.openCalendar = function () {
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
                        newFormat = moment__WEBPACK_IMPORTED_MODULE_4__(event.data.dateObj).format("DD-MMMM-YYYY");
                        this.endDate = newFormat;
                        this.startDate = newFormat;
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestVehiclePage.prototype.fromLocationModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Pickup Location',
                            // message: 'Type your Address.',
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Enter your City',
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
                                    text: 'Submit',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            console.log('Change clicked', data);
                                            this.fromLocation = data.location;
                                            return [2 /*return*/];
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
    RequestVehiclePage.prototype.openPlacesModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesModalPage"],
                            componentProps: {
                                "Title": "Select Location"
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (selectedCity) {
                            if (selectedCity !== null) {
                                _this.selectedCity = selectedCity.data;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestVehiclePage.prototype.goToHome = function () {
        this.navCtrl.navigateRoot('/home-results');
    };
    RequestVehiclePage.prototype.ngOnInit = function () {
    };
    RequestVehiclePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./request-vehicle.page.html */ "./src/app/pages/request-vehicle/request-vehicle.page.html"),
            styles: [__webpack_require__(/*! ./request-vehicle.page.scss */ "./src/app/pages/request-vehicle/request-vehicle.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], RequestVehiclePage);
    return RequestVehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-request-vehicle-request-vehicle-module.js.map