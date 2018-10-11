(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[160],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/hardware-back-button.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/hardware-back-button.js ***!
  \*****************************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");

function startHardwareBackButton(win) {
    var busy = false;
    win.document.addEventListener('backbutton', function () {
        if (busy) {
            return;
        }
        var handlers = [];
        var ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register: function (priority, handler) {
                    handlers.push({ priority: priority, handler: handler });
                }
            }
        });
        win.document.dispatchEvent(ev);
        if (handlers.length > 0) {
            var selectedPriority_1 = Number.MIN_SAFE_INTEGER;
            var handler_1;
            handlers.forEach(function (h) {
                if (h.priority >= selectedPriority_1) {
                    selectedPriority_1 = h.priority;
                    handler_1 = h.handler;
                }
            });
            busy = true;
            executeAction(handler_1).then(function () { return busy = false; });
        }
    });
}
function executeAction(handler) {
    return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var result, e_1;
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!handler) return [3 /*break*/, 2];
                    result = handler();
                    if (!(result != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, result];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}



/***/ })

}]);
//# sourceMappingURL=160.js.map