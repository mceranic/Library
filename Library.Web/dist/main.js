/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    port: 3300,\n    apiUrl: 'http://localhost:51257/api/',\n    images: 'C:\\\\Project\\\\Library\\\\Library.Web\\\\views\\\\images\\\\'\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/controllers/authors.controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/authors.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(/*! request */ \"request\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar list = function list(req, res) {\n    _request2.default.get(_config2.default.apiUrl + 'authors', function (err, response) {\n        if (err) console.log(err);\n        res.render('authors.ejs', {\n            icon: 'fa-user-circle',\n            title: 'Authors',\n            authors: JSON.parse(response.body),\n            moment: _moment2.default,\n            menuId: 'authors',\n            page: 'authors'\n        });\n    });\n};\n\nvar edit = function edit(req, res) {\n    var id = req.params.id;\n    if (id == 0) {\n        res.render('author.ejs', {\n            title: 'New author',\n            author: {\n                id: 0,\n                image: '',\n                name: '',\n                dob: '',\n                email: '',\n                books: []\n            },\n            menuId: 'author'\n        });\n    } else {\n        _request2.default.get(_config2.default.apiUrl + 'authors/' + id, function (err, response) {\n            if (err) console.log(err);\n            var a = JSON.parse(response.body);\n            res.render('author.ejs', {\n                title: a.name,\n                author: a,\n                menuId: 'author'\n            });\n        });\n    }\n};\n\nvar save = function save(req, res) {\n    if (req.params.id == 0) {\n        _request2.default.post(_config2.default.apiUrl + 'authors', { json: {\n                id: req.params.id,\n                image: req.body.image,\n                name: req.body.name,\n                dob: req.body.dob,\n                zipCode: req.body.zipCode,\n                email: req.body.email\n            }\n        }, function (err, response) {\n            if (err) console.log(err);\n            res.redirect('/authors');\n        });\n    } else {\n        _request2.default.put(_config2.default.apiUrl + 'authors/' + req.params.id, { json: {\n                id: req.params.id,\n                image: req.body.image,\n                name: req.body.name,\n                dob: req.body.dob,\n                zipCode: req.body.zipCode,\n                email: req.body.email\n            }\n        }, function (err, response) {\n            if (err) console.log(err);\n            res.redirect('/authors');\n        });\n    }\n};\n\nvar del = function del(req, res) {\n    _request2.default.delete(_config2.default.apiUrl + 'authors/' + req.params.id, function (err, response) {\n        if (err) console.log(err);\n        res.redirect('/authors');\n    });\n};\n\nvar find = function find(req, res) {\n    var filter = req.body.name;\n    _request2.default.get(_config2.default.apiUrl + ('authors/find/' + filter), function (err, response) {\n        if (err) console.log(err);\n        res.render('authors.ejs', {\n            icon: 'fa-users-circle',\n            title: 'Authors',\n            authors: JSON.parse(response.body),\n            moment: _moment2.default,\n            menuId: \"authors\",\n            page: \"Authors\"\n        });\n    });\n};\n\nexports.default = { list: list, edit: edit, save: save, del: del, find: find };\n\n//# sourceURL=webpack:///./src/controllers/authors.controller.js?");

/***/ }),

/***/ "./src/controllers/books.controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/books.controller.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(/*! request */ \"request\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar list = function list(req, res) {\n    _request2.default.get(_config2.default.apiUrl + 'books', function (err, response) {\n        if (err) console.log(err);\n        res.render('books.ejs', {\n            icon: 'fa-user-circle',\n            title: 'Books',\n            books: JSON.parse(response.body),\n            menuId: \"books\"\n        });\n    });\n};\nvar edit = function edit(req, res) {\n    var id = req.params.id;\n    if (id == 0) {\n        res.render('book.ejs', {\n            title: 'New book',\n            book: {\n                id: 0,\n                title: '',\n                pages: '',\n                price: ''\n            },\n            menuId: 'book'\n        });\n    } else {\n        _request2.default.get(_config2.default.apiUrl + 'books/' + id, function (err, response) {\n            if (err) console.log(err);\n            var b = JSON.parse(response.body);\n            res.render('book.ejs', {\n                title: b.title,\n                book: b,\n                menuId: 'book'\n            });\n        });\n    }\n};\n\nvar save = function save(req, res) {\n    if (req.params.id == 0) {\n        _request2.default.post(_config2.default.apiUrl + 'books', { json: {\n                id: req.body.id,\n                title: req.body.title,\n                pages: req.body.pages,\n                price: req.body.price\n            }\n        }, function (err, response) {\n            if (err) console.log(err);\n            res.redirect('/books');\n        });\n    } else {\n        _request2.default.put(_config2.default.apiUrl + 'books/' + req.params.id, { json: {\n                id: req.body.id,\n                title: req.body.title,\n                pages: req.body.pages,\n                price: req.body.price\n            }\n        }, function (err, response) {\n            if (err) console.log(err);\n            res.redirect('/books');\n        });\n    }\n};\n\nvar del = function del(req, res) {\n    _request2.default.delete(_config2.default.apiUrl + 'books/' + req.params.id, function (err, response) {\n        if (err) console.log(err);\n        res.redirect('/books');\n    });\n};\n\nvar find = function find(req, res) {\n    var filter = req.body.name;\n    _request2.default.get(_config2.default.apiUrl + 'authors/find/' + req.body.name, function (err, response) {\n        if (err) console.log(err);\n        res.render('books.ejs', {\n            icon: 'fa-users-circle',\n            title: 'Books',\n            books: JSON.parse(response.body),\n            menuId: \"books\",\n            page: \"Books\"\n        });\n    });\n};\n\nexports.default = { list: list, edit: edit, save: save, del: del, find: find };\n\n//# sourceURL=webpack:///./src/controllers/books.controller.js?");

/***/ }),

/***/ "./src/controllers/publishers.controller.js":
/*!**************************************************!*\
  !*** ./src/controllers/publishers.controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _request = __webpack_require__(/*! request */ \"request\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar list = function list(req, res) {\n    _request2.default.get(_config2.default.apiUrl + 'publishers', function (err, response) {\n        if (err) console.log(err);\n        //    console.log(response.body)\n        res.render('publishers.ejs', {\n            icon: 'fa-user-circle',\n            title: 'Publishers',\n            publishers: JSON.parse(response.body),\n            moment: _moment2.default,\n            menuId: 'publishers'\n        });\n    });\n};\nvar edit = function edit(req, res) {\n    var id = req.params.id;\n    if (id == 0) {\n        res.render('publisher.ejs', {\n            title: 'New publisher',\n            publisher: {\n                id: 0,\n                name: '',\n                road: '',\n                city: '',\n                zipCode: '',\n                country: '',\n                books: []\n            },\n            menuId: 'publisher'\n        });\n    } else {\n        _request2.default.get(_config2.default.apiUrl + 'publishers/' + id, function (err, response) {\n            if (err) console.log(err);\n            var pub = JSON.parse(response.body);\n            res.render('publisher.ejs', {\n                title: pub.name,\n                publisher: pub,\n                menuId: 'publisher'\n            });\n        });\n    }\n};\nvar save = function save(req, res) {\n    if (req.params.id == 0) {\n        _request2.default.post(_config2.default.apiUrl + 'publishers', { json: {\n                id: 0,\n                name: req.body.name,\n                road: req.body.road,\n                city: req.body.city,\n                zipCode: req.body.zipCode,\n                country: req.body.country\n            }\n        }, function (err, response) {\n            if (err) console.log(err);\n            res.redirect('/publishers');\n        });\n    } else {\n        _request2.default.put(_config2.default.apiUrl + 'publishers/' + req.params.id, { json: {\n                id: req.params.id,\n                name: req.body.name,\n                road: req.body.road,\n                city: req.body.city,\n                zipCode: req.body.zipCode,\n                country: req.body.country\n            }\n        }, function (err, response) {\n            if (err) console.log(err);\n            res.redirect('/publishers');\n        });\n    }\n};\n\nvar del = function del(req, res) {\n    _request2.default.delete(_config2.default.apiUrl + 'publishers/' + req.params.id, function (err, response) {\n        if (err) console.log(err);\n        res.redirect('/publishers');\n    });\n};\n\nvar find = function find(req, res) {\n    console.log('bilo sta prije', req.body.name);\n    _request2.default.get(_config2.default.apiUrl + 'publishers/find/' + req.body.name, function (err, response) {\n        if (err) console.log(err);\n        console.log('bilo sta poslije');\n        //    response.body.forEach(item => console.log(item.name));\n        res.render('publishers.ejs', {\n            icon: 'fa-users-circle',\n            title: 'Publishers',\n            publishers: JSON.parse(response.body),\n            menuId: \"publishers\",\n            page: \"Publishers\"\n        });\n    });\n};\n\nexports.default = { list: list, edit: edit, save: save, del: del, find: find // {} zato sto exportujemo vise f-ja\n\n};\n\n//# sourceURL=webpack:///./src/controllers/publishers.controller.js?");

/***/ }),

/***/ "./src/express.js":
/*!************************!*\
  !*** ./src/express.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _router = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.set('views', './views');\napp.use(_express2.default.static('./views'));\n\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _helmet2.default)());\n\n(0, _router2.default)(app);\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/express.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./src/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_express2.default.listen(_config2.default.port, function (err) {\n    if (err) console.log('Error starting server');\n    console.log('Server started on port ' + _config2.default.port);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/router/authors.router.js":
/*!**************************************!*\
  !*** ./src/router/authors.router.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _authors = __webpack_require__(/*! ../controllers/authors.controller */ \"./src/controllers/authors.controller.js\");\n\nvar _authors2 = _interopRequireDefault(_authors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/authors').get(_authors2.default.list);\nrouter.route('/authors/find').post(_authors2.default.find);\n\nrouter.route('/authors/:id').get(_authors2.default.edit).post(_authors2.default.save).put(_authors2.default.save);\n\nrouter.route('/authors/delete/:id').get(_authors2.default.del);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/router/authors.router.js?");

/***/ }),

/***/ "./src/router/books.router.js":
/*!************************************!*\
  !*** ./src/router/books.router.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n     value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _books = __webpack_require__(/*! ../controllers/books.controller */ \"./src/controllers/books.controller.js\");\n\nvar _books2 = _interopRequireDefault(_books);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/books').get(_books2.default.list);\n\nrouter.route('/books/find').post(_books2.default.find);\n\nrouter.route('/books/:id').get(_books2.default.edit).post(_books2.default.save);\n\nrouter.route('/books/delete/:id').get(_books2.default.del);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/router/books.router.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _publishers = __webpack_require__(/*! ./publishers.router */ \"./src/router/publishers.router.js\");\n\nvar _publishers2 = _interopRequireDefault(_publishers);\n\nvar _books = __webpack_require__(/*! ./books.router */ \"./src/router/books.router.js\");\n\nvar _books2 = _interopRequireDefault(_books);\n\nvar _authors = __webpack_require__(/*! ./authors.router */ \"./src/router/authors.router.js\");\n\nvar _authors2 = _interopRequireDefault(_authors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n    app.get('/', function (req, res) {\n        res.render('index.ejs', { menuId: 'home' });\n    });\n    app.use('/', _publishers2.default);\n    app.use('/', _books2.default);\n    app.use('/', _authors2.default);\n};\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/publishers.router.js":
/*!*****************************************!*\
  !*** ./src/router/publishers.router.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n     value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _publishers = __webpack_require__(/*! ../controllers/publishers.controller */ \"./src/controllers/publishers.controller.js\");\n\nvar _publishers2 = _interopRequireDefault(_publishers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/publishers').get(_publishers2.default.list);\n\nrouter.route('/publishers/find').post(_publishers2.default.find);\n\nrouter.route('/publishers/:id').get(_publishers2.default.edit).post(_publishers2.default.save);\n\nrouter.route('/publishers/delete/:id').get(_publishers2.default.del);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/router/publishers.router.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ })

/******/ });