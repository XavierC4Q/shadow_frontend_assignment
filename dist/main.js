var RecordManager =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/users.js":
/*!**********************!*\
  !*** ./api/users.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_fetch_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/fetch-fill */ \"./util/fetch-fill.js\");\n // users endpoint\n\nwindow.path = \"http://localhost:3000/users\"; // getUsers function plus any additional functions go here ...\n\nvar getUsers = function getUsers(options) {\n  var url = new URL(window.path);\n\n  if (options) {\n    url.search = new URLSearchParams(options);\n  }\n\n  return Promise.resolve(Object(_util_fetch_fill__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url));\n};\n\nvar countIdsandSMS = function countIdsandSMS(list) {\n  var ids = [];\n  var smsUsers = 0;\n  list.forEach(function (item) {\n    ids.push(item.id);\n\n    if (item.smsUser) {\n      smsUsers++;\n    }\n  });\n  return {\n    ids: ids,\n    smsUsers: smsUsers\n  };\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var smsCount = document.querySelector('.sms-count');\n  var idContainer = document.querySelector('.ids');\n  var adminContainer = document.querySelector('.admins');\n  getUsers({\n    page: 2,\n    role: 'admin'\n  }).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    var finalResult = countIdsandSMS(data);\n    smsCount.textContent = \"SMS Count: \".concat(finalResult.smsUsers);\n    listAdminIds(finalResult.ids);\n\n    for (var index in data) {\n      createAdminCard(data[index]);\n    }\n\n    return finalResult;\n  }).catch(function (err) {\n    console.log('Error fetching from /users', err);\n    clearBody();\n    appendErrorMessage();\n    return null;\n  });\n\n  var listAdminIds = function listAdminIds(list) {\n    list.forEach(function (item) {\n      var newDiv = document.createElement('div');\n      newDiv.className = 'id-div';\n      newDiv.innerText = item.toString();\n      idContainer.appendChild(newDiv);\n    });\n  };\n\n  var createAdminCard = function createAdminCard(admin) {\n    var adminDiv = document.createElement('div');\n    adminDiv.className = 'admin-div';\n    appendAdminName(admin, adminDiv);\n    adminCardBar(adminDiv);\n    appendAdminEmail(admin, adminDiv);\n    adminContainer.appendChild(adminDiv);\n  };\n\n  var appendAdminName = function appendAdminName(admin, adminDiv) {\n    var nameContainer = document.createElement('div');\n    nameContainer.className = 'name-container';\n    var name = document.createElement('h4');\n    name.className = 'name';\n    name.textContent = \"\".concat(admin.givenName, \" \").concat(admin.familyName);\n    nameContainer.appendChild(name);\n    adminDiv.appendChild(nameContainer);\n  };\n\n  var adminCardBar = function adminCardBar(adminDiv) {\n    var borderContainer = document.createElement('span');\n    borderContainer.className = 'border-container';\n    var border = document.createElement('p');\n    border.className = 'border';\n    borderContainer.appendChild(border);\n    adminDiv.appendChild(borderContainer);\n  };\n\n  var appendAdminEmail = function appendAdminEmail(admin, adminDiv) {\n    var emailContainer = document.createElement('div');\n    emailContainer.className = 'email-container';\n    var email = document.createElement('p');\n    email.className = 'email';\n    email.textContent = \"Email: \".concat(admin.email);\n    emailContainer.appendChild(email);\n    adminDiv.appendChild(emailContainer);\n  };\n\n  var clearBody = function clearBody() {\n    var contentNode = document.querySelector('.content');\n    var footerNode = document.querySelector('.footer');\n\n    while (contentNode.firstChild) {\n      contentNode.removeChild(contentNode.firstChild);\n    }\n\n    while (footerNode.firstChild) {\n      footerNode.removeChild(footerNode.firstChild);\n    }\n  };\n\n  var appendErrorMessage = function appendErrorMessage() {\n    var contentNode = document.querySelector('.content');\n    var errorDiv = document.createElement('div');\n    errorDiv.className = 'error';\n    errorDiv.textContent = 'Failed to fetch users. Is the server running? Did you rebuild your bundle?';\n    contentNode.appendChild(errorDiv);\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (getUsers);\n\n//# sourceURL=webpack://RecordManager/./api/users.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/users */ \"./api/users.js\");\n\n\n//# sourceURL=webpack://RecordManager/./index.js?");

/***/ }),

/***/ "./node_modules/fetch-ponyfill/build/fetch-browser.js":
/*!************************************************************!*\
  !*** ./node_modules/fetch-ponyfill/build/fetch-browser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;(function () {\n  'use strict';\n\n  function fetchPonyfill(options) {\n    var Promise = options && options.Promise || self.Promise;\n    var XMLHttpRequest = options && options.XMLHttpRequest || self.XMLHttpRequest;\n    var global = self;\n\n    return (function () {\n      var self = Object.create(global, {\n        fetch: {\n          value: undefined,\n          writable: true\n        }\n      });\n\n      (function(self) {\n        'use strict';\n\n        if (self.fetch) {\n          return\n        }\n\n        var support = {\n          searchParams: 'URLSearchParams' in self,\n          iterable: 'Symbol' in self && 'iterator' in Symbol,\n          blob: 'FileReader' in self && 'Blob' in self && (function() {\n            try {\n              new Blob()\n              return true\n            } catch(e) {\n              return false\n            }\n          })(),\n          formData: 'FormData' in self,\n          arrayBuffer: 'ArrayBuffer' in self\n        }\n\n        function normalizeName(name) {\n          if (typeof name !== 'string') {\n            name = String(name)\n          }\n          if (/[^a-z0-9\\-#$%&'*+.\\^_`|~]/i.test(name)) {\n            throw new TypeError('Invalid character in header field name')\n          }\n          return name.toLowerCase()\n        }\n\n        function normalizeValue(value) {\n          if (typeof value !== 'string') {\n            value = String(value)\n          }\n          return value\n        }\n\n        // Build a destructive iterator for the value list\n        function iteratorFor(items) {\n          var iterator = {\n            next: function() {\n              var value = items.shift()\n              return {done: value === undefined, value: value}\n            }\n          }\n\n          if (support.iterable) {\n            iterator[Symbol.iterator] = function() {\n              return iterator\n            }\n          }\n\n          return iterator\n        }\n\n        function Headers(headers) {\n          this.map = {}\n\n          if (headers instanceof Headers) {\n            headers.forEach(function(value, name) {\n              this.append(name, value)\n            }, this)\n\n          } else if (headers) {\n            Object.getOwnPropertyNames(headers).forEach(function(name) {\n              this.append(name, headers[name])\n            }, this)\n          }\n        }\n\n        Headers.prototype.append = function(name, value) {\n          name = normalizeName(name)\n          value = normalizeValue(value)\n          var list = this.map[name]\n          if (!list) {\n            list = []\n            this.map[name] = list\n          }\n          list.push(value)\n        }\n\n        Headers.prototype['delete'] = function(name) {\n          delete this.map[normalizeName(name)]\n        }\n\n        Headers.prototype.get = function(name) {\n          var values = this.map[normalizeName(name)]\n          return values ? values[0] : null\n        }\n\n        Headers.prototype.getAll = function(name) {\n          return this.map[normalizeName(name)] || []\n        }\n\n        Headers.prototype.has = function(name) {\n          return this.map.hasOwnProperty(normalizeName(name))\n        }\n\n        Headers.prototype.set = function(name, value) {\n          this.map[normalizeName(name)] = [normalizeValue(value)]\n        }\n\n        Headers.prototype.forEach = function(callback, thisArg) {\n          Object.getOwnPropertyNames(this.map).forEach(function(name) {\n            this.map[name].forEach(function(value) {\n              callback.call(thisArg, value, name, this)\n            }, this)\n          }, this)\n        }\n\n        Headers.prototype.keys = function() {\n          var items = []\n          this.forEach(function(value, name) { items.push(name) })\n          return iteratorFor(items)\n        }\n\n        Headers.prototype.values = function() {\n          var items = []\n          this.forEach(function(value) { items.push(value) })\n          return iteratorFor(items)\n        }\n\n        Headers.prototype.entries = function() {\n          var items = []\n          this.forEach(function(value, name) { items.push([name, value]) })\n          return iteratorFor(items)\n        }\n\n        if (support.iterable) {\n          Headers.prototype[Symbol.iterator] = Headers.prototype.entries\n        }\n\n        function consumed(body) {\n          if (body.bodyUsed) {\n            return Promise.reject(new TypeError('Already read'))\n          }\n          body.bodyUsed = true\n        }\n\n        function fileReaderReady(reader) {\n          return new Promise(function(resolve, reject) {\n            reader.onload = function() {\n              resolve(reader.result)\n            }\n            reader.onerror = function() {\n              reject(reader.error)\n            }\n          })\n        }\n\n        function readBlobAsArrayBuffer(blob) {\n          var reader = new FileReader()\n          reader.readAsArrayBuffer(blob)\n          return fileReaderReady(reader)\n        }\n\n        function readBlobAsText(blob) {\n          var reader = new FileReader()\n          reader.readAsText(blob)\n          return fileReaderReady(reader)\n        }\n\n        function Body() {\n          this.bodyUsed = false\n\n          this._initBody = function(body) {\n            this._bodyInit = body\n            if (typeof body === 'string') {\n              this._bodyText = body\n            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n              this._bodyBlob = body\n            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n              this._bodyFormData = body\n            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n              this._bodyText = body.toString()\n            } else if (!body) {\n              this._bodyText = ''\n            } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {\n              // Only support ArrayBuffers for POST method.\n              // Receiving ArrayBuffers happens via Blobs, instead.\n            } else {\n              throw new Error('unsupported BodyInit type')\n            }\n\n            if (!this.headers.get('content-type')) {\n              if (typeof body === 'string') {\n                this.headers.set('content-type', 'text/plain;charset=UTF-8')\n              } else if (this._bodyBlob && this._bodyBlob.type) {\n                this.headers.set('content-type', this._bodyBlob.type)\n              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')\n              }\n            }\n          }\n\n          if (support.blob) {\n            this.blob = function() {\n              var rejected = consumed(this)\n              if (rejected) {\n                return rejected\n              }\n\n              if (this._bodyBlob) {\n                return Promise.resolve(this._bodyBlob)\n              } else if (this._bodyFormData) {\n                throw new Error('could not read FormData body as blob')\n              } else {\n                return Promise.resolve(new Blob([this._bodyText]))\n              }\n            }\n\n            this.arrayBuffer = function() {\n              return this.blob().then(readBlobAsArrayBuffer)\n            }\n\n            this.text = function() {\n              var rejected = consumed(this)\n              if (rejected) {\n                return rejected\n              }\n\n              if (this._bodyBlob) {\n                return readBlobAsText(this._bodyBlob)\n              } else if (this._bodyFormData) {\n                throw new Error('could not read FormData body as text')\n              } else {\n                return Promise.resolve(this._bodyText)\n              }\n            }\n          } else {\n            this.text = function() {\n              var rejected = consumed(this)\n              return rejected ? rejected : Promise.resolve(this._bodyText)\n            }\n          }\n\n          if (support.formData) {\n            this.formData = function() {\n              return this.text().then(decode)\n            }\n          }\n\n          this.json = function() {\n            return this.text().then(JSON.parse)\n          }\n\n          return this\n        }\n\n        // HTTP methods whose capitalization should be normalized\n        var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']\n\n        function normalizeMethod(method) {\n          var upcased = method.toUpperCase()\n          return (methods.indexOf(upcased) > -1) ? upcased : method\n        }\n\n        function Request(input, options) {\n          options = options || {}\n          var body = options.body\n          if (Request.prototype.isPrototypeOf(input)) {\n            if (input.bodyUsed) {\n              throw new TypeError('Already read')\n            }\n            this.url = input.url\n            this.credentials = input.credentials\n            if (!options.headers) {\n              this.headers = new Headers(input.headers)\n            }\n            this.method = input.method\n            this.mode = input.mode\n            if (!body) {\n              body = input._bodyInit\n              input.bodyUsed = true\n            }\n          } else {\n            this.url = input\n          }\n\n          this.credentials = options.credentials || this.credentials || 'omit'\n          if (options.headers || !this.headers) {\n            this.headers = new Headers(options.headers)\n          }\n          this.method = normalizeMethod(options.method || this.method || 'GET')\n          this.mode = options.mode || this.mode || null\n          this.referrer = null\n\n          if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n            throw new TypeError('Body not allowed for GET or HEAD requests')\n          }\n          this._initBody(body)\n        }\n\n        Request.prototype.clone = function() {\n          return new Request(this)\n        }\n\n        function decode(body) {\n          var form = new FormData()\n          body.trim().split('&').forEach(function(bytes) {\n            if (bytes) {\n              var split = bytes.split('=')\n              var name = split.shift().replace(/\\+/g, ' ')\n              var value = split.join('=').replace(/\\+/g, ' ')\n              form.append(decodeURIComponent(name), decodeURIComponent(value))\n            }\n          })\n          return form\n        }\n\n        function headers(xhr) {\n          var head = new Headers()\n          var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\\n')\n          pairs.forEach(function(header) {\n            var split = header.trim().split(':')\n            var key = split.shift().trim()\n            var value = split.join(':').trim()\n            head.append(key, value)\n          })\n          return head\n        }\n\n        Body.call(Request.prototype)\n\n        function Response(bodyInit, options) {\n          if (!options) {\n            options = {}\n          }\n\n          this.type = 'default'\n          this.status = options.status\n          this.ok = this.status >= 200 && this.status < 300\n          this.statusText = options.statusText\n          this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)\n          this.url = options.url || ''\n          this._initBody(bodyInit)\n        }\n\n        Body.call(Response.prototype)\n\n        Response.prototype.clone = function() {\n          return new Response(this._bodyInit, {\n            status: this.status,\n            statusText: this.statusText,\n            headers: new Headers(this.headers),\n            url: this.url\n          })\n        }\n\n        Response.error = function() {\n          var response = new Response(null, {status: 0, statusText: ''})\n          response.type = 'error'\n          return response\n        }\n\n        var redirectStatuses = [301, 302, 303, 307, 308]\n\n        Response.redirect = function(url, status) {\n          if (redirectStatuses.indexOf(status) === -1) {\n            throw new RangeError('Invalid status code')\n          }\n\n          return new Response(null, {status: status, headers: {location: url}})\n        }\n\n        self.Headers = Headers\n        self.Request = Request\n        self.Response = Response\n\n        self.fetch = function(input, init) {\n          return new Promise(function(resolve, reject) {\n            var request\n            if (Request.prototype.isPrototypeOf(input) && !init) {\n              request = input\n            } else {\n              request = new Request(input, init)\n            }\n\n            var xhr = new XMLHttpRequest()\n\n            function responseURL() {\n              if ('responseURL' in xhr) {\n                return xhr.responseURL\n              }\n\n              // Avoid security warnings on getResponseHeader when not allowed by CORS\n              if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {\n                return xhr.getResponseHeader('X-Request-URL')\n              }\n\n              return\n            }\n\n            xhr.onload = function() {\n              var options = {\n                status: xhr.status,\n                statusText: xhr.statusText,\n                headers: headers(xhr),\n                url: responseURL()\n              }\n              var body = 'response' in xhr ? xhr.response : xhr.responseText\n              resolve(new Response(body, options))\n            }\n\n            xhr.onerror = function() {\n              reject(new TypeError('Network request failed'))\n            }\n\n            xhr.ontimeout = function() {\n              reject(new TypeError('Network request failed'))\n            }\n\n            xhr.open(request.method, request.url, true)\n\n            if (request.credentials === 'include') {\n              xhr.withCredentials = true\n            }\n\n            if ('responseType' in xhr && support.blob) {\n              xhr.responseType = 'blob'\n            }\n\n            request.headers.forEach(function(value, name) {\n              xhr.setRequestHeader(name, value)\n            })\n\n            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n          })\n        }\n        self.fetch.polyfill = true\n      })(typeof self !== 'undefined' ? self : this);\n\n\n      return {\n        fetch: self.fetch,\n        Headers: self.Headers,\n        Request: self.Request,\n        Response: self.Response\n      };\n    }());\n  }\n\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n      return fetchPonyfill;\n    }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}());\n\n\n\n//# sourceURL=webpack://RecordManager/./node_modules/fetch-ponyfill/build/fetch-browser.js?");

/***/ }),

/***/ "./util/fetch-fill.js":
/*!****************************!*\
  !*** ./util/fetch-fill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fetch_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fetch-ponyfill */ \"./node_modules/fetch-ponyfill/build/fetch-browser.js\");\n/* harmony import */ var fetch_ponyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fetch_ponyfill__WEBPACK_IMPORTED_MODULE_0__);\n\nvar fetchFill = fetch_ponyfill__WEBPACK_IMPORTED_MODULE_0___default()({\n  Promise: Promise\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchFill.fetch);\n\n//# sourceURL=webpack://RecordManager/./util/fetch-fill.js?");

/***/ })

/******/ });