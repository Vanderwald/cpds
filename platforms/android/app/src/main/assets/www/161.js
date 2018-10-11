(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/status-tap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/status-tap.js ***!
  \*******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
function startStatusTap(win, queue) {
    win.addEventListener('statusTap', function () {
        queue.read(function () {
            var width = win.innerWidth;
            var height = win.innerHeight;
            var el = win.document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            var contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(function () {
                    queue.write(function () { return contentEl.scrollToTop(300); });
                });
            }
        });
    });
}



/***/ })

}]);
//# sourceMappingURL=161.js.map