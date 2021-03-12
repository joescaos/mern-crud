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

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.port || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"my-secret-key\"\n};\nvar _default = config;\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./config/config.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _bodyParser = _interopRequireDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\n\nvar _cookieParser = _interopRequireDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\n\nvar _compression = _interopRequireDefault(__webpack_require__(/*! compression */ \"compression\"));\n\nvar _cors = _interopRequireDefault(__webpack_require__(/*! cors */ \"cors\"));\n\nvar _helmet = _interopRequireDefault(__webpack_require__(/*! helmet */ \"helmet\"));\n\nvar _template = _interopRequireDefault(__webpack_require__(/*! ./../template */ \"./template.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express.default)();\n/*... configure express ... */\n\napp.use(_bodyParser.default.json());\napp.use(_bodyParser.default.urlencoded({\n  extended: true\n}));\napp.use((0, _cookieParser.default)());\napp.use((0, _compression.default)());\napp.use((0, _helmet.default)());\napp.use((0, _cors.default)());\napp.get('/', (req, res) => {\n  res.status(200).send((0, _template.default)());\n});\nvar _default = app;\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./server/express.js?");

/***/ }),

/***/ "./server/keys.js":
/*!************************!*\
  !*** ./server/keys.js ***!
  \************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  MONGOURI: 'mongodb://joescaos:udZksbxOw1LRbYko@cluster0-shard-00-00.djhgz.mongodb.net:27017,cluster0-shard-00-01.djhgz.mongodb.net:27017,cluster0-shard-00-02.djhgz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-pfr7sy-shard-0&authSource=admin&retryWrites=true&w=majority'\n};\n\n//# sourceURL=webpack://mern-crud/./server/keys.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\n\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./../config/config */ \"./config/config.js\"));\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! ./express */ \"./server/express.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst {\n  MONGOURI\n} = __webpack_require__(/*! ./keys */ \"./server/keys.js\");\n\n_express.default.listen(_config.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s', _config.default.port);\n});\n\n_mongoose.default.connect(MONGOURI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n\n_mongoose.default.connection.on('connected', () => {\n  console.log('Conectado a Mongo');\n});\n\n_mongoose.default.connection.on('error', err => {\n  console.log('error ', err);\n});\n\n//# sourceURL=webpack://mern-crud/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _default = () => {\n  return `\n    <!doctype html>\n        <html lang=\"en\">\n            <head>\n                <meta charset=\"utf-8\">\n                <title>MERN Skeleton</title>\n            </head>\n            <body>\n                <div id=\"root\">Hello World</div>\n            </body>\n        </html>\n    `;\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./template.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;