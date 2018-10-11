(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/2yck1ams.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/2yck1ams.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonActionSheet, IonActionSheetController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonActionSheet", function() { return ActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonActionSheetController", function() { return ActionSheetController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-05b9bd31.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-05b9bd31.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */



function iosEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    var ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.4, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    var ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}
function mdEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.26);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    var ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}
function mdLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.26, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    var ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}
var ActionSheet = /** @class */ (function () {
    function ActionSheet() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.translucent = false;
        this.animated = true;
    }
    ActionSheet.prototype.componentDidLoad = function () {
        this.ionActionSheetDidLoad.emit();
    };
    ActionSheet.prototype.componentDidUnload = function () {
        this.ionActionSheetDidUnload.emit();
    };
    ActionSheet.prototype.onBackdropTap = function () {
        this.dismiss(undefined, _chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
    };
    ActionSheet.prototype.dispatchCancelHandler = function (ev) {
        var role = ev.detail.role;
        if (Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["d"])(role)) {
            var cancelButton = this.getButtons().find(function (b) { return b.role === 'cancel'; });
            this.callButtonHandler(cancelButton);
        }
    };
    ActionSheet.prototype.present = function () {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
    };
    ActionSheet.prototype.dismiss = function (data, role) {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    ActionSheet.prototype.onDidDismiss = function () {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el, 'ionActionSheetDidDismiss');
    };
    ActionSheet.prototype.onWillDismiss = function () {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el, 'ionActionSheetWillDismiss');
    };
    ActionSheet.prototype.buttonClick = function (button) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var role, shouldDismiss;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        role = button.role;
                        if (Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["d"])(role)) {
                            return [2 /*return*/, this.dismiss(undefined, role)];
                        }
                        return [4 /*yield*/, this.callButtonHandler(button)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (shouldDismiss) {
                            return [2 /*return*/, this.dismiss(undefined, button.role)];
                        }
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ActionSheet.prototype.callButtonHandler = function (button) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rtn, e_1;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(button && button.handler)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, button.handler()];
                    case 2:
                        rtn = _a.sent();
                        if (rtn === false) {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    ActionSheet.prototype.getButtons = function () {
        return this.buttons.map(function (b) {
            return (typeof b === 'string')
                ? { text: b }
                : b;
        });
    };
    ActionSheet.prototype.hostData = function () {
        return {
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cssClass), { 'action-sheet-translucent': this.translucent })
        };
    };
    ActionSheet.prototype.render = function () {
        var _this = this;
        var allButtons = this.getButtons();
        var cancelButton = allButtons.find(function (b) { return b.role === 'cancel'; });
        var buttons = allButtons.filter(function (b) { return b.role !== 'cancel'; });
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { tappable: this.backdropDismiss }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-wrapper", role: "dialog" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-container" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-group" }, this.header !== undefined &&
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-title" }, this.header, this.subHeader && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-sub-title" }, this.subHeader)), buttons.map(function (b) { return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", "ion-activatable": true, class: buttonClass(b), onClick: function () { return _this.buttonClick(b); } }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "action-sheet-button-inner" }, b.icon && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }), b.text)); })), cancelButton &&
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-group action-sheet-group-cancel" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { "ion-activatable": true, type: "button", class: buttonClass(cancelButton), onClick: function () { return _this.buttonClick(cancelButton); } }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "action-sheet-button-inner" }, cancelButton.icon &&
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }), cancelButton.text)))))
        ];
    };
    Object.defineProperty(ActionSheet, "is", {
        get: function () { return "ion-action-sheet"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSheet, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSheet, "properties", {
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
                "buttons": {
                    "type": "Any",
                    "attr": "buttons"
                },
                "config": {
                    "context": "config"
                },
                "cssClass": {
                    "type": String,
                    "attr": "css-class"
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
                "header": {
                    "type": String,
                    "attr": "header"
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
                "subHeader": {
                    "type": String,
                    "attr": "sub-header"
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
    Object.defineProperty(ActionSheet, "events", {
        get: function () {
            return [{
                    "name": "ionActionSheetDidLoad",
                    "method": "ionActionSheetDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionActionSheetDidUnload",
                    "method": "ionActionSheetDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionActionSheetDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionActionSheetWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionActionSheetWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionActionSheetDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSheet, "listeners", {
        get: function () {
            return [{
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }, {
                    "name": "ionActionSheetWillDismiss",
                    "method": "dispatchCancelHandler"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSheet, "style", {
        get: function () { return ".sc-ion-action-sheet-md-h{--width:100%;--max-width:500px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;top:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);max-width:var(--max-width);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{width:var(--width);border:0;outline:0;font-family:inherit}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:scroll;-webkit-overflow-scrolling:touch;pointer-events:all;background-color:var(--ion-overlay-background-color,#fafafa)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-title.sc-ion-action-sheet-md{padding:11px 16px 17px;color:var(--ion-text-color-step-400,#666);font-size:16px;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding:16px 0 0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:8px}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:8px}.action-sheet-button.sc-ion-action-sheet-md{padding:0 16px;position:relative;height:48px;background:0 0;color:var(--ion-text-color-step-150,#262626);font-size:16px;text-align:start;contain:strict;overflow:hidden}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--ion-background-color-step-50,#f2f2f2)}.action-sheet-icon.sc-ion-action-sheet-md{margin:0 32px 0 0;font-size:24px}.action-sheet-button-inner.sc-ion-action-sheet-md{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSheet, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return ActionSheet;
}());
function buttonClass(button) {
    var _a;
    return Object.assign((_a = { 'action-sheet-button': true }, _a["action-sheet-" + button.role] = button.role !== undefined, _a), Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["g"])(button.cssClass));
}
var ActionSheetController = /** @class */ (function () {
    function ActionSheetController() {
    }
    ActionSheetController.prototype.create = function (opts) {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.doc.createElement('ion-action-sheet'), opts);
    };
    ActionSheetController.prototype.dismiss = function (data, role, id) {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.doc, data, role, 'ion-action-sheet', id);
    };
    ActionSheetController.prototype.getTop = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.doc, 'ion-action-sheet')];
            });
        });
    };
    Object.defineProperty(ActionSheetController, "is", {
        get: function () { return "ion-action-sheet-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSheetController, "properties", {
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
    return ActionSheetController;
}());



/***/ })

}]);
//# sourceMappingURL=14.js.map