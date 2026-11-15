if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_iterator_constructor_js_833f4df9__ from "core-js/modules/es.iterator.constructor.js";
import * as __WEBPACK_EXTERNAL_MODULE_react_input_material_components_WrapConfigurations_e292f77b__ from "react-input-material/components/WrapConfigurations";
import * as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_103b7261__ from "web-component-wrapper";
import * as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_ReactWeb_1eeea70f__ from "web-component-wrapper/ReactWeb";
import "core-js/modules/es.array.push.js";
import "core-js/modules/es.iterator.filter.js";
import "core-js/modules/es.iterator.for-each.js";
import { Slider as __WEBPACK_EXTERNAL_MODULE__rmwc_slider_30896a86_Slider__ } from "@rmwc/slider";
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
module.exports = x({ ["boolean"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.boolean; }, ["func"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.func; }, ["number"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.number; }, ["object"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.object; }, ["string"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.string; } });

/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["createWrapConfigurationsComponent"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_input_material_components_WrapConfigurations_e292f77b__.createWrapConfigurationsComponent; } });

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 15 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

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

;// external "core-js/modules/es.array.push.js"

// EXTERNAL MODULE: external "core-js/modules/es.iterator.constructor.js"
var es_iterator_constructor_js_ = __webpack_require__(14);
;// external "core-js/modules/es.iterator.filter.js"

;// external "core-js/modules/es.iterator.for-each.js"

// EXTERNAL MODULE: external "clientnode/property-types"
var property_types_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-input-material/components/WrapConfigurations"
var WrapConfigurations_ = __webpack_require__(2);
// EXTERNAL MODULE: external "web-component-wrapper"
var external_web_component_wrapper_ = __webpack_require__(0);
// EXTERNAL MODULE: external "web-component-wrapper/ReactWeb"
var ReactWeb_ = __webpack_require__(15);
;// external "@rmwc/slider"

;// ./src/components/SliderInput.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Slider *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
/*
    NOTE: Resulting component type is dynamically created from derived wrapped
    react component.
*/var SliderInput=(0,external_web_component_wrapper_["default"])((0,WrapConfigurations_.createWrapConfigurationsComponent)(__WEBPACK_EXTERNAL_MODULE__rmwc_slider_30896a86_Slider__),"SliderInput",{eventToPropertyMapping:{onChange:function onChange(event,self){return _objectSpread(_objectSpread({},self.externalProperties),{},{value:event.detail.value})},onInput:function onInput(event){return[{value:event.detail.value},{value:event.detail.value}]}},propTypes:{disabled:property_types_.boolean,discrete:property_types_.boolean,displayMarkers:property_types_.boolean,max:property_types_.number,min:property_types_.number,step:property_types_.number,theme:property_types_.string,themeConfiguration:property_types_.object,onChange:property_types_.func,onInput:property_types_.func,value:property_types_.number}});/* harmony default export */ var components_SliderInput = (SliderInput);
export { SliderInput, components_SliderInput as default };
