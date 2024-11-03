/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AboutLoaded.js":
/*!****************************!*\
  !*** ./src/AboutLoaded.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nconst about = () => {\n    const div = document.createElement(\"div\");\n    const h1 = document.createElement(\"h1\");\n    const p = document.createElement(\"p\");\n\n    h1.textContent = \"About Us\";\n    p.textContent = \"There's alot about us, still about food though!\";\n\n    div.appendChild(h1);\n    div.appendChild(p);\n    return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/AboutLoaded.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n    const div = document.createElement(\"div\");\n    const h1 = document.createElement(\"h1\");\n    const p = document.createElement(\"p\");\n\n    h1.textContent = \"Contact Us\";\n    p.textContent = \"We are a call AWAY!\";\n\n    const number = document.createElement(\"a\");\n    number.href = \"tel:000-000-000\";\n    number.textContent = \"tel:000-000-000\";\n\n    div.appendChild(h1);\n    div.appendChild(p);\n    div.appendChild(number);\n    return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.jpeg */ \"./src/images.jpeg\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLoad */ \"./src/menuLoad.js\");\n/* harmony import */ var _AboutLoaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutLoaded */ \"./src/AboutLoaded.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nconsole.log(\"we are live!\");\n\n\n\n\n\n\n\n\n\n\n\ndocument.body.setAttribute(\"style\", `background:url(${_images_jpeg__WEBPACK_IMPORTED_MODULE_0__}); background-repeat: no-repeat; background-size: cover; color: white;`)\n\nconst content = document.querySelector(\"#content\");\n\nlet called = false;\n\n\n\n// nav buttons\nconst navBtns = document.querySelectorAll(\"button\");\n\nnavBtns.forEach(btn => \n    btn.addEventListener('click', () => {\n        switch(btn.textContent) {\n            default:\n \n                break;\n\n            case 'Home':\n                    content.textContent = '';\n                    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.pageLoad)(content);\n                break;\n\n            case 'Menu':\n                    content.textContent = '';\n                    content.appendChild((0,_menuLoad__WEBPACK_IMPORTED_MODULE_2__.menu)());\n                break;\n\n            case 'About':\n                content.textContent = '';\n                content.appendChild((0,_AboutLoaded__WEBPACK_IMPORTED_MODULE_3__.about)());\n                break;\n\n            case 'Contact':\n                content.textContent = '';\n                content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__.contact)());\n                break;\n        }\n    })\n)\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    ;(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.pageLoad)(content);\n});\n// const img = document.createElement(\"img\");\n\n// img.src = image;\n\n// content.appendChild(img);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n    const div = document.createElement(\"div\");\n    const h1 = document.createElement(\"h1\");\n    const p = document.createElement(\"p\");\n\n    h1.textContent = \"Today's Menu\";\n    p.textContent = \"The Menu blends in table wines and Natural drinks!\";\n\n    div.appendChild(h1);\n    div.appendChild(p);\n    return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuLoad.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = (container) => {\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Yours Favorite Restaurant!\";\n\n    const p = document.createElement(\"p\");\n    p.textContent = \"Welcome to Savory Haven, a hidden gem nestled in the heart of downtown. Our cozy, inviting atmosphere combines rustic charm with modern elegance, perfect for a casual dinner or a special celebration. The menu features a delightful fusion of international cuisines, crafted from locally sourced ingredients to ensure freshness and flavor in every dish. Indulge in our signature creations, like the herb-crusted salmon and truffle-infused risotto, or explore our vibrant vegetarian options. Don’t forget to pair your meal with a selection from our curated wine list or one of our handcrafted cocktails. Join us for an unforgettable dining experience where every bite tells a story\";\n\n    container.appendChild(h1);\n    container.appendChild(p);\n\n    return container;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/images.jpeg":
/*!*************************!*\
  !*** ./src/images.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1308a56ef1fa43098803.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;