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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Demo/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaFoot/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaFoot/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaHead/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaHead/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaAbout/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaAbout/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaMeiju/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaMeiju/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".download": {
    "flexDirection": "column"
  },
  ".download_img": {
    "width": "90px",
    "height": "90px",
    "resizeMode": "cover"
  },
  ".download text": {
    "width": "96px",
    "fontSize": "24px",
    "textAlign": "center",
    "color": "#ffffff",
    "marginTop": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "download"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaSelect/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaSelect/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".doc-page": {
    "position": "fixed",
    "left": "0px",
    "top": "0px",
    "right": "0px",
    "bottom": "0px"
  },
  ".loadingIMG": {
    "width": "200px",
    "height": "200px",
    "position": "fixed",
    "left": "440px",
    "top": "600px"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaShowdialog/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaShowdialog/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".slot_shadow": {
    "position": "fixed",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "top": "0px",
    "backgroundColor": "#000000",
    "opacity": 0.5
  },
  ".slot_nav": {
    "position": "fixed",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "top": "0px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".slot_header": {
    "width": "100%",
    "paddingTop": "27px",
    "paddingBottom": "27px",
    "flexDirection": "column",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "1px"
  },
  ".slot_alert": {
    "width": "960px",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#E5E5E5",
    "borderRightColor": "#E5E5E5",
    "borderBottomColor": "#E5E5E5",
    "borderLeftColor": "#E5E5E5",
    "borderRadius": "30px"
  },
  ".slot_head": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "40px"
  },
  ".slot_data": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "40px"
  },
  ".slot_center": {
    "width": "100%",
    "flexDirection": "column",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "1px"
  },
  ".slot_footer": {
    "width": "100%",
    "flexDirection": "row"
  },
  ".slot_btn": {
    "width": "50%",
    "height": "150px",
    "textAlign": "center",
    "fontSize": "48px"
  },
  ".slot_line": {
    "width": "1px",
    "height": "60px",
    "backgroundColor": "#E5E5E5",
    "marginTop": "43px"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".nav": {
    "flexDirection": "column",
    "justifyContent": "flex-start"
  },
  ".E1_list": {
    "backgroundColor": "#cccccc"
  },
  ".center": {
    "height": "100%",
    "width": "100%",
    "flexDirection": "column",
    "backgroundColor": "#00ffff"
  },
  ".btn": {
    "width": "100px",
    "fontSize": "40px",
    "height": "100px"
  },
  ".nav_dialog": {
    "width": "100%",
    "height": "453px",
    "flexDirection": "column"
  },
  ".item": {
    "width": "100%",
    "height": "150px",
    "paddingLeft": "60px",
    "paddingRight": "60px",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "1px"
  },
  ".text1": {
    "fontSize": "48px",
    "color": "#000000"
  },
  ".icon": {
    "width": "60px",
    "height": "60px",
    "resizeMode": "cover",
    "borderRadius": "60px"
  },
  ".selectData": {
    "paddingTop": "50px",
    "paddingRight": "18px",
    "paddingBottom": "50px",
    "paddingLeft": "18px",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".selecttext": {
    "fontSize": "42px",
    "textAlign": "center",
    "color": "#666666"
  },
  ".selecticon": {
    "marginLeft": "37.6px",
    "width": "30px",
    "height": "15px",
    "resizeMode": "cover"
  },
  ".itemSelect": {
    "width": "100%",
    "flexDirection": "row",
    "backgroundColor": "#F2F2F2"
  },
  ".itemlist": {
    "width": "50%"
  },
  ".dialog_center": {
    "width": "100%",
    "height": "105px",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".itemoption": {
    "fontSize": "48px",
    "paddingTop": "0px",
    "paddingRight": "50px",
    "paddingBottom": "0px",
    "paddingLeft": "50px"
  },
  ".itemSelectIcon": {
    "width": "65px",
    "height": "40px",
    "resizeMode": "cover"
  },
  ".itemLine": {
    "width": "1.5px",
    "height": "526px",
    "backgroundColor": "#d9d9d9"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaAbout/index.ux?uxType=comp&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaAbout/index.ux?uxType=comp& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaFoot/index.ux?uxType=comp&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaFoot/index.ux?uxType=comp& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "src": function () {return this.foo(this.power,true)}
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
        "src": function () {return this.foo(this.power,false)}
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaMeiju/index.ux?uxType=comp&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaMeiju/index.ux?uxType=comp& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "download"
  ],
  "events": {
    "click": function (evt) {this.downloadAPP(evt)}
  },
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return this.power=='on'?'../Component/MideaMeiju/assets/img/loadingMeiju.png':'../Component/MideaMeiju/assets/img/meijuicon.png'}
      },
      "classList": [
        "download_img"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "使用美居"
      },
      "style": {
        "color": function () {return this.power=='on'?'#ffffff':'#666666'}
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaSelect/index.ux?uxType=comp&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaSelect/index.ux?uxType=comp& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "doc-page"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": "/Component/MideaSelect/assets/img/loading.gif"
      },
      "classList": [
        "loadingIMG"
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaShowdialog/index.ux?uxType=comp&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaShowdialog/index.ux?uxType=comp& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "slot_shadow"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "slot_nav"
      ],
      "events": {
        "click": function (evt) {this.clickshadow(evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "slot_alert"
          ],
          "events": {
            "click": function (evt) {this.clickchild(evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "slot_header"
              ],
              "shown": function () {return this.header.title!=''||this.data.text!=''},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.header.title}
                  },
                  "shown": function () {return this.header.title!=''},
                  "classList": [
                    "slot_head"
                  ],
                  "style": {
                    "fontSize": function () {return '' + (this.header.fontSize) + 'px'},
                    "color": function () {return this.header.color},
                    "fontWeight": function () {return this.header.fontWeight}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.data.text}
                  },
                  "shown": function () {return this.data.text!=''},
                  "classList": [
                    "slot_data"
                  ],
                  "style": {
                    "fontSize": function () {return '' + (this.data.fontSize) + 'px'},
                    "color": function () {return this.data.color},
                    "fontWeight": function () {return this.data.fontWeight}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "slot_center"
              ],
              "style": function () {return this.footer.length==0?'border-bottom-width:0px':''},
              "children": [
                {
                  "type": "slot",
                  "attr": {}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "slot_footer"
              ],
              "shown": function () {return this.footer.length>0},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.footer[0].name?this.footer[0].name:''}
                  },
                  "classList": [
                    "slot_btn"
                  ],
                  "events": {
                    "click": function (evt) {this.clickBtn1(evt)}
                  },
                  "shown": function () {return this.footer.length>0},
                  "style": {
                    "width": function () {return this.footer.length==1?'100%':'50%'},
                    "fontWeight": function () {return this.footer[0].fontWeight&&this.footer[0].fontWeight!=''?this.footer[0].fontWeight:'normal'},
                    "fontSize": function () {return '' + (this.footer[0].fontSize&&this.footer[0].fontSize!=''?this.footer[0].fontSize:'48') + 'px'},
                    "color": function () {return this.footer[0].color&&this.footer[0].color!=''?this.footer[0].color:'#000000'},
                    "opacity": function () {return !this.footer[0].hasOwnProperty('disabled')||this.footer[0].disabled?'1':'0.4'}
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "slot_line"
                  ],
                  "shown": function () {return this.footer.length==2}
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.footer[1].name?this.footer[1].name:''}
                  },
                  "classList": [
                    "slot_btn"
                  ],
                  "events": {
                    "click": function (evt) {this.clickBtn2(evt)}
                  },
                  "shown": function () {return this.footer.length==2},
                  "style": {
                    "fontWeight": function () {return this.footer[1].fontWeight&&this.footer[1].fontWeight!=''?this.footer[1].fontWeight:'normal'},
                    "fontSize": function () {return '' + (this.footer[1].fontSize&&this.footer[1].fontSize!=''?this.footer[1].fontSize:'48') + 'px'},
                    "color": function () {return this.footer[1].color&&this.footer[1].color!=''?this.footer[1].color:'#000000'},
                    "opacity": function () {return !this.footer[1].hasOwnProperty('disabled')||this.footer[1].disabled?'1':'0.4'}
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-meiju,importNames[]=midea-select,importNames[]=midea-showdialog":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-meiju,importNames[]=midea-select,importNames[]=midea-showdialog ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "nav"
  ],
  "children": [
    {
      "type": "midea-head",
      "attr": {
        "title": "标题",
        "showMenu": function () {return this.showMenu},
        "isnew": function () {return this.bgColor},
        "coloroff": function () {return this.defaultColor},
        "coloron": function () {return this.hight_Color},
        "power": function () {return this.power}
      }
    },
    {
      "type": "list",
      "attr": {
        "id": "list"
      },
      "id": "list",
      "classList": [
        "E1_list"
      ],
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "listItem"
          },
          "classList": [
            "center"
          ],
          "children": [
            {
              "type": "midea-meiju",
              "attr": {
                "power": function () {return this.power}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "midea-showdialog",
      "attr": {
        "header": function () {return this.head},
        "data": function () {return this.setdata},
        "footer": function () {return this.foot}
      },
      "shown": function () {return this.showd},
      "events": {
        "click-event3": function (evt) {this.closeDialog(evt)},
        "click-event1": function (evt) {this.closeAlert(evt)},
        "click-event2": function (evt) {this.comfirm(evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "nav_dialog"
          ],
          "style": {
            "height": function () {return '' + (this.isup?453:this.heightNav) + 'px'}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item"
              ],
              "events": {
                "click": function (evt) {this.selectPower(evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "预约开机"
                  },
                  "classList": [
                    "text1"
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.ispower?'./assets/img/select.png':'./assets/img/unselect.png'}
                  },
                  "events": {
                    "click": function (evt) {this.selectPower(evt)}
                  },
                  "classList": [
                    "icon"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item"
              ],
              "events": {
                "click": function (evt) {this.selectClose(evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "预约关机"
                  },
                  "classList": [
                    "text1"
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.isclose?'./assets/img/select.png':'./assets/img/unselect.png'}
                  },
                  "classList": [
                    "icon"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item"
              ],
              "events": {
                "click": function (evt) {this.openselect(evt)}
              },
              "style": {
                "borderBottomWidth": function () {return '' + (this.isup?0:1) + 'px'}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "预约时间"
                  },
                  "classList": [
                    "text1"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "selectData"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.selectdata}
                      },
                      "classList": [
                        "selecttext"
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.isup?'./assets/img/up.png':'./assets/img/down.png'}
                      },
                      "classList": [
                        "selecticon"
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
                "itemSelect"
              ],
              "style": {
                "height": function () {return '' + (this.isup?0:this.heightNav-453) + 'px'}
              },
              "children": [
                {
                  "type": "list",
                  "attr": {
                    "id": "list"
                  },
                  "id": "list",
                  "classList": [
                    "itemlist"
                  ],
                  "children": [
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "listItem"
                      },
                      "repeat": function () {return this.hourList},
                      "classList": [
                        "dialog_center"
                      ],
                      "events": {
                        "click": function (evt) {this.timeSelect(this.$item.name,'hour',evt)}
                      },
                      "children": [
                        {
                          "type": "div",
                          "attr": {
                            "show": function () {return this.$item.name.toString()==this.selectdata.substring(0,2)}
                          },
                          "classList": [
                            "itemSelectIcon"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.name}
                          },
                          "classList": [
                            "itemoption"
                          ],
                          "style": {
                            "color": function () {return this.$item.name.toString()==this.selectdata.substring(0,2)?'#F9CB3D':'#cccccc'}
                          }
                        },
                        {
                          "type": "image",
                          "attr": {
                            "show": function () {return this.$item.name.toString()==this.selectdata.substring(0,2)},
                            "src": "/Demo/assets/img/selected.png"
                          },
                          "classList": [
                            "itemSelectIcon"
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
                    "itemLine"
                  ]
                },
                {
                  "type": "list",
                  "attr": {
                    "id": "list"
                  },
                  "id": "list",
                  "classList": [
                    "itemlist"
                  ],
                  "children": [
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "listItem"
                      },
                      "repeat": function () {return this.minList},
                      "classList": [
                        "dialog_center"
                      ],
                      "events": {
                        "click": function (evt) {this.timeSelect(this.$item.name,'min',evt)}
                      },
                      "children": [
                        {
                          "type": "div",
                          "attr": {
                            "show": function () {return this.$item.name.toString()==this.selectdata.substring(3,5)}
                          },
                          "classList": [
                            "itemSelectIcon"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.name}
                          },
                          "classList": [
                            "itemoption"
                          ],
                          "style": {
                            "color": function () {return this.$item.name.toString()==this.selectdata.substring(3,5)?'#F9CB3D':'#cccccc'}
                          }
                        },
                        {
                          "type": "image",
                          "attr": {
                            "show": function () {return this.$item.name.toString()==this.selectdata.substring(3,5)},
                            "src": "/Demo/assets/img/selected.png"
                          },
                          "classList": [
                            "itemSelectIcon"
                          ]
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
      "type": "midea-foot",
      "attr": {
        "type": function () {return this.type},
        "listSecond": function () {return this.listSecond},
        "listFirst": function () {return this.btnlist}
      },
      "events": {
        "click-btn": "clickEv"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _service = _interopRequireDefault($app_require$("@app-module/service.account"));

var _index = _interopRequireDefault(__webpack_require__(/*! ./assets/index.js */ "./src/Demo/assets/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    showd: true,
    power: 'off',
    showMenu: true,
    isnew: true,
    hight_Color: "#3191FD",
    defaultColor: '#CCCCCC',
    type: '2',
    btnlist: [{
      name: '开关',
      data: 'on',
      pic: '',
      btnColor: '',
      dataColor: '',
      textColor: ""
    }, {
      name: '档位',
      data: 'off',
      pic: ''
    }, {
      name: '延迟关机',
      data: 'on',
      pic: ''
    }, {
      name: '灯光',
      data: 'off',
      pic: './assets/img/light_off.png'
    }],
    listSecond: [{
      name: '执行',
      data: 'on',
      pic: './assets/img/off.png'
    }, {
      name: '更多',
      data: 'off',
      pic: ''
    }, {
      name: '其他',
      data: 'off',
      pic: ''
    }],
    head: {
      title: '头部',
      fontSize: 48,
      color: "#000000",
      fontWeight: 'bold'
    },
    setdata: {
      text: "",
      fontSize: 40,
      color: '#F9CB3D',
      fontWeight: 'normal'
    },
    foot: [{
      name: '取消',
      fontSize: 48,
      color: "#F9CB3D",
      fontWeight: 'nomal',
      disabled: true
    }, {
      name: '确定',
      fontSize: 48,
      color: "#F9CB3D",
      fontWeight: 'nomal',
      disabled: false
    }],
    ispower: true,
    isclose: false,
    selectdata: '05:47',
    isup: true,
    heightNav: 980,
    hourList: [],
    minList: []
  },
  clickBtn: function clickBtn() {
    if (this.power == 'on') {
      this.power = 'off';
    } else {
      this.power = 'on';
    }
  },
  btnclick: function btnclick() {},
  clickEv: function clickEv(e) {},
  closeAlert: function closeAlert() {
    this.showd = false;
    console.log("取消按钮");
  },
  comfirm: function comfirm() {
    console.log("确定按钮");
  },
  closeDialog: function closeDialog() {
    this.showd = false;
    console.log("点击弹框以外的阴影部分");
  },
  selectPower: function selectPower() {
    var that = this;
    that.ispower = !that.ispower;
    that.isclose = false;
    that.getTime();
  },
  selectClose: function selectClose() {
    var that = this;
    that.isclose = !that.isclose;
    that.ispower = false;
    that.getTime();
  },
  openselect: function openselect() {
    var that = this;
    that.isup = !that.isup;

    if (that.isup) {
      that.heightNav = 453;
    } else {
      that.heightNav = 980;
    }
  },
  timeSelect: function timeSelect(data, str) {
    var that = this;

    if (str == 'min') {
      that.selectdata = that.selectdata.substring(0, 2) + ":" + data;
    } else {
      that.selectdata = data + ":" + that.selectdata.substring(3, 5);
    }

    that.getTime();
  },
  getTime: function getTime() {
    var that = this;
    var str = that.ispower ? "开机" : that.isclose ? "关机" : '';

    if (that.ispower || that.isclose) {
      that.setdata.text = "当前预约：" + that.selectdata + str;
    } else {
      that.setdata.text = "";
    }
  },
  onInit: function onInit() {
    var that = this;

    for (var time = 1; time < 24; time++) {
      var obj = {
        name: '',
        data: ''
      };
      obj.data = time;

      if (time < 10) {
        obj.name = '0' + time;
      } else {
        obj.name = time;
      }

      that.hourList.push(obj);
    }

    for (var _time = 0; _time < 60; _time++) {
      var _obj = {
        name: '',
        data: ''
      };
      _obj.data = _time;

      if (_time < 10) {
        _obj.name = '0' + _time;
      } else {
        _obj.name = _time;
      }

      that.minList.push(_obj);
    }

    that.getTime();
    console.log("that.$app.$def.publicData.mes" + JSON.stringify(this.$app.$def.data1));
  }
};
exports.default = _default;
var moduleOwn = exports.default || module.exports;
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaAbout/index.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaAbout/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _system2.default.push({
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaFoot/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaFoot/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'midea-foot',
  props: {
    type: {
      default: '1',
      type: String
    },
    listFirst: {
      default: [],
      type: Array
    },
    listSecond: {
      default: [],
      type: Array
    },
    language: {
      default: true,
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
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaHead/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaHead/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'midea-head',
  props: {
    coloron: {
      default: '',
      type: String
    },
    coloroff: {
      default: '#CCCCCC',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    power: {
      default: 'off',
      type: String
    },
    showMenu: {
      default: true,
      type: Boolean
    },
    isnew: {
      default: false,
      type: Boolean
    },
    language: {
      default: true,
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

    var page = _system.default.getState();

    if (that.power == 'on') {} else {}

    if (that.isnew) {
      that.bgColor = "#F9CB3D";
    } else {
      that.bgColor = "#3191FD";
    }
  },
  foo: function foo(power, bol) {
    var page = _system.default.getState();

    console.log("page index = ".concat(page.index));
    console.log("page name = ".concat(page.name));
    console.log("page path = ".concat(page.path));
    var path = '../';
    var string = page.path;
    var count = 1;

    for (var index = 0; index < string.length; index++) {
      var a = string.indexOf('/', index);

      if (a != -1 && string.indexOf('/', index) != string.indexOf('/', index - 1)) {
        count++;
      }
    }

    var img = '';
    var img2 = '';

    if (power == 'on') {
      img = 'Component/MideaHead/assets/menu_ic_more_white.png';
      img2 = 'Component/MideaHead/assets/menu_ic_cancel_online.png';
    } else {
      img = 'Component/MideaHead/assets/menu_ic_more_normal.png';
      img2 = 'Component/MideaHead/assets/menu_ic_cancel_normal.png';
    }

    var pathall = path;

    if (count > 1) {
      pathall = path.repeat(count);
    }

    if (bol) {
      return pathall + img;
    } else {
      return pathall + img2;
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

    _system.default.clear();

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
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaMeiju/index.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaMeiju/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.package"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'MideaLogo',
  props: {
    power: {
      default: "off",
      type: String
    }
  },
  data: function data() {
    return {};
  },
  downloadAPP: function downloadAPP() {
    var that = this;
    var str1 = "确定打开美居？（仅支持美居5.2及以上版本）";
    var str2 = "您还没安装美居app，是否确定下载安装?";

    _system.default.hasInstalled({
      package: 'com.midea.ai.appliances',
      success: function success(res) {
        _system2.default.showDialog({
          title: '提示',
          message: res.result ? str1 : str2,
          buttons: [{
            text: res.result ? '直接打开' : '去下载',
            color: '#33dd44'
          }],
          success: function success(data) {
            if (res.result) {
              _system3.default.push({
                uri: 'meiju://com.midea.meiju/main'
              });
            } else {
              _system.default.install({
                package: 'com.midea.ai.appliances',
                success: function success(resp) {},
                fail: function fail(resp, code) {}
              });
            }
          },
          cancel: function cancel() {},
          fail: function fail(data, code) {}
        });

        console.log("handling success: ".concat(res.result));
      },
      fail: function fail(res, code) {
        console.log("handling fail, code = ".concat(code));
      }
    });
  },
  onInit: function onInit() {}
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaSelect/index.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaSelect/index.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  private: {},
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'Swiper'
    });
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaShowdialog/index.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaShowdialog/index.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    footer: {
      default: [],
      type: Array
    },
    header: {
      default: {
        title: '',
        fontSize: 48,
        color: '#000000',
        fontWeight: 'normal'
      },
      type: Object
    },
    data: {
      default: {
        text: "",
        fontSize: 40,
        color: '#000000',
        fontWeight: 'normal'
      },
      type: Object
    }
  },
  clickBtn1: function clickBtn1() {
    var that = this;
    that.$emit('clickEvent1');
  },
  clickBtn2: function clickBtn2() {
    var that = this;
    that.$emit('clickEvent2');
  },
  clickshadow: function clickshadow(e) {
    var that = this;
    that.$emit('clickEvent3');
  },
  clickchild: function clickchild() {
    console.log("ccccccccccccccccc");
  },
  onInit: function onInit() {
    console.log(this.footer[0].hasOwnProperty('disabled'));
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaAbout/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaAbout/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaAbout/index.ux?uxType=comp")

$app_define$('@app-component/midea-about', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaFoot/index.ux?uxType=comp&name=midea-foot":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaFoot/index.ux?uxType=comp&name=midea-foot ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaFoot/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaFoot/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaFoot/index.ux?uxType=comp")

$app_define$('@app-component/midea-foot', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaHead/index.ux?uxType=comp&name=midea-head":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaHead/index.ux?uxType=comp&name=midea-head ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../MideaAbout/index.ux?uxType=comp&name=midea-about */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=midea-about */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaHead/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaHead/index.ux?uxType=comp")

$app_define$('@app-component/midea-head', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaMeiju/index.ux?uxType=comp&name=midea-meiju":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaMeiju/index.ux?uxType=comp&name=midea-meiju ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaMeiju/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaMeiju/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaMeiju/index.ux?uxType=comp")

$app_define$('@app-component/midea-meiju', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaSelect/index.ux?uxType=comp&name=midea-select":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaSelect/index.ux?uxType=comp&name=midea-select ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaSelect/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaSelect/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaSelect/index.ux?uxType=comp")

$app_define$('@app-component/midea-select', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaShowdialog/index.ux?uxType=comp&name=midea-showdialog":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaShowdialog/index.ux?uxType=comp&name=midea-showdialog ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaShowdialog/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaShowdialog/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaShowdialog/index.ux?uxType=comp")

$app_define$('@app-component/midea-showdialog', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/Demo/assets/index.js":
/*!**********************************!*\
  !*** ./src/Demo/assets/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(__webpack_require__(/*! ../../util.js */ "./src/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log("util:"+JSON.stringify(util.hostData))
var _default = {
  getHeight: function getHeight() {
    _util.default.setHeight(); // console.log("配置信息："+JSON.stringify(this.$app.$def))

  }
};
exports.default = _default;

/***/ }),

/***/ "./src/Demo/index.ux?uxType=page":
/*!***************************************!*\
  !*** ./src/Demo/index.ux?uxType=page ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaHead/index.ux?uxType=comp&name=midea-head */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaHead/index.ux?uxType=comp&name=midea-head")
__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaFoot/index.ux?uxType=comp&name=midea-foot */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaFoot/index.ux?uxType=comp&name=midea-foot")
__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaMeiju/index.ux?uxType=comp&name=midea-meiju */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaMeiju/index.ux?uxType=comp&name=midea-meiju")
__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaSelect/index.ux?uxType=comp&name=midea-select */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaSelect/index.ux?uxType=comp&name=midea-select")
__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaShowdialog/index.ux?uxType=comp&name=midea-showdialog */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaShowdialog/index.ux?uxType=comp&name=midea-showdialog")
var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-meiju,importNames[]=midea-select,importNames[]=midea-showdialog */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-foot,importNames[]=midea-meiju,importNames[]=midea-select,importNames[]=midea-showdialog")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page")

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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 快应用环境配置
 */
var _default = {
  hostData: {
    setHost: true,
    //配置环境（true：pro环境；false：sit环境）
    type: ["ac", "00", "ab", "ca", "b0", "db", "e2", "ea", "fa", "fc", "fd", "e1", "e3", "b8", "b6", "f1"] //支持的设备

  },
  setHeight: function setHeight() {// let that = this;
    // console.log("app参数："+JSON.stringify(that.$app))
  }
};
exports.default = _default;

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