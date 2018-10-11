(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/i9fadijr.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/i9fadijr.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonTextarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTextarea", function() { return Textarea; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */



var Textarea = /** @class */ (function () {
    function Textarea() {
        this.inputId = "ion-input-" + textareaIds++;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        this.autocapitalize = 'none';
        this.autofocus = false;
        this.clearOnEdit = false;
        this.debounce = 0;
        this.disabled = false;
        this.name = this.inputId;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.value = '';
    }
    Textarea.prototype.debounceChanged = function () {
        this.ionChange = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.ionChange, this.debounce);
    };
    Textarea.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Textarea.prototype.valueChanged = function () {
        var _a = this, nativeInput = _a.nativeInput, value = _a.value;
        if (nativeInput.value !== value) {
            nativeInput.value = value;
        }
        this.ionChange.emit({ value: value });
    };
    Textarea.prototype.componentDidLoad = function () {
        this.ionStyle = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.ionStyle);
        this.debounceChanged();
        this.emitStyle();
    };
    Textarea.prototype.focus = function () {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    };
    Textarea.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'textarea': true,
            'input': true,
            'interactive-disabled': this.disabled,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus
        });
    };
    Textarea.prototype.onInput = function (ev) {
        this.value = this.nativeInput.value;
        this.emitStyle();
        this.ionInput.emit(ev);
    };
    Textarea.prototype.onFocus = function () {
        this.hasFocus = true;
        this.focusChange();
        this.ionFocus.emit();
    };
    Textarea.prototype.onBlur = function () {
        this.hasFocus = false;
        this.focusChange();
        this.ionBlur.emit();
    };
    Textarea.prototype.onKeyDown = function () {
        this.checkClearOnEdit();
    };
    Textarea.prototype.checkClearOnEdit = function () {
        if (!this.clearOnEdit) {
            return;
        }
        if (this.didBlurAfterEdit && this.hasValue()) {
            this.value = '';
        }
        this.didBlurAfterEdit = false;
    };
    Textarea.prototype.focusChange = function () {
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
        this.emitStyle();
    };
    Textarea.prototype.hasValue = function () {
        return this.value !== '';
    };
    Textarea.prototype.hostData = function () {
        return {
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.color))
        };
    };
    Textarea.prototype.render = function () {
        var _this = this;
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.el, this.name, this.value, this.disabled);
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", { class: "native-textarea", ref: function (el) { return _this.nativeInput = el; }, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onKeyDown: this.onKeyDown.bind(this) }, this.value));
    };
    Object.defineProperty(Textarea, "is", {
        get: function () { return "ion-textarea"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Textarea, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Textarea, "properties", {
        get: function () {
            return {
                "autocapitalize": {
                    "type": String,
                    "attr": "autocapitalize"
                },
                "autofocus": {
                    "type": Boolean,
                    "attr": "autofocus"
                },
                "clearOnEdit": {
                    "type": Boolean,
                    "attr": "clear-on-edit",
                    "mutable": true
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "cols": {
                    "type": Number,
                    "attr": "cols"
                },
                "debounce": {
                    "type": Number,
                    "attr": "debounce",
                    "watchCallbacks": ["debounceChanged"]
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "focus": {
                    "method": true
                },
                "hasFocus": {
                    "state": true
                },
                "maxlength": {
                    "type": Number,
                    "attr": "maxlength"
                },
                "minlength": {
                    "type": Number,
                    "attr": "minlength"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "placeholder": {
                    "type": String,
                    "attr": "placeholder"
                },
                "readonly": {
                    "type": Boolean,
                    "attr": "readonly"
                },
                "required": {
                    "type": Boolean,
                    "attr": "required"
                },
                "rows": {
                    "type": Number,
                    "attr": "rows"
                },
                "spellcheck": {
                    "type": Boolean,
                    "attr": "spellcheck"
                },
                "value": {
                    "type": String,
                    "attr": "value",
                    "mutable": true,
                    "watchCallbacks": ["valueChanged"]
                },
                "wrap": {
                    "type": String,
                    "attr": "wrap"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Textarea, "events", {
        get: function () {
            return [{
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionInput",
                    "method": "ionInput",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionStyle",
                    "method": "ionStyle",
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
                    "name": "ionFocus",
                    "method": "ionFocus",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Textarea, "style", {
        get: function () { return ":host{--background:initial;--color:currentColor;--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}:host(.ion-color){background:initial;color:var(--ion-color-base)}:host(.in-item){position:static}.native-textarea{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;width:100%;height:100%;border:0;outline:0;background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled]{opacity:.4}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Textarea, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Textarea;
}());
var textareaIds = 0;



/***/ })

}]);
//# sourceMappingURL=66.js.map