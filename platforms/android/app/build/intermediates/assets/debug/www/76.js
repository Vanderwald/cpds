(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/j66fx9bc.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/j66fx9bc.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonRippleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRippleEffect", function() { return RippleEffect; });
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");

var RippleEffect = /** @class */ (function () {
    function RippleEffect() {
    }
    RippleEffect.prototype.addRipple = function (pageX, pageY) {
        var _this = this;
        if (this.config.getBoolean('animated', true)) {
            Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["b"])(function () { return _this.prepareRipple(pageX, pageY); });
        }
    };
    RippleEffect.prototype.prepareRipple = function (pageX, pageY) {
        var _this = this;
        var x;
        var y;
        var size;
        this.queue.read(function () {
            var rect = _this.el.getBoundingClientRect();
            var width = rect.width;
            var height = rect.height;
            size = Math.min(Math.sqrt(width * width + height * height) * 2, MAX_RIPPLE_DIAMETER);
            x = pageX - rect.left - (size * 0.5);
            y = pageY - rect.top - (size * 0.5);
        });
        this.queue.write(function () {
            var div = _this.win.document.createElement('div');
            div.classList.add('ripple-effect');
            var style = div.style;
            var duration = Math.max(RIPPLE_FACTOR * Math.sqrt(size), MIN_RIPPLE_DURATION);
            style.top = y + 'px';
            style.left = x + 'px';
            style.width = style.height = size + 'px';
            style.animationDuration = duration + 'ms';
            var container = _this.el.shadowRoot || _this.el;
            container.appendChild(div);
            setTimeout(function () { return div.remove(); }, duration + 50);
        });
    };
    Object.defineProperty(RippleEffect, "is", {
        get: function () { return "ion-ripple-effect"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RippleEffect, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RippleEffect, "properties", {
        get: function () {
            return {
                "addRipple": {
                    "method": true
                },
                "config": {
                    "context": "config"
                },
                "el": {
                    "elementRef": true
                },
                "queue": {
                    "context": "queue"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RippleEffect, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"; },
        enumerable: true,
        configurable: true
    });
    return RippleEffect;
}());
var RIPPLE_FACTOR = 35;
var MIN_RIPPLE_DURATION = 260;
var MAX_RIPPLE_DIAMETER = 550;



/***/ })

}]);
//# sourceMappingURL=76.js.map