(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/resin_io.js":
/*!**************************!*\
  !*** ../pkg/resin_io.js ***!
  \**************************/
/*! exports provided: ResinClock, __wbg_new0_fd3a3a290b25cdac, __wbg_now_af172eabe2e041ad, __wbg_setTime_35b55ca3aed732c6, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resin_io_bg.wasm */ \"../pkg/resin_io_bg.wasm\");\n/* harmony import */ var _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resin_io_bg.js */ \"../pkg/resin_io_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResinClock\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"ResinClock\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new0_fd3a3a290b25cdac\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new0_fd3a3a290b25cdac\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_now_af172eabe2e041ad\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_now_af172eabe2e041ad\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setTime_35b55ca3aed732c6\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setTime_35b55ca3aed732c6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/resin_io.js?");

/***/ }),

/***/ "../pkg/resin_io_bg.js":
/*!*****************************!*\
  !*** ../pkg/resin_io_bg.js ***!
  \*****************************/
/*! exports provided: ResinClock, __wbg_new0_fd3a3a290b25cdac, __wbg_now_af172eabe2e041ad, __wbg_setTime_35b55ca3aed732c6, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResinClock\", function() { return ResinClock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new0_fd3a3a290b25cdac\", function() { return __wbg_new0_fd3a3a290b25cdac; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_now_af172eabe2e041ad\", function() { return __wbg_now_af172eabe2e041ad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setTime_35b55ca3aed732c6\", function() { return __wbg_setTime_35b55ca3aed732c6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resin_io_bg.wasm */ \"../pkg/resin_io_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n/**\n*/\nclass ResinClock {\n\n    static __wrap(ptr) {\n        const obj = Object.create(ResinClock.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_resinclock_free\"](ptr);\n    }\n    /**\n    * @param {number} max_resin_count\n    * @param {number} one_resin_restore_minutes\n    * @returns {ResinClock}\n    */\n    static new(max_resin_count, one_resin_restore_minutes) {\n        var ret = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"resinclock_new\"](max_resin_count, one_resin_restore_minutes);\n        return ResinClock.__wrap(ret);\n    }\n    /**\n    * @param {number} resin_count\n    * @returns {Date}\n    */\n    resin_to_clock(resin_count) {\n        var ret = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"resinclock_resin_to_clock\"](this.ptr, resin_count);\n        return takeObject(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static clock_to_resin() {\n        var ret = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"resinclock_clock_to_resin\"]();\n        return ret >>> 0;\n    }\n}\n\nfunction __wbg_new0_fd3a3a290b25cdac() {\n    var ret = new Date();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_now_af172eabe2e041ad() {\n    var ret = Date.now();\n    return ret;\n};\n\nfunction __wbg_setTime_35b55ca3aed732c6(arg0, arg1) {\n    var ret = getObject(arg0).setTime(arg1);\n    return ret;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/resin_io_bg.js?");

/***/ }),

/***/ "../pkg/resin_io_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/resin_io_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __wbg_resinclock_free, resinclock_new, resinclock_resin_to_clock, resinclock_clock_to_resin */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./resin_io_bg.js */ \"../pkg/resin_io_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/resin_io_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var resin_io_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resin-io-wasm */ \"../pkg/resin_io.js\");\n/* harmony import */ var _scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/clock.js */ \"./scripts/clock.js\");\n/* harmony import */ var _scripts_resin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/resin.js */ \"./scripts/resin.js\");\n/* harmony import */ var _scripts_view_port__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/view_port */ \"./scripts/view_port.js\");\n\r\n\r\n\r\n\r\n\r\nif (Object(_scripts_view_port__WEBPACK_IMPORTED_MODULE_3__[\"view_port\"])() == _scripts_view_port__WEBPACK_IMPORTED_MODULE_3__[\"LANDSCAPE\"]) {\r\n    document.body.style.flexDirection = \"row-reverse\";\r\n}\r\nvar resin = new _scripts_resin_js__WEBPACK_IMPORTED_MODULE_2__[\"Resin\"]();\r\nvar clock = new _scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__[\"Clock\"]();\r\n\r\nresin_scroll.addEventListener(\"scroll\", on_resin_scroll, {capture: true});\r\nvar rc = resin_io_wasm__WEBPACK_IMPORTED_MODULE_0__[\"ResinClock\"].new(_scripts_resin_js__WEBPACK_IMPORTED_MODULE_2__[\"MAX_RESIN_COUNT\"], 8);\r\n\r\nfunction on_resin_scroll(e) {\r\n    if (resin.on_scroll()) {\r\n        let date = rc.resin_to_clock(resin.count);\r\n        clock.draw(date);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./scripts/clock.js":
/*!**************************!*\
  !*** ./scripts/clock.js ***!
  \**************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\nclass Clock {\r\n    constructor() {\r\n        this.frame = document.getElementById(\"analog_clock_frame\");\r\n        this.hour = document.getElementById(\"analog_clock_hour\");\r\n        this.min = document.getElementById(\"analog_clock_min\");\r\n        // this.diff = document.getElementById(\"time_difference\");\r\n        // let style = window.getComputedStyle(this.frame);\r\n        // this.width = parseFloat(style.width);\r\n        // this.height = parseFloat(style.height);\r\n        // this.diff.width = parseFloat(this.width);\r\n        // this.diff.height = parseFloat(this.height);\r\n        this.digital_clock = document.getElementById(\"digital_clock\");\r\n    }\r\n\r\n    draw(date) {\r\n        this.analog_draw(date);\r\n        this.time_difference_draw(date);\r\n        this.digital_draw(date);\r\n    }\r\n\r\n    analog_draw(date) {\r\n        let hour = date.getHours();\r\n        let min = date.getMinutes();\r\n        let hour_deg = hour / 12.0 * 360.0 - 90.0 + min / 60.0 * 360 / 12;\r\n        let min_deg = min / 60.0 * 360 - 90;\r\n        this.hour.style.transform = \"rotate(\" + String(hour_deg) + \"deg)\";\r\n        this.min.style.transform = \"rotate(\" + String(min_deg) + \"deg)\";\r\n    }\r\n\r\n    time_difference_draw(date) {\r\n        // if (this.diff.getContext) {\r\n        //     var ctx = this.diff.getContext(\"2d\");\r\n        //     let radius = this.width / 2.0;\r\n        //     ctx.beginPath();\r\n        //     ctx.arc(this.width / 2.0, this.height / 2.0, radius, 0, Math.PI);\r\n        //     ctx.stroke();\r\n        //     ctx.closePath();\r\n        // }\r\n    }\r\n\r\n    digital_draw(date) {\r\n        let hour = String(date.getHours()).padStart(2, \"0\");\r\n        let min = String(date.getMinutes()).padStart(2, \"0\");\r\n        this.digital_clock.textContent = hour + \":\" + min;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/clock.js?");

/***/ }),

/***/ "./scripts/resin.js":
/*!**************************!*\
  !*** ./scripts/resin.js ***!
  \**************************/
/*! exports provided: MAX_RESIN_COUNT, Resin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_RESIN_COUNT\", function() { return MAX_RESIN_COUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Resin\", function() { return Resin; });\nconst MAX_RESIN_COUNT = 160;\r\nclass Resin {\r\n    constructor() {\r\n        this.resin_scroll = document.getElementById(\"resin_scroll\");\r\n        let resin_scroll_style = window.getComputedStyle(this.resin_scroll);\r\n        this.resin_number_height = parseFloat(resin_scroll_style.height) / 3.0;\r\n        let resin_numbers = Array.from(Array(MAX_RESIN_COUNT + 1).keys());\r\n        for (let i = 0; i < resin_numbers.length; i++) {\r\n            var number = document.createElement(\"div\");\r\n            number.textContent = String(resin_numbers[i]);\r\n            number.className = \"resin_number\";\r\n            number.style.fontSize = String(this.resin_number_height * 0.8) + \"px\"\r\n;            if (i == 0) {\r\n                number.style.marginTop = String(this.resin_number_height) + \"px\";\r\n            } else if (i == resin_numbers.length - 1) {\r\n                number.style.marginBottom = String(this.resin_number_height) + \"px\";\r\n            }\r\n            this.resin_scroll.appendChild(number);\r\n        }\r\n\r\n        this.count = 80;\r\n    }\r\n\r\n    on_scroll() {\r\n        let old_resin_count = this.count;\r\n        let new_count = Math.round(this.resin_scroll.scrollTop / this.resin_number_height);\r\n        this.count = Math.max(Math.min(MAX_RESIN_COUNT, new_count), 0);\r\n        if (this.count != old_resin_count) {\r\n            this.resin_scroll.children[old_resin_count].className = \"resin_number\";\r\n            this.resin_scroll.children[this.count].className = \"selected_resin_number\";\r\n            return true;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/resin.js?");

/***/ }),

/***/ "./scripts/view_port.js":
/*!******************************!*\
  !*** ./scripts/view_port.js ***!
  \******************************/
/*! exports provided: PORTRAIT, LANDSCAPE, view_port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PORTRAIT\", function() { return PORTRAIT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LANDSCAPE\", function() { return LANDSCAPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view_port\", function() { return view_port; });\nconst PORTRAIT = 0;\r\nconst LANDSCAPE = 1;\r\n\r\nfunction view_port() {\r\n    if (document.body.clientWidth > document.body.clientHeight) {\r\n        return LANDSCAPE;\r\n    } else {\r\n        return PORTRAIT;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/view_port.js?");

/***/ })

}]);