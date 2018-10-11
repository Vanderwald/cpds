(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/amegv4d5.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/amegv4d5.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonVirtualScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonVirtualScroll", function() { return VirtualScroll; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

var MIN_READS = 2;
function updateVDom(dom, heightIndex, cells, range) {
    for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
        var node = dom_1[_i];
        node.change = 0;
        node.d = true;
    }
    var toMutate = [];
    var end = range.offset + range.length;
    var _loop_1 = function (i) {
        var cell = cells[i];
        var node = dom.find(function (n) { return n.d && n.cell === cell; });
        if (node) {
            var top = heightIndex[i];
            if (top !== node.top) {
                node.top = top;
                node.change = 1;
            }
            node.d = false;
        }
        else {
            toMutate.push(cell);
        }
    };
    for (var i = range.offset; i < end; i++) {
        _loop_1(i);
    }
    var pool = dom.filter(function (n) { return n.d; });
    var _loop_2 = function (cell) {
        var node = pool.find(function (n) { return n.d && n.cell.type === cell.type; });
        var index = cell.index;
        if (node) {
            node.d = false;
            node.change = 2;
            node.cell = cell;
            node.top = heightIndex[index];
        }
        else {
            dom.push({
                d: false,
                cell: cell,
                visible: true,
                change: 2,
                top: heightIndex[index],
            });
        }
    };
    for (var _a = 0, toMutate_1 = toMutate; _a < toMutate_1.length; _a++) {
        var cell = toMutate_1[_a];
        _loop_2(cell);
    }
    dom
        .filter(function (n) { return n.d && n.top !== -9999; })
        .forEach(function (n) {
        n.change = 1;
        n.top = -9999;
    });
}
function doRender(el, nodeRender, dom, updateCellHeight) {
    var children = Array.from(el.children).filter(function (n) { return n.tagName !== 'TEMPLATE'; });
    var childrenNu = children.length;
    var child;
    for (var i = 0; i < dom.length; i++) {
        var node = dom[i];
        var cell = node.cell;
        if (node.change === 2) {
            if (i < childrenNu) {
                child = children[i];
                nodeRender(child, cell, i);
            }
            else {
                var newChild = createNode(el, cell.type);
                child = nodeRender(newChild, cell, i) || newChild;
                child.classList.add('virtual-item');
                el.appendChild(child);
            }
            child['$ionCell'] = cell;
        }
        else {
            child = children[i];
        }
        if (node.change !== 0) {
            child.style.transform = "translate3d(0," + node.top + "px,0)";
        }
        var visible = cell.visible;
        if (node.visible !== visible) {
            if (visible) {
                child.classList.remove('virtual-loading');
            }
            else {
                child.classList.add('virtual-loading');
            }
            node.visible = visible;
        }
        if (cell.reads > 0) {
            updateCellHeight(cell, child);
            cell.reads--;
        }
    }
}
function createNode(el, type) {
    var template = getTemplate(el, type);
    if (template) {
        return el.ownerDocument.importNode(template.content, true).children[0];
    }
    return null;
}
function getTemplate(el, type) {
    switch (type) {
        case 0: return el.querySelector('template:not([name])');
        case 1: return el.querySelector('template[name=header]');
        case 2: return el.querySelector('template[name=footer]');
    }
}
function getViewport(scrollTop, vierportHeight, margin) {
    return {
        top: Math.max(scrollTop - margin, 0),
        bottom: scrollTop + vierportHeight + margin
    };
}
function getRange(heightIndex, viewport, buffer) {
    var topPos = viewport.top;
    var bottomPos = viewport.bottom;
    var i = 0;
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] > topPos) {
            break;
        }
    }
    var offset = Math.max(i - buffer - 1, 0);
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] >= bottomPos) {
            break;
        }
    }
    var end = Math.min(i + buffer, heightIndex.length);
    var length = end - offset;
    return { offset: offset, length: length };
}
function getShouldUpdate(dirtyIndex, currentRange, range) {
    var end = range.offset + range.length;
    return (dirtyIndex <= end ||
        currentRange.offset !== range.offset ||
        currentRange.length !== range.length);
}
function findCellIndex(cells, index) {
    if (index === 0) {
        return 0;
    }
    return cells.findIndex(function (c) { return c.index === index; });
}
function inplaceUpdate(dst, src, offset) {
    if (offset === 0 && src.length >= dst.length) {
        return src;
    }
    for (var i = 0; i < src.length; i++) {
        dst[i + offset] = src[i];
    }
    return dst;
}
function calcCells(items, itemHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) {
    var cells = [];
    var end = len + offset;
    for (var i = offset; i < end; i++) {
        var item = items[i];
        if (headerFn) {
            var value = headerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: 1,
                    value: value,
                    index: i,
                    height: approxHeaderHeight,
                    reads: MIN_READS,
                    visible: false,
                });
            }
        }
        cells.push({
            i: j++,
            type: 0,
            value: item,
            index: i,
            height: itemHeight ? itemHeight(item, i) : approxItemHeight,
            reads: itemHeight ? 0 : MIN_READS,
            visible: !!itemHeight,
        });
        if (footerFn) {
            var value = footerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: 2,
                    value: value,
                    index: i,
                    height: approxFooterHeight,
                    reads: 2,
                    visible: false,
                });
            }
        }
    }
    return cells;
}
function calcHeightIndex(buf, cells, index) {
    var acum = buf[index];
    for (var i = index; i < buf.length; i++) {
        buf[i] = acum;
        acum += cells[i].height;
    }
    return acum;
}
function resizeBuffer(buf, len) {
    if (!buf) {
        return new Uint32Array(len);
    }
    if (buf.length === len) {
        return buf;
    }
    else if (len > buf.length) {
        var newBuf = new Uint32Array(len);
        newBuf.set(buf);
        return newBuf;
    }
    else {
        return buf.subarray(0, len);
    }
}
function positionForIndex(index, cells, heightIndex) {
    var cell = cells.find(function (c) { return c.type === 0 && c.index === index; });
    if (cell) {
        return heightIndex[cell.i];
    }
    return -1;
}
var VirtualScroll = /** @class */ (function () {
    function VirtualScroll() {
        this.range = { offset: 0, length: 0 };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        this.approxItemHeight = 45;
        this.approxHeaderHeight = 40;
        this.approxFooterHeight = 40;
    }
    VirtualScroll.prototype.itemsChanged = function () {
        this.calcCells();
        this.updateVirtualScroll();
    };
    VirtualScroll.prototype.componentDidLoad = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var contentEl, _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) {
                            console.error('virtual-scroll must be used inside ion-content');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, contentEl.componentOnReady()];
                    case 1:
                        _b.sent();
                        this.contentEl = contentEl;
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 2:
                        _a.scrollEl = _b.sent();
                        this.calcCells();
                        this.updateState();
                        return [2 /*return*/];
                }
            });
        });
    };
    VirtualScroll.prototype.componentDidUpdate = function () {
        this.updateState();
    };
    VirtualScroll.prototype.componentDidUnload = function () {
        this.scrollEl = undefined;
    };
    VirtualScroll.prototype.onScroll = function () {
        this.updateVirtualScroll();
    };
    VirtualScroll.prototype.onResize = function () {
        this.updateVirtualScroll();
    };
    VirtualScroll.prototype.positionForItem = function (index) {
        return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
    };
    VirtualScroll.prototype.markDirty = function (offset, len) {
        if (len === void 0) { len = -1; }
        if (!this.items) {
            return;
        }
        var length = (len === -1)
            ? this.items.length - offset
            : len;
        var max = this.lastItemLen;
        var j = 0;
        if (offset > 0 && offset < max) {
            j = findCellIndex(this.cells, offset);
        }
        else if (offset === 0) {
            j = 0;
        }
        else if (offset === max) {
            j = this.cells.length;
        }
        else {
            console.warn('bad values for markDirty');
            return;
        }
        var cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, j, offset, length);
        console.debug('[virtual] cells recalculated', cells.length);
        this.cells = inplaceUpdate(this.cells, cells, offset);
        this.lastItemLen = this.items.length;
        this.indexDirty = Math.max(offset - 1, 0);
        this.scheduleUpdate();
    };
    VirtualScroll.prototype.markDirtyTail = function () {
        if (this.items) {
            var offset = this.lastItemLen;
            this.markDirty(offset, this.items.length - offset);
        }
    };
    VirtualScroll.prototype.updateVirtualScroll = function () {
        if (!this.isEnabled || !this.scrollEl) {
            return;
        }
        if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = undefined;
        }
        this.queue.read(this.readVS.bind(this));
        this.queue.write(this.writeVS.bind(this));
    };
    VirtualScroll.prototype.readVS = function () {
        var _a = this, contentEl = _a.contentEl, scrollEl = _a.scrollEl, el = _a.el;
        var topOffset = 0;
        var node = el;
        while (node && node !== contentEl) {
            topOffset += node.offsetTop;
            node = node.parentElement;
        }
        this.viewportOffset = topOffset;
        if (scrollEl) {
            this.viewportHeight = scrollEl.offsetHeight;
            this.currentScrollTop = scrollEl.scrollTop;
        }
    };
    VirtualScroll.prototype.writeVS = function () {
        var dirtyIndex = this.indexDirty;
        var scrollTop = this.currentScrollTop - this.viewportOffset;
        var viewport = getViewport(scrollTop, this.viewportHeight, 100);
        var heightIndex = this.getHeightIndex();
        var range = getRange(heightIndex, viewport, 2);
        var shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
        if (!shouldUpdate) {
            return;
        }
        this.range = range;
        updateVDom(this.virtualDom, heightIndex, this.cells, range);
        if (this.nodeRender) {
            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
        }
        else if (this.domRender) {
            this.domRender(this.virtualDom);
        }
        else if (this.renderItem) {
            this.el.forceUpdate();
        }
    };
    VirtualScroll.prototype.updateCellHeight = function (cell, node) {
        var _this = this;
        var update = function () {
            if (node['$ionCell'] === cell) {
                var style = _this.win.getComputedStyle(node);
                var height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
                _this.setCellHeight(cell, height);
            }
        };
        if (node && node.componentOnReady) {
            node.componentOnReady().then(update);
        }
        else {
            update();
        }
    };
    VirtualScroll.prototype.setCellHeight = function (cell, height) {
        var index = cell.i;
        if (cell !== this.cells[index]) {
            return;
        }
        cell.visible = true;
        if (cell.height !== height) {
            console.debug("[virtual] cell height changed " + cell.height + "px -> " + height + "px");
            cell.height = height;
            this.indexDirty = Math.min(this.indexDirty, index);
            this.scheduleUpdate();
        }
    };
    VirtualScroll.prototype.scheduleUpdate = function () {
        var _this = this;
        clearTimeout(this.timerUpdate);
        this.timerUpdate = setTimeout(function () { return _this.updateVirtualScroll(); }, 100);
    };
    VirtualScroll.prototype.updateState = function () {
        var shouldEnable = !!(this.scrollEl &&
            this.cells);
        if (shouldEnable !== this.isEnabled) {
            this.enableScrollEvents(shouldEnable);
            if (shouldEnable) {
                this.updateVirtualScroll();
            }
        }
    };
    VirtualScroll.prototype.calcCells = function () {
        if (!this.items) {
            return;
        }
        this.lastItemLen = this.items.length;
        this.cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
        console.debug('[virtual] cells recalculated', this.cells.length);
        this.indexDirty = 0;
    };
    VirtualScroll.prototype.getHeightIndex = function () {
        if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
        }
        return this.heightIndex;
    };
    VirtualScroll.prototype.calcHeightIndex = function (index) {
        if (index === void 0) { index = 0; }
        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
        console.debug('[virtual] height index recalculated', this.heightIndex.length - index);
        this.indexDirty = Infinity;
    };
    VirtualScroll.prototype.enableScrollEvents = function (shouldListen) {
        if (this.scrollEl) {
            this.isEnabled = shouldListen;
            this.enableListener(this, 'scroll', shouldListen, this.scrollEl);
        }
    };
    VirtualScroll.prototype.renderVirtualNode = function (node) {
        var _a = node.cell, type = _a.type, value = _a.value, index = _a.index;
        switch (type) {
            case 0: return this.renderItem(value, index);
            case 1: return this.renderHeader(value, index);
            case 2: return this.renderFooter(value, index);
        }
    };
    VirtualScroll.prototype.hostData = function () {
        return {
            style: {
                height: this.totalHeight + "px"
            }
        };
    };
    VirtualScroll.prototype.render = function () {
        var _this = this;
        if (this.renderItem) {
            return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(function (node) { return _this.renderVirtualNode(node); })));
        }
        return undefined;
    };
    Object.defineProperty(VirtualScroll, "is", {
        get: function () { return "ion-virtual-scroll"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScroll, "properties", {
        get: function () {
            return {
                "approxFooterHeight": {
                    "type": Number,
                    "attr": "approx-footer-height"
                },
                "approxHeaderHeight": {
                    "type": Number,
                    "attr": "approx-header-height"
                },
                "approxItemHeight": {
                    "type": Number,
                    "attr": "approx-item-height"
                },
                "domRender": {
                    "type": "Any",
                    "attr": "dom-render"
                },
                "el": {
                    "elementRef": true
                },
                "enableListener": {
                    "context": "enableListener"
                },
                "footerFn": {
                    "type": "Any",
                    "attr": "footer-fn"
                },
                "headerFn": {
                    "type": "Any",
                    "attr": "header-fn"
                },
                "itemHeight": {
                    "type": "Any",
                    "attr": "item-height",
                    "watchCallbacks": ["itemsChanged"]
                },
                "items": {
                    "type": "Any",
                    "attr": "items",
                    "watchCallbacks": ["itemsChanged"]
                },
                "markDirty": {
                    "method": true
                },
                "markDirtyTail": {
                    "method": true
                },
                "nodeRender": {
                    "type": "Any",
                    "attr": "node-render"
                },
                "positionForItem": {
                    "method": true
                },
                "queue": {
                    "context": "queue"
                },
                "renderFooter": {
                    "type": "Any",
                    "attr": "render-footer"
                },
                "renderHeader": {
                    "type": "Any",
                    "attr": "render-header"
                },
                "renderItem": {
                    "type": "Any",
                    "attr": "render-item"
                },
                "totalHeight": {
                    "state": true
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScroll, "listeners", {
        get: function () {
            return [{
                    "name": "scroll",
                    "method": "onScroll",
                    "disabled": true
                }, {
                    "name": "window:resize",
                    "method": "onResize",
                    "passive": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScroll, "style", {
        get: function () { return "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0s;transition-duration:0s;will-change:transform}"; },
        enumerable: true,
        configurable: true
    });
    return VirtualScroll;
}());
var VirtualProxy = function (_a, children, utils) {
    var dom = _a.dom;
    return utils.map(children, function (child, i) {
        var node = dom[i];
        var vattrs = child.vattrs || {};
        var classes = vattrs.class || '';
        classes += 'virtual-item ';
        if (!node.visible) {
            classes += 'virtual-loading';
        }
        return Object.assign({}, child, { vattrs: Object.assign({}, vattrs, { class: classes, style: Object.assign({}, vattrs.style, { transform: "translate3d(0," + node.top + "px,0)" }) }) });
    });
};



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
//# sourceMappingURL=35.js.map