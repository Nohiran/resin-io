(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/resin_io.js":
/*!**************************!*\
  !*** ../pkg/resin_io.js ***!
  \**************************/
/*! exports provided: ClockBundle, Resin, __wbindgen_object_drop_ref, __wbg_getHours_e35735d153867e70, __wbg_getMinutes_200bfb3f3e42d17d, __wbg_new0_fd3a3a290b25cdac, __wbg_now_af172eabe2e041ad, __wbg_setTime_35b55ca3aed732c6, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resin_io_bg.wasm */ \"../pkg/resin_io_bg.wasm\");\n/* harmony import */ var _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resin_io_bg.js */ \"../pkg/resin_io_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ClockBundle\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"ClockBundle\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Resin\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Resin\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getHours_e35735d153867e70\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getHours_e35735d153867e70\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getMinutes_200bfb3f3e42d17d\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getMinutes_200bfb3f3e42d17d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new0_fd3a3a290b25cdac\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new0_fd3a3a290b25cdac\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_now_af172eabe2e041ad\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_now_af172eabe2e041ad\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setTime_35b55ca3aed732c6\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setTime_35b55ca3aed732c6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _resin_io_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/resin_io.js?");

/***/ }),

/***/ "../pkg/resin_io_bg.js":
/*!*****************************!*\
  !*** ../pkg/resin_io_bg.js ***!
  \*****************************/
/*! exports provided: ClockBundle, Resin, __wbindgen_object_drop_ref, __wbg_getHours_e35735d153867e70, __wbg_getMinutes_200bfb3f3e42d17d, __wbg_new0_fd3a3a290b25cdac, __wbg_now_af172eabe2e041ad, __wbg_setTime_35b55ca3aed732c6, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClockBundle\", function() { return ClockBundle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Resin\", function() { return Resin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getHours_e35735d153867e70\", function() { return __wbg_getHours_e35735d153867e70; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getMinutes_200bfb3f3e42d17d\", function() { return __wbg_getMinutes_200bfb3f3e42d17d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new0_fd3a3a290b25cdac\", function() { return __wbg_new0_fd3a3a290b25cdac; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_now_af172eabe2e041ad\", function() { return __wbg_now_af172eabe2e041ad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setTime_35b55ca3aed732c6\", function() { return __wbg_setTime_35b55ca3aed732c6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resin_io_bg.wasm */ \"../pkg/resin_io_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n/**\n*/\nclass ClockBundle {\n\n    static __wrap(ptr) {\n        const obj = Object.create(ClockBundle.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_clockbundle_free\"](ptr);\n    }\n    /**\n    * @returns {string}\n    */\n    current_analog_hour_string() {\n        try {\n            const retptr = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"clockbundle_current_analog_hour_string\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    filling_analog_hour_string() {\n        try {\n            const retptr = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"clockbundle_filling_analog_hour_string\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    filling_analog_min_string() {\n        try {\n            const retptr = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"clockbundle_filling_analog_min_string\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    digital_clock_string() {\n        try {\n            const retptr = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"clockbundle_digital_clock_string\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    outer_conic_gradient() {\n        try {\n            const retptr = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"clockbundle_outer_conic_gradient\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    inner_conic_gradient() {\n        try {\n            const retptr = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"clockbundle_inner_conic_gradient\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n/**\n*/\nclass Resin {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Resin.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_resin_free\"](ptr);\n    }\n    /**\n    * @param {number} max_resin_count\n    * @param {number} one_resin_restore_minutes\n    * @returns {Resin}\n    */\n    static new(max_resin_count, one_resin_restore_minutes) {\n        var ret = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"resin_new\"](max_resin_count, one_resin_restore_minutes);\n        return Resin.__wrap(ret);\n    }\n    /**\n    * @param {number} resin_count\n    * @param {string} outer_color\n    * @param {string} inner_color\n    * @returns {ClockBundle}\n    */\n    clock_bundle(resin_count, outer_color, inner_color) {\n        var ptr0 = passStringToWasm0(outer_color, _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        var ptr1 = passStringToWasm0(inner_color, _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len1 = WASM_VECTOR_LEN;\n        var ret = _resin_io_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"resin_clock_bundle\"](this.ptr, resin_count, ptr0, len0, ptr1, len1);\n        return ClockBundle.__wrap(ret);\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_getHours_e35735d153867e70(arg0) {\n    var ret = getObject(arg0).getHours();\n    return ret;\n};\n\nfunction __wbg_getMinutes_200bfb3f3e42d17d(arg0) {\n    var ret = getObject(arg0).getMinutes();\n    return ret;\n};\n\nfunction __wbg_new0_fd3a3a290b25cdac() {\n    var ret = new Date();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_now_af172eabe2e041ad() {\n    var ret = Date.now();\n    return ret;\n};\n\nfunction __wbg_setTime_35b55ca3aed732c6(arg0, arg1) {\n    var ret = getObject(arg0).setTime(arg1);\n    return ret;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/resin_io_bg.js?");

/***/ }),

/***/ "../pkg/resin_io_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/resin_io_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __wbg_resin_free, __wbg_clockbundle_free, resin_new, resin_clock_bundle, clockbundle_current_analog_hour_string, clockbundle_filling_analog_hour_string, clockbundle_filling_analog_min_string, clockbundle_digital_clock_string, clockbundle_outer_conic_gradient, clockbundle_inner_conic_gradient, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_add_to_stack_pointer, __wbindgen_free */
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var resin_io_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resin-io-wasm */ \"../pkg/resin_io.js\");\n/* harmony import */ var _scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/clock.js */ \"./scripts/clock.js\");\n/* harmony import */ var _scripts_resin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/resin.js */ \"./scripts/resin.js\");\n/* harmony import */ var _scripts_view_port__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/view_port */ \"./scripts/view_port.js\");\n\r\n\r\n\r\n\r\n\r\nif (Object(_scripts_view_port__WEBPACK_IMPORTED_MODULE_3__[\"view_port\"])() == _scripts_view_port__WEBPACK_IMPORTED_MODULE_3__[\"LANDSCAPE\"]) {\r\n    document.body.style.flexDirection = \"row-reverse\";\r\n}\r\nlet body_style = window.getComputedStyle(document.body);\r\nlet body_color = body_style.getPropertyValue(\"--body-background\");\r\nlet elem_color = body_style.getPropertyValue(\"--element-background\");\r\nlet resin = new _scripts_resin_js__WEBPACK_IMPORTED_MODULE_2__[\"Resin\"]();\r\nlet resin_wasm = resin_io_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Resin\"].new(_scripts_resin_js__WEBPACK_IMPORTED_MODULE_2__[\"MAX_RESIN_COUNT\"], 8);\r\nlet clock = new _scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__[\"Clock\"]();\r\n\r\nresin.scroll.addEventListener(\"scroll\", on_resin_scroll, { capture: true });\r\ndraw_update();\r\n\r\nwindow.onresize = function (e) {\r\n    if (Object(_scripts_view_port__WEBPACK_IMPORTED_MODULE_3__[\"view_port\"])() == _scripts_view_port__WEBPACK_IMPORTED_MODULE_3__[\"LANDSCAPE\"]) {\r\n        document.body.style.flexDirection = \"row-reverse\";\r\n    } else {\r\n        document.body.style.flexDirection = null;\r\n    }\r\n    resin.recreate();\r\n}\r\n\r\nfunction on_resin_scroll(e) {\r\n    if (resin.on_scroll()) {\r\n        draw_update();\r\n    }\r\n}\r\n\r\nfunction draw_update() {\r\n    let clock_bundle = resin_wasm.clock_bundle(resin.count, body_color, elem_color);\r\n    clock.draw(clock_bundle);\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\nclass Clock {\r\n    constructor() {\r\n        this.frame = document.getElementById(\"analog_clock_frame\");\r\n        this.hour = document.getElementById(\"analog_clock_hour\");\r\n        this.min = document.getElementById(\"analog_clock_min\");\r\n        this.outer_diff = document.getElementById(\"analog_clock_outer_diff\");\r\n        this.inner_diff = document.getElementById(\"analog_clock_inner_diff\");\r\n        this.digital_clock = document.getElementById(\"digital_clock\");\r\n\r\n        for (let i = 0; i < 12; i++) {\r\n            let tick = document.createElement(\"div\");\r\n            tick.className = \"analog_clock_tick\";\r\n            tick.style.transform = \"rotate(\" + String(i * 30) + \"deg)\";\r\n            this.frame.appendChild(tick);\r\n        }\r\n    }\r\n\r\n    draw(clock_bundle) {\r\n        this.hour.style.transform = clock_bundle.filling_analog_hour_string();\r\n        this.min.style.transform = clock_bundle.filling_analog_min_string();\r\n        this.digital_clock.textContent = clock_bundle.digital_clock_string();\r\n        this.outer_diff.style.backgroundImage = clock_bundle.outer_conic_gradient();\r\n        this.inner_diff.style.backgroundImage = clock_bundle.inner_conic_gradient();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/clock.js?");

/***/ }),

/***/ "./scripts/resin.js":
/*!**************************!*\
  !*** ./scripts/resin.js ***!
  \**************************/
/*! exports provided: MAX_RESIN_COUNT, Resin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_RESIN_COUNT\", function() { return MAX_RESIN_COUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Resin\", function() { return Resin; });\nconst MAX_RESIN_COUNT = 160;\r\nclass Resin {\r\n    constructor() {\r\n        this.new();\r\n    }\r\n\r\n    new() {\r\n        this.scroll = document.getElementById(\"resin_scroll\");\r\n        let scroll_style = window.getComputedStyle(this.scroll);\r\n        this.number_height = parseFloat(scroll_style.height) / 3.0;\r\n        let numbers = Array.from(Array(MAX_RESIN_COUNT + 1).keys());\r\n        for (let i = 0; i < numbers.length; i++) {\r\n            var number = document.createElement(\"div\");\r\n            number.textContent = String(numbers[i]);\r\n            number.className = \"resin_number\";\r\n            number.style.fontSize = String(this.number_height * 0.8) + \"px\"\r\n                ; if (i == 0) {\r\n                    number.style.marginTop = String(this.number_height) + \"px\";\r\n                } else if (i == numbers.length - 1) {\r\n                    number.style.marginBottom = String(this.number_height) + \"px\";\r\n                }\r\n            this.scroll.appendChild(number);\r\n        }\r\n\r\n        this.count = 80;\r\n        this.scroll_to(80);\r\n    }\r\n\r\n    recreate() {\r\n        let old_count = this.count;\r\n        while (this.scroll.firstChild) {\r\n            this.scroll.removeChild(this.scroll.firstChild);\r\n        }\r\n\r\n        this.new();\r\n        this.count = old_count;\r\n        this.scroll_to(old_count);\r\n    }\r\n\r\n    on_scroll() {\r\n        let old_resin_count = this.count;\r\n        let new_count = Math.round(this.scroll.scrollTop / this.number_height);\r\n        this.count = Math.max(Math.min(MAX_RESIN_COUNT, new_count), 0);\r\n        if (this.count != old_resin_count) {\r\n            this.scroll.children[old_resin_count].className = \"resin_number\";\r\n            this.scroll.children[this.count].className = \"selected_resin_number\";\r\n            return true;\r\n        }\r\n    }\r\n\r\n    scroll_to(count) {\r\n        let old_count = this.count;\r\n        this.count = Math.min(MAX_RESIN_COUNT, Math.max(0, Math.floor(count)));\r\n        this.scroll.scrollTop = this.count * this.number_height;\r\n        this.scroll.children[old_count].className = \"resin_number\";\r\n        this.scroll.children[this.count].className = \"selected_resin_number\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/resin.js?");

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