(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/ifpbahte.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/ifpbahte.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonPopover, IonPopoverController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopoverController", function() { return PopoverController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/* harmony import */ var _chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-05b9bd31.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-05b9bd31.js");
/* harmony import */ var _chunk_5f438245_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunk-5f438245.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-5f438245.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */




function iosEnterAnimation(AnimationC, baseEl, ev) {
    var originY = 'top';
    var originX = 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = window.innerWidth;
    var bodyHeight = window.innerHeight;
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    var targetWidth = (targetDim && targetDim.width) || 0;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var arrowEl = baseEl.querySelector('.popover-arrow');
    var arrowDim = arrowEl.getBoundingClientRect();
    var arrowWidth = arrowDim.width;
    var arrowHeight = arrowDim.height;
    if (targetDim == null) {
        arrowEl.style.display = 'none';
    }
    var arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    var popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    var checkSafeAreaLeft = false;
    var checkSafeAreaRight = false;
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        console.log(arrowCSS);
        console.log(targetTop);
        console.log(contentHeight);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px + var(--ion-safe-area-left, 0px))";
    }
    if (checkSafeAreaRight) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px - var(--ion-safe-area-right, 0px))";
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var POPOVER_IOS_BODY_PADDING = 5;
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdEnterAnimation(AnimationC, baseEl, ev) {
    var originY = 'top';
    var originX = 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = window.innerWidth;
    var bodyHeight = window.innerHeight;
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    var targetTop = targetDim != null && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim
        ? targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        originX = 'right';
    }
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    contentEl.style.transformOrigin = originY + ' ' + originX;
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    var contentAnimation = new AnimationC();
    contentAnimation.addElement(baseEl.querySelector('.popover-content'));
    contentAnimation.fromTo('scale', 0.001, 1);
    var viewportAnimation = new AnimationC();
    viewportAnimation.addElement(baseEl.querySelector('.popover-viewport'));
    viewportAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .add(backdropAnimation)
        .add(wrapperAnimation)
        .add(contentAnimation)
        .add(viewportAnimation));
}
var POPOVER_MD_BODY_PADDING = 12;
function mdLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var Popover = /** @class */ (function () {
    function Popover() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.showBackdrop = true;
        this.translucent = false;
        this.animated = true;
    }
    Popover.prototype.componentDidLoad = function () {
        this.ionPopoverDidLoad.emit();
    };
    Popover.prototype.componentDidUnload = function () {
        this.ionPopoverDidUnload.emit();
    };
    Popover.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    Popover.prototype.onBackdropTap = function () {
        this.dismiss(undefined, _chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["a"]);
    };
    Popover.prototype.lifecycle = function (modalEvent) {
        var el = this.usersElement;
        var name = LIFECYCLE_MAP[modalEvent.type];
        if (el && name) {
            var event = new CustomEvent(name, {
                bubbles: false,
                cancelable: false,
                detail: modalEvent.detail
            });
            el.dispatchEvent(event);
        }
    };
    Popover.prototype.present = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var container, data, _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector('.popover-content');
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        data = Object.assign({}, this.componentProps, { popover: this.el });
                        _a = this;
                        return [4 /*yield*/, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, Object(_chunk_5f438245_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event)];
                }
            });
        });
    };
    Popover.prototype.dismiss = function (data, role) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shouldDismiss;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (!shouldDismiss) return [3 /*break*/, 3];
                        return [4 /*yield*/, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, shouldDismiss];
                }
            });
        });
    };
    Popover.prototype.onDidDismiss = function () {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.el, 'ionPopoverDidDismiss');
    };
    Popover.prototype.onWillDismiss = function () {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.el, 'ionPopoverWillDismiss');
    };
    Popover.prototype.hostData = function () {
        return {
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            'no-router': true,
            class: Object.assign({ 'popover-translucent': this.translucent }, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.cssClass))
        };
    };
    Popover.prototype.render = function () {
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { tappable: this.backdropDismiss }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "popover-wrapper" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "popover-arrow" }), Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "popover-content" }))
        ];
    };
    Object.defineProperty(Popover, "is", {
        get: function () { return "ion-popover"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "properties", {
        get: function () {
            return {
                "animated": {
                    "type": Boolean,
                    "attr": "animated"
                },
                "animationCtrl": {
                    "connect": "ion-animation-controller"
                },
                "backdropDismiss": {
                    "type": Boolean,
                    "attr": "backdrop-dismiss"
                },
                "component": {
                    "type": String,
                    "attr": "component"
                },
                "componentProps": {
                    "type": "Any",
                    "attr": "component-props"
                },
                "config": {
                    "context": "config"
                },
                "cssClass": {
                    "type": String,
                    "attr": "css-class"
                },
                "delegate": {
                    "type": "Any",
                    "attr": "delegate"
                },
                "dismiss": {
                    "method": true
                },
                "el": {
                    "elementRef": true
                },
                "enterAnimation": {
                    "type": "Any",
                    "attr": "enter-animation"
                },
                "event": {
                    "type": "Any",
                    "attr": "event"
                },
                "keyboardClose": {
                    "type": Boolean,
                    "attr": "keyboard-close"
                },
                "leaveAnimation": {
                    "type": "Any",
                    "attr": "leave-animation"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "onDidDismiss": {
                    "method": true
                },
                "onWillDismiss": {
                    "method": true
                },
                "overlayIndex": {
                    "type": Number,
                    "attr": "overlay-index"
                },
                "present": {
                    "method": true
                },
                "showBackdrop": {
                    "type": Boolean,
                    "attr": "show-backdrop"
                },
                "translucent": {
                    "type": Boolean,
                    "attr": "translucent"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "events", {
        get: function () {
            return [{
                    "name": "ionPopoverDidLoad",
                    "method": "ionPopoverDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverDidUnload",
                    "method": "ionPopoverDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "listeners", {
        get: function () {
            return [{
                    "name": "ionDismiss",
                    "method": "onDismiss"
                }, {
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }, {
                    "name": "ionPopoverDidPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionPopoverWillPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionPopoverWillDismiss",
                    "method": "lifecycle"
                }, {
                    "name": "ionPopoverDidDismiss",
                    "method": "lifecycle"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "style", {
        get: function () { return ".sc-ion-popover-md-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10;border-radius:2px;-webkit-transform-origin:left top;transform-origin:left top;width:250px;min-width:0;min-height:0;max-height:90%;background:var(--ion-background-color,#fff);color:var(--ion-text-color,#000);-webkit-box-shadow:0 3px 12px 2px rgba(0,0,0,.3);box-shadow:0 3px 12px 2px rgba(0,0,0,.3)}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;-webkit-transition-delay:.1s;transition-delay:.1s}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Popover;
}());
var LIFECYCLE_MAP = {
    'ionPopoverDidPresent': 'ionViewDidEnter',
    'ionPopoverWillPresent': 'ionViewWillEnter',
    'ionPopoverWillDismiss': 'ionViewWillDismiss',
    'ionPopoverDidDismiss': 'ionViewDidDismiss',
};
var PopoverController = /** @class */ (function () {
    function PopoverController() {
    }
    PopoverController.prototype.create = function (opts) {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.doc.createElement('ion-popover'), opts);
    };
    PopoverController.prototype.dismiss = function (data, role, id) {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.doc, data, role, 'ion-popover', id);
    };
    PopoverController.prototype.getTop = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["h"])(this.doc, 'ion-popover')];
            });
        });
    };
    Object.defineProperty(PopoverController, "is", {
        get: function () { return "ion-popover-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverController, "properties", {
        get: function () {
            return {
                "create": {
                    "method": true
                },
                "dismiss": {
                    "method": true
                },
                "doc": {
                    "context": "document"
                },
                "getTop": {
                    "method": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return PopoverController;
}());



/***/ })

}]);
//# sourceMappingURL=70.js.map