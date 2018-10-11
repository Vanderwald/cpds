(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/fvg6ydme.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/fvg6ydme.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToggle", function() { return Toggle; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */



var Toggle = /** @class */ (function () {
    function Toggle() {
        this.inputId = "ion-tg-" + toggleIds++;
        this.pivotX = 0;
        this.activated = false;
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
    }
    Toggle.prototype.checkedChanged = function (isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    };
    Toggle.prototype.disabledChanged = function () {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled,
        });
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    };
    Toggle.prototype.componentWillLoad = function () {
        this.ionStyle = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.ionStyle);
    };
    Toggle.prototype.componentDidLoad = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parentItem, itemLabel, _a;
            var _this = this;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        parentItem = this.nativeInput.closest('ion-item');
                        if (parentItem) {
                            itemLabel = parentItem.querySelector('ion-label');
                            if (itemLabel) {
                                itemLabel.id = this.inputId + '-lbl';
                                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
                            }
                        }
                        _a = this;
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(166), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./gesture.js */ "./node_modules/@ionic/core/dist/esm/es5/build/gesture.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.el,
                            queue: this.queue,
                            gestureName: 'toggle',
                            gesturePriority: 100,
                            threshold: 0,
                            onStart: function (ev) { return _this.onStart(ev); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    Toggle.prototype.onStart = function (detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
        detail.event.preventDefault();
        return true;
    };
    Toggle.prototype.onMove = function (detail) {
        var currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["f"])();
        }
    };
    Toggle.prototype.onEnd = function (detail) {
        var delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["f"])();
        }
        this.activated = false;
        this.nativeInput.focus();
    };
    Toggle.prototype.onChange = function () {
        this.checked = !this.checked;
    };
    Toggle.prototype.onKeyUp = function () {
        this.keyFocus = true;
    };
    Toggle.prototype.onFocus = function () {
        this.ionFocus.emit();
    };
    Toggle.prototype.onBlur = function () {
        this.keyFocus = false;
        this.ionBlur.emit();
    };
    Toggle.prototype.hostData = function () {
        return {
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.color), { 'in-item': Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["j"])('ion-item', this.el), 'toggle-activated': this.activated, 'toggle-checked': this.checked, 'toggle-disabled': this.disabled, 'toggle-key': this.keyFocus, 'interactive': true })
        };
    };
    Toggle.prototype.render = function () {
        var _this = this;
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el, this.name, (this.checked ? this.value : ''), this.disabled);
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toggle-icon" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toggle-inner" })),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("input", { type: "checkbox", onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), checked: this.checked, id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: function (r) { return _this.nativeInput = r; } }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)
        ];
    };
    Object.defineProperty(Toggle, "is", {
        get: function () { return "ion-toggle"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toggle, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toggle, "properties", {
        get: function () {
            return {
                "activated": {
                    "state": true
                },
                "checked": {
                    "type": Boolean,
                    "attr": "checked",
                    "mutable": true,
                    "watchCallbacks": ["checkedChanged"]
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "keyFocus": {
                    "state": true
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "queue": {
                    "context": "queue"
                },
                "value": {
                    "type": String,
                    "attr": "value"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toggle, "events", {
        get: function () {
            return [{
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionFocus",
                    "method": "ionFocus",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionBlur",
                    "method": "ionBlur",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionStyle",
                    "method": "ionStyle",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toggle, "style", {
        get: function () { return ".sc-ion-toggle-md-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--handle-background:var(--ion-background-color, #fff);--handle-background-checked:var(--ion-color-primary, #3880ff);padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.toggle-key.sc-ion-toggle-md-h   input.sc-ion-toggle-md{border:2px solid #5e9ed6}.sc-ion-toggle-md-h:focus{outline:0}.toggle-disabled.sc-ion-toggle-md-h{pointer-events:none;opacity:.3}input.sc-ion-toggle-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:rgba(var(--ion-color-base-rgb),.5)}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{background:var(--ion-color-base)}.toggle-icon.sc-ion-toggle-md{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .3s;transition:background-color .3s;background:var(--background);pointer-events:none}.toggle-inner.sc-ion-toggle-md{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:var(--background-checked)}.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}.in-item[slot].sc-ion-toggle-md-h{margin:0;padding:12px 8px 12px 16px;cursor:pointer}.in-item[slot=start].sc-ion-toggle-md-h{padding:12px 18px 12px 2px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toggle, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Toggle;
}());
function shouldToggle(checked, deltaX, margin) {
    var isRTL = document.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
var toggleIds = 0;



/***/ })

}]);
//# sourceMappingURL=57.js.map