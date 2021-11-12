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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var resin_io_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resin-io-wasm */ \"../pkg/resin_io.js\");\n\r\n\r\nconst MAX_RESIN_COUNT = 160;\r\n\r\nvar body = document.body\r\nconst ViewMode = {\r\n    Landscape: 0,\r\n    Portrait: 1,\r\n};\r\nvar view_mode = ViewMode.Portrait;\r\nif (body.clientWidth > body.clientHeight) {\r\n    view_mode = ViewMode.Landscape;\r\n    body.style.flexDirection = \"row-reverse\";\r\n}\r\n\r\nvar resin_scroll = document.getElementById(\"resin_scroll\");\r\nlet resin_scroll_style = window.getComputedStyle(resin_scroll);\r\nlet resin_numbers = Array.from(Array(MAX_RESIN_COUNT + 1).keys());\r\nlet resin_number_height = parseFloat(resin_scroll_style.height) / 3.0;\r\nfor (let i = 0; i < resin_numbers.length; i++) {\r\n    var number = document.createElement(\"div\");\r\n    number.textContent = String(resin_numbers[i]);\r\n    number.className = \"resin_number\";\r\n    if (i == 0) {\r\n        number.style.marginTop = String(resin_number_height) + \"px\";\r\n    } else if (i == resin_numbers.length - 1) {\r\n        number.style.marginBottom = String(resin_number_height) + \"px\";\r\n    }\r\n    resin_scroll.appendChild(number);\r\n}\r\n\r\nvar scroll_timeout = null;\r\nvar resin_count = 0;\r\nresin_scroll.addEventListener(\"scroll\", on_resin_scroll, {capture: true});\r\nvar digital_clock = document.getElementById(\"digital_clock\");\r\nvar rc = resin_io_wasm__WEBPACK_IMPORTED_MODULE_0__[\"ResinClock\"].new(MAX_RESIN_COUNT, 8);\r\n\r\nfunction on_resin_scroll(e) {\r\n    let old_resin_count = resin_count;\r\n    resin_count = Math.round(resin_scroll.scrollTop / resin_number_height);\r\n    if (resin_count != old_resin_count) {\r\n        resin_scroll.children[old_resin_count].style.color = null;\r\n        resin_scroll.children[resin_count].style.color = \"black\";\r\n\r\n        let date = rc.resin_to_clock(resin_count);\r\n        let h = String(date.getHours()).padStart(2, \"0\");\r\n        let m = String(date.getMinutes()).padStart(2, \"0\");\r\n        digital_clock.textContent = h + \":\" + m;\r\n    }\r\n}\r\n\r\nvar h = 0;\r\nvar m = 90;\r\nvar ch = document.getElementById(\"analog_clock_hour\");\r\nvar cm = document.getElementById(\"analog_clock_min\");\r\nwindow.setInterval(function() {\r\n    h += 1;\r\n    ch.style.transform = \"rotate(\" + String(h - 90) + \"deg)\";\r\n    m += 1;\r\n    cm.style.transform = \"rotate(\" + String(m - h) + \"deg)\";\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);