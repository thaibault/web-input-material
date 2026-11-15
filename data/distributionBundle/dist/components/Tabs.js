if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE__rmwc_tabs_8a639a55__ from "@rmwc/tabs";
import * as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__ from "clientnode/property-types";
import * as __WEBPACK_EXTERNAL_MODULE_react_input_material_components_WrapConfigurations_e292f77b__ from "react-input-material/components/WrapConfigurations";
import * as __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_103b7261__ from "web-component-wrapper";
import { timeout as __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__ } from "clientnode";
/******/ var __webpack_modules__ = ({

/***/ 13:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Tab"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_tabs_8a639a55__.Tab; }, ["TabBar"]: function() { return __WEBPACK_EXTERNAL_MODULE__rmwc_tabs_8a639a55__.TabBar; } });

/***/ }),

/***/ 1:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["boolean"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.boolean; }, ["func"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.func; }, ["number"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.number; }, ["object"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.object; }, ["string"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2__.string; } });

/***/ }),

/***/ 2:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["createWrapConfigurationsComponent"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_input_material_components_WrapConfigurations_e292f77b__.createWrapConfigurationsComponent; } });

/***/ }),

/***/ 0:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["default"]: function() { return __WEBPACK_EXTERNAL_MODULE_web_component_wrapper_103b7261__["default"]; } });

/***/ })

/******/ });
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
/* unused harmony export TabItem */
/* harmony import */ var clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react_input_material_components_WrapConfigurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var web_component_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _rmwc_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TabItem *//* !
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
var TabItem=(0,web_component_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])((0,react_input_material_components_WrapConfigurations__WEBPACK_IMPORTED_MODULE_1__.createWrapConfigurationsComponent)(_rmwc_tabs__WEBPACK_IMPORTED_MODULE_3__.Tab),"TabItem",{propTypes:{stacked:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.boolean,theme:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.string,themeConfiguration:clientnode_property_types__WEBPACK_IMPORTED_MODULE_0__.object}});/* unused harmony default export */ var components_TabItem = ((/* unused pure expression or super */ null && (TabItem)));

;// external "clientnode"

// EXTERNAL MODULE: external "clientnode/property-types"
var property_types_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-input-material/components/WrapConfigurations"
var WrapConfigurations_ = __webpack_require__(2);
// EXTERNAL MODULE: external "web-component-wrapper"
var external_web_component_wrapper_ = __webpack_require__(0);
// EXTERNAL MODULE: external "@rmwc/tabs"
var tabs_ = __webpack_require__(13);
;// ./src/components/TabBar.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TabBar *//* !
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
function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};// endregion
var TabBar=(0,external_web_component_wrapper_["default"])((0,WrapConfigurations_.createWrapConfigurationsComponent)(tabs_.TabBar),"TabBar",{eventToPropertyMapping:{onActivate:function(){var _onActivate=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(){return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:_context.n=1;return __WEBPACK_EXTERNAL_MODULE_clientnode_timeout__();case 1:return _context.a(2,null)}},_callee)}));function onActivate(){return _onActivate.apply(this,arguments)}return onActivate}()},propTypes:{activeTabIndex:property_types_.number,onActivate:property_types_.func,theme:property_types_.string,themeConfiguration:property_types_.object}});/* harmony default export */ var components_TabBar = (TabBar);
export { TabBar, components_TabBar as default };
