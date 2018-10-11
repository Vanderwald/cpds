(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[162],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/tap-click.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/tap-click.js ***!
  \******************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");

function startTapClick(doc) {
    var lastTouch = -MOUSE_WAIT * 10;
    var lastActivated = 0;
    var cancelled = false;
    var scrolling = false;
    var activatableEle;
    var activeDefer;
    var clearDefers = new WeakMap();
    function onBodyClick(ev) {
        if (cancelled || scrolling) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    function onTouchStart(ev) {
        lastTouch = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(ev);
        pointerDown(ev);
    }
    function onTouchEnd(ev) {
        lastTouch = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(ev);
        pointerUp(ev);
    }
    function onMouseDown(ev) {
        var t = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerDown(ev);
        }
    }
    function onMouseUp(ev) {
        var t = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerUp(ev);
        }
    }
    function cancelActive() {
        clearTimeout(activeDefer);
        activeDefer = undefined;
        if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
        }
        cancelled = true;
    }
    function pointerDown(ev) {
        if (activatableEle || scrolling) {
            return;
        }
        cancelled = false;
        setActivatedElement(getActivatableTarget(ev), ev);
    }
    function pointerUp(ev) {
        if (scrolling) {
            return;
        }
        setActivatedElement(undefined, ev);
        if (cancelled && ev.cancelable) {
            ev.preventDefault();
        }
    }
    function setActivatedElement(el, ev) {
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(activeDefer);
        activeDefer = undefined;
        var _a = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["l"])(ev), x = _a.x, y = _a.y;
        if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                addActivated(activatableEle, x, y);
            }
            removeActivated(true);
        }
        if (el) {
            var deferId = clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                clearDefers.delete(el);
            }
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(function () {
                addActivated(el, x, y);
                activeDefer = undefined;
            }, ADD_ACTIVATED_DEFERS);
        }
        activatableEle = el;
    }
    function addActivated(el, x, y) {
        lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        var rippleEffect = getRippleEffect(el);
        if (rippleEffect && rippleEffect.addRipple) {
            rippleEffect.addRipple(x, y);
        }
    }
    function removeActivated(smooth) {
        var active = activatableEle;
        if (!active) {
            return;
        }
        var time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
        if (smooth && time > 0) {
            var deferId = setTimeout(function () {
                active.classList.remove(ACTIVATED);
                clearDefers.delete(active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
        }
        else {
            active.classList.remove(ACTIVATED);
        }
    }
    doc.body.addEventListener('click', onBodyClick, true);
    doc.body.addEventListener('ionScrollStart', function () {
        scrolling = true;
        cancelActive();
    });
    doc.body.addEventListener('ionScrollEnd', function () {
        scrolling = false;
    });
    doc.body.addEventListener('ionGestureCaptured', cancelActive);
    doc.addEventListener('touchstart', onTouchStart, true);
    doc.addEventListener('touchcancel', onTouchEnd, true);
    doc.addEventListener('touchend', onTouchEnd, true);
    doc.addEventListener('mousedown', onMouseDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
}
function getActivatableTarget(ev) {
    if (ev.composedPath) {
        var path = ev.composedPath();
        for (var i = 0; i < path.length - 2; i++) {
            var el = path[i];
            if (el.hasAttribute && el.hasAttribute('ion-activatable')) {
                return el;
            }
        }
    }
    else {
        return ev.target.closest('[ion-activatable]');
    }
}
function getRippleEffect(el) {
    if (el.shadowRoot) {
        var ripple = el.shadowRoot.querySelector('ion-ripple-effect');
        if (ripple) {
            return ripple;
        }
    }
    return el.querySelector('ion-ripple-effect');
}
var ACTIVATED = 'activated';
var ADD_ACTIVATED_DEFERS = 200;
var CLEAR_STATE_DEFERS = 200;
var MOUSE_WAIT = 2500;



/***/ })

}]);
//# sourceMappingURL=162.js.map