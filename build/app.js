(function(){
  
  var manifestJson = {"package":"com.midea.iot.application","name":"Midea-IoT","versionName":"1.7.8","versionCode":178,"icon":"/Common/logo.png","minPlatformVersion":1030,"features":[{"name":"system.webview"},{"name":"system.prompt"},{"name":"system.fetch"},{"name":"system.file"},{"name":"system.clipboard"},{"name":"system.geolocation"},{"name":"system.request"},{"name":"system.calendar"},{"name":"system.device"},{"name":"system.storage"},{"name":"system.share"},{"name":"system.notification"},{"name":"system.barcode"},{"name":"system.sensor"},{"name":"system.shortcut"},{"name":"system.network"},{"name":"system.cipher"},{"name":"system.calendar"},{"name":"system.brightness"},{"name":"system.volume"},{"name":"system.battery"},{"name":"system.package"},{"name":"system.record"},{"name":"system.contact"},{"name":"system.sms"},{"name":"system.media"},{"name":"system.image"},{"name":"system.audio"},{"name":"system.push"},{"name":"service.account"},{"name":"system.storage"},{"name":"service.iot"},{"name":"system.barcode"},{"name":"system.app"},{"name":"system.websocketfactory"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"","designWidth":1080,"data":{"winHight":0}},"router":{"entry":"0xB0","pages":{"0xAC":{"component":"index"},"0xDB":{"component":"index"},"0xFA":{"component":"index"},"0xE1":{"component":"index"},"0xE2":{"component":"index"},"0xE3":{"component":"index"},"0xEA":{"component":"index"},"0xB0":{"component":"index"},"0xB0/B0_0M3L20A8":{"component":"index"},"0xB6":{"component":"index"},"0xB8":{"component":"index"},"0xCA":{"component":"index"},"0xFC":{"component":"index"},"0xFD":{"component":"index"},"config_network":{"component":"index"},"config_network/apNetWork":{"component":"index"},"Component/MideaAbout/MideaList":{"component":"index"},"Component/MideaAbout/MideaSelf":{"component":"index"},"Component/MideaAbout/MideaServer":{"component":"index"},"Demo":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","titleBar":false,"titleBarTextColor":"#000000","menu":false,"pages":{"Midea":{"titleBarText":"空调","menu":false}}}}
  var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp/src!./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?cwd=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp&comments=false!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp/src!./node_modules/_babel-loader@8.0.5@babel-loader/lib?cwd=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp&comments=false!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _service = _interopRequireDefault($app_require$("@app-module/service.account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = "sasdsad";
module.exports = {
  onInit: function onInit() {
    _system["default"].showToast({
      message: "sssss"
    });
  },
  publicData: {
    mes: "dasdasd"
  }
};}

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(/*! !../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp/src!../node_modules/babel-loader?cwd=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp&comments=false!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp/src!./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?cwd=/Users/parker/midea-data/集团Holaconx项目/ov快应用/ov-quickapp&comments=false!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default;
        }
     $app_module$.exports['manifest'] = manifestJson;
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.4.6'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = manifestJson;
  }
})();
//# sourceMappingURL=app.js.map