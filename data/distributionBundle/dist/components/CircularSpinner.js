if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
import * as __WEBPACK_EXTERNAL_MODULE_react_input_material_components_WrapConfigurations_e292f77b__ from "react-input-material/components/WrapConfigurations";
import * as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_103b7261__ from "web-component-wrapper";
import { CircularProgress as __WEBPACK_EXTERNAL_MODULE__rmwc_circular_progress_592b28dd_CircularProgress__ } from "@rmwc/circular-progress";
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
module.exports = x({ ["number"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.number; }, ["object"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.object; }, ["oneOf"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.oneOf; }, ["oneOfType"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.oneOfType; }, ["string"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.string; } });

/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["createWrapConfigurationsComponent"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_input_material_components_WrapConfigurations_e292f77b__.createWrapConfigurationsComponent; } });

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
// EXTERNAL MODULE: external "react-input-material/components/WrapConfigurations"
var WrapConfigurations_ = __webpack_require__(2);
// EXTERNAL MODULE: external "web-component-wrapper"
var external_web_component_wrapper_ = __webpack_require__(0);
;// external "@rmwc/circular-progress"

;// ./src/components/CircularSpinner.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module CircularSpinner *//* !
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
var CircularSpinner=(0,external_web_component_wrapper_["default"])((0,WrapConfigurations_.createWrapConfigurationsComponent)(__WEBPACK_EXTERNAL_MODULE__rmwc_circular_progress_592b28dd_CircularProgress__,{withReference:false}),"CircularSpinner",{propTypes:{size:(0,property_types_.oneOfType)([(0,property_types_.oneOf)(["xsmall","small","medium","large","xlarge"]),property_types_.number]),theme:property_types_.string,themeConfiguration:property_types_.object}});/* harmony default export */ var components_CircularSpinner = (CircularSpinner);
export { CircularSpinner, components_CircularSpinner as default };
