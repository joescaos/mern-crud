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

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _user = _interopRequireDefault(__webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\"));\n\nvar _extend = _interopRequireDefault(__webpack_require__(/*! lodash/extend */ \"lodash/extend\"));\n\nvar _dbErrorHandler = _interopRequireDefault(__webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst create = async (req, res) => {\n  const user = new _user.default(req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: 'Successfully signed up!'\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _dbErrorHandler.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst list = async (req, res) => {\n  try {\n    let users = await _user.default.find().select('name email updated created');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _dbErrorHandler.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _user.default.findById(id);\n    if (!user) return res.status(400).json({\n      error: 'User not found'\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: \"Could not retrieve the user\"\n    });\n  }\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = (0, _extend.default)(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: _dbErrorHandler.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _dbErrorHandler.default.getErrorMessage(err)\n    });\n  }\n};\n\nvar _default = {\n  create,\n  list,\n  userByID,\n  read,\n  update,\n  remove\n};\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _bodyParser = _interopRequireDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\n\nvar _cookieParser = _interopRequireDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\n\nvar _compression = _interopRequireDefault(__webpack_require__(/*! compression */ \"compression\"));\n\nvar _cors = _interopRequireDefault(__webpack_require__(/*! cors */ \"cors\"));\n\nvar _helmet = _interopRequireDefault(__webpack_require__(/*! helmet */ \"helmet\"));\n\nvar _template = _interopRequireDefault(__webpack_require__(/*! ./../template */ \"./template.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express.default)();\n/*... configure express ... */\n\napp.use(_bodyParser.default.json());\napp.use(_bodyParser.default.urlencoded({\n  extended: true\n}));\napp.use((0, _cookieParser.default)());\napp.use((0, _compression.default)());\napp.use((0, _helmet.default)());\napp.use((0, _cors.default)());\napp.get('/', (req, res) => {\n  res.status(200).send((0, _template.default)());\n});\nvar _default = app;\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nconst getErrorMessage = err => {\n  let message = \"\";\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = \"Something went wrong\";\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf(\".$\") + 2, err.message.lastIndexOf(\"_1\"));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + \" already exists\";\n  } catch (ex) {\n    output = \"Unique field already exists\";\n  }\n\n  return output;\n};\n\nvar _default = {\n  getErrorMessage\n};\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/keys.js":
/*!************************!*\
  !*** ./server/keys.js ***!
  \************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  MONGOURI: 'mongodb://joescaos:udZksbxOw1LRbYko@cluster0-shard-00-00.djhgz.mongodb.net:27017,cluster0-shard-00-01.djhgz.mongodb.net:27017,cluster0-shard-00-02.djhgz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-pfr7sy-shard-0&authSource=admin&retryWrites=true&w=majority'\n};\n\n//# sourceURL=webpack://mern-crud/./server/keys.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst UserSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: Date,\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String\n});\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return \"\";\n\n    try {\n      return crypto.createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (err) {\n      return \"\";\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null);\n\nvar _default = mongoose.model(\"User\", UserSchema);\n\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _user = _interopRequireDefault(__webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express.default.Router();\n\nrouter.route('/api/users').get(_user.default.list).post(_user.default.create);\nrouter.route('api/users/:userId').get(_user.default.read).put(_user.default.update).delete(_user.default.remove);\nrouter.param('userId', _user.default.userByID);\nvar _default = router;\nexports.default = _default;\n\n//# sourceURL=webpack://mern-crud/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\n\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./../config/config */ \"./config/config.js\"));\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! ./express */ \"./server/express.js\"));\n\nvar _user = _interopRequireDefault(__webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst {\n  MONGOURI\n} = __webpack_require__(/*! ./keys */ \"./server/keys.js\");\n\n_express.default.listen(_config.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s', _config.default.port);\n});\n\n_mongoose.default.connect(MONGOURI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n\n_mongoose.default.connection.on('connected', () => {\n  console.log('Conectado a Mongo');\n});\n\n_mongoose.default.connection.on('error', err => {\n  console.log('error ', err);\n});\n\n_express.default.use('/', _user.default);\n\n//# sourceURL=webpack://mern-crud/./server/server.js?");

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

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");;

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