if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
import * as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_103b7261__ from "web-component-wrapper";
import { default as __WEBPACK_EXTERNAL_MODULE_react_input_material_components_Checkbox_99530f7e_default__ } from "react-input-material/components/Checkbox";
/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["default"]: function() { return __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_103b7261__["default"]; } });

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["boolean"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.boolean; }, ["string"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.string; } });

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __webpack_require__.d = function(exports, definition) {
/******/ 	for(var key in definition) {
/******/ 		if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 
/************************************************************************/

// EXTERNAL MODULE: external "clientnode/property-types"
var property_types_ = __webpack_require__(1);
;// external "react-input-material/components/Checkbox"

// EXTERNAL MODULE: external "web-component-wrapper"
var external_web_component_wrapper_ = __webpack_require__(0);
;// ./src/components/CheckboxInput.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module CheckboxInput *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
// endregion
var CheckboxInput=(0,external_web_component_wrapper_["default"])(__WEBPACK_EXTERNAL_MODULE_react_input_material_components_Checkbox_99530f7e_default__,"CheckboxInput",{eventToPropertyMapping:{onChange:true},internalProperties:{enforceUncontrolled:true},propertiesToReflectAsAttributes:{dirty:property_types_.boolean,focused:property_types_.boolean,invalid:property_types_.boolean,invalidRequired:property_types_.boolean,name:property_types_.string,pristine:property_types_.boolean,touched:property_types_.boolean,untouched:property_types_.boolean,valid:property_types_.boolean,visited:property_types_.boolean},/*
                NOTE: When this configuration is enabled the following error
                occurs:
                installHook.js:1 Warning: Attempted to synchronously unmount a
                root while React was already rendering. React cannot finish
                unmounting the root until the current render has completed,
                which may lead to a race condition.
            */unmountOnDisconnect:false});/* harmony default export */ var components_CheckboxInput = (CheckboxInput);
export { CheckboxInput, components_CheckboxInput as default };
