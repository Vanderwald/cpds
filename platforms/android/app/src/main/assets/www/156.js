(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/zzifk9rl.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/zzifk9rl.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackdrop", function() { return Backdrop; });
/* harmony import */ var _chunk_892e1642_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-892e1642.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-892e1642.js");
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");


var Backdrop = /** @class */ (function () {
    function Backdrop() {
        this.lastClick = -10000;
        this.blocker = _chunk_892e1642_js__WEBPACK_IMPORTED_MODULE_0__["a"].createBlocker({
            disableScroll: true
        });
        this.visible = true;
        this.tappable = true;
        this.stopPropagation = true;
    }
    Backdrop.prototype.componentDidLoad = function () {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    };
    Backdrop.prototype.componentDidUnload = function () {
        this.blocker.destroy();
    };
    Backdrop.prototype.onTouchStart = function (ev) {
        this.lastClick = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(ev);
        this.emitTap(ev);
    };
    Backdrop.prototype.onMouseDown = function (ev) {
        if (this.lastClick < Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(ev) - 2500) {
            this.emitTap(ev);
        }
    };
    Backdrop.prototype.emitTap = function (ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    };
    Backdrop.prototype.hostData = function () {
        return {
            tabindex: '-1',
            class: {
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            }
        };
    };
    Object.defineProperty(Backdrop, "is", {
        get: function () { return "ion-backdrop"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "properties", {
        get: function () {
            return {
                "doc": {
                    "context": "document"
                },
                "stopPropagation": {
                    "type": Boolean,
                    "attr": "stop-propagation"
                },
                "tappable": {
                    "type": Boolean,
                    "attr": "tappable"
                },
                "visible": {
                    "type": Boolean,
                    "attr": "visible"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "events", {
        get: function () {
            return [{
                    "name": "ionBackdropTap",
                    "method": "ionBackdropTap",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "listeners", {
        get: function () {
            return [{
                    "name": "touchstart",
                    "method": "onTouchStart",
                    "capture": true
                }, {
                    "name": "click",
                    "method": "onMouseDown",
                    "capture": true
                }, {
                    "name": "mousedown",
                    "method": "onMouseDown",
                    "capture": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:0 0}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Backdrop;
}());



/***/ })

}]);
//# sourceMappingURL=156.js.map