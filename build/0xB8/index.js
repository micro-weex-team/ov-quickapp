(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../midea_work/美居weex工程/ov-quickapp/node_modules/_flyio@0.6.14@flyio/dist/npm/hap.js":
/*!*******************************************************************************************!*\
  !*** D:/midea_work/美居weex工程/ov-quickapp/node_modules/_flyio@0.6.14@flyio/dist/npm/hap.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(void 0, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // identity function for calling harmony imports with the correct context

      /******/

      __webpack_require__.i = function (value) {
        return value;
      };
      /******/

      /******/
      // define getter function for harmony exports

      /******/


      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 11);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      module.exports = {
        type: function type(ob) {
          return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
        },
        isObject: function isObject(ob, real) {
          if (real) {
            return this.type(ob) === "object";
          } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
          }
        },
        isFormData: function isFormData(val) {
          return typeof FormData !== 'undefined' && val instanceof FormData;
        },
        trim: function trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        encode: function encode(val) {
          return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        },
        formatParams: function formatParams(data) {
          var str = "";
          var first = true;
          var that = this;

          if (!this.isObject(data)) {
            return data;
          }

          function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);

            if (type == "array") {
              sub.forEach(function (e, i) {
                if (!that.isObject(e)) i = "";

                _encode(e, path + ('%5B' + i + '%5D'));
              });
            } else if (type == "object") {
              for (var key in sub) {
                if (path) {
                  _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                } else {
                  _encode(sub[key], encode(key));
                }
              }
            } else {
              if (!first) {
                str += "&";
              }

              first = false;
              str += path + "=" + encode(sub);
            }
          }

          _encode(data, "");

          return str;
        },
        // Do not overwrite existing attributes
        merge: function merge(a, b) {
          for (var key in b) {
            if (!a.hasOwnProperty(key)) {
              a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
              this.merge(a[key], b[key]);
            }
          }

          return a;
        }
      };
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }

      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /*
       * author: wendu
       * email: 824783146@qq.com
       **/


      var util = __webpack_require__(0);

      var isBrowser = typeof document !== "undefined"; //EngineWrapper can help  generating  a  http engine quickly through a adapter

      function EngineWrapper(adapter) {
        var AjaxEngine = function () {
          function AjaxEngine() {
            _classCallCheck(this, AjaxEngine);

            this.requestHeaders = {};
            this.readyState = 0;
            this.timeout = 0; // 0 stands for no timeout

            this.responseURL = "";
            this.responseHeaders = {};
          }

          _createClass(AjaxEngine, [{
            key: "_call",
            value: function _call(name) {
              this[name] && this[name].apply(this, [].splice.call(arguments, 1));
            }
          }, {
            key: "_changeReadyState",
            value: function _changeReadyState(state) {
              this.readyState = state;

              this._call("onreadystatechange");
            }
          }, {
            key: "open",
            value: function open(method, url) {
              this.method = method;

              if (!url) {
                url = location.href;
              } else {
                url = util.trim(url);

                if (url.indexOf("http") !== 0) {
                  // Normalize the request url
                  if (isBrowser) {
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }
              }

              this.responseURL = url;

              this._changeReadyState(1);
            }
          }, {
            key: "send",
            value: function send(arg) {
              var _this = this;

              arg = arg || null;
              var self = this;

              if (adapter) {
                var request = {
                  method: self.method,
                  url: self.responseURL,
                  headers: self.requestHeaders || {},
                  body: arg
                };
                util.merge(request, self._options || {});

                if (request.method === "GET") {
                  request.body = null;
                }

                self._changeReadyState(3);

                var timer = void 0;
                self.timeout = self.timeout || 0;

                if (self.timeout > 0) {
                  timer = setTimeout(function () {
                    if (self.readyState === 3) {
                      _this._call("onloadend");

                      self._changeReadyState(0);

                      self._call("ontimeout");
                    }
                  }, self.timeout);
                }

                request.timeout = self.timeout;
                adapter(request, function (response) {
                  function getAndDelete(key) {
                    var t = response[key];
                    delete response[key];
                    return t;
                  } // If the request has already timeout, return


                  if (self.readyState !== 3) return;
                  clearTimeout(timer); // Make sure the type of status is integer

                  self.status = getAndDelete("statusCode") - 0;
                  var responseText = getAndDelete("responseText");
                  var statusMessage = getAndDelete("statusMessage"); // Network error, set the status code 0

                  if (!self.status) {
                    self.statusText = responseText;

                    self._call("onerror", {
                      msg: statusMessage
                    });
                  } else {
                    // Parsing the response headers to array in a object,  because
                    // there may be multiple values with the same header name
                    var responseHeaders = getAndDelete("headers");
                    var headers = {};

                    for (var field in responseHeaders) {
                      var value = responseHeaders[field];
                      var key = field.toLowerCase(); // Is array

                      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        headers[key] = value;
                      } else {
                        headers[key] = headers[key] || [];
                        headers[key].push(value);
                      }
                    }

                    var cookies = headers["set-cookie"];

                    if (isBrowser && cookies) {
                      cookies.forEach(function (e) {
                        // Remove the http-Only property of the  cookie
                        // so that JavaScript can operate it.
                        document.cookie = e.replace(/;\s*httpOnly/ig, "");
                      });
                    }

                    self.responseHeaders = headers; // Set the fields of engine from response

                    self.statusText = statusMessage || "";
                    self.response = self.responseText = responseText;
                    self._response = response;

                    self._changeReadyState(4);

                    self._call("onload");
                  }

                  self._call("onloadend");
                });
              } else {
                console.error("Ajax require adapter");
              }
            }
          }, {
            key: "setRequestHeader",
            value: function setRequestHeader(key, value) {
              this.requestHeaders[util.trim(key)] = value;
            }
          }, {
            key: "getResponseHeader",
            value: function getResponseHeader(key) {
              return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
            }
          }, {
            key: "getAllResponseHeaders",
            value: function getAllResponseHeaders() {
              var str = "";

              for (var key in this.responseHeaders) {
                str += key + ":" + this.getResponseHeader(key) + "\r\n";
              }

              return str || null;
            }
          }, {
            key: "abort",
            value: function abort(msg) {
              this._changeReadyState(0);

              this._call("onerror", {
                msg: msg
              });

              this._call("onloadend");
            }
          }], [{
            key: "setAdapter",
            value: function setAdapter(requestAdapter) {
              adapter = requestAdapter;
            }
          }]);

          return AjaxEngine;
        }();

        return AjaxEngine;
      } // learn more about keep-loader: https://github.com/wendux/keep-loader


      ;
      module.exports = EngineWrapper;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var utils = __webpack_require__(0);

      var isBrowser = typeof document !== "undefined";

      var Fly = function () {
        function Fly(engine) {
          _classCallCheck(this, Fly);

          this.engine = engine || XMLHttpRequest;
          this["default"] = this; //For typeScript

          /**
           * Add  lock/unlock API for interceptor.
           *
           * Once an request/response interceptor is locked, the incoming request/response
           * will be added to a queue before they enter the interceptor, they will not be
           * continued  until the interceptor is unlocked.
           *
           * @param [interceptor] either is interceptors.request or interceptors.response
           */

          function wrap(interceptor) {
            var resolve = void 0;
            var reject = void 0;

            function _clear() {
              interceptor.p = resolve = reject = null;
            }

            utils.merge(interceptor, {
              lock: function lock() {
                if (!resolve) {
                  interceptor.p = new Promise(function (_resolve, _reject) {
                    resolve = _resolve;
                    reject = _reject;
                  });
                }
              },
              unlock: function unlock() {
                if (resolve) {
                  resolve();

                  _clear();
                }
              },
              clear: function clear() {
                if (reject) {
                  reject("cancel");

                  _clear();
                }
              }
            });
          }

          var interceptors = this.interceptors = {
            response: {
              use: function use(handler, onerror) {
                this.handler = handler;
                this.onerror = onerror;
              }
            },
            request: {
              use: function use(handler) {
                this.handler = handler;
              }
            }
          };
          var irq = interceptors.request;
          var irp = interceptors.response;
          wrap(irp);
          wrap(irq);
          this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            params: {},
            // Default Url params
            parseJson: true,
            // Convert response data to JSON object automatically.
            withCredentials: false
          };
        }

        _createClass(Fly, [{
          key: "request",
          value: function request(url, data, options) {
            var _this = this;

            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
              if (utils.isObject(url)) {
                options = url;
                url = options.url;
              }

              options = options || {};
              options.headers = options.headers || {};

              function isPromise(p) {
                // some  polyfill implementation of Promise may be not standard,
                // so, we test by duck-typing
                return p && p.then && p["catch"];
              }
              /**
               * If the request/response interceptor has been locked，
               * the new request/response will enter a queue. otherwise, it will be performed directly.
               * @param [promise] if the promise exist, means the interceptor is  locked.
               * @param [callback]
               */


              function enqueueIfLocked(promise, callback) {
                if (promise) {
                  promise.then(function () {
                    callback();
                  });
                } else {
                  callback();
                }
              } // make the http request


              function makeRequest(options) {
                data = options.body; // Normalize the request url

                url = utils.trim(options.url);
                var baseUrl = utils.trim(options.baseURL || "");
                if (!url && isBrowser && !baseUrl) url = location.href;

                if (url.indexOf("http") !== 0) {
                  var isAbsolute = url[0] === "/";

                  if (!baseUrl && isBrowser) {
                    var arr = location.pathname.split("/");
                    arr.pop();
                    baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                  }

                  if (baseUrl[baseUrl.length - 1] !== "/") {
                    baseUrl += "/";
                  }

                  url = baseUrl + (isAbsolute ? url.substr(1) : url);

                  if (isBrowser) {
                    // Normalize the url which contains the ".." or ".", such as
                    // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }

                var responseType = utils.trim(options.responseType || "");
                var needQuery = ["GET", "HEAD", "DELETE", "OPTION"].indexOf(options.method) !== -1;
                var dataType = utils.type(data);
                var params = options.params || {}; // merge url params when the method is "GET" (data is object)

                if (needQuery && dataType === "object") {
                  params = utils.merge(data, params);
                } // encode params to String


                params = utils.formatParams(params); // save url params

                var _params = [];

                if (params) {
                  _params.push(params);
                } // Add data to url params when the method is "GET" (data is String)


                if (needQuery && data && dataType === "string") {
                  _params.push(data);
                } // make the final url


                if (_params.length > 0) {
                  url += (url.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                }

                engine.open(options.method, url); // try catch for ie >=9

                try {
                  engine.withCredentials = !!options.withCredentials;
                  engine.timeout = options.timeout || 0;

                  if (responseType !== "stream") {
                    engine.responseType = responseType;
                  }
                } catch (e) {}

                var customContentType = options.headers[contentType] || options.headers[contentTypeLowerCase]; // default content type

                var _contentType = "application/x-www-form-urlencoded"; // If the request data is json object, transforming it  to json string,
                // and set request content-type to "json". In browser,  the data will
                // be sent as RequestBody instead of FormData

                if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                  data = utils.formatParams(data);
                } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                  _contentType = 'application/json;charset=utf-8';
                  data = JSON.stringify(data);
                } //If user doesn't set content-type, set default.


                if (!(customContentType || needQuery)) {
                  options.headers[contentType] = _contentType;
                }

                for (var k in options.headers) {
                  if (k === contentType && utils.isFormData(data)) {
                    // Delete the content-type, Let the browser set it
                    delete options.headers[k];
                  } else {
                    try {
                      // In browser environment, some header fields are readonly,
                      // write will cause the exception .
                      engine.setRequestHeader(k, options.headers[k]);
                    } catch (e) {}
                  }
                }

                function onresult(handler, data, type) {
                  enqueueIfLocked(responseInterceptor.p, function () {
                    if (handler) {
                      //如果失败，添加请求信息
                      if (type) {
                        data.request = options;
                      }

                      var ret = handler.call(responseInterceptor, data, Promise);
                      data = ret === undefined ? data : ret;
                    }

                    if (!isPromise(data)) {
                      data = Promise[type === 0 ? "resolve" : "reject"](data);
                    }

                    data.then(function (d) {
                      resolve(d);
                    })["catch"](function (e) {
                      reject(e);
                    });
                  });
                }

                function onerror(e) {
                  e.engine = engine;
                  onresult(responseInterceptor.onerror, e, -1);
                }

                function Err(msg, status) {
                  this.message = msg;
                  this.status = status;
                }

                engine.onload = function () {
                  try {
                    // The xhr of IE9 has not response field
                    var response = engine.response || engine.responseText;

                    if (response && options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1 // Some third engine implementation may transform the response text to json object automatically,
                    // so we should test the type of response before transforming it
                    && !utils.isObject(response)) {
                      response = JSON.parse(response);
                    }

                    var headers = engine.responseHeaders; // In browser

                    if (!headers) {
                      headers = {};
                      var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                      items.pop();
                      items.forEach(function (e) {
                        if (!e) return;
                        var key = e.split(":")[0];
                        headers[key] = engine.getResponseHeader(key);
                      });
                    }

                    var status = engine.status;
                    var statusText = engine.statusText;
                    var _data = {
                      data: response,
                      headers: headers,
                      status: status,
                      statusText: statusText
                    }; // The _response filed of engine is set in  adapter which be called in engine-wrapper.js

                    utils.merge(_data, engine._response);

                    if (status >= 200 && status < 300 || status === 304) {
                      _data.engine = engine;
                      _data.request = options;
                      onresult(responseInterceptor.handler, _data, 0);
                    } else {
                      var e = new Err(statusText, status);
                      e.response = _data;
                      onerror(e);
                    }
                  } catch (e) {
                    onerror(new Err(e.msg, engine.status));
                  }
                };

                engine.onerror = function (e) {
                  onerror(new Err(e.msg || "Network Error", 0));
                };

                engine.ontimeout = function () {
                  onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                };

                engine._options = options;
                setTimeout(function () {
                  engine.send(needQuery ? null : data);
                }, 0);
              }

              enqueueIfLocked(requestInterceptor.p, function () {
                utils.merge(options, JSON.parse(JSON.stringify(_this.config)));
                var headers = options.headers;
                headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                delete headers[contentTypeLowerCase];
                options.body = data || options.body;
                url = utils.trim(url || "");
                options.method = options.method.toUpperCase();
                options.url = url;
                var ret = options;

                if (requestInterceptorHandler) {
                  ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                }

                if (!isPromise(ret)) {
                  ret = Promise.resolve(ret);
                }

                ret.then(function (d) {
                  //if options continue
                  if (d === options) {
                    makeRequest(d);
                  } else {
                    resolve(d);
                  }
                }, function (err) {
                  reject(err);
                });
              });
            });
            promise.engine = engine;
            return promise;
          }
        }, {
          key: "all",
          value: function all(promises) {
            return Promise.all(promises);
          }
        }, {
          key: "spread",
          value: function spread(callback) {
            return function (arr) {
              return callback.apply(null, arr);
            };
          }
        }]);

        return Fly;
      }(); //For typeScript


      Fly["default"] = Fly;
      ["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
        Fly.prototype[e] = function (url, data, option) {
          return this.request(url, data, utils.merge({
            method: e
          }, option));
        };
      });
      ["lock", "unlock", "clear"].forEach(function (e) {
        Fly.prototype[e] = function () {
          this.interceptors.request[e]();
        };
      }); // Learn more about keep-loader: https://github.com/wendux/keep-loader

      ;
      module.exports = Fly;
      /***/
    },,,
    /* 3 */

    /* 4 */

    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      }; //hap adapter


      module.exports = function (fetch) {
        return function (request, responseCallback) {
          request.data = request.body;
          request.header = request.headers;

          request.complete = function (ret) {
            if ((typeof ret === "undefined" ? "undefined" : _typeof(ret)) !== "object") {
              ret = {
                code: 0,
                msg: ret
              };
            }

            responseCallback({
              statusCode: ret.code || 0,
              responseText: ret.data,
              headers: ret.headers,
              statusMessage: ret.msg
            });
          };

          fetch.fetch(request);
        };
      };
      /***/

    },,,,,,
    /* 6 */

    /* 7 */

    /* 8 */

    /* 9 */

    /* 10 */

    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //quick app entry

      var Fly = __webpack_require__(2);

      var EngineWrapper = __webpack_require__(1);

      var adapter = __webpack_require__(5);

      module.exports = function (fetch) {
        var hapEngine = EngineWrapper(adapter(fetch));
        return new Fly(hapEngine);
      };
      /***/

    }])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/webpack/buildin/module.js */ "./resources/app/extensions/hap-debugger/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../midea_work/美居weex工程/ov-quickapp/node_modules/_js-sha256@0.9.0@js-sha256/src/sha256.js":
/*!************************************************************************************************!*\
  !*** D:/midea_work/美居weex工程/ov-quickapp/node_modules/_js-sha256@0.9.0@js-sha256/src/sha256.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */

/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  var root = WINDOW ? window : {};

  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }

  var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.versions && process.versions.node;

  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }

  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./resources/app/extensions/hap-debugger/node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];
  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function createOutputMethod(outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function createMethod(is224) {
    var method = createOutputMethod('hex', is224);

    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }

    method.create = function () {
      return new Sha256(is224);
    };

    method.update = function (message) {
      return method.create().update(message);
    };

    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }

    return method;
  };

  var nodeWrap = function nodeWrap(method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';

    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }

      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };

    return nodeMethod;
  };

  var createHmacOutputMethod = function createHmacOutputMethod(outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function createHmacMethod(is224) {
    var method = createHmacOutputMethod('hex', is224);

    method.create = function (key) {
      return new HmacSha256(key, is224);
    };

    method.update = function (key, message) {
      return method.create(key).update(message);
    };

    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }

    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else {
      // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString,
        type = _typeof(message);

    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }

      notString = true;
    }

    var code,
        index = 0,
        i,
        length = message.length,
        blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);

          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
            blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;

      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }

    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }

    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }

    this.finalized = true;
    var blocks = this.blocks,
        i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];

    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }

      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }

    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0,
        b = this.h1,
        c = this.h2,
        d = this.h3,
        e = this.h4,
        f = this.h5,
        g = this.h6,
        h = this.h7,
        blocks = this.blocks,
        j,
        s0,
        s1,
        maj,
        t1,
        t2,
        ch,
        ab,
        da,
        cd,
        bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
      t1 = blocks[j - 2];
      s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;

    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }

        this.first = false;
      } else {
        s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
        s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        ab = a & b;
        maj = ab ^ a & c ^ bc;
        ch = e & f ^ ~e & g;
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }

      s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
      s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
      da = d & a;
      maj = da ^ d & b ^ ab;
      ch = h & e ^ ~h & f;
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
      s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
      cd = c & d;
      maj = cd ^ c & a ^ da;
      ch = g & h ^ ~g & e;
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
      s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
      bc = b & c;
      maj = bc ^ b & d ^ cd;
      ch = f & g ^ ~f & h;
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3,
        h4 = this.h4,
        h5 = this.h5,
        h6 = this.h6,
        h7 = this.h7;
    var hex = HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h4 >> 28 & 0x0F] + HEX_CHARS[h4 >> 24 & 0x0F] + HEX_CHARS[h4 >> 20 & 0x0F] + HEX_CHARS[h4 >> 16 & 0x0F] + HEX_CHARS[h4 >> 12 & 0x0F] + HEX_CHARS[h4 >> 8 & 0x0F] + HEX_CHARS[h4 >> 4 & 0x0F] + HEX_CHARS[h4 & 0x0F] + HEX_CHARS[h5 >> 28 & 0x0F] + HEX_CHARS[h5 >> 24 & 0x0F] + HEX_CHARS[h5 >> 20 & 0x0F] + HEX_CHARS[h5 >> 16 & 0x0F] + HEX_CHARS[h5 >> 12 & 0x0F] + HEX_CHARS[h5 >> 8 & 0x0F] + HEX_CHARS[h5 >> 4 & 0x0F] + HEX_CHARS[h5 & 0x0F] + HEX_CHARS[h6 >> 28 & 0x0F] + HEX_CHARS[h6 >> 24 & 0x0F] + HEX_CHARS[h6 >> 20 & 0x0F] + HEX_CHARS[h6 >> 16 & 0x0F] + HEX_CHARS[h6 >> 12 & 0x0F] + HEX_CHARS[h6 >> 8 & 0x0F] + HEX_CHARS[h6 >> 4 & 0x0F] + HEX_CHARS[h6 & 0x0F];

    if (!this.is224) {
      hex += HEX_CHARS[h7 >> 28 & 0x0F] + HEX_CHARS[h7 >> 24 & 0x0F] + HEX_CHARS[h7 >> 20 & 0x0F] + HEX_CHARS[h7 >> 16 & 0x0F] + HEX_CHARS[h7 >> 12 & 0x0F] + HEX_CHARS[h7 >> 8 & 0x0F] + HEX_CHARS[h7 >> 4 & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }

    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3,
        h4 = this.h4,
        h5 = this.h5,
        h6 = this.h6,
        h7 = this.h7;
    var arr = [h0 >> 24 & 0xFF, h0 >> 16 & 0xFF, h0 >> 8 & 0xFF, h0 & 0xFF, h1 >> 24 & 0xFF, h1 >> 16 & 0xFF, h1 >> 8 & 0xFF, h1 & 0xFF, h2 >> 24 & 0xFF, h2 >> 16 & 0xFF, h2 >> 8 & 0xFF, h2 & 0xFF, h3 >> 24 & 0xFF, h3 >> 16 & 0xFF, h3 >> 8 & 0xFF, h3 & 0xFF, h4 >> 24 & 0xFF, h4 >> 16 & 0xFF, h4 >> 8 & 0xFF, h4 & 0xFF, h5 >> 24 & 0xFF, h5 >> 16 & 0xFF, h5 >> 8 & 0xFF, h5 & 0xFF, h6 >> 24 & 0xFF, h6 >> 16 & 0xFF, h6 >> 8 & 0xFF, h6 & 0xFF];

    if (!this.is224) {
      arr.push(h7 >> 24 & 0xFF, h7 >> 16 & 0xFF, h7 >> 8 & 0xFF, h7 & 0xFF);
    }

    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);

    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }

    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i,
        type = _typeof(key);

    if (type === 'string') {
      var bytes = [],
          length = key.length,
          index = 0,
          code;

      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);

        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = 0xc0 | code >> 6;
          bytes[index++] = 0x80 | code & 0x3f;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = 0xe0 | code >> 12;
          bytes[index++] = 0x80 | code >> 6 & 0x3f;
          bytes[index++] = 0x80 | code & 0x3f;
        } else {
          code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
          bytes[index++] = 0xf0 | code >> 18;
          bytes[index++] = 0x80 | code >> 12 & 0x3f;
          bytes[index++] = 0x80 | code >> 6 & 0x3f;
          bytes[index++] = 0x80 | code & 0x3f;
        }
      }

      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = new Sha256(is224, true).update(key).array();
    }

    var oKeyPad = [],
        iKeyPad = [];

    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);
    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }

  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);

    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;

    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/process/browser.js */ "./resources/app/extensions/hap-debugger/node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/webpack/buildin/module.js */ "./resources/app/extensions/hap-debugger/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../midea_work/美居weex工程/ov-quickapp/src/0xB8/assets/errordata.js":
/*!***********************************************************************!*\
  !*** d:/midea_work/美居weex工程/ov-quickapp/src/0xB8/assets/errordata.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  B8error: function B8error(data) {
    /**
     * 11
     */
    if (data.user_low_no_dust_box == 'yes' || data.user_low_no_dust_box == 'YES' || data.user_alert_no_dust_box == 'yes' || data.user_alert_no_dust_box == 'YES') {
      return "未安装尘盒标识";
    }

    if (data.user_low_dust_box_full == 'yes' || data.user_low_dust_box_full == 'YES' || data.user_alert_dust_box_full == 'yes' || data.user_alert_dust_box_full == 'YES') {
      return "尘盒已满";
    }

    if (data.user_low_normal_fail == 'yes' || data.user_low_normal_fail == 'YES' || data.status_low_has_error == 'yes' || data.status_low_has_error == 'YES') {
      return "机器有故障";
    }

    if (data.user_low_map_overload == 'yes' || data.user_low_map_overload == 'YES') {
      return "地图数据越界了，需要重新绘制";
    }

    if (data.user_low_no_water == 'yes' || data.user_low_no_water == 'YES' || data.user_alert_less_water == 'yes' || data.user_alert_less_water == 'YES') {
      return "水箱缺水";
    }

    if (data.user_low_charging_switch_off == 'yes' || data.user_low_charging_switch_off == 'YES' || data.user_alert_charge_switch_off == 'yes' || data.user_alert_charge_switch_off == 'YES') {
      return "充电电源未打开";
    }

    if (data.user_low_front_back_baffle_stuck == 'yes' || data.user_low_front_back_baffle_stuck == 'YES' || data.user_alert_front_baffle_stuck == 'yes' || data.user_alert_front_baffle_stuck == 'YES') {
      return "前后挡板卡住了";
    }

    if (data.user_low_left_right_wheel_hang == 'yes' || data.user_low_left_right_wheel_hang == 'YES' || data.user_alert_left_right_wheel_hang == 'yes' || data.user_alert_left_right_wheel_hang == 'YES') {
      return "左右轮悬空";
    }
    /**
     * 12
     */


    if (data.failure_low_no_dust_box == 'yes' || data.failure_low_no_dust_box == 'YES') {
      return "未安装尘盒标识";
    }

    if (data.failure_low_dust_box_full == 'yes' || data.failure_low_dust_box_full == 'YES') {
      return "尘盒已满";
    }

    if (data.failure_low_water_tank_overload == 'yes' || data.failure_low_water_tank_overload == 'YES') {
      return "水箱电机电流过载";
    }

    if (data.failure_low_fan == 'yes' || data.failure_low_fan == 'YES') {
      return "风扇故障";
    }

    if (data.failure_low_right_side_brush == 'yes' || data.failure_low_right_side_brush == 'YES') {
      return "右边刷故障";
    }

    if (data.failure_low_left_side_brush == 'yes' || data.failure_low_left_side_brush == 'YES') {
      return "左边刷故障";
    }

    if (data.failure_low_right_wheel_overload == 'yes' || data.failure_low_right_wheel_overload == 'YES') {
      return "右轮过载";
    }

    if (data.failure_low_left_wheel_overload == 'yes' || data.failure_low_left_wheel_overload == 'YES') {
      return "左轮过载";
    }

    if (data.failure_mid_front_collision_switch == 'yes' || data.failure_mid_front_collision_switch == 'YES') {
      return "前边碰撞开关故障";
    }

    if (data.failure_mid_roll_brush == 'yes' || data.failure_mid_roll_brush == 'YES') {
      return "滚刷故障";
    }

    if (data.failure_mid_right_back_fall_sensor == 'yes' || data.failure_mid_right_back_fall_sensor == 'YES') {
      return "右后跌落传感器故障";
    }

    if (data.failure_mid_left_back_fall_sensor == 'yes' || data.failure_mid_left_back_fall_sensor == 'YES') {
      return "左后跌落传感器故障";
    }

    if (data.failure_mid_right_back_hanging_sensor == 'yes' || data.failure_mid_right_back_hanging_sensor == 'YES') {
      return "右轮悬空";
    }

    if (data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES') {
      return "左轮悬空";
    }

    if (data.failure_mid_right_collision_switch == 'yes' || data.failure_mid_right_collision_switch == 'YES') {
      return "右边碰撞开关故障";
    }

    if (data.failure_mid_left_collision_switch == 'yes' || data.failure_mid_left_collision_switch == 'YES') {
      return "左边碰撞开关故障";
    }

    if (data.failure_high_left_front_infra_red == 'yes' || data.failure_high_left_front_infra_red == 'YES') {
      return "左前红外故障";
    }

    if (data.failure_high_right_front_infra_red == 'yes' || data.failure_high_right_front_infra_red == 'YES') {
      return "右前红外故障";
    }

    if (data.failure_high_front_infra_red == 'yes' || data.failure_high_front_infra_red == 'YES') {
      return "前方红外故障";
    }

    if (data.failure_high_left_infra_red == 'yes' || data.failure_high_left_infra_red == 'YES') {
      return "左边红外故障";
    }

    if (data.failure_high_right_infra_red == 'yes' || data.failure_high_right_infra_red == 'YES') {
      return "右边红外故障";
    }

    if (data.failure_high_right_drop_sensor == 'yes' || data.failure_high_right_drop_sensor == 'YES') {
      return "右边跌落传感器故障";
    }

    if (data.failure_high_front_drop_sensor == 'yes' || data.failure_high_front_drop_sensor == 'YES') {
      return "前边跌落传感器故障";
    }

    if (data.failure_high_left_drop_sensor == 'yes' || data.failure_high_left_drop_sensor == 'YES') {
      return "左边跌落传感器故障";
    } // 
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
    // 	return "";
    // }
    // 


    return false;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page":
/*!************************************************************************!*\
  !*** d:/midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!../Component/MideaLoading/index.ux?uxType=comp&name=midea-loading */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp&name=midea-loading")
__webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!../Component/MideaAbout/index.ux?uxType=comp&name=midea-about */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about")
__webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!../Component/MideaTips/index.ux?uxType=comp&name=midea-tips */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp&name=midea-tips")
__webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!../Component/MideaHead/index.ux?uxType=comp&name=midea-head */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp&name=midea-head")
__webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!../Component/MideaFoot/index.ux?uxType=comp&name=midea-foot */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp&name=midea-foot")
__webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!../Component/MideaSelectDiaBottom/index.ux?uxType=comp&name=midea-selectbottom */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp&name=midea-selectbottom")
var $app_template$ = __webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=midea-loading,importNames[]=midea-about,importNames[]=midea-tips,importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-selectbottom */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page&importNames[]=midea-loading,importNames[]=midea-about,importNames[]=midea-tips,importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-selectbottom")
var $app_style$ = __webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ "../../midea_work/美居weex工程/ov-quickapp/src/Common/api/api.js":
/*!****************************************************************!*\
  !*** d:/midea_work/美居weex工程/ov-quickapp/src/Common/api/api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = _interopRequireDefault(__webpack_require__(/*! ../../util.js */ "../../midea_work/美居weex工程/ov-quickapp/src/util.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.websocketfactory"));

var _uuid = _interopRequireDefault(__webpack_require__(/*! ./uuid.js */ "../../midea_work/美居weex工程/ov-quickapp/src/Common/api/uuid.js"));

var _jsSha = _interopRequireDefault(__webpack_require__(/*! js-sha256 */ "../../midea_work/美居weex工程/ov-quickapp/node_modules/_js-sha256@0.9.0@js-sha256/src/sha256.js"));

var _networkAPI = _interopRequireDefault(__webpack_require__(/*! ./networkAPI.js */ "../../midea_work/美居weex工程/ov-quickapp/src/Common/api/networkAPI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var sethost = _util["default"].hostData.setHost; //配置环境（true：pro环境；false：sit环境）

var type = _util["default"].hostData.type; //支持的设备

var host = "";
var url = '';
var appkeyForvivo = '';
var appkeyForoppo = '';
/**
 * 环境配置
 */

if (sethost) {
  host = "https://ov-prod.smartmidea.net";
  url = "wss://ovws-sit.smartmidea.net";
  appkeyForvivo = "00498c1bb52ad5d4d81eca53dae47fd1";
  appkeyForoppo = "ddb2668091508e243cc3b9570d094164";
} else {
  host = "http://ov-sit.smartmidea.net";
  url = "ws://ovws-sit.smartmidea.net";
  appkeyForvivo = "c2db6cbc7609febb7c54f0df5234506c";
  appkeyForoppo = "b37142d426c90ddc1b28d1182f363384";
}

var appidForvivo = 2150;
var appidForoppo = 2149;

// import main from "./main.js";
var Fly = __webpack_require__(/*! flyio/dist/npm/hap */ "../../midea_work/美居weex工程/ov-quickapp/node_modules/_flyio@0.6.14@flyio/dist/npm/hap.js");

var fly = new Fly(_system["default"]);
var appid = '';
var appkey = '';
var clientId = "";
var clientSecret = "";

_system2["default"].getInfo({
  success: function success(ret) {
    if (ret.brand === 'vivo') {
      appid = appidForvivo;
      appkey = appkeyForvivo;

      if (sethost) {
        clientId = "5ae235bbf44ae157689e539437a8b4f1";
        clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
      } else {
        clientId = "5ae235bbf44ae157689e539437a8b4f1";
        clientSecret = "916925b48506ce2f17a4b5f80a6d20ec";
      }
    } else {
      appid = appidForoppo;
      appkey = appkeyForoppo;

      if (sethost) {
        clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
        clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
      } else {
        clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
        clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
      }
    }
  }
});

var _default = {
  //api接口
  hostData: {
    pro: sethost ? '' : 'sit',
    type: type,
    language: '',
    getUserToken: '/v1/iotopen/user/token/get',
    postDeviceControl: '/v1/iotopen/device/deviceControl',
    postDeviceBind: '/v1/iotopen/device/bind',
    postDeviceStatusQuery: '/v1/iotopen/device/statusQuery',
    getcodeUrl: '/v1/open/sn/decode',
    getConfigWorkHelp: "http://smartbbs.midea.com/msmart.php?mod=zhiyin&op=ovsearch",
    getcenterHelp: 'https://api-prod.smartmidea.net/v1/open/connect/guide/list' // getcenterHelp:'https://api-dev.smartmidea.net:8443/v1/open/connect/guide/list'

  },
  //获取语言
  getlanguage: function getlanguage() {
    var p = new Promise(function (resolve, reject) {
      _system2["default"].getInfo({
        success: function success(ret) {
          if (ret.language) {
            resolve(ret.language);
          }
        }
      });
    });
    return p;
  },
  //快连规则
  getUrlSSid: function getUrlSSid(url) {
    var mmid = "&mode=1";
    var mmid1 = '&mode=001';
    var qrCode = '';

    if (url.toLowerCase().indexOf(mmid) != -1 || url.toLowerCase().indexOf(mmid1) != -1) {
      var len = 0;

      if (url.toLowerCase().indexOf(mmid) != -1) {
        len = url.toLowerCase().indexOf(mmid);
      } else {
        len = url.toLowerCase().indexOf(mmid1);
      }

      qrCode = url.substring(0, len);

      if (qrCode.length === 22 || qrCode.length === 64 || qrCode.length === 65 || qrCode.length === 70 || qrCode.length === 69) {
        return "midea_ac_" + qrCode.substring(qrCode.length - 4, qrCode.length);
      } else if (qrCode.length === 106 || qrCode.length === 109) {
        return qrCode.substring(qrCode.length - 13, qrCode.length);
      } else if (qrCode.length === 61) {
        return ("midea_" + qrCode.substring(48, 50) + "_xxxx").toLowerCase();
      } else {
        return '';
      }
    }
  },
  //获取url参数
  getUrlCan: function getUrlCan(url, key) {
    var arrObj = url.split("?");

    if (arrObj.length > 1) {
      var arrPara = arrObj[1].split("&");
      var arr;

      for (var i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split("=");

        if (arr != null && arr[0] == key) {
          return arr[1];
        }
      }

      return false;
    } else {
      return false;
    }
  },
  //匹配设备品类
  getDeviceInformation: function getDeviceInformation(str) {
    var that = this;
    var deviceSSID = "";
    var url_str = str.indexOf('kt_APP');
    var mideaUrl = str.indexOf('midea_');

    if (str.indexOf('kt_APP') > -1) {
      deviceSSID = '0xAC';
      return deviceSSID;
    } else if (str.indexOf('midea_') > -1) {
      deviceSSID = '0x' + str.substring(str.indexOf('midea_') + 6, str.indexOf('midea_') + 8);
      return deviceSSID;
    } else if (that.getUrlCan(str, 'type')) {
      deviceSSID = '0x' + that.getUrlCan(str, 'type').substring(4, 6);
      return deviceSSID;
    } else if (that.getUrlCan(str, 'SSID')) {
      deviceSSID = '0x' + that.getUrlCan(str, 'SSID').substring(6, 8);
      return deviceSSID;
    } else {
      return false;
    }
  },
  //生成UUID字符串
  createUUID: function createUUID() {
    var len = _uuid["default"].create().toString().length;

    var s = _uuid["default"].create().toString();

    var str = s.substring(0, 8) + s.substring(9, 13) + s.substring(14, 18) + s.substring(19, 23) + s.substring(24, len);
    return str;
  },
  //获取时间戳
  getTimestamp: function getTimestamp() {
    // let timestamp = (new Date()).getTime();
    var timestamp = new Date().valueOf();
    var num = new Number(timestamp);
    return num.toString();
  },
  //获取消息签名
  getSignature: function getSignature(str1, str2, str3) {
    var that = this;
    var str = 'appid=' + appid + "&nonce=" + str2 + "&timestamp=" + str3;
    return _jsSha["default"].sha256(str + str1 + appkey);
  },
  //获取设备绑定消息签名
  getSignatureDeviceBind: function getSignatureDeviceBind(str1, str2, str3, str4) {
    var that = this;
    var str = "accesstoken=" + str2 + '&appid=' + appid + "&nonce=" + str3 + "&timestamp=" + str4;
    return _jsSha["default"].sha256(str + str1 + appkey);
  },
  //弹出框
  showDialog: function showDialog(str) {
    _system3["default"].showToast({
      message: "请求失败：" + JSON.stringify(str),
      duration: 1
    });
  },
  //第三方平台用户获取访问令牌accessToken
  getUserToken: function getUserToken(params) {
    var that = this;
    var objStr = '';
    params.type = 1;

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    strObj.signature = that.getSignature(objStr, strObj.nonce, strObj.timestamp);
    var p = new Promise(function (resolve, reject) {
      if (_typeof(params) === 'object') {
        console.log("params:" + JSON.stringify(params));
        console.log("strObj:" + JSON.stringify(strObj));
        console.log("url:" + host + that.hostData.getUserToken);
        fly.post(host + that.hostData.getUserToken, params, {
          headers: strObj
        }).then(function (response) {
          response.code = response.status;
          console.log("返回信息：" + JSON.stringify(response));
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      } else {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      }
    });
    return p;
  },
  //绑定设备
  postDeviceBind: function postDeviceBind(params, accessToken) {
    var that = this;
    var objStr = '';

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      'accessToken': accessToken,
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    strObj.signature = that.getSignatureDeviceBind(objStr, strObj.accessToken, strObj.nonce, strObj.timestamp);
    var p = new Promise(function (resolve, reject) {
      if (_typeof(params) === 'object') {
        console.log("params:" + JSON.stringify(params));
        console.log("strObj:" + JSON.stringify(strObj));
        console.log("url:" + host + that.hostData.postDeviceBind);
        fly.post(host + that.hostData.postDeviceBind, params, {
          headers: strObj
        }).then(function (response) {
          response.code = response.status;
          resolve(response);
          console.log("返回信息：" + JSON.stringify(response));
        })["catch"](function (error) {
          reject(error);
        });
      } else {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      }
    });
    return p;
  },
  //设备控制接口
  postDeviceControl: function postDeviceControl(params, accessToken, lanonline, deviceid) {
    var that = this;
    var objStr = '';

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    console.log("请求开始时间戳：" + that.getTimestamp());
    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      'accessToken': accessToken,
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    strObj.signature = that.getSignatureDeviceBind(objStr, strObj.accessToken, strObj.nonce, strObj.timestamp);

    if (lanonline == 'true') {
      return _networkAPI["default"].setDeviceStatus(deviceid, params.devices[0].properties);
    } else {
      var p = new Promise(function (resolve, reject) {
        if (_typeof(params) === 'object') {
          console.log("params:" + JSON.stringify(params));
          console.log("strObj:" + JSON.stringify(strObj));
          console.log("url:" + host + that.hostData.postDeviceControl);
          fly.post(host + that.hostData.postDeviceControl, params, {
            headers: strObj
          }).then(function (response) {
            response.code = response.status;
            response.lanonline = lanonline;
            console.log("返回信息：" + JSON.stringify(response)); // 					if (response.code && response.code === 200) {
            // 						let bind_res_data = typeof response.data == 'object' ? response.data : JSON.parse(response.data);
            // 						if (!parseInt(bind_res_data.devices[0].status) && !parseInt(bind_res_data.code)) {
            // 							let obj = (typeof bind_res_data.devices[0].props) == 'object' ? bind_res_data.devices[0].props : JSON.parse(bind_res_data.devices[0].props);
            // 							if(parseInt(obj.error_code)){
            // 								prompt.showToast({
            // 									message:'数据有误，设备可能存在故障，请检查后再操作'
            // 								})
            // 							}
            // 						}
            // 					}

            resolve(response);
          })["catch"](function (error) {
            var obj = JSON.parse(error);
            obj.online = lanonline;
            reject(obj);
          });
        } else {
          var obj = {
            errorCode: "0000",
            msg: "参数有误",
            online: lanonline
          };
          reject(obj);
        }
      });
      return p;
    }
  },
  //设备状态查询
  postDeviceStatusQuery: function postDeviceStatusQuery(params, accessToken, lanonline, deviceid) {
    var that = this;
    var objStr = ''; // console.log("")

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      'accessToken': accessToken,
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    strObj.signature = that.getSignatureDeviceBind(objStr, strObj.accessToken, strObj.nonce, strObj.timestamp);

    if (lanonline == 'true') {
      return _networkAPI["default"].getqueryDeviceStatus(deviceid);
    } else {
      var p = new Promise(function (resolve, reject) {
        if (_typeof(params) === 'object') {
          console.log("params:" + JSON.stringify(params));
          console.log("strObj:" + JSON.stringify(strObj));
          console.log("url:" + host + that.hostData.postDeviceStatusQuery);
          fly.post(host + that.hostData.postDeviceStatusQuery, params, {
            headers: strObj
          }).then(function (response) {
            response.code = response.status;
            response.lanonline = lanonline;
            console.log("返回信息：" + JSON.stringify(response)); // 					if (response.code && response.code === 200) {
            // 						let data = (typeof response.data) === "object" ? response.data : JSON.parse(response.data);
            // 						if (!parseInt(data.code) && !parseInt(data.devices[0].status)) {
            // 							let obj =  (typeof data.devices[0].properties) === 'object'?data.devices[0].properties:JSON.parse(data.devices[0].properties);
            // 							if(parseInt(obj.error_code)){
            // 								prompt.showToast({
            // 									message:'数据有误，设备可能存在故障，请检查后再操作'
            // 								})
            // 							}
            // 						}
            // 					}

            resolve(response);
          })["catch"](function (error) {
            console.log(JSON.stringify(error));
            var obj = JSON.parse(error);
            obj.online = "false";
            reject(obj);
          });
        } else {
          console.log("asdassdasssssssssssssd==============================");
          var obj = {
            errorCode: "0000",
            msg: "参数有误",
            online: "false"
          };
          reject(obj);
        }
      });
      return p;
    }
  },
  //获取配网指引信息
  getConfigWorkHelp: function getConfigWorkHelp(params) {
    var that = this;
    var p = new Promise(function (resolve, reject) {
      if (_typeof(params) === 'object') {
        _system["default"].fetch({
          url: that.hostData.getConfigWorkHelp,
          data: params,
          method: 'GET',
          success: function success(data) {
            console.log("配网指引:" + JSON.stringify(data));
            resolve(data);
          },
          fail: function fail(data, code) {
            reject(data + "code:" + code);
          }
        });
      } else {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      }
    });
    return p;
  },

  /**
   * 走中台的配网指引
   */
  getCenterWorkHelp: function getCenterWorkHelp(params) {
    var that = this;
    var obj = params;
    obj.reqId = that.createUUID();
    obj.stamp = that.getTimestamp();
    console.log("配网指引请求参数：" + JSON.stringify(obj));
    var strObj = {
      "Content-Type": 'application/json'
    };
    var p = new Promise(function (resolve, reject) {
      _system2["default"].getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec";
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          obj.clientId = clientId;

          if (_typeof(params) === 'object') {
            fly.post(that.hostData.getcenterHelp, obj, {
              headers: strObj
            }).then(function (data) {
              console.log("配网指引:" + JSON.stringify(data));
              resolve(data);
            })["catch"](function (error) {
              console.log(JSON.stringify(error));
              reject(error);
            });
          } else {
            var objdata = {
              errorCode: "0000",
              msg: "参数有误"
            };
            reject(objdata);
          }
        }
      });
    });
    return p;
  },
  //websocket
  // createWebsocket
  createWensocket: function createWensocket(deviceid) {
    var did = deviceid;
    var p = new Promise(function (resolve, reject) {
      _system2["default"].getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            appid = appidForvivo;
            appkey = appkeyForvivo;
          } else {
            appid = appidForoppo;
            appkey = appkeyForoppo;
          }

          var len = appkey.length;
          var s = Math.floor(Math.random() * (len - 12)); // 					prompt.showToast({
          // 						message:"url:"+url + '/simplews/status/fetch?appId=' + appid + '&s=' + s + '&l=10&key=' + appkey.substring(s,s+10) + '&did=' + did
          // 					})

          var ws = _system5["default"].create({
            url: url + '/simplews/status/fetch?appId=' + appid + '&s=' + s + '&l=10&key=' + appkey.substring(s, s + 10) + '&did=' + did,
            header: {
              'content-type': 'application/json'
            }
          });

          resolve(ws);
        }
      });
    });
    return p;
  },
  //错误码code
  getCode: function getCode(code, msg) {
    var str = code.toString();
    var data = '';

    switch (str) {
      case '9999':
        data = '系统错误';
        break;

      case '3001':
        data = '请求的地址不存在';
        break;

      case '3002':
        data = "请求的HTTP METHOD不支持，请检查是否选择了正确的POST/GET方式";
        break;

      case '3003':
        data = "缺少必备参数";
        break;

      case '3004':
        data = "参数值错误";
        break;

      case '3155':
        data = "设备已被解除绑定";
        break;

      case '3156':
        data = "refreshToken不存在";
        break;

      case '3157':
        data = "refreshToken过期";
        break;

      case '3158':
        data = "token过期";
        break;

      case '3159':
        data = "token不存在";
        break;

      case '3138':
        data = "设备控制超时，请重试";
        break;

      default:
        data = msg + ',请稍后重试';
        break;
    }

    return data;
  },
  //错误码status
  getStatus: function getStatus(type, code, msg) {
    var str = code.toString();
    var data = '';

    switch (str) {
      case '-1':
        data = '设备已被解除绑定';
        break;

      case '-2':
        data = '设备无此属性';
        break;

      case '-3':
        data = "此属性是不可操作的";
        break;

      case '-4':
        data = "无效的subscriptionId";
        break;

      case '-5':
        data = "设备当前状态不支持此操作";
        break;
      // 			case '-6':
      // 				data = "设备离线"
      // 			break;

      case '-7':
        data = "设备处于关闭状态";
        break;

      case '-8':
        data = "控制指令不正确";
        break;

      case '-9':
        if (type === 'get') {
          data = "获取设备失败，请稍后重试";
        } else {
          data = "设备操作失败，请稍后重试";
        }

        break;

      case '-100':
        if (type === 'get') {
          data = "获取设备失败，请稍后重试";
        } else {
          data = "设备操作失败，请稍后重试";
        }

        break;

      default:
        data = msg + ',请稍后重试';
        break;
    }

    console.log("失败信息" + data);
    return data;
  }
}; //添加响应拦截器，响应拦截器会在then/catch处理之前执行

exports["default"] = _default;
fly.interceptors.response.use(function (response) {//只将请求结果的data字段返回
  // return response.data
}, function (err) {
  console.log("请求失败信息：" + JSON.stringify(err));

  _system3["default"].showDialog({
    title: '请求失败',
    message: '连接不上服务器，请检查网络后重试！',
    buttons: [{
      text: '确定',
      color: '#33dd44'
    }],
    success: function success(data) {
      _system4["default"].clear();

      _system4["default"].back();

      console.log('handling callback');
    },
    cancel: function cancel() {
      _system4["default"].clear();

      _system4["default"].back();

      console.log('handling cancel');
    },
    fail: function fail(data, code) {
      _system4["default"].clear();

      _system4["default"].back();

      console.log("handling fail, code = ".concat(code));
    }
  }); // that.showDialog(err);

});

/***/ }),

/***/ "../../midea_work/美居weex工程/ov-quickapp/src/Common/api/networkAPI.js":
/*!***********************************************************************!*\
  !*** d:/midea_work/美居weex工程/ov-quickapp/src/Common/api/networkAPI.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.iot"));

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.device"));

var _util = _interopRequireDefault(__webpack_require__(/*! ../../util.js */ "../../midea_work/美居weex工程/ov-quickapp/src/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var sethost = _util["default"].hostData.setHost; //配置环境（true：pro环境；false：sit环境）

var clientId = "";
var clientSecret = "";
var _default = {
  $Lanonline: {
    deviceid: '',
    isonLan: "false"
  },
  mes: {
    clientId: 'db3924f6431a4c461667bd164a4ab1fb',
    clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b'
  },
  //获取二维码解析
  lanHelpInit: function lanHelpInit() {
    var that = this;
    var p = new Promise(function (resolve, reject) {
      _system2["default"].getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec"; // 				clientId: 'db3924f6431a4c461667bd164a4ab1fb';
              // 				clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b';
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          var params = {
            token: 'Bearer mideaIotOpenAccessToken',
            clientId: clientId,
            clientSecret: clientSecret
          };
          console.log("setAccount:" + JSON.stringify(params));

          _service["default"].send({
            action: 'sendAccount',
            data: params,
            success: function success(res) {
              console.log("初始化：" + JSON.stringify(res));
              resolve(res);
            },
            fail: function fail(data, code) {
              reject(data);
            }
          });
        }
      });
    });
    return p;
  },
  //局域网控制

  /**
   * 1.初始化
   */
  deviceInit: function deviceInit(token, deviceID) {
    var that = this;
    console.log("初始化开始");
    var p = new Promise(function (resolve, reject) {
      _system2["default"].getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec"; // 				clientId: 'db3924f6431a4c461667bd164a4ab1fb';
              // 				clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b';
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          var params = {
            token: token,
            clientId: clientId,
            clientSecret: clientSecret
          };
          console.log("setAccount:" + JSON.stringify(params));

          _service["default"].send({
            action: 'sendAccount',
            data: params,
            success: function success(res) {
              console.log("初始化：" + JSON.stringify(res));

              _service["default"].send({
                action: 'CustomerHandler.addDevice',
                data: deviceID,
                success: function success(res) {
                  that.LanGetData(deviceID);
                  resolve(res);
                },
                fail: function fail(data, code) {
                  reject(data);
                }
              });
            },
            fail: function fail(data, code) {
              reject(data);
            }
          });
        }
      });
    });
    return p;
  },

  /**
   * 2.添加设备局域网广播监控
   */
  addDevice: function addDevice(deviceID) {
    var that = this;
    var params = {
      deviceId: deviceID
    };

    _service["default"].send({
      action: 'CustomerHandler.addDevice',
      data: deviceID,
      success: function success(res) {},
      fail: function fail(data, code) {
        _system["default"].showToast({
          message: "fail:" + JSON.stringify(data),
          duration: 1
        });
      }
    });
  },

  /**
   * 3.局域网在线
   * 
   */
  deviceLan: function deviceLan(deviceId) {
    var that = this;
    var params = {
      deviceId: deviceId
    };
    var p = new Promise(function (resolve, reject) {
      if (deviceId == '') {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      } else {
        _service["default"].send({
          action: 'CustomerHandler.getLanState',
          data: deviceId,
          success: function success(res) {
            var data = _typeof(res) === 'object' ? res : JSON.parse(res);
            console.log("局域网是否在线：" + JSON.stringify(res));

            if (data.message.toString() == '1') {
              resolve(data);
            } else {
              var _obj = {
                errorCode: "0001",
                msg: data.message ? data.message : "局域网不在线"
              };
              reject(_obj);
            }
          },
          fail: function fail(data, code) {
            var obj = {
              errorCode: "000" + code,
              msg: JSON.stringify(data)
            };
            reject(obj);
          }
        });
      }
    });
    return p;
  },

  /**
   * 监听设备在线状态
   * 
   */
  LanGetData: function LanGetData(deviceId) {
    var that = this;
    var params = {
      deviceId: deviceId // let p = new Promise(function(resolve, reject){

    };

    _service["default"].send({
      action: 'CustomerHandler.registerStateListener',
      data: deviceId,
      success: function success(res) {
        console.log("成功了：" + JSON.stringify(res));
        var data = _typeof(res) === 'object' ? res : JSON.parse(res);

        if (data.message.toString() == '1') {
          that.$Lanonline.deviceid = deviceId;
          that.$Lanonline.isonLan = "true";
        } else {
          var obj = {
            errorCode: "0001",
            msg: data.message ? data.message : "局域网不在线"
          };
          that.$Lanonline.deviceid = deviceId;
          that.$Lanonline.isonLan = "false";
        }
      },
      fail: function fail(data, code) {
        that.$Lanonline.deviceid = deviceId;
        that.$Lanonline.isonLan = "false";
        console.log("失败了" + JSON.stringify(data));
      }
    }); // 		})
    // 		return p;

  },

  /**
   * 设备状态查询
   */
  getqueryDeviceStatus: function getqueryDeviceStatus(deviceId) {
    var that = this;
    var params = {
      deviceId: deviceId
    };
    var p = new Promise(function (resolve, reject) {
      _service["default"].send({
        action: 'queryDeviceStatus',
        data: {
          deviceInfo: {
            deviceUuid: deviceId
          }
        },
        success: function success(res) {
          console.log("设备信息：" + JSON.stringify(res));
          resolve(res);
        },
        fail: function fail(data, code) {
          console.log("设备信息失败了" + JSON.stringify(data));
          reject(data);
        }
      });
    });
    return p;
  },

  /**
   * 设备控制
   */
  setDeviceStatus: function setDeviceStatus(deviceId, params) {
    var that = this;
    console.log("控制参数:" + JSON.stringify(params));
    var p = new Promise(function (resolve, reject) {
      _service["default"].send({
        action: 'updateDeviceStatus',
        data: {
          deviceInfo: {
            deviceUuid: deviceId
          },
          controlData: params
        },
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(data, code) {
          console.log("控制设备失败了" + JSON.stringify(data));
          reject(data);
        }
      });
    });
    return p;
  },

  /**
   * 配网二维码解析
   */
  getInfoByQrCode: function getInfoByQrCode(url) {
    console.log("跑到二维码解析了" + url);
    var that = this;
    var p = new Promise(function (resolve, reject) {
      _system2["default"].getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec"; // 				clientId: 'db3924f6431a4c461667bd164a4ab1fb';
              // 				clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b';
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          var params = {
            token: 'Bearer mideaIotOpenAccessToken',
            clientId: clientId,
            clientSecret: clientSecret
          };
          console.log("二维码解析参数：" + JSON.stringify(params));

          _service["default"].send({
            action: 'sendAccount',
            data: params,
            success: function success(res) {
              console.log("二维码解析初始化：" + JSON.stringify(res));

              _service["default"].send({
                action: 'CustomerHandler.getDeviceInfoByQrCode',
                data: url,
                success: function success(res) {
                  console.log("解析结果：" + JSON.stringify(res));
                  resolve(res);
                },
                fail: function fail(data, code) {
                  console.log("解析失败了" + JSON.stringify(data));
                  reject(data);
                }
              });
            },
            fail: function fail(data, code) {
              reject(data);
            }
          });
        }
      });
    });
    return p;
  },

  /**
   * 设备扫描
   * 
   */
  startScanDeviceWifi: function startScanDeviceWifi(deviceId) {
    var params = {
      deviceId: deviceId
    };
    console.log("设备扫描");

    _service["default"].send({
      action: 'scanDevice',
      data: {
        timeout: 5000
      },
      success: function success(res) {
        console.log("设备扫描：" + JSON.stringify(res));

        _system["default"].showToast({
          message: "scanDevice:" + JSON.stringify(res),
          duration: 1
        });
      },
      fail: function fail(data, code) {
        _system["default"].showToast({
          message: "fail:" + JSON.stringify(data),
          duration: 1
        });
      }
    });
  },

  /**
   * 配网埋点
   * 
   */
  statisticReport: function statisticReport(params) {
    _service["default"].send({
      action: 'statisticReport',
      data: params,
      success: function success(data) {
        console.log('埋点信息：' + JSON.stringify(data));
      },
      fail: function fail(data, code) {
        console.log(JSON.stringify(data));
      }
    });
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../midea_work/美居weex工程/ov-quickapp/src/Common/api/uuid.js":
/*!*****************************************************************!*\
  !*** d:/midea_work/美居weex工程/ov-quickapp/src/Common/api/uuid.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * UUID-js: A js library to generate and parse UUIDs, TimeUUIDs and generate
 * TimeUUID based on dates for range selections.
 * @see http://www.ietf.org/rfc/rfc4122.txt
 **/
function UUIDjs() {}

;

UUIDjs.maxFromBits = function (bits) {
  return Math.pow(2, bits);
};

UUIDjs.limitUI04 = UUIDjs.maxFromBits(4);
UUIDjs.limitUI06 = UUIDjs.maxFromBits(6);
UUIDjs.limitUI08 = UUIDjs.maxFromBits(8);
UUIDjs.limitUI12 = UUIDjs.maxFromBits(12);
UUIDjs.limitUI14 = UUIDjs.maxFromBits(14);
UUIDjs.limitUI16 = UUIDjs.maxFromBits(16);
UUIDjs.limitUI32 = UUIDjs.maxFromBits(32);
UUIDjs.limitUI40 = UUIDjs.maxFromBits(40);
UUIDjs.limitUI48 = UUIDjs.maxFromBits(48); // Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
// @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

UUIDjs.randomUI04 = function () {
  return getRandomInt(0, UUIDjs.limitUI04 - 1);
};

UUIDjs.randomUI06 = function () {
  return getRandomInt(0, UUIDjs.limitUI06 - 1);
};

UUIDjs.randomUI08 = function () {
  return getRandomInt(0, UUIDjs.limitUI08 - 1);
};

UUIDjs.randomUI12 = function () {
  return getRandomInt(0, UUIDjs.limitUI12 - 1);
};

UUIDjs.randomUI14 = function () {
  return getRandomInt(0, UUIDjs.limitUI14 - 1);
};

UUIDjs.randomUI16 = function () {
  return getRandomInt(0, UUIDjs.limitUI16 - 1);
};

UUIDjs.randomUI32 = function () {
  return getRandomInt(0, UUIDjs.limitUI32 - 1);
};

UUIDjs.randomUI40 = function () {
  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 40 - 30)) * (1 << 30);
};

UUIDjs.randomUI48 = function () {
  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 48 - 30)) * (1 << 30);
};

UUIDjs.paddedString = function (string, length, z) {
  string = String(string);
  z = !z ? '0' : z;
  var i = length - string.length;

  for (; i > 0; i >>>= 1, z += z) {
    if (i & 1) {
      string = z + string;
    }
  }

  return string;
};

UUIDjs.prototype.fromParts = function (timeLow, timeMid, timeHiAndVersion, clockSeqHiAndReserved, clockSeqLow, node) {
  this.version = timeHiAndVersion >> 12 & 0xF;
  this.hex = UUIDjs.paddedString(timeLow.toString(16), 8) + '-' + UUIDjs.paddedString(timeMid.toString(16), 4) + '-' + UUIDjs.paddedString(timeHiAndVersion.toString(16), 4) + '-' + UUIDjs.paddedString(clockSeqHiAndReserved.toString(16), 2) + UUIDjs.paddedString(clockSeqLow.toString(16), 2) + '-' + UUIDjs.paddedString(node.toString(16), 12);
  return this;
};

UUIDjs.prototype.toString = function () {
  return this.hex;
};

UUIDjs.prototype.toURN = function () {
  return 'urn:uuid:' + this.hex;
};

UUIDjs.prototype.toBytes = function () {
  var parts = this.hex.split('-');
  var ints = [];
  var intPos = 0;

  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i].length; j += 2) {
      ints[intPos++] = parseInt(parts[i].substr(j, 2), 16);
    }
  }

  return ints;
};

UUIDjs.prototype.equals = function (uuid) {
  if (!(uuid instanceof UUID)) {
    return false;
  }

  if (this.hex !== uuid.hex) {
    return false;
  }

  return true;
};

UUIDjs.getTimeFieldValues = function (time) {
  var ts = time - Date.UTC(1582, 9, 15);
  var hm = ts / 0x100000000 * 10000 & 0xFFFFFFF;
  return {
    low: (ts & 0xFFFFFFF) * 10000 % 0x100000000,
    mid: hm & 0xFFFF,
    hi: hm >>> 16,
    timestamp: ts
  };
};

UUIDjs._create4 = function () {
  return new UUIDjs().fromParts(UUIDjs.randomUI32(), UUIDjs.randomUI16(), 0x4000 | UUIDjs.randomUI12(), 0x80 | UUIDjs.randomUI06(), UUIDjs.randomUI08(), UUIDjs.randomUI48());
};

UUIDjs._create1 = function () {
  var now = new Date().getTime();
  var sequence = UUIDjs.randomUI14();
  var node = (UUIDjs.randomUI08() | 1) * 0x10000000000 + UUIDjs.randomUI40();
  var tick = UUIDjs.randomUI04();
  var timestamp = 0;
  var timestampRatio = 1 / 4;

  if (now != timestamp) {
    if (now < timestamp) {
      sequence++;
    }

    timestamp = now;
    tick = UUIDjs.randomUI04();
  } else if (Math.random() < timestampRatio && tick < 9984) {
    tick += 1 + UUIDjs.randomUI04();
  } else {
    sequence++;
  }

  var tf = UUIDjs.getTimeFieldValues(timestamp);
  var tl = tf.low + tick;
  var thav = tf.hi & 0xFFF | 0x1000;
  sequence &= 0x3FFF;
  var cshar = sequence >>> 8 | 0x80;
  var csl = sequence & 0xFF;
  return new UUIDjs().fromParts(tl, tf.mid, thav, cshar, csl, node);
};

UUIDjs.create = function (version) {
  version = version || 4;
  return this['_create' + version]();
};

UUIDjs.fromTime = function (time, last) {
  last = !last ? false : last;
  var tf = UUIDjs.getTimeFieldValues(time);
  var tl = tf.low;
  var thav = tf.hi & 0xFFF | 0x1000; // set version '0001'

  if (last === false) {
    return new UUIDjs().fromParts(tl, tf.mid, thav, 0, 0, 0);
  } else {
    return new UUIDjs().fromParts(tl, tf.mid, thav, 0x80 | UUIDjs.limitUI06, UUIDjs.limitUI08 - 1, UUIDjs.limitUI48 - 1);
  }
};

UUIDjs.firstFromTime = function (time) {
  return UUIDjs.fromTime(time, false);
};

UUIDjs.lastFromTime = function (time) {
  return UUIDjs.fromTime(time, true);
};

UUIDjs.fromURN = function (strId) {
  var r,
      p = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i;

  if (r = p.exec(strId)) {
    return new UUIDjs().fromParts(parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16), parseInt(r[4], 16), parseInt(r[5], 16), parseInt(r[6], 16));
  }

  return null;
};

UUIDjs.fromBytes = function (ints) {
  if (ints.length < 5) {
    return null;
  }

  var str = '';
  var pos = 0;
  var parts = [4, 2, 2, 2, 6];

  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i]; j++) {
      var octet = ints[pos++].toString(16);

      if (octet.length == 1) {
        octet = '0' + octet;
      }

      str += octet;
    }

    if (parts[i] !== 6) {
      str += '-';
    }
  }

  return UUIDjs.fromURN(str);
};

UUIDjs.fromBinary = function (binary) {
  var ints = [];

  for (var i = 0; i < binary.length; i++) {
    ints[i] = binary.charCodeAt(i);

    if (ints[i] > 255 || ints[i] < 0) {
      throw new Error('Unexpected byte in binary data.');
    }
  }

  return UUIDjs.fromBytes(ints);
}; // Aliases to support legacy code. Do not use these when writing new code as
// they may be removed in future versions!


UUIDjs['new'] = function () {
  return this.create(4);
};

UUIDjs.newTS = function () {
  return this.create(1);
}; // export default UUIDjs;


module.exports = UUIDjs;

/***/ }),

/***/ "../../midea_work/美居weex工程/ov-quickapp/src/util.js":
/*!******************************************************!*\
  !*** d:/midea_work/美居weex工程/ov-quickapp/src/util.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * 快应用环境配置
 */
var _default = {
  hostData: {
    setHost: false,
    //配置环境（true：pro环境；false：sit环境）
    type: ["ac", "ca", "b0", "db", "e2", "ea", "fa", "fc", "fd", "e1", "e3", "b8", "b6"] //支持的设备

  }
};
exports["default"] = _default;

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%"
  },
  ".E1_nav_list_lock_l": {
    "width": "100%",
    "height": "84px",
    "marginTop": "60px",
    "paddingRight": "60px"
  },
  ".E1_nav_list_lock_img": {
    "width": "84px",
    "height": "100%",
    "resizeMode": "cover"
  },
  ".E1_nav_list_lock": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "width": "100%",
    "height": "84px",
    "marginTop": "60px",
    "paddingRight": "60px"
  },
  ".E1_nav_list_usemeiju": {
    "width": "100%",
    "textAlign": "right",
    "marginTop": "10px",
    "paddingRight": "55px",
    "fontSize": "24px",
    "color": "#FFFFFF"
  },
  ".B8_nav": {
    "flexDirection": "column"
  },
  ".B8_nav_status": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "140px",
    "marginTop": "370px"
  },
  ".B8_nav_battery": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "48px"
  },
  ".B8_nav_data": {
    "width": "100%",
    "flexDirection": "row",
    "marginTop": "150px"
  },
  ".B8_nav_data_center": {
    "width": "2px",
    "height": "220px",
    "backgroundColor": "#FFFFFF",
    "opacity": 0.3
  },
  ".B8_nav_data_text": {
    "width": "150px"
  },
  ".B8_nav_data_left": {
    "width": "45%",
    "height": "220px",
    "marginLeft": "150px",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".B8_nav_data_left_data": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "140px"
  },
  ".B8_nav_data_left_text": {
    "width": "100%",
    "textAlign": "center",
    "marginTop": "20px",
    "fontSize": "48px",
    "opacity": 0.6
  },
  ".B8_nav_data_left_dan": {
    "marginTop": "10px",
    "width": "70px",
    "height": "40px",
    "fontSize": "36px"
  },
  ".B8_nav_control": {
    "width": "100%",
    "marginTop": "220px",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  ".B8_nav_control_btn": {
    "flexDirection": "column",
    "justifyContent": "center",
    "width": "208px"
  },
  ".B8_nav_control_btn_img": {
    "width": "112px",
    "height": "112px",
    "marginLeft": "48px",
    "marginRight": "48px",
    "resizeMode": "cover"
  },
  ".B8_nav_control_btn_text": {
    "width": "100%",
    "marginTop": "20px",
    "textAlign": "center",
    "fontSize": "36px"
  },
  ".add_Animation": {
    "animationName": "doingAn",
    "animationTimingFunction": "linear",
    "animationDuration": "1500ms",
    "animationIterationCount": -1
  },
  ".add_AnimationLeft": {
    "animationName": "doingAn1",
    "animationTimingFunction": "linear",
    "animationDuration": "1500ms",
    "animationIterationCount": -1
  },
  "@KEYFRAMES": {
    "doingAn": [
      {
        "transform": "{\"rotate\":\"0deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotate\":\"360deg\"}",
        "time": 100
      }
    ],
    "doingAn1": [
      {
        "transform": "{\"rotate\":\"0deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotate\":\"-360deg\"}",
        "time": 100
      }
    ]
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".midea-foot": {
    "width": "100%",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".midea-foot-list1": {
    "width": "100%",
    "paddingLeft": "96px",
    "paddingRight": "96px",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  ".midea-foot-list2": {
    "width": "100%",
    "paddingLeft": "96px",
    "paddingRight": "96px",
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  ".midea-foot-item": {
    "width": "222px",
    "height": "100%",
    "flexDirection": "column",
    "paddingLeft": "36px",
    "paddingRight": "36px"
  },
  ".midea-foot-item-btn": {
    "width": "150px",
    "height": "150px",
    "marginTop": "45px"
  },
  ".midea-foot-item-img": {
    "width": "100%",
    "height": "100%",
    "resizeMode": "cover"
  },
  ".midea-foot-item-text": {
    "width": "100%",
    "height": "100%",
    "borderRadius": "150px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#D5D5D5",
    "borderRightColor": "#D5D5D5",
    "borderBottomColor": "#D5D5D5",
    "borderLeftColor": "#D5D5D5",
    "backgroundColor": "#FFFFFF"
  },
  ".midea-foot-item-data": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "48px",
    "color": "#CCCCCC"
  },
  ".midea-foot-item-name": {
    "width": "100%",
    "textAlign": "center",
    "marginTop": "10px",
    "color": "#666666",
    "fontSize": "36px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".l_midea-head-title": {
    "width": "800px",
    "height": "144px",
    "fontSize": "50px",
    "fontWeight": "bold",
    "paddingRight": "280px",
    "textAlign": "center"
  },
  ".midea-head": {
    "width": "100%",
    "height": "144px",
    "backgroundColor": "#CCCCCC",
    "flexDirection": "row"
  },
  ".midea-head-title": {
    "width": "800px",
    "height": "144px",
    "fontSize": "50px",
    "fontWeight": "bold",
    "paddingLeft": "280px",
    "textAlign": "center"
  },
  ".midea-head-more": {
    "width": "66px",
    "height": "66px",
    "marginTop": "40px"
  },
  ".midea-head-back": {
    "width": "66px",
    "height": "66px",
    "marginLeft": "40px",
    "marginTop": "40px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".M-dialog": {
    "flexDirection": "column",
    "alignItems": "center",
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "backgroundColor": "#000000",
    "opacity": 0.5
  },
  ".M-dialog-alert": {
    "position": "fixed",
    "bottom": "60px",
    "left": "30px",
    "right": "30px",
    "flexDirection": "column",
    "justifyContent": "center",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "30px"
  },
  ".M-dialog-alert-head": {
    "width": "100%",
    "height": "150px",
    "textAlign": "center",
    "fontSize": "48px",
    "fontWeight": "bold",
    "color": "#000000",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "1px"
  },
  ".M-dialog-alert-nav": {
    "width": "100%",
    "flexDirection": "row"
  },
  ".M-dialog-alert-nav-list": {
    "flexDirection": "column"
  },
  ".M-dialog-alert-nav-borderItem": {
    "width": "100%",
    "height": "150px",
    "flexDirection": "row",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "0px"
  },
  ".M-dialog-alert-nav-item": {
    "width": "100%",
    "height": "150px",
    "flexDirection": "row",
    "justifyContent": "center",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "1px"
  },
  ".M-dialog-alert-nav-item-imgname": {
    "paddingRight": "5px",
    "paddingLeft": "5px",
    "fontSize": "60px"
  },
  ".M-dialog-alert-nav-item-name": {
    "width": "100%",
    "paddingRight": "5px",
    "paddingLeft": "5px",
    "fontSize": "60px"
  },
  ".M-dialog-alert-nav-item-pic": {
    "width": "100%",
    "paddingLeft": "25px",
    "paddingRight": "25px"
  },
  ".M-dialog-alert-nav-item-icon": {
    "marginTop": "50px",
    "width": "60px",
    "height": "60px",
    "resizeMode": "cover"
  },
  ".M-dialog-alert-nav-item-img": {
    "paddingLeft": "25px",
    "paddingRight": "25px",
    "justifyContent": "flex-end"
  },
  ".M-dialog-alert-foot": {
    "width": "100%",
    "height": "150px",
    "borderTopColor": "#E5E5E5",
    "borderTopWidth": "1px",
    "flexDirection": "row"
  },
  ".M-dialog-alert-foot-btn": {
    "width": "100%",
    "height": "100%"
  },
  ".M-dialog-alert-foot-text1": {
    "width": "100%",
    "height": "60px",
    "marginTop": "45px",
    "borderRightColor": "#E5E5E5",
    "borderRightWidth": "1px",
    "textAlign": "center",
    "fontSize": "48px"
  },
  ".M-dialog-alert-foot-text2": {
    "width": "100%",
    "height": "60px",
    "marginTop": "45px",
    "textAlign": "center",
    "fontSize": "48px"
  },
  ".nofoot": {
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "0px"
  },
  ".translateUp": {
    "animationName": "translateUp",
    "animationDuration": "100ms",
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards"
  },
  ".translateDown": {
    "animationName": "translateDown",
    "animationDuration": "100ms",
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards"
  },
  "@KEYFRAMES": {
    "translateUp": [
      {
        "transform": "{\"translateY\":\"800px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ],
    "translateDown": [
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"1200px\"}",
        "time": 100
      }
    ]
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".mdiea_about": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "backgroundColor": "#333333",
    "opacity": 0.7
  },
  ".mdiea_about_list": {
    "position": "fixed",
    "left": "30px",
    "bottom": "60px",
    "width": "1020px",
    "flexDirection": "column",
    "borderRadius": "20px",
    "backgroundColor": "#ffffff",
    "height": "320px"
  },
  ".mdiea_about_list_1": {
    "width": "100%",
    "height": "159px",
    "fontSize": "48px",
    "textAlign": "center",
    "color": "#000000",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "2px"
  },
  ".mdiea_about_list_2": {
    "width": "100%",
    "height": "159px",
    "fontSize": "48px",
    "color": "#000000",
    "textAlign": "center"
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container-loading": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px"
  },
  ".container-mark": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "backgroundColor": "#333333",
    "opacity": 0.7
  },
  ".progerss_circular_progerss": {
    "position": "fixed",
    "top": "600px",
    "left": "505px",
    "strokeWidth": "10px",
    "color": "#cccccc",
    "width": "70px",
    "height": "70px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".mdiea-tips": {
    "position": "fixed",
    "bottom": "30px",
    "left": "30px",
    "right": "30px",
    "height": "228px",
    "flexDirection": "row"
  },
  ".mdiea-tips-mork": {
    "position": "fixed",
    "bottom": "30px",
    "left": "30px",
    "borderRadius": "30px",
    "right": "30px",
    "backgroundColor": "#000000",
    "opacity": 0.6,
    "height": "228px"
  },
  ".mdiea-tips-text-push": {
    "fontSize": "48px",
    "width": "980px",
    "height": "228px",
    "color": "#FFFFFF",
    "paddingLeft": "50px",
    "textAlign": "left"
  },
  ".mdiea-tips-img": {
    "width": "60px",
    "height": "60px",
    "marginRight": "50px",
    "marginTop": "84px",
    "resizeMode": "cover"
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page&importNames[]=midea-loading,importNames[]=midea-about,importNames[]=midea-tips,importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-selectbottom":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page&importNames[]=midea-loading,importNames[]=midea-about,importNames[]=midea-tips,importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-selectbottom ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "midea-head",
      "attr": {
        "title": "吸尘器",
        "language": function () {return this.language},
        "power": function () {return this.online=='true'?'on':'off'}
      }
    },
    {
      "type": "refresh",
      "attr": {
        "offset": function () {return this.isoffset},
        "refreshing": function () {return this.isRefreshing}
      },
      "events": {
        "refresh": "scrollbottom"
      },
      "children": [
        {
          "type": "list",
          "attr": {
            "id": "list"
          },
          "id": "list",
          "classList": [
            "B8_list"
          ],
          "style": {
            "backgroundColor": function () {return this.online=='true'?'#3191FD':'#CCCCCC'}
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "listItem"
              },
              "classList": [
                "B8_nav"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return [this.language?'E1_nav_list_lock':'E1_nav_list_lock_l']},
                  "events": {
                    "click": function (evt) {this.downMeiju(evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.online=='true'?'./assets/img/loadingMeiju.png':'./assets/img/meijuicon.png'}
                      },
                      "classList": [
                        "E1_nav_list_lock_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "使用美居"
                  },
                  "classList": [
                    "E1_nav_list_usemeiju"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.online=='true'?this.statusTy(this.work_status,this.isdirection):'离线中'}
                  },
                  "classList": [
                    "B8_nav_status"
                  ],
                  "style": {
                    "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "电量：56%"
                  },
                  "shown": function () {return this.hide},
                  "classList": [
                    "B8_nav_battery"
                  ],
                  "style": {
                    "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "B8_nav_data"
                  ],
                  "shown": function () {return this.hide},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_data_left"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "2"
                          },
                          "classList": [
                            "B8_nav_data_left_data"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "已清扫面积"
                          },
                          "classList": [
                            "B8_nav_data_left_text"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_data_text"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "m²"
                          },
                          "classList": [
                            "B8_nav_data_left_dan"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_data_center"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_data_left"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "124"
                          },
                          "classList": [
                            "B8_nav_data_left_data"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "已清扫时间"
                          },
                          "classList": [
                            "B8_nav_data_left_text"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_data_text"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "分"
                          },
                          "classList": [
                            "B8_nav_data_left_dan"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?'#ffffff':'#666666'}
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "B8_nav_control"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_control_btn"
                      ],
                      "events": {
                        "touchcancel": function (evt) {this.doneDirection('can',evt)},
                        "touchend": function (evt) {this.doneDirection('cel',evt)},
                        "touchstart": function (evt) {this.moveDirection('left',evt)}
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.isdirection=='left'?'./assets/img/left_off.png':'./assets/img/left_on.png'}
                          },
                          "classList": function () {return ['B8_nav_control_btn_img', this.isdirection=='left'?'add_AnimationLeft':'']}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "左转"
                          },
                          "classList": [
                            "B8_nav_control_btn_text"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?this.leftColor:'#666666'}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_control_btn"
                      ],
                      "events": {
                        "touchcancel": function (evt) {this.doneDirection('can',evt)},
                        "touchend": function (evt) {this.doneDirection('cel',evt)},
                        "touchstart": function (evt) {this.moveDirection('forward',evt)}
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.isdirection=='forward'?'./assets/img/line_off.png':'./assets/img/line_on.png'}
                          },
                          "classList": [
                            "B8_nav_control_btn_img"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "向前"
                          },
                          "classList": [
                            "B8_nav_control_btn_text"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?this.forwardColor:'#666666'}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "B8_nav_control_btn"
                      ],
                      "events": {
                        "touchcancel": function (evt) {this.doneDirection('can',evt)},
                        "touchend": function (evt) {this.doneDirection('cel',evt)},
                        "touchstart": function (evt) {this.moveDirection('right',evt)}
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.isdirection=='right'?'./assets/img/right_off.png':'./assets/img/right_on.png'}
                          },
                          "classList": function () {return ['B8_nav_control_btn_img', this.isdirection=='right'?'add_Animation':'']}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "右转"
                          },
                          "classList": [
                            "B8_nav_control_btn_text"
                          ],
                          "style": {
                            "color": function () {return this.online=='true'?this.rightColor:'#666666'}
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "midea-selectbottom",
      "attr": {
        "isform": "isform",
        "isshow": function () {return this.isshow},
        "showline": function () {return this.lineNum},
        "datalist": function () {return this.selectlist},
        "isselecticon": function () {return this.isselectpic}
      },
      "events": {
        "close-dia": "closedialog",
        "select-num": "selectdata"
      },
      "shown": function () {return this.isshow}
    },
    {
      "type": "midea-foot",
      "attr": {
        "type": "1",
        "listFirst": function () {return this.btnlist}
      },
      "events": {
        "click-btn": "clickEvent",
        "click-alert": "showalert"
      }
    },
    {
      "type": "midea-loading",
      "attr": {},
      "shown": function () {return this.isloading}
    },
    {
      "type": "midea-about",
      "attr": {},
      "shown": function () {return this.isabout},
      "events": {
        "can-cel": "onclickFn",
        "can-close": "onclickFn"
      }
    },
    {
      "type": "midea-tips",
      "attr": {},
      "shown": function () {return this.istips}
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "mdiea_about"
  ],
  "events": {
    "click": "cancel"
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "mdiea_about_list"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "关于美居快应用"
          },
          "classList": [
            "mdiea_about_list_1"
          ],
          "events": {
            "click": "clickabout"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "取消"
          },
          "classList": [
            "mdiea_about_list_2"
          ],
          "events": {
            "click": "cancel"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "midea-foot"
  ],
  "style": {
    "height": function () {return this.type==='1'?'300px':'600px'}
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "midea-foot-list1"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "midea-foot-item"
          ],
          "repeat": function () {return this.listFirst},
          "events": {
            "click": function (evt) {this.btnClick(this.$item.name,this.$item.clickAlert,evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "midea-foot-item-btn"
              ],
              "shown": function () {return this.$item.pic&&this.$item.pic!=''},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.pic}
                  },
                  "classList": [
                    "midea-foot-item-img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "midea-foot-item-btn"
              ],
              "shown": function () {return !this.$item.pic||this.$item.pic===''},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "midea-foot-item-text"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.$item.data==='off'||this.$item.data==='无'?'#ffffff':this.$item.btnColor&&this.item.btnColor!=''?this.$item.btnColor:'#3191FD'}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.data}
                      },
                      "classList": [
                        "midea-foot-item-data"
                      ],
                      "style": {
                        "border": function () {return this.$item.data==='off'||this.$item.data==='无'?'3px solid #D5D5D5':'0px'},
                        "color": function () {return this.$item.data==='off'||this.$item.data==='无'?'#000000':this.$item.dataColor&&this.item.dataColor!=''?this.$item.dataColor:'#ffffff'},
                        "fontSize": function () {return '' + ((this.$item.fontSize&&this.$item.fontSize>0)?this.$item.fontSize:'48') + 'px'}
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.name}
              },
              "classList": [
                "midea-foot-item-name"
              ],
              "style": {
                "color": function () {return this.$item.textColor&&this.$item.textColor!=''?this.$item.textColor:'#666666'}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.type==='2'},
      "classList": [
        "midea-foot-list2"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "midea-foot-item"
          ],
          "repeat": function () {return this.listSecond},
          "events": {
            "click": function (evt) {this.btnClick(this.$item.name,this.$item.clickAlert,evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "midea-foot-item-btn"
              ],
              "shown": function () {return this.$item.pic&&this.$item.pic!=''},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.pic}
                  },
                  "classList": [
                    "midea-foot-item-img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "midea-foot-item-btn"
              ],
              "shown": function () {return !this.$item.pic||this.$item.pic===''},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "midea-foot-item-text"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.$item.data==='off'||this.$item.data==='无'?'#ffffff':this.$item.btnColor&&this.item.btnColor!=''?this.$item.btnColor:'#3191FD'}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.data}
                      },
                      "classList": [
                        "midea-foot-item-data"
                      ],
                      "style": {
                        "border": function () {return this.$item.data==='off'||this.$item.data==='无'?'3px solid #D5D5D5':'0px'},
                        "color": function () {return this.$item.data==='off'||this.$item.data==='无'?'#000000':this.$item.dataColor&&this.item.dataColor!=''?this.$item.dataColor:'#ffffff'},
                        "fontSize": function () {return '' + ((this.$item.fontSize&&this.$item.fontSize>0)?this.$item.fontSize:'48') + 'px'}
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.name}
              },
              "classList": [
                "midea-foot-item-name"
              ],
              "style": {
                "color": function () {return this.$item.textColor&&this.$item.textColor!=''?this.$item.textColor:'#666666'}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "midea-head"
  ],
  "style": {
    "backgroundColor": function () {return this.changColor(this.power,this.hightColor)}
  },
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.title}
      },
      "classList": function () {return [this.language?'midea-head-title':'l_midea-head-title']},
      "style": {
        "color": function () {return this.power==='on'?'#ffffff':'#666666'}
      }
    },
    {
      "type": "image",
      "attr": {
        "show": function () {return this.showMenu},
        "src": function () {return this.power==='on'?'../Component/MideaHead/assets/menu_ic_more_white.png':'../Component/MideaHead/assets/menu_ic_more_normal.png'}
      },
      "classList": [
        "midea-head-back"
      ],
      "events": {
        "click": "openMenu"
      }
    },
    {
      "type": "image",
      "attr": {
        "src": function () {return this.power==='on'?'../Component/MideaHead/assets/menu_ic_cancel_online.png':'../Component/MideaHead/assets/menu_ic_cancel_normal.png'}
      },
      "classList": [
        "midea-head-back"
      ],
      "events": {
        "click": "goback"
      }
    },
    {
      "type": "midea-about",
      "attr": {},
      "shown": function () {return this.isabout},
      "events": {
        "can-cel": "onclickFn",
        "can-close": "onclickFn"
      }
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container-loading"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "container-mark"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "container-img"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular"
          },
          "classList": [
            "progerss_circular_progerss"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "M-dialog"
  ],
  "events": {
    "click": "closeDia"
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['M-dialog-alert', this.showdia?'translateUp':'translateDown']},
      "style": {
        "height": function () {return '' + (this.heightD) + 'px'}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.headtitle}
          },
          "classList": [
            "M-dialog-alert-head"
          ],
          "shown": function () {return this.ishead}
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "M-dialog-alert-nav"
          ],
          "style": {
            "height": function () {return '' + (150*this.showline) + 'px'}
          },
          "children": [
            {
              "type": "list",
              "attr": {
                "id": "list"
              },
              "classList": [
                "M-dialog-alert-nav-list"
              ],
              "id": "list",
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "selecitem"
                  },
                  "classList": function () {return [this.$idx+1==this.listNum&&!this.isfoot?'nofoot':'', this.isyellow?'M-dialog-alert-nav-borderItem':'M-dialog-alert-nav-item']},
                  "repeat": function () {return this.selectList},
                  "events": {
                    "click": function (evt) {this.selectData(this.$idx,evt)}
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "M-dialog-alert-nav-item-img"
                      ],
                      "shown": function () {return this.$item.icon&&this.$item.icon!=''},
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.icon}
                          },
                          "classList": [
                            "M-dialog-alert-nav-item-icon"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.name}
                      },
                      "classList": [
                        "M-dialog-alert-nav-item-imgname"
                      ],
                      "shown": function () {return this.$item.icon&&this.$item.icon!=''},
                      "style": {
                        "textAlign": "left",
                        "color": function () {return this.$item.select?this.color:this.bgColor}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.name}
                      },
                      "classList": [
                        "M-dialog-alert-nav-item-name"
                      ],
                      "shown": function () {return !this.$item.icon||this.$item.icon===''},
                      "style": {
                        "textAlign": function () {return this.isselecticon?'right':'center'},
                        "color": function () {return this.$item.select?this.color:this.bgColor}
                      }
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "M-dialog-alert-nav-item-pic"
                      ],
                      "shown": function () {return this.isselecticon},
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "show": function () {return this.$item.select},
                            "src": function () {return this.isyellow?'../Common/img/select-icon.png':'../Common/img/ic_select.png'}
                          },
                          "classList": [
                            "M-dialog-alert-nav-item-icon"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "M-dialog-alert-foot"
          ],
          "shown": function () {return this.isfoot},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "M-dialog-alert-foot-btn"
              ],
              "events": {
                "click": "closeDia"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.cancel.text}
                  },
                  "classList": [
                    "M-dialog-alert-foot-text1"
                  ],
                  "style": {
                    "color": function () {return this.cancel.textColor}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "M-dialog-alert-foot-btn"
              ],
              "events": {
                "click": "comfirmBtn"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.comfirm.text}
                  },
                  "classList": [
                    "M-dialog-alert-foot-text2"
                  ],
                  "style": {
                    "color": function () {return this.comfirm.textColor}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "mdiea-tips_list"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "mdiea-tips-mork"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mdiea-tips"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "当前设备离线，请检查连接状态"
              },
              "classList": [
                "mdiea-tips-text-push"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": "/Component/MideaTips/assets/menu_ic_cancel_online.png"
              },
              "classList": [
                "mdiea-tips-img"
              ],
              "events": {
                "click": function (evt) {this.close(evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/midea_work/美居weex工程/ov-quickapp/src/0xB8/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

var _api = _interopRequireDefault(__webpack_require__(/*! ../Common/api/api.js */ "../../midea_work/美居weex工程/ov-quickapp/src/Common/api/api.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _service = _interopRequireDefault($app_require$("@app-module/service.account"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _service2 = _interopRequireDefault($app_require$("@app-module/service.push"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.package"));

var _system6 = _interopRequireDefault($app_require$("@app-module/system.network"));

var _networkAPI = _interopRequireDefault(__webpack_require__(/*! ../Common/api/networkAPI.js */ "../../midea_work/美居weex工程/ov-quickapp/src/Common/api/networkAPI.js"));

var _errordata = _interopRequireDefault(__webpack_require__(/*! ./assets/errordata.js */ "../../midea_work/美居weex工程/ov-quickapp/src/0xB8/assets/errordata.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = {
  "private": {
    isagain: true,
    lanOnline: 'false',
    isLanInit: false,
    timeTips: '',
    hide: false,
    isoffset: '-1000px',
    isRefreshing: false,
    language: false,
    isfirst: false,
    isselectpic: false,
    isform: false,
    iswarm: true,
    isyellow: true,
    isshow: false,
    lineNum: 3,
    isabout: false,
    istips: false,
    isloading: false,
    isdirection: 'none',
    deviceHeight: 0,
    selectlist: [{
      name: '弓形模式',
      select: false,
      data: 'arc',
      icon: './assets/img/arc_select_off.png'
    }, {
      name: '沿边模式',
      select: false,
      data: 'edge',
      icon: './assets/img/edge_select_off.png'
    }, {
      name: '区域模式',
      select: false,
      data: 'area',
      icon: './assets/img/area_select_off.png'
    }],
    leftColor: '#ffffff',
    forwardColor: '#ffffff',
    rightColor: '#ffffff',
    openId: '',
    accessToken: '',
    btnlist: [{
      name: '启动清扫',
      data: 'stop',
      textColor: '#666666',
      pic: './assets/img/work_on.png',
      clickAlert: false
    }, {
      name: '弓形模式',
      data: "arc",
      textColor: '#666666',
      pic: './assets/img/arc_on.png',
      clickAlert: true
    }, {
      name: '回充',
      data: "charging",
      textColor: '#666666',
      pic: './assets/img/charge_on.png',
      clickAlert: false
    }],
    B8list: ["work_status", "work_mode", "move_direction", 'failure_low_no_dust_box'],
    B8data: {
      online: "false",
      work_status: 'stop',
      work_mode: 'none',
      move_direction: 'none'
    },
    online: "false",
    work_status: 'stop',
    work_mode: 'none',
    move_direction: 'none'
  },
  "public": {
    deviceSeries: '',
    deviceId: '',
    openid: ''
  },
  moveBtn: function moveBtn(e) {
    _system2["default"].showToast({
      message: JSON.stringify(e)
    });
  },
  isshowclose: function isshowclose() {
    var that = this;

    if (that.timeTips != '') {
      that.istips = false;
      clearTimeout(that.timeTips);
    }

    if (that.iswarm) {
      that.istips = true;
      that.timeTips = setTimeout(function () {
        that.istips = false;
      }, 3000);
    }
  },
  onclickFn: function onclickFn(e) {
    this.isabout = false;
  },
  closedialog: function closedialog() {
    var that = this;
    that.isshow = false;
  },
  modeTy: function modeTy(mode) {
    var that = this;
    var str = '';

    switch (mode) {
      case 'none':
        str = "无操作";
        break;

      case 'random':
        str = "随机模式";
        break;

      case 'arc':
        str = "弓形模式";
        break;

      case 'edge':
        str = "沿边模式";
        break;

      case 'emphases':
        str = "重点模式";
        break;

      case 'screw':
        str = "螺旋模式";
        break;

      case 'auto':
        str = "自动模式";
        break;

      case 'bed':
        str = "床底清扫";
        break;

      case 'wide_screw':
        str = "宽阔地方螺旋";
        break;

      case 'area':
        str = "区域清扫";
        break;

      case 'deep':
        str = "深度清扫";
        break;

      default:
        str = "其他|模式";
    }

    return str;
  },
  statusTy: function statusTy(status, isdirection) {
    var that = this;
    var str = '';
    var string = status;

    if (status == 'work' && isdirection != 'none') {
      string = isdirection;
    }

    switch (string) {
      case 'charge':
        str = '回充中';
        break;

      case 'work':
        str = '清扫中';
        break;

      case 'stop':
        str = '待机中';
        break;

      case 'charging':
        str = '充电中';
        break;

      case 'charging_on_dock':
        str = '充电中';
        break;

      case 'charge_finish':
        str = '直流充电完成';
        break;

      case 'work_finish':
        str = '清扫完成';
        break;

      case 'reserve_task_finished':
        str = '预约任务完成';
        break;

      case 'charging_with_wire':
        str = '直流充电中';
        break;

      case 'error':
        str = '错误';
        break;

      case 'set':
        str = '设置中';
        break;

      case 'left':
        str = '左转中';
        break;

      case 'right':
        str = '右转中';
        break;

      case 'forward':
        str = '向前中';
        break;

      default:
        str = '--';
    }

    return str;
  },
  getColor: function getColor(str) {
    var that = this;

    switch (str) {
      case 'left':
        that.leftColor = '#D5D5D5';
        that.forwardColor = '#ffffff';
        that.rightColor = '#ffffff';
        break;

      case 'right':
        that.leftColor = '#ffffff';
        that.forwardColor = '#ffffff';
        that.rightColor = '#D5D5D5';
        break;

      case 'forward':
        that.leftColor = '#ffffff';
        that.forwardColor = '#D5D5D5';
        that.rightColor = '#ffffff';
        break;

      case 'none':
        that.leftColor = '#ffffff';
        that.forwardColor = '#ffffff';
        that.rightColor = '#ffffff';
        break;
    }
  },
  showalert: function showalert() {
    var that = this;

    if (that.online === 'false') {
      that.isshowclose();
      return false;
    }

    if (that.work_status == 'charge') {
      _system2["default"].showToast({
        message: "设备回充中，请稍后..."
      });

      return false;
    }

    that.isshow = true;
    var num = 100;
    that.selectlistInit();
    that.selectlist.forEach(function (item, i) {
      if (that.selectlist[i].data == that.work_mode) {
        num = i;
      }
    });

    if (num != 100) {
      that.selectlist[num].icon = './assets/img/' + that.work_mode + '_select_on.png';
      that.selectlist[num].select = true;
    }
  },
  downMeiju: function downMeiju() {
    var that = this;
    var str1 = "确定打开美居？（仅支持美居5.2及以上版本）";
    var str2 = "您还没安装美居app，是否确定下载安装?";

    _system5["default"].hasInstalled({
      "package": 'com.midea.ai.appliances',
      success: function success(res) {
        _system2["default"].showDialog({
          title: '提示',
          message: res.result ? str1 : str2,
          buttons: [{
            text: res.result ? '直接打开' : '去下载',
            color: '#33dd44'
          }],
          success: function success(data) {
            if (res.result) {
              _system["default"].push({
                uri: 'meiju://com.midea.meiju/main'
              });
            } else {
              _system5["default"].install({
                "package": 'com.midea.ai.appliances',
                success: function success(resp) {
                  console.log("handling success: ".concat(resp.result));
                },
                fail: function fail(resp, code) {
                  console.log("handling fail, code = ".concat(code));
                }
              });
            }
          },
          cancel: function cancel() {
            console.log('handling cancel');
          },
          fail: function fail(data, code) {
            console.log("handling fail, code = ".concat(code));
          }
        });

        console.log("handling success: ".concat(res.result));
      },
      fail: function fail(res, code) {
        console.log("handling fail, code = ".concat(code));
      }
    });
  },
  scrollbottom: function scrollbottom(e) {
    var that = this;
    that.isRefreshing = e.refreshing;
    var timestamp = Date.parse(new Date());

    if (that.isfirst) {
      _system4["default"].get({
        key: 'openidToken',
        success: function success(data) {
          that.isloading = true;
          that.iswarm = true;

          if (data === '') {
            that.getdevicelist();
          } else {
            var obj = JSON.parse(data);

            if (parseInt(timestamp) > parseInt(obj.time)) {
              that.getdevicelist();
            } else {
              if (obj.openid === that.openid) {
                that.openId = obj.openid;
                that.accessToken = obj.accessToken;

                if (!that.isLanInit) {
                  that.LanOnlineGet();
                }

                that.getDeviceStatus(that.openId);
              } else {
                that.getdevicelist();
              }
            }
          }

          console.log('handling success');
        },
        fail: function fail(data, code) {
          console.log("handling fail, code = ".concat(code));
        }
      });
    }
  },
  clickEvent: function clickEvent(e) {
    var that = this;
    var params = {};
    var status;

    if (that.online === 'false') {
      that.isshowclose();
      return false;
    }

    if (e.detail.params === "启动清扫") {
      if (that.work_status == 'charge') {
        _system2["default"].showToast({
          message: "设备回充中，请稍后"
        });

        return false;
      }

      params = {
        work_status: 'work',
        work_mode: that.work_mode == 'none' ? 'arc' : that.work_mode,
        move_direction: 'none'
      };
      that.B8data.work_status = params.work_status;
      that.B8data.move_direction = params.move_direction;
      that.B8data.work_mode = params.work_mode;
      status = ['work_status'];
    } else if (e.detail.params === '停止清扫' || e.detail.params === '取消回充') {
      params = {
        work_status: 'stop',
        move_direction: 'none'
      };
      that.B8data.work_status = params.work_status;
      that.B8data.work_mode = params.work_mode;
      that.B8data.move_direction = params.move_direction;
      status = ['work_status', 'move_direction', 'work_mode'];
    } else if (e.detail.params === '回充') {
      if (that.work_status == 'charging' || that.work_status == 'charging_on_dock' || that.work_status == 'charging_with_wire') {
        _system2["default"].showToast({
          message: "设备充电中，请稍后"
        });

        return false;
      }

      if (that.work_status == 'charge_finish') {
        _system2["default"].showToast({
          message: "设备充电已完成"
        });

        return false;
      }

      params = {
        move_direction: 'none',
        work_status: 'charge'
      };
      that.B8data.work_status = params.work_status;
      status = ['work_status'];
    }

    that.isloading = true;
    that.postDeviceControl(params, status);
  },
  selectdata: function selectdata(e) {
    var that = this;
    var params = {
      work_status: 'work',
      work_mode: that.selectlist[e.detail.id].data,
      move_direction: 'none'
    };
    that.isloading = true;
    var status;
    that.B8data.work_mode = params.work_mode;
    that.B8data.work_status = params.work_status;
    that.B8data.move_direction = params.move_direction;
    status = ['work_mode', 'work_status', 'move_direction'];
    that.postDeviceControl(params, status);
  },
  moveDirection: function moveDirection(str) {
    var that = this;

    if (that.online === 'false') {
      that.isshowclose();
      return false;
    }

    if (that.work_status == 'charge') {
      _system2["default"].showToast({
        message: "设备回充中，请稍后"
      });

      return false;
    }

    if (that.work_status == 'charging' || that.work_status == 'charging_on_dock' || that.work_status == 'charging_with_wire') {
      _system2["default"].showToast({
        message: "设备充电中，请稍后"
      });

      return false;
    }

    if (that.work_status == 'charge_finish') {
      _system2["default"].showToast({
        message: "充电已完成，请启动清扫后再调整方向"
      });

      return false;
    }

    var params = {};
    var status;
    params = {
      work_status: 'work',
      work_mode: 'none',
      move_direction: str
    };
    that.B8data.work_status = params.work_status;
    that.B8data.work_mode = params.work_mode;
    that.B8data.move_direction = params.move_direction;
    status = ['work_mode', 'move_direction', 'work_status'];
    that.postDeviceControl(params, status);
  },
  doneDirection: function doneDirection(str) {
    var that = this;

    if (that.online === 'false') {
      that.isshowclose();
      return false;
    }

    if (that.work_status == 'charge' || that.work_status == 'charging' || that.work_status == 'charge_finish' || that.work_status == 'charging_on_dock' || that.work_status == 'charging_with_wire') {
      return false;
    }

    var params = {};
    var status;

    if (str == 'cel') {
      that.isloading = true;
    }

    params = {
      work_status: 'stop',
      work_mode: 'none',
      move_direction: 'none'
    };
    that.B8data.work_status = params.work_status;
    that.B8data.work_mode = params.work_mode;
    that.B8data.move_direction = params.move_direction;
    status = ['work_mode', 'move_direction', 'work_status'];
    that.postDeviceControl(params, status);
  },
  getdevicelist: function getdevicelist() {
    var that = this;

    _service["default"].authorize({
      type: 'code',
      success: function success(data) {
        var params = {
          thirdUId: data.code
        };

        _api["default"].getUserToken(params).then(function (res) {
          var data_accesstoken = res;

          if (data_accesstoken.code && data_accesstoken.code === 200) {
            var result_data = _typeof(data_accesstoken.data) === 'object' ? data_accesstoken.data : JSON.parse(data_accesstoken.data);

            if (!parseInt(result_data.code)) {
              that.openId = result_data.openId;
              that.accessToken = result_data.accessToken;
              var obj = {
                openid: that.openId,
                accessToken: that.accessToken,
                time: that.gettime()
              };

              _system4["default"].set({
                key: 'openidToken',
                value: JSON.stringify(obj),
                success: function success(data) {},
                fail: function fail(data, code) {}
              });

              that.LanOnlineGet();
              that.getDeviceStatus(that.openId);
            } else {
              that.initData();
              that.isRefreshing = false;
              that.isloading = false;
              that.netWorkGet(that.getCode(result_data.code, '获取访问令牌失败'));
              that.isfirst = true;
            }
          } else {
            that.initData();
            that.isRefreshing = false;
            that.isloading = false;
            that.netWorkGet('获取访问令牌失败');
            that.isfirst = true;
          }
        })["catch"](function (error) {
          that.initData();
          that.isRefreshing = false;
          that.isloading = false;
          that.netWorkGet('获取访问令牌失败');
          that.isfirst = true;
        });
      },
      fail: function fail(data, code) {
        that.initData();
        that.netWorkGet('授权失败,请稍后重试');
        that.isloading = false;
        that.isRefreshing = false;
        that.isfirst = true;
      }
    });
  },
  getLanData: function getLanData(res) {
    var that = this;
    that.istips = false;
    var obj = _typeof(res) == 'object' ? res : JSON.parse(res);

    if (parseInt(obj.code) == 0) {
      var data = _typeof(obj.message) == 'object' ? obj.message : JSON.parse(obj.message);
      that.B8data = data;
      that.B8data.online = "true";
      that.online = "true";
      that.work_status = data.work_status;
      that.work_mode = data.work_mode;
      that.move_direction = data.move_direction;

      if (that.work_status == 'work' && that.work_mode == 'none') {
        that.isdirection = that.move_direction;
      } else {
        that.isdirection = 'none';
      }
    } else {
      that.isagain = false;
      that.lanOnline = "false";
      that.getDeviceStatus(that.openId);
    }

    that.initData();
  },
  getdataLan: function getdataLan(res) {
    var that = this;

    if (res.code === 200) {
      var data = _typeof(res.data) === 'object' ? res.data : JSON.parse(res.data);

      if (!parseInt(data.code) && !parseInt(data.devices[0].status)) {
        var obj = data.devices[0].properties;
        that.B8data = obj;
        that.online = obj.online;
        that.work_status = obj.work_status;
        that.work_mode = obj.work_mode;
        that.move_direction = obj.move_direction;

        if (that.work_status == 'work' && that.work_mode == 'none') {
          that.isdirection = that.move_direction;
        } else {
          that.isdirection = 'none';
        }

        if (that.online != 'true') {
          that.isshowclose();
        }
      } else {
        that.isstop = true;

        if (data.msg === '') {
          var str1 = '';

          if (data.devices[0].status) {
            str1 = data.devices[0].status;

            if (str1.toString() === '-6') {
              that.isshowclose();
              return false;
            }

            if (str1.toString() === '-100' && data.devices[0].description.toString() === '3123') {
              that.isshowclose();
            } else {
              that.netWorkGet(_api["default"].getStatus('get', str1, '获取设备状态失败'));
            }
          } else {
            str1 = data.code;
            that.netWorkGet(_api["default"].getCode(str1, '获取设备状态失败'));
          }
        } else {
          that.netWorkGet(data.msg);
        }
      }
    } else {
      that.isstop = true;
      that.netWorkGet('获取设备状态失败,请稍后重试');
    }

    that.initData();
  },
  getDeviceStatus: function getDeviceStatus(opid) {
    var that = this;
    var params = {
      openId: opid,
      devices: [{
        deviceId: that.deviceId,
        properties: that.B8list
      }]
    };

    if (_networkAPI["default"].$Lanonline.deviceid == that.deviceId && _networkAPI["default"].$Lanonline.isonLan == 'true' && that.isagain) {
      that.lanOnline = 'true';
    } else {
      that.lanOnline = 'false';
    }

    _api["default"].postDeviceStatusQuery(params, that.accessToken, that.lanOnline, that.deviceId).then(function (res) {
      that.isagain = true;
      that.isfirst = true;
      that.isRefreshing = false;
      that.isloading = false;

      if (res.lanonline) {
        that.getdataLan(res);
      } else {
        that.getLanData(res);
      }
    })["catch"](function (error) {
      if (error.online) {
        that.initData();
        that.isstop = true;
        that.netWorkGet('获取设备状态失败,请稍后重试');
        that.isfirst = true;
        that.isRefreshing = false;
        that.isloading = false;
      } else {
        that.isagain = false;
        that.lanOnline = "false";
        that.getDeviceStatus(that.openId);
      }
    });
  },
  lanControl: function lanControl(res, obj1, status) {
    var that = this;
    var obj = _typeof(res) == 'object' ? res : JSON.parse(res);
    console.log("局域网：" + JSON.stringify(res));

    if (parseInt(obj.code) == 0) {
      that.isRefreshing = false;
      that.isloading = false;
      var data = _typeof(obj.message) == 'object' ? obj.message : JSON.parse(obj.message);
      that.work_status = data.work_status;
      that.work_mode = data.work_mode;
      that.move_direction = data.move_direction;

      if (that.work_status == 'work' && that.work_mode == 'none') {
        that.isdirection = that.move_direction;
      } else {
        that.isdirection = 'none';
      }

      that.online = "true";
      that.B8data = data;
      that.B8data.online = "true";
    } else {
      that.isagain = false;
      that.lanOnline = 'false';
      that.postDeviceControl(obj1, status);
    }

    that.initData();
  },
  wlanControl: function wlanControl(res) {
    var that = this;

    if (res.code === 200) {
      var data = _typeof(res.data) === 'object' ? res.data : JSON.parse(res.data);

      if (parseInt(data.code) == 0) {
        if (!parseInt(data.devices[0].status)) {
          that.getDeviceStatus(that.openId);
          return false;
          var obj = _typeof(data.devices[0].props) === 'object' ? data.devices[0].props : JSON.parse(data.devices[0].props);
          ;
          var isall = false;

          if (obj.work_status) {
            that.work_status = obj.work_status;
          } else {
            isall = true;
          }

          if (obj.work_mode) {
            that.work_mode = obj.work_mode;
          } else {
            isall = true;
          }

          if (obj.move_direction) {
            that.move_direction = obj.move_direction;

            if (that.work_status == 'work' && that.work_mode == 'none') {
              that.isdirection = that.move_direction;
            } else {
              that.isdirection = 'none';
            }
          } else {
            isall = true;
          }

          that.B8data = obj;

          if (isall) {
            that.getDeviceStatus(that.openId);
          } else {
            that.isRefreshing = false;
            that.isloading = false;
          }
        } else {
          that.isRefreshing = false;
          that.isloading = false;
          that.isstop = true;

          if (data.msg === '') {
            var str1 = '';

            if (data.devices[0].status) {
              str1 = data.devices[0].status;

              if (str1.toString() === '-6') {
                that.isshowclose();
                return false;
              }

              if (str1.toString() === '-100' && data.devices[0].description.toString() === '3123') {
                that.isshowclose();
              } else {
                that.netWorkGet(_api["default"].getStatus('post', str1, '操作设备失败'));
              }
            } else {
              str1 = data.code;
              that.netWorkGet(_api["default"].getCode(str1, '操作设备失败'));
            }
          } else {
            that.netWorkGet(data.msg);
          }
        }
      } else {
        that.isRefreshing = false;
        that.isloading = false;
        that.isstop = true;

        if (data.msg === '') {
          var _str = '';
          _str = data.code;
          that.netWorkGet(_api["default"].getCode(_str, '操作设备失败'));
        } else {
          that.netWorkGet(data.msg);
        }
      }
    } else {
      that.isRefreshing = false;
      that.isloading = false;
      that.netWorkGet('操作设备失败,请稍后重试');
    }

    that.initData();
  },
  postDeviceControl: function postDeviceControl(obj, status) {
    var that = this;
    var params = {
      openId: that.openId,
      devices: [{
        deviceId: that.deviceId,
        properties: obj,
        status: that.B8data
      }]
    };
    console.log("$Lanonline:" + JSON.stringify(_networkAPI["default"].$Lanonline) + "::::::::isagain:" + that.isagain);

    if (_networkAPI["default"].$Lanonline.deviceid == that.deviceId && _networkAPI["default"].$Lanonline.isonLan == 'true' && that.isagain) {
      that.lanOnline = 'true';
    } else {
      that.lanOnline = 'false';
    }

    _api["default"].postDeviceControl(params, that.accessToken, that.lanOnline, that.deviceId).then(function (res) {
      that.isagain = true;

      if (res.lanonline) {
        that.wlanControl(res);
      } else {
        that.lanControl(res, obj, status);
      }
    })["catch"](function (error) {
      if (error.online) {
        that.initData();
        that.isRefreshing = false;
        that.isstop = true;
        that.netWorkGet('操作设备失败,请稍后重试');
        that.isloading = false;
      } else {
        that.isagain = false;
        that.lanOnline = 'false';
        that.postDeviceControl(obj, status);
      }
    });
  },
  initData: function initData() {
    var that = this;
    console.log("拿到的数据：" + JSON.stringify(that.B8data));

    if (_errordata["default"].B8error(that.B8data)) {
      console.log("错误信息：" + _errordata["default"].B8error(that.B8data));
    }

    var status = '';
    var mode = 'on';
    var str = '';
    var textColor1 = '#666666';
    var textColor2 = '#666666';
    var textColor3 = '#666666';

    if (that.work_status === 'work') {
      status = './assets/img/stop_on.png';
    } else if (that.work_status === 'charge') {
      status = './assets/img/work_off.png';
      mode = 'off';
      textColor1 = "#D5D5D5";
      textColor2 = "#D5D5D5";
    } else {
      status = './assets/img/work_on.png';
    }

    if (that.work_status == 'charging' || that.work_status == 'charge_finish' || that.work_status == 'charging_on_dock' || that.work_status == 'charging_with_wire') {
      str = './assets/img/charge_off.png';
      textColor3 = "#D5D5D5";
    } else if (that.work_status == 'charge') {
      str = './assets/img/stop_on.png';
    } else {
      str = './assets/img/charge_on.png';
    }

    var pic = './assets/img/none_off.png';

    if (that.modeSelect(that.work_mode)) {
      pic = './assets/img/' + that.work_mode + '_' + mode + '.png';
    } else {
      pic = './assets/img/other_' + mode + '.png';
    }

    that.btnlist = [{
      name: that.work_status === 'work' ? '停止清扫' : '启动清扫',
      data: that.work_status,
      textColor: textColor1,
      pic: status,
      clickAlert: false
    }, {
      name: that.modeTy(that.work_mode),
      data: that.modedataTy(that.work_mode),
      textColor: textColor2,
      pic: pic,
      clickAlert: true
    }, {
      name: that.work_status == 'charge' ? '取消回充' : '回充',
      data: that.work_status,
      textColor: textColor3,
      pic: str,
      clickAlert: false
    }];
    that.getColor(that.isdirection);
  },
  modedataTy: function modedataTy(mode) {
    var that = this;
    var str = '';

    switch (mode) {
      case 'random':
        str = "随机";
        break;

      case 'arc':
        str = "弓形";
        break;

      case 'edge':
        str = "沿边";
        break;

      case 'emphases':
        str = "重点";
        break;

      case 'screw':
        str = "螺旋";
        break;

      case 'auto':
        str = "自动";
        break;

      case 'bed':
        str = "床底";
        break;

      case 'wide_screw':
        str = "螺旋";
        break;

      case 'area':
        str = "区域";
        break;

      case 'deep':
        str = "深度";
        break;

      case 'none':
        str = "--";
        break;

      default:
        str = "其他";
    }

    return str;
  },
  selectlistInit: function selectlistInit() {
    var that = this;
    that.selectlist = [{
      name: '弓形模式',
      select: false,
      data: 'arc',
      icon: './assets/img/arc_select_off.png'
    }, {
      name: '沿边模式',
      select: false,
      data: 'edge',
      icon: './assets/img/edge_select_off.png'
    }, {
      name: '区域模式',
      select: false,
      data: 'area',
      icon: './assets/img/area_select_off.png'
    }];
  },
  modeSelect: function modeSelect(mode) {
    var that = this;
    var str = '';
    var arry = ['arc', 'edge', 'area', 'none'];
    var src = false;

    if (arry.includes(mode)) {
      src = true;
    }

    return src;
  },
  netWorkGet: function netWorkGet(str) {
    if (this.iswarm) {
      _system6["default"].getType({
        success: function success(data) {
          if (data.type === 'none') {
            _system2["default"].showToast({
              message: str + '请检查网络',
              duration: 1
            });
          } else {
            _system2["default"].showToast({
              message: str,
              duration: 1
            });
          }
        }
      });
    }
  },
  LanOnlineGet: function LanOnlineGet() {
    var that = this;

    _networkAPI["default"].deviceInit(that.accessToken, that.deviceId).then(function (res) {
      that.isLanInit = true;
    })["catch"](function (error) {
      that.isLanInit = false;
    });
  },
  gettime: function gettime() {
    var timestamp = Date.parse(new Date());
    return parseInt(timestamp) + 3600000;
  },
  onMenuPress: function onMenuPress() {
    this.isabout = !this.isabout;
  },
  closeWebsocket: function closeWebsocket(e) {
    var that = this;
    that.isclosews = true;

    if (that.timeoutInter != '') {
      clearInterval(that.timeoutInter);
    }
  },
  onHide: function onHide() {
    var that = this;
    that.istips = false;
    that.closeWebsocket();
  },
  onShow: function onShow() {
    var that = this;
    that.isclosews = false;

    if (that.ws === '' && that.isws) {}
  },
  onInit: function onInit() {
    var _this = this;

    _api["default"].getlanguage().then(function (res) {
      if (res === 'ug') {
        _this.language = false;
      } else {
        _this.language = true;
      }
    });

    var that = this;

    _system["default"].clear();

    that.$on('cancel', function (e) {
      that.isabout = false;
    });
    that.$on('closetips', function (e) {
      that.istips = false;
    });
    that.$on('openmenu', function (e) {
      that.isabout = !that.isabout;
    });
    var timestamp = Date.parse(new Date());

    _system4["default"].get({
      key: 'openidToken',
      success: function success(data) {
        that.isloading = true;

        if (data === '') {
          that.getdevicelist();
        } else {
          var obj = JSON.parse(data);

          if (parseInt(timestamp) > parseInt(obj.time)) {
            that.getdevicelist();
          } else {
            if (obj.openid === that.openid) {
              that.openId = obj.openid;
              that.accessToken = obj.accessToken;
              that.LanOnlineGet();
              that.getDeviceStatus(that.openId);
            } else {
              that.getdevicelist();
            }
          }
        }

        console.log('handling success');
      },
      fail: function fail(data, code) {
        console.log("handling fail, code = ".concat(code));
      }
    });
  },
  onCreate: function onCreate() {},
  onBackPress: function onBackPress() {
    _system["default"].clear();

    this.$app.exit();
  }
};
var moduleOwn = exports["default"] || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  props: {},
  data: function () {return {}},
  onInit: function onInit(e) {},
  cancel: function cancel() {
    this.$emit('canCel', {
      params: "取消"
    });
  },
  clickabout: function clickabout() {
    this.$emit('canClose', {
      params: "取消"
    });
    setTimeout(function () {
      _system2["default"].push({
        uri: "Component/MideaAbout/MideaList"
      });
    }, 50);
  },
  onBackPress: function onBackPress() {
    this.$emit('canCel', {
      params: "取消"
    });
  }
};}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'midea-foot',
  props: {
    type: {
      "default": '1',
      type: String
    },
    listFirst: {
      "default": [],
      type: Array
    },
    listSecond: {
      "default": [],
      type: Array
    },
    language: {
      "default": true,
      type: Boolean
    }
  },
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  btnClick: function btnClick(str, bol) {
    var that = this;

    if (bol) {
      that.$emit('clickAlert', {
        params: str
      });
    } else {
      that.$emit('clickBtn', {
        params: str
      });
    }
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'midea-head',
  props: {
    coloron: {
      "default": '',
      type: String
    },
    coloroff: {
      "default": '#CCCCCC',
      type: String
    },
    title: {
      "default": '',
      type: String
    },
    power: {
      "default": 'off',
      type: String
    },
    showMenu: {
      "default": true,
      type: Boolean
    },
    isnew: {
      "default": false,
      type: Boolean
    },
    language: {
      "default": true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      isabout: false,
      value: '',
      txt: this.text,
      showMenu: true,
      power_1: 'off',
      language: true,
      bgColor: '#3191FD',
      img1: '../Component/MideaHead/assets/menu_ic_more_normal.png'
    };
  },
  onInit: function onInit() {
    var that = this;

    if (that.power) {
      that.$watch('power', 'watchPropsChange');
    }

    if (that.power == 'on') {
      that.img1 = '../Component/MideaHead/assets/menu_ic_more_white.png';
    } else {
      that.img1 = '../Component/MideaHead/assets/menu_ic_more_normal.png';
    }

    if (that.isnew) {
      that.bgColor = "#F9CB3D";
    } else {
      that.bgColor = "#3191FD";
    }
  },
  changColor: function changColor(power, str) {
    var that = this;

    if (power == 'on') {
      if (that.coloron != '') {
        return that.coloron;
      } else {
        return that.bgColor;
      }
    } else {
      return that.coloroff;
    }
  },
  watchPropsChange: function watchPropsChange(newV, oldV) {
    this.power_1 = newV;
  },
  goback: function goback() {
    this.$emit("closeWebsocket", {
      params: "关闭"
    });

    _system["default"].clear();

    this.$app.exit();
  },
  openMenu: function openMenu() {
    if (!this.isabout) {
      this.isabout = true;
    }
  },
  onclickFn: function onclickFn() {
    this.isabout = false;
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

module.exports = {
  data: function () {return {
    list: []
  }},
  onInit: function onInit(e) {}
};}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.notification"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'Midea-select',
  props: {
    isshow: {
      "default": false,
      type: Boolean
    },
    isselecticon: {
      "default": false,
      type: Boolean
    },
    isyellow: {
      "default": false,
      type: Boolean
    },
    datalist: {
      "default": [],
      type: Array
    },
    showline: {
      "default": 0,
      type: Number
    },
    ishead: {
      "default": false,
      type: Boolean
    },
    headtitle: {
      "default": "",
      type: String
    },
    isfoot: {
      "default": false,
      type: Boolean
    },
    cancel: {
      "default": {
        textColor: "#666666",
        text: "取消"
      },
      type: Array
    },
    comfirm: {
      "default": {
        textColor: "#3191FD",
        text: "确定"
      },
      type: Array
    },
    isform: false
  },
  data: function data() {
    return {
      heightD: 0,
      listNum: 0,
      color: '',
      bgColor: '#000000',
      showdia: false,
      selectList: []
    };
  },
  selectData: function selectData(id) {
    var that = this;
    that.selectList.forEach(function (item, i) {
      that.selectList[i].select = false;

      if (that.selectList[id].icon) {
        that.selectList[id].icon = './assets/img/' + that.selectList[id].name + '_select_off.png';
      }
    });
    that.selectList[id].select = true;

    if (that.selectList[id].icon) {
      that.selectList[id].icon = './assets/img/' + that.selectList[id].name + '_select_on.png';
    }

    if (that.isform) {
      that.$emit("selectNum", {
        param: that.selectList,
        id: id
      });
      that.closeDia();
    } else {
      that.selectList = that.datalist;
    }
  },
  comfirmBtn: function comfirmBtn() {
    var that = this;
    var num;
    that.selectList.forEach(function (item, i) {
      if (that.selectList[i].select) {
        num = i;
      }
    });
    that.$emit("selectNum", {
      param: that.selectList,
      id: num
    });
    that.closeDia();
  },
  closeDia: function closeDia() {
    var that = this;
    that.showdia = false;
    setTimeout(function () {
      that.$emit("closeDia", {
        param: "关闭"
      });
    }, 150);
  },
  clickE: function clickE() {},
  watchPropsChange: function watchPropsChange(newV, oldV) {
    var that = this;
    that.selectList = newV;
  },
  onInit: function onInit() {
    this.$watch('datalist', 'watchPropsChange');
  },
  onReady: function onReady() {
    var headH = 0;
    var foot = 0;
    var that = this;

    if (that.ishead) {
      headH = 150;
    }

    if (that.isfoot) {
      foot = 150;
    }

    that.heightD = that.showline * 150 + foot + headH;
    that.listNum = that.datalist.length;
    that.selectList = that.datalist;
    that.color = that.isyellow ? '#F9CB3D' : '#3191FD';
    that.bgColor = that.isyellow ? '#CCCCCC' : '#000000';
    that.showdia = that.isshow;
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!D:/midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  close: function close() {
    this.$dispatch('closetips', {
      params: "取消"
    });
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp")

$app_define$('@app-component/midea-about', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp&name=midea-foot":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp&name=midea-foot ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaFoot/index.ux?uxType=comp")

$app_define$('@app-component/midea-foot', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp&name=midea-head":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp&name=midea-head ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!../MideaAbout/index.ux?uxType=comp&name=midea-about */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about")
var $app_template$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=midea-about */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about")
var $app_style$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaHead/index.ux?uxType=comp")

$app_define$('@app-component/midea-head', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp&name=midea-loading":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp&name=midea-loading ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaLoading/index.ux?uxType=comp")

$app_define$('@app-component/midea-loading', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp&name=midea-selectbottom":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp&name=midea-selectbottom ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaSelectDiaBottom/index.ux?uxType=comp")

$app_define$('@app-component/midea-selectbottom', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&type=import!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp&name=midea-tips":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=d:/midea_work/美居weex工程/ov-quickapp&type=import!d:/midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp&name=midea-tips ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=d:/midea_work/美居weex工程/ov-quickapp&plugins[]=d:/soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../../../../soft/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../midea_work/美居weex工程/ov-quickapp/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=d:\\midea_work\\美居weex工程\\ov-quickapp&plugins[]=d:\\soft\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!../../midea_work/美居weex工程/ov-quickapp/src/Component/MideaTips/index.ux?uxType=comp")

$app_define$('@app-component/midea-tips', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/process/browser.js":
/*!*******************************************************************************!*\
  !*** ./resources/app/extensions/hap-debugger/node_modules/process/browser.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/webpack/buildin/module.js":
/*!**************************************************************************************!*\
  !*** ./resources/app/extensions/hap-debugger/node_modules/webpack/buildin/module.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map