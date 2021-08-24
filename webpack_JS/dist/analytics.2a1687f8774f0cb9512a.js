/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analytics.js":
/*!**************************!*\
  !*** ./src/analytics.js ***!
  \**************************/
/***/ (() => {

eval("// 6\r\nfunction createAnalytics() {\r\n  let counter = 0\r\n  let destroyed = false //30\r\n  console.log('text') //30-3\r\n  const listener = () => counter++\r\n  document.addEventListener('click', listener)\r\n  // 6-1\r\n  return {\r\n    destroy() {\r\n      document.removeEventListener('click', listener)\r\n      destroyed = true //30-1\r\n    },\r\n    getClicks() {\r\n      if(destroyed) { //30-2\r\n        // 22\r\n        return `Analytics is destroyed. Total clicks = ${counter}`\r\n      }\r\n      return counter\r\n    }\r\n  }\r\n}\r\n\r\n// 6-2\r\nwindow.analytics = createAnalytics()\n\n//# sourceURL=webpack://webpack_js/./src/analytics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/analytics.js"]();
/******/ 	
/******/ })()
;