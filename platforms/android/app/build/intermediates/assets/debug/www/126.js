(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/ujtvejfw.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/ujtvejfw.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonModal, IonModalController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonModal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonModalController", function() { return ModalController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/* harmony import */ var _chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-05b9bd31.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-05b9bd31.js");
/* harmony import */ var _chunk_5f438245_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunk-5f438245.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-5f438245.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */




function iosEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '100%', '0%');
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    var wrapperElRect = wrapperEl.getBoundingClientRect();
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '0%', window.innerHeight - wrapperElRect.top + "px");
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-out')
        .duration(250)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
    wrapperAnimation
        .fromTo('opacity', 0.01, 1)
        .fromTo('translateY', '40px', '0px');
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    wrapperAnimation
        .fromTo('opacity', 0.99, 0)
        .fromTo('translateY', '0px', '40px');
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var Modal = /** @class */ (function () {
    function Modal() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.showBackdrop = true;
        this.animated = true;
    }
    Modal.prototype.componentDidLoad = function () {
        this.ionModalDidLoad.emit();
    };
    Modal.prototype.componentDidUnload = function () {
        this.ionModalDidUnload.emit();
    };
    Modal.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    Modal.prototype.onBackdropTap = function () {
        this.dismiss(undefined, _chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["a"]);
    };
    Modal.prototype.lifecycle = function (modalEvent) {
        var el = this.usersElement;
        var name = LIFECYCLE_MAP[modalEvent.type];
        if (el && name) {
            var ev = new CustomEvent(name, {
                bubbles: false,
                cancelable: false,
                detail: modalEvent.detail
            });
            el.dispatchEvent(ev);
        }
    };
    Modal.prototype.present = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var container, componentProps, _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector(".modal-wrapper");
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        componentProps = Object.assign({}, this.componentProps, { modal: this.el });
                        _a = this;
                        return [4 /*yield*/, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, Object(_chunk_5f438245_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation)];
                }
            });
        });
    };
    Modal.prototype.dismiss = function (data, role) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dismissed;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation)];
                    case 1:
                        dismissed = _a.sent();
                        if (!dismissed) return [3 /*break*/, 3];
                        return [4 /*yield*/, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, dismissed];
                }
            });
        });
    };
    Modal.prototype.onDidDismiss = function () {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.el, 'ionModalDidDismiss');
    };
    Modal.prototype.onWillDismiss = function () {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.el, 'ionModalWillDismiss');
    };
    Modal.prototype.hostData = function () {
        return {
            'no-router': true,
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["k"])(this.mode, 'modal'), Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.cssClass)),
            style: {
                zIndex: 20000 + this.overlayIndex,
            }
        };
    };
    Modal.prototype.render = function () {
        var dialogClasses = Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["k"])(this.mode, 'modal-wrapper');
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { role: "dialog", class: dialogClasses })
        ];
    };
    Object.defineProperty(Modal, "is", {
        get: function () { return "ion-modal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "properties", {
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
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "events", {
        get: function () {
            return [{
                    "name": "ionModalDidLoad",
                    "method": "ionModalDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalDidUnload",
                    "method": "ionModalDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "listeners", {
        get: function () {
            return [{
                    "name": "ionDismiss",
                    "method": "onDismiss"
                }, {
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }, {
                    "name": "ionModalDidPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionModalWillPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionModalWillDismiss",
                    "method": "lifecycle"
                }, {
                    "name": "ionModalDidDismiss",
                    "method": "lifecycle"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "style", {
        get: function () { return "ion-modal{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;contain:strict}ion-modal-controller{display:none}\@media not all and (min-width:768px) and (min-height:600px){ion-modal ion-backdrop{display:none}}.modal-wrapper{width:100%;height:100%;contain:strict;z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{width:600px;height:500px}.modal-wrapper-md{border-radius:2px;-webkit-box-shadow:0 28px 48px rgba(0,0,0,.4);box-shadow:0 28px 48px rgba(0,0,0,.4);overflow:hidden}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{width:600px;height:600px}}.modal-wrapper-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Modal;
}());
var LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillDismiss',
    'ionModalDidDismiss': 'ionViewDidDismiss',
};
var ModalController = /** @class */ (function () {
    function ModalController() {
    }
    ModalController.prototype.create = function (opts) {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.doc.createElement('ion-modal'), opts);
    };
    ModalController.prototype.dismiss = function (data, role, id) {
        return Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.doc, data, role, 'ion-modal', id);
    };
    ModalController.prototype.getTop = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, Object(_chunk_05b9bd31_js__WEBPACK_IMPORTED_MODULE_3__["h"])(this.doc, 'ion-modal')];
            });
        });
    };
    Object.defineProperty(ModalController, "is", {
        get: function () { return "ion-modal-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalController, "properties", {
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
    return ModalController;
}());



/***/ })

}]);
//# sourceMappingURL=126.js.map