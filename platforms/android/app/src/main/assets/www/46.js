(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/eeuo8kz6.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/eeuo8kz6.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonMenu, IonMenuButton, IonMenuController, IonMenuToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenuButton", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenuController", function() { return MenuController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenuToggle", function() { return MenuToggle; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_892e1642_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-892e1642.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-892e1642.js");
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */



var Menu = /** @class */ (function () {
    function Menu() {
        this.lastOnEnd = 0;
        this.blocker = _chunk_892e1642_js__WEBPACK_IMPORTED_MODULE_2__["a"].createBlocker({ disableScroll: true });
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        this.disabled = false;
        this.side = 'start';
        this.swipeGesture = true;
        this.maxEdgeStart = 50;
    }
    Menu.prototype.typeChanged = function (type, oldType) {
        var contentEl = this.contentEl;
        if (contentEl) {
            if (oldType !== undefined) {
                contentEl.classList.remove("menu-content-" + oldType);
            }
            contentEl.classList.add("menu-content-" + type);
            contentEl.removeAttribute('style');
        }
        if (this.menuInnerEl) {
            this.menuInnerEl.removeAttribute('style');
        }
        this.animation = undefined;
    };
    Menu.prototype.disabledChanged = function () {
        this.updateState();
        this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
        });
    };
    Menu.prototype.sideChanged = function () {
        this.isEndSide = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["h"])(this.win, this.side);
    };
    Menu.prototype.swipeGestureChanged = function () {
        this.updateState();
    };
    Menu.prototype.componentWillLoad = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.type = this.type || this.config.get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
                        if (!this.isServer) return [3 /*break*/, 1];
                        this.disabled = true;
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.lazyMenuCtrl.componentOnReady().then(function (p) { return p._getInstance(); })];
                    case 2:
                        _a.menuCtrl = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.componentDidLoad = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var el, parent, content, isEnabled, menus, _a;
            var _this = this;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isServer) {
                            return [2 /*return*/];
                        }
                        el = this.el;
                        parent = el.parentNode;
                        content = this.contentId !== undefined
                            ? document.getElementById(this.contentId)
                            : parent && parent.querySelector && parent.querySelector('[main]');
                        if (!content || !content.tagName) {
                            console.error('Menu: must have a "content" element to listen for drag events on.');
                            return [2 /*return*/];
                        }
                        this.contentEl = content;
                        content.classList.add('menu-content');
                        this.typeChanged(this.type, undefined);
                        this.sideChanged();
                        isEnabled = !this.disabled;
                        if (isEnabled) {
                            menus = this.menuCtrl.getMenusSync();
                            isEnabled = !menus.some(function (m) {
                                return m.side === _this.side && !m.disabled;
                            });
                        }
                        this.menuCtrl._register(this);
                        this.ionMenuChange.emit({ disabled: !isEnabled, open: this._isOpen });
                        _a = this;
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(166), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./gesture.js */ "./node_modules/@ionic/core/dist/esm/es5/build/gesture.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.doc,
                            queue: this.queue,
                            gestureName: 'menu-swipe',
                            gesturePriority: 40,
                            threshold: 10,
                            canStart: function (ev) { return _this.canStart(ev); },
                            onWillStart: function () { return _this.onWillStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.disabled = !isEnabled;
                        this.updateState();
                        return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.componentDidUnload = function () {
        this.blocker.destroy();
        this.menuCtrl._unregister(this);
        if (this.animation) {
            this.animation.destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
        }
        this.animation = undefined;
        this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
    };
    Menu.prototype.onSplitPaneChanged = function (ev) {
        this.isPaneVisible = ev.detail.isPane(this.el);
        this.updateState();
    };
    Menu.prototype.onBackdropClick = function (ev) {
        if (this.lastOnEnd < ev.timeStamp - 100) {
            var shouldClose = (ev.composedPath)
                ? !ev.composedPath().includes(this.menuInnerEl)
                : false;
            if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
            }
        }
    };
    Menu.prototype.isOpen = function () {
        return Promise.resolve(this._isOpen);
    };
    Menu.prototype.isActive = function () {
        return Promise.resolve(this._isActive());
    };
    Menu.prototype.open = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(true, animated);
    };
    Menu.prototype.close = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(false, animated);
    };
    Menu.prototype.toggle = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(!this._isOpen, animated);
    };
    Menu.prototype.setOpen = function (shouldOpen, animated) {
        if (animated === void 0) { animated = true; }
        return this.menuCtrl._setOpen(this, shouldOpen, animated);
    };
    Menu.prototype._setOpen = function (shouldOpen, animated) {
        if (animated === void 0) { animated = true; }
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
                            return [2 /*return*/, this._isOpen];
                        }
                        this.beforeAnimation();
                        return [4 /*yield*/, this.loadAnimation()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startAnimation(shouldOpen, animated)];
                    case 2:
                        _a.sent();
                        this.afterAnimation(shouldOpen);
                        return [2 /*return*/, shouldOpen];
                }
            });
        });
    };
    Menu.prototype.loadAnimation = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var width, _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        width = this.menuInnerEl.offsetWidth;
                        if (width === this.width && this.animation !== undefined) {
                            return [2 /*return*/];
                        }
                        this.width = width;
                        if (this.animation) {
                            this.animation.destroy();
                            this.animation = undefined;
                        }
                        _a = this;
                        return [4 /*yield*/, this.menuCtrl._createAnimation(this.type, this)];
                    case 1:
                        _a.animation = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.startAnimation = function (shouldOpen, animated) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ani;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ani = this.animation.reverse(!shouldOpen);
                        if (!animated) return [3 /*break*/, 2];
                        return [4 /*yield*/, ani.playAsync()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ani.playSync();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype._isActive = function () {
        return !this.disabled && !this.isPaneVisible;
    };
    Menu.prototype.canSwipe = function () {
        return this.swipeGesture && !this.isAnimating && this._isActive();
    };
    Menu.prototype.canStart = function (detail) {
        if (!this.canSwipe()) {
            return false;
        }
        if (this._isOpen) {
            return true;
        }
        else if (this.menuCtrl.getOpenSync()) {
            return false;
        }
        return checkEdgeSide(this.win, detail.currentX, this.isEndSide, this.maxEdgeStart);
    };
    Menu.prototype.onWillStart = function () {
        this.beforeAnimation();
        return this.loadAnimation();
    };
    Menu.prototype.onStart = function () {
        if (!this.isAnimating || !this.animation) {
            Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(false, 'isAnimating has to be true');
            return;
        }
        this.animation.reverse(this._isOpen).progressStart();
    };
    Menu.prototype.onMove = function (detail) {
        if (!this.isAnimating || !this.animation) {
            Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(false, 'isAnimating has to be true');
            return;
        }
        var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
        var stepValue = delta / this.width;
        this.animation.progressStep(stepValue);
    };
    Menu.prototype.onEnd = function (detail) {
        var _this = this;
        if (!this.isAnimating || !this.animation) {
            Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(false, 'isAnimating has to be true');
            return;
        }
        var isOpen = this._isOpen;
        var isEndSide$$1 = this.isEndSide;
        var delta = computeDelta(detail.deltaX, isOpen, isEndSide$$1);
        var width = this.width;
        var stepValue = delta / width;
        var velocity = detail.velocityX;
        var z = width / 2.0;
        var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
        var shouldComplete = isOpen
            ? isEndSide$$1 ? shouldCompleteRight : shouldCompleteLeft
            : isEndSide$$1 ? shouldCompleteLeft : shouldCompleteRight;
        var shouldOpen = !isOpen && shouldComplete;
        if (isOpen && !shouldComplete) {
            shouldOpen = true;
        }
        var missing = shouldComplete ? 1 - stepValue : stepValue;
        var missingDistance = missing * width;
        var realDur = 0;
        if (missingDistance > 5) {
            var dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 300);
        }
        this.lastOnEnd = detail.timeStamp;
        this.animation
            .onFinish(function () { return _this.afterAnimation(shouldOpen); }, {
            clearExistingCallbacks: true,
            oneTimeCallback: true
        })
            .progressEnd(shouldComplete, stepValue, realDur);
    };
    Menu.prototype.beforeAnimation = function () {
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(!this.isAnimating, '_before() should not be called while animating');
        this.el.classList.add(SHOW_MENU);
        if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
        }
        this.blocker.block();
        this.isAnimating = true;
    };
    Menu.prototype.afterAnimation = function (isOpen) {
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this.isAnimating, '_before() should be called while animating');
        this._isOpen = isOpen;
        this.isAnimating = false;
        if (!this._isOpen) {
            this.blocker.unblock();
        }
        this.enableListener(this, 'body:click', isOpen);
        if (isOpen) {
            if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
            }
            this.ionOpen.emit();
        }
        else {
            this.el.classList.remove(SHOW_MENU);
            if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }
            if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
            }
            this.ionClose.emit();
        }
    };
    Menu.prototype.updateState = function () {
        var isActive = this._isActive();
        if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
        }
        if (!isActive && this._isOpen) {
            this.forceClosing();
        }
        if (!this.disabled && this.menuCtrl) {
            this.menuCtrl._setActiveMenu(this);
        }
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(!this.isAnimating, 'can not be animating');
    };
    Menu.prototype.forceClosing = function () {
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        var ani = this.animation.reverse(true);
        ani.playSync();
        this.afterAnimation(false);
    };
    Menu.prototype.hostData = function () {
        var _a;
        var _b = this, isEndSide$$1 = _b.isEndSide, type = _b.type, disabled = _b.disabled, isPaneVisible = _b.isPaneVisible;
        return {
            role: 'complementary',
            class: (_a = {},
                _a["menu-type-" + type] = true,
                _a['menu-enabled'] = !disabled,
                _a['menu-side-end'] = isEndSide$$1,
                _a['menu-side-start'] = !isEndSide$$1,
                _a['menu-pane-visible'] = isPaneVisible,
                _a)
        };
    };
    Menu.prototype.render = function () {
        var _this = this;
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "menu-inner", ref: function (el) { return _this.menuInnerEl = el; } }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { ref: function (el) { return _this.backdropEl = el; }, class: "menu-backdrop", tappable: false, stopPropagation: false })
        ];
    };
    Object.defineProperty(Menu, "is", {
        get: function () { return "ion-menu"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu, "properties", {
        get: function () {
            return {
                "close": {
                    "method": true
                },
                "config": {
                    "context": "config"
                },
                "contentId": {
                    "type": String,
                    "attr": "content-id"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "mutable": true,
                    "watchCallbacks": ["disabledChanged"]
                },
                "doc": {
                    "context": "document"
                },
                "el": {
                    "elementRef": true
                },
                "enableListener": {
                    "context": "enableListener"
                },
                "isActive": {
                    "method": true
                },
                "isEndSide": {
                    "state": true
                },
                "isOpen": {
                    "method": true
                },
                "isPaneVisible": {
                    "state": true
                },
                "isServer": {
                    "context": "isServer"
                },
                "lazyMenuCtrl": {
                    "connect": "ion-menu-controller"
                },
                "maxEdgeStart": {
                    "type": Number,
                    "attr": "max-edge-start"
                },
                "menuId": {
                    "type": String,
                    "attr": "menu-id"
                },
                "open": {
                    "method": true
                },
                "queue": {
                    "context": "queue"
                },
                "setOpen": {
                    "method": true
                },
                "side": {
                    "type": String,
                    "attr": "side",
                    "reflectToAttr": true,
                    "watchCallbacks": ["sideChanged"]
                },
                "swipeGesture": {
                    "type": Boolean,
                    "attr": "swipe-gesture",
                    "watchCallbacks": ["swipeGestureChanged"]
                },
                "toggle": {
                    "method": true
                },
                "type": {
                    "type": String,
                    "attr": "type",
                    "mutable": true,
                    "watchCallbacks": ["typeChanged"]
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu, "events", {
        get: function () {
            return [{
                    "name": "ionOpen",
                    "method": "ionOpen",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionClose",
                    "method": "ionClose",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionMenuChange",
                    "method": "ionMenuChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu, "listeners", {
        get: function () {
            return [{
                    "name": "body:ionSplitPaneVisible",
                    "method": "onSplitPaneChanged"
                }, {
                    "name": "body:click",
                    "method": "onBackdropClick",
                    "capture": true,
                    "disabled": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu, "style", {
        get: function () { return ":host{--width:304px;--width-small:264px;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}\@media (max-width:340px){.menu-inner{width:var(--width-small)}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Menu;
}());
function computeDelta(deltaX, isOpen, isEndSide$$1) {
    return Math.max(0, isOpen !== isEndSide$$1 ? -deltaX : deltaX);
}
function checkEdgeSide(win, posX, isEndSide$$1, maxEdgeStart) {
    if (isEndSide$$1) {
        return posX >= win.innerWidth - maxEdgeStart;
    }
    else {
        return posX <= maxEdgeStart;
    }
}
var SHOW_MENU = 'show-menu';
var SHOW_BACKDROP = 'show-backdrop';
var MENU_CONTENT_OPEN = 'menu-content-open';
var MenuButton = /** @class */ (function () {
    function MenuButton() {
        this.autoHide = true;
    }
    MenuButton.prototype.hostData = function () {
        return {
            'ion-activatable': true,
            class: {
                'button': true
            }
        };
    };
    MenuButton.prototype.render = function () {
        var menuIcon = this.config.get('menuIcon', 'menu');
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-menu-toggle", { menu: this.menu, autoHide: this.autoHide }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: menuIcon, mode: this.mode, color: this.color, lazy: false })), this.mode === 'md' && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null))));
    };
    Object.defineProperty(MenuButton, "is", {
        get: function () { return "ion-menu-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButton, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButton, "properties", {
        get: function () {
            return {
                "autoHide": {
                    "type": Boolean,
                    "attr": "auto-hide"
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
                },
                "menu": {
                    "type": String,
                    "attr": "menu"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButton, "style", {
        get: function () { return ":host{pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;color:var(--ion-color-primary,#3880ff)}button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 5px}ion-icon{margin:0;padding:0;pointer-events:none;font-size:31px}:host(.activated){opacity:.4}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButton, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return MenuButton;
}());
function baseAnimation(AnimationC) {
    return Promise.resolve(new AnimationC()
        .easing('cubic-bezier(0.0, 0.0, 0.2, 1)')
        .easingReverse('cubic-bezier(0.4, 0.0, 0.6, 1)')
        .duration(300));
}
var BOX_SHADOW_WIDTH = 8;
function menuOverlayAnimation(AnimationC, _, menu) {
    var closedX;
    var openedX;
    var width = menu.width + BOX_SHADOW_WIDTH;
    if (menu.isEndSide) {
        closedX = width + 'px';
        openedX = '0px';
    }
    else {
        closedX = -width + 'px';
        openedX = '0px';
    }
    var menuAni = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', closedX, openedX);
    var backdropAni = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.3);
    return baseAnimation(AnimationC).then(function (animation) {
        return animation.add(menuAni)
            .add(backdropAni);
    });
}
function menuPushAnimation(AnimationC, _, menu) {
    var contentOpenedX;
    var menuClosedX;
    var width = menu.width;
    if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    var menuAni = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', menuClosedX, '0px');
    var contentAni = new AnimationC()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', contentOpenedX);
    var backdropAni = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.2);
    return baseAnimation(AnimationC).then(function (animation) {
        return animation.add(menuAni)
            .add(backdropAni)
            .add(contentAni);
    });
}
function menuRevealAnimation(AnimationC, _, menu) {
    var openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
    var contentOpen = new AnimationC()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', openedX);
    return baseAnimation(AnimationC).then(function (animation) {
        return animation.add(contentOpen);
    });
}
var MenuController = /** @class */ (function () {
    function MenuController() {
        this.menus = [];
        this.menuAnimations = new Map();
        this.registerAnimation('reveal', menuRevealAnimation);
        this.registerAnimation('push', menuPushAnimation);
        this.registerAnimation('overlay', menuOverlayAnimation);
    }
    MenuController.prototype.open = function (menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menuId)];
                    case 1:
                        menu = _a.sent();
                        if (menu) {
                            return [2 /*return*/, menu.open()];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    MenuController.prototype.close = function (menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (menuId !== undefined ? this.get(menuId) : this.getOpen())];
                    case 1:
                        menu = _a.sent();
                        if (menu !== undefined) {
                            return [2 /*return*/, menu.close()];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    MenuController.prototype.toggle = function (menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menuId)];
                    case 1:
                        menu = _a.sent();
                        if (menu) {
                            return [2 /*return*/, menu.toggle()];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    MenuController.prototype.enable = function (shouldEnable, menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menuId)];
                    case 1:
                        menu = _a.sent();
                        if (menu) {
                            menu.disabled = !shouldEnable;
                        }
                        return [2 /*return*/, menu];
                }
            });
        });
    };
    MenuController.prototype.swipeGesture = function (shouldEnable, menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menuId)];
                    case 1:
                        menu = _a.sent();
                        if (menu) {
                            menu.swipeGesture = shouldEnable;
                        }
                        return [2 /*return*/, menu];
                }
            });
        });
    };
    MenuController.prototype.isOpen = function (menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menu, menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(menuId != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.get(menuId)];
                    case 1:
                        menu = _a.sent();
                        return [2 /*return*/, (menu !== undefined && menu.isOpen())];
                    case 2: return [4 /*yield*/, this.getOpen()];
                    case 3:
                        menu = _a.sent();
                        return [2 /*return*/, menu !== undefined];
                }
            });
        });
    };
    MenuController.prototype.isEnabled = function (menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(menuId)];
                    case 1:
                        menu = _a.sent();
                        if (menu) {
                            return [2 /*return*/, !menu.disabled];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    MenuController.prototype.get = function (menuId) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuRef, menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (menuId === 'start' || menuId === 'end') {
                    menuRef = this.find(function (m) { return m.side === menuId && !m.disabled; });
                    if (menuRef) {
                        return [2 /*return*/, menuRef];
                    }
                    return [2 /*return*/, this.find(function (m) { return m.side === menuId; })];
                }
                else if (menuId != null) {
                    return [2 /*return*/, this.find(function (m) { return m.menuId === menuId; })];
                }
                menu = this.find(function (m) { return !m.disabled; });
                if (menu) {
                    return [2 /*return*/, menu];
                }
                return [2 /*return*/, this.menus.length > 0 ? this.menus[0].el : undefined];
            });
        });
    };
    MenuController.prototype.getOpen = function () {
        return Promise.resolve(this.getOpenSync());
    };
    MenuController.prototype.getMenus = function () {
        return Promise.resolve(this.getMenusSync());
    };
    MenuController.prototype.isAnimating = function () {
        return Promise.resolve(this.isAnimatingSync());
    };
    MenuController.prototype.registerAnimation = function (name, animation) {
        this.menuAnimations.set(name, animation);
    };
    MenuController.prototype._register = function (menu) {
        if (this.menus.indexOf(menu) < 0) {
            this.menus.push(menu);
        }
    };
    MenuController.prototype._unregister = function (menu) {
        var index = this.menus.indexOf(menu);
        if (index > -1) {
            this.menus.splice(index, 1);
        }
    };
    MenuController.prototype._setActiveMenu = function (menu) {
        var side = menu.side;
        this.menus
            .filter(function (m) { return m.side === side && m !== menu; })
            .forEach(function (m) { return (m.disabled = true); });
    };
    MenuController.prototype._setOpen = function (menu, shouldOpen, animated) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var openedMenu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isAnimatingSync()) {
                            return [2 /*return*/, false];
                        }
                        if (!shouldOpen) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getOpen()];
                    case 1:
                        openedMenu = _a.sent();
                        if (!(openedMenu && menu.el !== openedMenu)) return [3 /*break*/, 3];
                        return [4 /*yield*/, openedMenu.setOpen(false, false)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, menu._setOpen(shouldOpen, animated)];
                }
            });
        });
    };
    MenuController.prototype._getInstance = function () {
        return Promise.resolve(this);
    };
    MenuController.prototype._createAnimation = function (type, menuCmp) {
        var animationBuilder = this.menuAnimations.get(type);
        if (!animationBuilder) {
            return Promise.reject('animation not registered');
        }
        return this.animationCtrl.create(animationBuilder, null, menuCmp);
    };
    MenuController.prototype.getOpenSync = function () {
        return this.find(function (m) { return m._isOpen; });
    };
    MenuController.prototype.getMenusSync = function () {
        return this.menus.map(function (menu) { return menu.el; });
    };
    MenuController.prototype.isAnimatingSync = function () {
        return this.menus.some(function (menu) { return menu.isAnimating; });
    };
    MenuController.prototype.find = function (predicate) {
        var instance = this.menus.find(predicate);
        if (instance !== undefined) {
            return instance.el;
        }
        return undefined;
    };
    Object.defineProperty(MenuController, "is", {
        get: function () { return "ion-menu-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuController, "properties", {
        get: function () {
            return {
                "_createAnimation": {
                    "method": true
                },
                "_getInstance": {
                    "method": true
                },
                "_register": {
                    "method": true
                },
                "_setActiveMenu": {
                    "method": true
                },
                "_setOpen": {
                    "method": true
                },
                "_unregister": {
                    "method": true
                },
                "animationCtrl": {
                    "connect": "ion-animation-controller"
                },
                "close": {
                    "method": true
                },
                "enable": {
                    "method": true
                },
                "get": {
                    "method": true
                },
                "getMenus": {
                    "method": true
                },
                "getOpen": {
                    "method": true
                },
                "isAnimating": {
                    "method": true
                },
                "isEnabled": {
                    "method": true
                },
                "isOpen": {
                    "method": true
                },
                "open": {
                    "method": true
                },
                "registerAnimation": {
                    "method": true
                },
                "swipeGesture": {
                    "method": true
                },
                "toggle": {
                    "method": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuController, "style", {
        get: function () { return ".ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"; },
        enumerable: true,
        configurable: true
    });
    return MenuController;
}());
var MenuToggle = /** @class */ (function () {
    function MenuToggle() {
        this.visible = false;
        this.autoHide = true;
    }
    MenuToggle.prototype.componentDidLoad = function () {
        return this.updateVisibility();
    };
    MenuToggle.prototype.onClick = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuCtrl, menu;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getMenuController(this.doc)];
                    case 1:
                        menuCtrl = _a.sent();
                        if (!menuCtrl) return [3 /*break*/, 3];
                        return [4 /*yield*/, menuCtrl.get(this.menu)];
                    case 2:
                        menu = _a.sent();
                        if (menu) {
                            menuCtrl.toggle(this.menu);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MenuToggle.prototype.updateVisibility = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var menuCtrl, menu, _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getMenuController(this.doc)];
                    case 1:
                        menuCtrl = _b.sent();
                        if (!menuCtrl) return [3 /*break*/, 5];
                        return [4 /*yield*/, menuCtrl.get(this.menu)];
                    case 2:
                        menu = _b.sent();
                        _a = menu;
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, menu.isActive()];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        if (_a) {
                            this.visible = true;
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        this.visible = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuToggle.prototype.hostData = function () {
        var hidden = this.autoHide && !this.visible;
        return {
            'aria-hidden': hidden ? 'true' : null,
            class: {
                'menu-toggle-hidden': hidden,
            }
        };
    };
    MenuToggle.prototype.render = function () {
        return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null);
    };
    Object.defineProperty(MenuToggle, "is", {
        get: function () { return "ion-menu-toggle"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuToggle, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuToggle, "properties", {
        get: function () {
            return {
                "autoHide": {
                    "type": Boolean,
                    "attr": "auto-hide"
                },
                "doc": {
                    "context": "document"
                },
                "menu": {
                    "type": String,
                    "attr": "menu"
                },
                "visible": {
                    "state": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuToggle, "listeners", {
        get: function () {
            return [{
                    "name": "click",
                    "method": "onClick"
                }, {
                    "name": "body:ionMenuChange",
                    "method": "updateVisibility"
                }, {
                    "name": "body:ionSplitPaneVisible",
                    "method": "updateVisibility"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuToggle, "style", {
        get: function () { return ":host(.menu-toggle-hidden){display:none}"; },
        enumerable: true,
        configurable: true
    });
    return MenuToggle;
}());
function getMenuController(doc) {
    var menuControllerElement = doc.querySelector('ion-menu-controller');
    if (!menuControllerElement) {
        return Promise.resolve(undefined);
    }
    return menuControllerElement.componentOnReady();
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js ***!
  \******************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
// REV: 9dd9aa322c893e5e0b3f1609b1126314ccf37bbb

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
          t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m) return m.call(o);
  return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

/***/ })

}]);
//# sourceMappingURL=46.js.map