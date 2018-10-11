(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/8yhidsqq.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/8yhidsqq.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCheckbox", function() { return Checkbox; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */



var Checkbox = /** @class */ (function () {
    function Checkbox() {
        this.inputId = "ion-cb-" + checkboxIds++;
        this.labelId = this.inputId + "-lbl";
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
    }
    Checkbox.prototype.componentWillLoad = function () {
        this.emitStyle();
    };
    Checkbox.prototype.componentDidLoad = function () {
        this.ionStyle = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.ionStyle);
    };
    Checkbox.prototype.checkedChanged = function (isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    };
    Checkbox.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    };
    Checkbox.prototype.onChange = function () {
        this.checked = !this.checked;
    };
    Checkbox.prototype.onKeyUp = function () {
        this.keyFocus = true;
    };
    Checkbox.prototype.onFocus = function () {
        this.ionFocus.emit();
    };
    Checkbox.prototype.onBlur = function () {
        this.keyFocus = false;
        this.ionBlur.emit();
    };
    Checkbox.prototype.hostData = function () {
        return {
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.color), { 'in-item': Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["j"])('ion-item', this.el), 'checkbox-checked': this.checked, 'checkbox-disabled': this.disabled, 'checkbox-key': this.keyFocus, 'interactive': true })
        };
    };
    Checkbox.prototype.render = function () {
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.el, this.name, this.value, this.disabled);
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "checkbox-icon" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "checkbox-inner" })),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "checkbox", id: this.inputId, "aria-labelledby": this.labelId, onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), checked: this.checked, name: this.name, value: this.value, disabled: this.disabled })
        ];
    };
    Object.defineProperty(Checkbox, "is", {
        get: function () { return "ion-checkbox"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "properties", {
        get: function () {
            return {
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
                    "watchCallbacks": ["emitStyle"]
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
                "value": {
                    "type": String,
                    "attr": "value"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "events", {
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
    Object.defineProperty(Checkbox, "style", {
        get: function () { return ":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--size:16px;--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:var(--ion-border-color, #c1c4cd);--background:var(--ion-item-background-color, var(--ion-background-color, #fff));--transition:background 280ms cubic-bezier(0.4, 0, 0.2, 1)}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner{border-color:var(--checkmark-color);opacity:0}:host(.checkbox-checked) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-inner{opacity:1;left:calc(var(--size) * .3);top:calc(var(--size) * .05);position:absolute;width:calc(var(--size) * .3125);height:calc(var(--size) * .625);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:calc(var(--size) * .125);border-top-width:0;border-left-width:0;border-style:solid}:host(.checkbox-disabled){pointer-events:none;opacity:.3}:host(.checkbox-key) .checkbox-icon::after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host(.in-item){margin:9px 36px 9px 4px;display:block;position:static}:host(.in-item[slot=end]){margin:11px 10px 10px 0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Checkbox;
}());
var checkboxIds = 0;



/***/ })

}]);
//# sourceMappingURL=28.js.map