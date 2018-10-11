(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/ijltfkuh.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/ijltfkuh.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonAnchor, IonBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAnchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackButton", function() { return BackButton; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */


var Anchor = /** @class */ (function () {
    function Anchor() {
    }
    Anchor.prototype.hostData = function () {
        return {
            class: Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.color),
            'ion-activatable': true
        };
    };
    Anchor.prototype.render = function () {
        var _this = this;
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { href: this.href, onClick: function (ev) { return Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["i"])(_this.win, _this.href, ev, _this.routerDirection); } }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(Anchor, "is", {
        get: function () { return "ion-anchor"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "routerDirection": {
                    "type": String,
                    "attr": "router-direction"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "style", {
        get: function () { return ".sc-ion-anchor-h{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}.ion-color.sc-ion-anchor-h{color:var(--ion-color-base)}a.sc-ion-anchor{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Anchor;
}());
var BackButton = /** @class */ (function () {
    function BackButton() {
    }
    BackButton.prototype.onClick = function (ev) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var nav, _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nav = this.el.closest('ion-nav');
                        ev.preventDefault();
                        _a = nav;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, nav.canGoBack()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/, nav.pop({ skipIfBusy: true })];
                        }
                        return [2 /*return*/, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.win, this.defaultHref, ev, 'back')];
                }
            });
        });
    };
    BackButton.prototype.hostData = function () {
        var showBackButton = this.defaultHref !== undefined;
        return {
            'ion-activatable': true,
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.color), { 'button': true, 'show-back-button': showBackButton })
        };
    };
    BackButton.prototype.render = function () {
        var _this = this;
        var defaultBackButtonText = this.mode === 'ios' ? 'Back' : null;
        var backButtonIcon = this.icon != null ? this.icon : this.config.get('backButtonIcon', 'arrow-back');
        var backButtonText = this.text != null ? this.text : this.config.get('backButtonText', defaultBackButtonText);
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", class: "button-native", onClick: function (ev) { return _this.onClick(ev); } }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "button-inner" }, backButtonIcon && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: backButtonIcon, lazy: false }), backButtonText && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "button-text" }, backButtonText), this.mode === 'md' && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null)), this.mode === 'md' && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null)));
    };
    Object.defineProperty(BackButton, "is", {
        get: function () { return "ion-back-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
                },
                "defaultHref": {
                    "type": String,
                    "attr": "default-href"
                },
                "el": {
                    "elementRef": true
                },
                "icon": {
                    "type": String,
                    "attr": "icon"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "text": {
                    "type": String,
                    "attr": "text"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "style", {
        get: function () { return ".sc-ion-back-button-ios-h{--background:transparent;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;--opacity:1;display:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}.activated.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios{opacity:.4}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header   .sc-ion-back-button-ios-h{display:block}.button-native.sc-ion-back-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;min-width:var(--min-width);min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:0;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}.button-inner.sc-ion-back-button-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-ios{padding:var(--icon-padding-top) var(--icon-padding-end) var(--icon-padding-bottom) var(--icon-padding-start);margin:var(--icon-margin-top) var(--icon-margin-end) var(--icon-margin-bottom) var(--icon-margin-start);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}.sc-ion-back-button-ios-h{--color:var(--ion-color-primary, #3880ff);--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--min-height:32px;--min-width:auto;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--icon-margin-top:0;--icon-margin-end:-5px;--icon-margin-bottom:0;--icon-margin-start:-4px;--icon-font-size:1.85em;font-size:17px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return BackButton;
}());



/***/ })

}]);
//# sourceMappingURL=73.js.map