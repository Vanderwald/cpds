(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/xcsewabo.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/xcsewabo.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonImg", function() { return Img; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

var Img = /** @class */ (function () {
    function Img() {
    }
    Img.prototype.srcChanged = function () {
        this.addIO();
    };
    Img.prototype.componentDidLoad = function () {
        this.addIO();
    };
    Img.prototype.addIO = function () {
        var _this = this;
        if (this.src === undefined) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIO();
            this.io = new IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    _this.loadSrc = _this.src;
                    _this.removeIO();
                    _this.ionImgDidLoad.emit();
                }
            });
            this.io.observe(this.el);
        }
        else {
            setTimeout(function () { return _this.loadSrc = _this.src; }, 200);
        }
    };
    Img.prototype.removeIO = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Img.prototype.render = function () {
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.loadSrc, alt: this.alt, decoding: "async" }));
    };
    Object.defineProperty(Img, "is", {
        get: function () { return "ion-img"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Img, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Img, "properties", {
        get: function () {
            return {
                "alt": {
                    "type": String,
                    "attr": "alt"
                },
                "el": {
                    "elementRef": true
                },
                "loadSrc": {
                    "state": true
                },
                "src": {
                    "type": String,
                    "attr": "src",
                    "watchCallbacks": ["srcChanged"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Img, "events", {
        get: function () {
            return [{
                    "name": "ionImgDidLoad",
                    "method": "ionImgDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Img, "style", {
        get: function () { return ".sc-ion-img-h{display:block;-o-object-fit:contain;object-fit:contain}img.sc-ion-img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Img;
}());



/***/ })

}]);
//# sourceMappingURL=145.js.map