"use strict";
(self["webpackChunkfighterfoundation"] = self["webpackChunkfighterfoundation"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
}
body header {
  z-index: 2;
  position: sticky;
  top: 0;
  box-shadow: 0px 5px 5px #FFBF00;
  height: 250px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: white;
}
body header h1 {
  margin-top: 5vh;
  margin-left: 22vw;
  width: 25vw;
  height: 10vh;
  color: #808080;
}
body header nav {
  width: 70vw;
  max-height: 10vh;
  min-height: 10vh;
  margin-left: 5vw;
  margin-top: 1vh;
  display: flex;
}
body header nav div li {
  border: solid 1px black;
  padding: 10px 40px;
  text-align: center;
  list-style: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background-color: #808080;
}
body header nav div .hidden {
  display: none;
}
body header nav div li:hover {
  cursor: pointer;
  background-color: #FFBF00;
  color: black;
}
body header nav div:hover .hidden {
  display: block;
}
body header img {
  width: 20vw;
  margin-top: 1vh;
  margin-left: 2vw;
}
body header .imgHead {
  background-color: gray;
  font-size: 26px;
  color: white;
  height: 4vh;
  width: 20vw;
  margin-left: 36px;
  text-align: center;
  border-radius: 25px;
}
body main {
  padding: 3vw 3vh;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr;
}
body main .sliderWrap {
  border: solid 1px red;
  width: 80%;
  height: 40%;
  grid-column: 1/3;
  grid-row: 1/2;
}
body main div {
  padding: 10px;
  background-color: #808080;
  border-radius: 20px;
  margin-left: 5vw;
  border: solid 1px gray;
  width: 30vw;
}
body main div ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
}
body main div ul li {
  color: white;
  font-size: 19px;
}
body main div h1 {
  color: white;
  text-align: center;
}
body main div p {
  color: white;
  font-size: 20px;
  line-height: 30px;
}

@media (max-width: 450px) {
  header {
    height: 150px;
    width: 450px;
  }
  header h1 {
    font-size: 15px;
    width: 50vw;
  }
  header nav {
    margin-left: 2px;
    width: 30vw;
  }
  header nav div li {
    font-size: 6px;
    padding: 5px;
    width: 7vw;
  }
  header img {
    width: 30vw;
    margin-left: 0;
    margin-top: 4vh;
  }
  header .imgHead {
    margin-left: 12px;
    font-size: 12px;
    height: 5vh;
  }
}
@media (max-width: 800px) {
  header {
    width: 800px;
    height: 250px;
  }
  header h1 {
    width: 50vw;
    font-size: 24px;
  }
  header nav {
    width: 55vw;
    margin-left: 0;
  }
  header nav div li {
    font-size: 10px;
    padding: 5px 25px;
  }
  header img {
    width: 25vw;
    margin-left: 0;
    margin-top: 5vh;
  }
  header .imgHead {
    margin-left: 12px;
    font-size: 14px;
    height: 6vh;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,UAAA;AADJ;;AAGA;EACI,WAAA;AAAJ;AACI;EACI,UAAA;EACA,gBAAA;EACA,MAAA;EACA,+BAAA;EACA,aAAA;EACD,WAAA;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;AACR;AAAQ;EACI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,cAvBL;AAyBP;AACQ;EACI,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AACZ;AACgB;EACI,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,yBA1Cb;AA2CP;AACgB;EACI,aAAA;AACpB;AACgB;EACI,eAAA;EACA,yBAhDX;EAiDW,YAAA;AACpB;AAIgB;EACI,cAAA;AAFpB;AAOI;EACG,WAAA;EACC,eAAA;EACA,gBAAA;AALR;AAOY;EACI,sBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;EACD,kBAAA;EACC,mBAAA;AALhB;AAQC;EAEG,gBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;EACA,+BAAA;AAPJ;AAQI;EACI,qBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;AANR;AASI;EAaI,aAAA;EAYA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sBAAA;EACA,WAAA;AA9BR;AAES;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACC,gBAAA;AAAZ;AAEY;EACI,YAAA;EACA,eAAA;AAAhB;AAKQ;EAEI,YAAA;EACA,kBAAA;AAJZ;AAMQ;EAEI,YAAA;EACA,eAAA;EACA,iBAAA;AALZ;;AAeA;EACI;IACI,aAAA;IACA,YAAA;EAZN;EAaM;IACI,eAAA;IACA,WAAA;EAXV;EAaE;IACI,gBAAA;IACA,WAAA;EAXN;EAcU;IACI,cAAA;IACA,YAAA;IACA,UAAA;EAZd;EAgBE;IACI,WAAA;IACA,cAAA;IACA,eAAA;EAdN;EAgBE;IACI,iBAAA;IACA,eAAA;IACA,WAAA;EAdN;AACF;AAiBA;EACI;IACI,YAAA;IACA,aAAA;EAfN;EAgBM;IACI,WAAA;IACA,eAAA;EAdV;EAgBM;IACI,WAAA;IACA,cAAA;EAdV;EAgBc;IACI,eAAA;IACD,iBAAA;EAdjB;EAkBM;IACI,WAAA;IACA,cAAA;IACA,eAAA;EAhBV;EAkBM;IACI,iBAAA;IACA,eAAA;IACA,WAAA;EAhBV;AACF","sourcesContent":["$grey: #808080;\n$gold: \t\t#FFBF00;\n*{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    width: 100%;\n    header{\n        z-index: 2;\n        position: sticky;\n        top: 0;\n        box-shadow: 0px 5px 5px $gold;\n        height: 250px;\n       width: 100%;\n        display: grid;\n        grid-template-columns: 1fr 3fr;\n        background-color: white;\n        h1{\n            margin-top: 5vh;\n            margin-left:22vw ;\n            width: 25vw;\n            height: 10vh;\n            color: $grey;\n    \n        }\n        nav{\n            width: 70vw;\n            max-height: 10vh ;\n            min-height: 10vh;\n            margin-left: 5vw;\n            margin-top: 1vh;\n            display: flex;\n            div{\n                li{\n                    border: solid 1px black;\n                    padding: 10px 40px;\n                    text-align: center;\n                    list-style: none;\n                    font-weight: bold;\n                    font-size: 20px;\n                    color: white;\n                    background-color: $grey;\n                }\n                .hidden{\n                    display: none;\n                }\n                li:hover{\n                    cursor: pointer;\n                    background-color:$gold ;\n                    color: black;\n    \n                }\n            }\n            div:hover{\n                .hidden{\n                    display: block;\n                }\n            }\n        }\n             \n    img{\n       width: 20vw;\n        margin-top: 1vh;\n        margin-left: 2vw;\n    }     \n            .imgHead{\n                background-color: gray;\n                font-size: 26px;\n                color: white;\n                height: 4vh;\n                width: 20vw;\n                margin-left: 36px;\n               text-align: center;\n                border-radius: 25px;\n            }\n        }\n main{\n     \n    padding: 3vw 3vh;\n    z-index: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr;\n    .sliderWrap{\n        border: solid 1px red;\n        width: 80%;\n        height: 40%;\n        grid-column: 1/3;\n        grid-row: 1/2;\n        \n    }\n    div{\n         ul{\n           display: flex;\n           flex-direction: column;\n           justify-content: center;\n            margin-left: 5vw;\n            \n            li {\n                color: white;\n                font-size: 19px;\n\n            }\n         }\n        padding: 10px;\n        h1{\n            \n            color: white;\n            text-align: center;\n        }\n        p{\n          \n            color: white;\n            font-size: 20px;\n            line-height: 30px;\n        }\n        background-color: #808080;\n        border-radius: 20px;\n        margin-left: 5vw;\n        border: solid 1px gray;\n        width: 30vw;\n    }\n }       \n}\n@media(max-width: 450px){\n    header{\n        height: 150px;\n        width: 450px;\n        h1{\n            font-size: 15px;\n            width: 50vw;\n        }\n    nav{\n        margin-left: 2px;\n        width: 30vw;\n        \n        div{\n            li{\n                font-size: 6px;\n                padding: 5px;\n                width: 7vw;\n            }\n        }\n    }\n    img{\n        width: 30vw;\n        margin-left: 0;\n        margin-top: 4vh;\n    }\n    .imgHead{\n        margin-left: 12px;\n        font-size: 12px;\n        height: 5vh;\n    }\n}\n}\n@media(max-width: 800px){\n    header{\n        width: 800px;\n        height: 250px;\n        h1{\n            width: 50vw;\n            font-size: 24px;\n        }\n        nav{\n            width: 55vw;\n            margin-left: 0;\n            div{\n                li{\n                    font-size: 10px;\n                   padding: 5px 25px; \n                }\n            }\n        }\n        img{\n            width: 25vw;\n            margin-left: 0;\n            margin-top: 5vh;\n        }\n        .imgHead{\n            margin-left: 12px;\n            font-size: 14px;\n            height: 6vh;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildHome.ts":
/*!**************************!*\
  !*** ./src/buildHome.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var slider_1 = __webpack_require__(/*! ./slider */ "./src/slider.ts");
function buildHome() {
    var main = document.querySelector('main');
    var whoisFighter = document.createElement('h1');
    main.appendChild((0, slider_1.default)());
    whoisFighter.innerHTML = 'Who is a Fighter?';
    var fighterDiv = document.createElement('div');
    fighterDiv.appendChild(whoisFighter);
    var fighterP = document.createElement('p');
    fighterP.innerHTML = 'A fighter does not inspire because they have cancer, but a fighter inspires because of the character with which they fight it. A fighter faces challenges with unwavering positibity and relentless hope - hope that they might take every opportunity to make a difference in this world. They fight for love, for family, for life. Fight on!';
    fighterDiv.appendChild(fighterP);
    main.appendChild(fighterDiv);
    var michelleDiv = document.createElement('div');
    michelleDiv.classList.add('aboutMichelle');
    var aboutMichelle = document.createElement('p');
    aboutMichelle.innerHTML = 'On March 14th, 2014 Michelle Boyd DeJong was diagnosed with an inoperable brain tumor. The tumor was located on her brain stem and its position was blocking the normal circulation of cerebral brain fluid, which resulted in pooling and increased pressure<br><br> An endoscopic ventriculostomy and biopsy was performed on march 17th, followed by the insertion of a left ventriculoperitoneal shunt on March 27th; having a subsequent revision on June 23rd. <br><br> Released from Moffitt Cancer Center the day after her shunt surgery, she made a quick recovery and promptly sneaked out to have her forearm tattooed with our "fighter" logo. The prescribed 42 days of chemotherapy and 33 radiation treatments started on April 16th.<br><br>During the week between brain surgeries Michelle realized that there was only one way to face this challenge and it was the same way she approached life: with a positive and selfless attitude focused on using her experiences to help others. The "fighter" mentality that she embodied is so much more than a battle against her brain tumor; more importantly, it is a daily initiative to inspire others through action and attitude. This begins with a personal conscious decision and ends with changing lives.';
    var michelleHeading = document.createElement('h1');
    michelleHeading.innerHTML = 'Who is Michelle?';
    michelleDiv.appendChild(michelleHeading);
    michelleDiv.appendChild(aboutMichelle);
    main.appendChild(michelleDiv);
    var FFObjectives = document.createElement('div');
    var FFObjHead = document.createElement('h1');
    FFObjHead.innerHTML = 'Fighter Foundation Objectives';
    var FFPara = document.createElement('ul');
    var objectives = ['Funding and Advocating for Brain Tumor Research', 'Promoting Brain Tumor Awareness', 'Brain Tumor Patient and Caregiver Support', 'Community Volunteer Events'];
    objectives.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = item;
        FFPara.appendChild(li);
    });
    FFObjectives.appendChild(FFObjHead);
    FFObjectives.appendChild(FFPara);
    main.appendChild(FFObjectives);
}
exports["default"] = buildHome;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
var logo = __webpack_require__(/*! ./logo.jpg */ "./src/logo.jpg");
var buildHome_1 = __webpack_require__(/*! ./buildHome */ "./src/buildHome.ts");
var header = document.querySelector('header');
var img = document.createElement('img');
img.src = logo;
img.alt = 'fighter foundation';
var imgHead = document.createElement('h3');
imgHead.classList.add('imgHead');
imgHead.innerHTML = 'Fight to cure Glioblastoma!';
header.appendChild(img);
var h1 = document.createElement('h1');
h1.innerHTML = '"I Think there is Always Hope"<br> -Michelle B. DeJong';
header.appendChild(h1);
header.appendChild(imgHead);
var nav = document.createElement('nav');
var tabs = ['Home', 'About', 'Programs', 'Events', 'Blog', 'Contact', 'Store'];
tabs.forEach(function (tab) {
    var div = document.createElement('div');
    var li = document.createElement('li');
    li.classList.add(tab);
    li.innerHTML = tab;
    div.appendChild(li);
    if (tab === 'About') {
        var li_1 = document.createElement('li');
        li_1.classList.add('hidden');
        li_1.innerHTML = 'Meet the board';
        var liB = document.createElement('li');
        liB.innerHTML = 'Remembering Michelle';
        liB.classList.add('hidden');
        div.appendChild(li_1);
        div.appendChild(liB);
    }
    if (tab === 'blog') {
        var li_2 = document.createElement('li');
        li_2.classList.add('hidden');
        li_2.innerHTML = 'Lessons Along the Way';
        div.appendChild(li_2);
    }
    if (tab === 'Programs') {
        var count = 0;
        while (count <= 2) {
            var li_3 = document.createElement('li');
            switch (count) {
                case 0:
                    li_3.innerHTML = 'Patient Resources';
                    count++;
                    li_3.classList.add('hidden');
                    div.appendChild(li_3);
                    break;
                case 1:
                    li_3.innerHTML = 'CareGiver Resources';
                    count++;
                    li_3.classList.add('hidden');
                    div.appendChild(li_3);
                    break;
                case 2:
                    li_3.innerHTML = 'Funding Clinical Trials';
                    li_3.classList.add('hidden');
                    div.appendChild(li_3);
                    count++;
                    break;
            }
        }
    }
    nav.appendChild(div);
});
header.appendChild(nav);
(0, buildHome_1.default)();


/***/ }),

/***/ "./src/slider.ts":
/*!***********************!*\
  !*** ./src/slider.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var mural_jpg_1 = __webpack_require__(/*! ./mural.jpg */ "./src/mural.jpg");
var race_jpg_1 = __webpack_require__(/*! ./race.jpg */ "./src/race.jpg");
var hope_jpeg_1 = __webpack_require__(/*! ./hope.jpeg */ "./src/hope.jpeg");
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function buildImageSlider() {
    var heading = [mural_jpg_1.default, race_jpg_1.default, hope_jpeg_1.hope];
    var slider = document.createElement('div');
    slider.classList.add('imgSlider');
    var wrap = document.createElement('div');
    wrap.classList.add('sliderWrap');
    for (var i = 0; i < heading.length; i++) {
        var image = document.createElement('img');
        image.src = heading[i];
        slider.appendChild(image);
    }
    var count = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var interval = setInterval(function () {
        var vw = 26;
        if (count === -3) {
            count = 0;
            vw = vw * count;
            slider.style.transition = 'none';
            slider.style.transform = "translateX(".concat(vw, "vw)");
        }
        else {
            count--;
            vw = vw * count;
            slider.style.transform = "translateX(".concat(vw, "vw)");
            slider.style.transition = 'transform 1s ease-in-out';
        }
    }, 5000);
    wrap.appendChild(slider);
    return wrap;
}
exports["default"] = buildImageSlider;


/***/ }),

/***/ "./src/hope.jpeg":
/*!***********************!*\
  !*** ./src/hope.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "571cba18cd03d6db1662.jpeg";

/***/ }),

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "679d46993f283915a3c9.jpg";

/***/ }),

/***/ "./src/mural.jpg":
/*!***********************!*\
  !*** ./src/mural.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67ad91b41c1fa5a296a7.jpg";

/***/ }),

/***/ "./src/race.jpg":
/*!**********************!*\
  !*** ./src/race.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf42874b87a2b823ef75.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLHdDQUF3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cUJBQWMsRUFBRSxRQUFLO1lBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLDBCQUEwQjtRQUN0RCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtBQUNiLENBQUM7QUE3QkQsc0NBNkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnaHRlcmZvdW5kYXRpb24vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9maWdodGVyZm91bmRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmlnaHRlcmZvdW5kYXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9maWdodGVyZm91bmRhdGlvbi8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZmlnaHRlcmZvdW5kYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmlnaHRlcmZvdW5kYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpZ2h0ZXJmb3VuZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpZ2h0ZXJmb3VuZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpZ2h0ZXJmb3VuZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmlnaHRlcmZvdW5kYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maWdodGVyZm91bmRhdGlvbi8uL3NyYy9idWlsZEhvbWUudHMiLCJ3ZWJwYWNrOi8vZmlnaHRlcmZvdW5kYXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZmlnaHRlcmZvdW5kYXRpb24vLi9zcmMvc2xpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5ib2R5IGhlYWRlciB7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggI0ZGQkYwMDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5ib2R5IGhlYWRlciBoMSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgbWFyZ2luLWxlZnQ6IDIydnc7XG4gIHdpZHRoOiAyNXZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuYm9keSBoZWFkZXIgbmF2IHtcbiAgd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDEwdmg7XG4gIG1pbi1oZWlnaHQ6IDEwdmg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbn1cbmJvZHkgaGVhZGVyIG5hdiBkaXYgbGkge1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcbn1cbmJvZHkgaGVhZGVyIG5hdiBkaXYgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5ib2R5IGhlYWRlciBuYXYgZGl2IGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5ib2R5IGhlYWRlciBuYXYgZGl2OmhvdmVyIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkgaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAyMHZ3O1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIG1hcmdpbi1sZWZ0OiAydnc7XG59XG5ib2R5IGhlYWRlciAuaW1nSGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDR2aDtcbiAgd2lkdGg6IDIwdnc7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5ib2R5IG1haW4ge1xuICBwYWRkaW5nOiAzdncgM3ZoO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XG59XG5ib2R5IG1haW4gLnNsaWRlcldyYXAge1xuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDAlO1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMS8yO1xufVxuYm9keSBtYWluIGRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XG4gIHdpZHRoOiAzMHZ3O1xufVxuYm9keSBtYWluIGRpdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xufVxuYm9keSBtYWluIGRpdiB1bCBsaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuYm9keSBtYWluIGRpdiBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYm9keSBtYWluIGRpdiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxuICBoZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogNTB2dztcbiAgfVxuICBoZWFkZXIgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIHdpZHRoOiAzMHZ3O1xuICB9XG4gIGhlYWRlciBuYXYgZGl2IGxpIHtcbiAgICBmb250LXNpemU6IDZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDd2dztcbiAgfVxuICBoZWFkZXIgaW1nIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA0dmg7XG4gIH1cbiAgaGVhZGVyIC5pbWdIZWFkIHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgaGVpZ2h0OiA1dmg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoZWFkZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIGhlYWRlciBoMSB7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIGhlYWRlciBuYXYge1xuICAgIHdpZHRoOiA1NXZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIGhlYWRlciBuYXYgZGl2IGxpIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDI1cHg7XG4gIH1cbiAgaGVhZGVyIGltZyB7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICB9XG4gIGhlYWRlciAuaW1nSGVhZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNnZoO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBREo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7QUFDSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDRCxXQUFBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUFRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQXZCTDtBQXlCUDtBQUNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ1o7QUFDZ0I7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkExQ2I7QUEyQ1A7QUFDZ0I7RUFDSSxhQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksZUFBQTtFQUNBLHlCQWhEWDtFQWlEVyxZQUFBO0FBQ3BCO0FBSWdCO0VBQ0ksY0FBQTtBQUZwQjtBQU9JO0VBQ0csV0FBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUxSO0FBT1k7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNELGtCQUFBO0VBQ0MsbUJBQUE7QUFMaEI7QUFRQztFQUVHLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBUEo7QUFRSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFOUjtBQVNJO0VBYUksYUFBQTtFQVlBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQTlCUjtBQUVTO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQyxnQkFBQTtBQUFaO0FBRVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQUtRO0VBRUksWUFBQTtFQUNBLGtCQUFBO0FBSlo7QUFNUTtFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFMWjs7QUFlQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7RUFaTjtFQWFNO0lBQ0ksZUFBQTtJQUNBLFdBQUE7RUFYVjtFQWFFO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0VBWE47RUFjVTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQVpkO0VBZ0JFO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBZE47RUFnQkU7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VBZE47QUFDRjtBQWlCQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFmTjtFQWdCTTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBZFY7RUFnQk07SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQWRWO0VBZ0JjO0lBQ0ksZUFBQTtJQUNELGlCQUFBO0VBZGpCO0VBa0JNO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBaEJWO0VBa0JNO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQWhCVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRncmV5OiAjODA4MDgwO1xcbiRnb2xkOiBcXHRcXHQjRkZCRjAwO1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlYWRlcntcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggJGdvbGQ7XFxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGgxe1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoyMnZ3IDtcXG4gICAgICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xcbiAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIG5hdntcXG4gICAgICAgICAgICB3aWR0aDogNzB2dztcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMHZoIDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZGl2e1xcbiAgICAgICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmhpZGRlbntcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgbGk6aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRnb2xkIDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZGl2OmhvdmVye1xcbiAgICAgICAgICAgICAgICAuaGlkZGVue1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAgICAgIFxcbiAgICBpbWd7XFxuICAgICAgIHdpZHRoOiAyMHZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcXG4gICAgfSAgICAgXFxuICAgICAgICAgICAgLmltZ0hlYWR7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDR2aDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuIG1haW57XFxuICAgICBcXG4gICAgcGFkZGluZzogM3Z3IDN2aDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xcbiAgICAuc2xpZGVyV3JhcHtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IDQwJTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgZGl2e1xcbiAgICAgICAgIHVse1xcbiAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgIH1cXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBoMXtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgfVxcbiB9ICAgICAgIFxcbn1cXG5AbWVkaWEobWF4LXdpZHRoOiA0NTBweCl7XFxuICAgIGhlYWRlcntcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICB3aWR0aDogNDUwcHg7XFxuICAgICAgICBoMXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwdnc7XFxuICAgICAgICB9XFxuICAgIG5hdntcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIFxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogN3Z3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBpbWd7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xcbiAgICB9XFxuICAgIC5pbWdIZWFke1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDV2aDtcXG4gICAgfVxcbn1cXG59XFxuQG1lZGlhKG1heC13aWR0aDogODAwcHgpe1xcbiAgICBoZWFkZXJ7XFxuICAgICAgICB3aWR0aDogODAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgd2lkdGg6IDUwdnc7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgbmF2e1xcbiAgICAgICAgICAgIHdpZHRoOiA1NXZ3O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgICAgIGRpdntcXG4gICAgICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyNXB4OyBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICB9XFxuICAgICAgICAuaW1nSGVhZHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbmltcG9ydCBidWlsZEltYWdlU2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lICgpIHtcbiAgY29uc3QgbWFpbjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gIGNvbnN0IHdob2lzRmlnaHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgbWFpbi5hcHBlbmRDaGlsZChidWlsZEltYWdlU2xpZGVyKCkpXG4gIHdob2lzRmlnaHRlci5pbm5lckhUTUwgPSAnV2hvIGlzIGEgRmlnaHRlcj8nXG4gIGNvbnN0IGZpZ2h0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBmaWdodGVyRGl2LmFwcGVuZENoaWxkKHdob2lzRmlnaHRlcilcbiAgY29uc3QgZmlnaHRlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgZmlnaHRlclAuaW5uZXJIVE1MID0gJ0EgZmlnaHRlciBkb2VzIG5vdCBpbnNwaXJlIGJlY2F1c2UgdGhleSBoYXZlIGNhbmNlciwgYnV0IGEgZmlnaHRlciBpbnNwaXJlcyBiZWNhdXNlIG9mIHRoZSBjaGFyYWN0ZXIgd2l0aCB3aGljaCB0aGV5IGZpZ2h0IGl0LiBBIGZpZ2h0ZXIgZmFjZXMgY2hhbGxlbmdlcyB3aXRoIHVud2F2ZXJpbmcgcG9zaXRpYml0eSBhbmQgcmVsZW50bGVzcyBob3BlIC0gaG9wZSB0aGF0IHRoZXkgbWlnaHQgdGFrZSBldmVyeSBvcHBvcnR1bml0eSB0byBtYWtlIGEgZGlmZmVyZW5jZSBpbiB0aGlzIHdvcmxkLiBUaGV5IGZpZ2h0IGZvciBsb3ZlLCBmb3IgZmFtaWx5LCBmb3IgbGlmZS4gRmlnaHQgb24hJ1xuICBmaWdodGVyRGl2LmFwcGVuZENoaWxkKGZpZ2h0ZXJQKVxuICBtYWluLmFwcGVuZENoaWxkKGZpZ2h0ZXJEaXYpXG4gIGNvbnN0IG1pY2hlbGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWljaGVsbGVEaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXRNaWNoZWxsZScpXG4gIGNvbnN0IGFib3V0TWljaGVsbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgYWJvdXRNaWNoZWxsZS5pbm5lckhUTUwgPSAnT24gTWFyY2ggMTR0aCwgMjAxNCBNaWNoZWxsZSBCb3lkIERlSm9uZyB3YXMgZGlhZ25vc2VkIHdpdGggYW4gaW5vcGVyYWJsZSBicmFpbiB0dW1vci4gVGhlIHR1bW9yIHdhcyBsb2NhdGVkIG9uIGhlciBicmFpbiBzdGVtIGFuZCBpdHMgcG9zaXRpb24gd2FzIGJsb2NraW5nIHRoZSBub3JtYWwgY2lyY3VsYXRpb24gb2YgY2VyZWJyYWwgYnJhaW4gZmx1aWQsIHdoaWNoIHJlc3VsdGVkIGluIHBvb2xpbmcgYW5kIGluY3JlYXNlZCBwcmVzc3VyZTxicj48YnI+IEFuIGVuZG9zY29waWMgdmVudHJpY3Vsb3N0b215IGFuZCBiaW9wc3kgd2FzIHBlcmZvcm1lZCBvbiBtYXJjaCAxN3RoLCBmb2xsb3dlZCBieSB0aGUgaW5zZXJ0aW9uIG9mIGEgbGVmdCB2ZW50cmljdWxvcGVyaXRvbmVhbCBzaHVudCBvbiBNYXJjaCAyN3RoOyBoYXZpbmcgYSBzdWJzZXF1ZW50IHJldmlzaW9uIG9uIEp1bmUgMjNyZC4gPGJyPjxicj4gUmVsZWFzZWQgZnJvbSBNb2ZmaXR0IENhbmNlciBDZW50ZXIgdGhlIGRheSBhZnRlciBoZXIgc2h1bnQgc3VyZ2VyeSwgc2hlIG1hZGUgYSBxdWljayByZWNvdmVyeSBhbmQgcHJvbXB0bHkgc25lYWtlZCBvdXQgdG8gaGF2ZSBoZXIgZm9yZWFybSB0YXR0b29lZCB3aXRoIG91ciBcImZpZ2h0ZXJcIiBsb2dvLiBUaGUgcHJlc2NyaWJlZCA0MiBkYXlzIG9mIGNoZW1vdGhlcmFweSBhbmQgMzMgcmFkaWF0aW9uIHRyZWF0bWVudHMgc3RhcnRlZCBvbiBBcHJpbCAxNnRoLjxicj48YnI+RHVyaW5nIHRoZSB3ZWVrIGJldHdlZW4gYnJhaW4gc3VyZ2VyaWVzIE1pY2hlbGxlIHJlYWxpemVkIHRoYXQgdGhlcmUgd2FzIG9ubHkgb25lIHdheSB0byBmYWNlIHRoaXMgY2hhbGxlbmdlIGFuZCBpdCB3YXMgdGhlIHNhbWUgd2F5IHNoZSBhcHByb2FjaGVkIGxpZmU6IHdpdGggYSBwb3NpdGl2ZSBhbmQgc2VsZmxlc3MgYXR0aXR1ZGUgZm9jdXNlZCBvbiB1c2luZyBoZXIgZXhwZXJpZW5jZXMgdG8gaGVscCBvdGhlcnMuIFRoZSBcImZpZ2h0ZXJcIiBtZW50YWxpdHkgdGhhdCBzaGUgZW1ib2RpZWQgaXMgc28gbXVjaCBtb3JlIHRoYW4gYSBiYXR0bGUgYWdhaW5zdCBoZXIgYnJhaW4gdHVtb3I7IG1vcmUgaW1wb3J0YW50bHksIGl0IGlzIGEgZGFpbHkgaW5pdGlhdGl2ZSB0byBpbnNwaXJlIG90aGVycyB0aHJvdWdoIGFjdGlvbiBhbmQgYXR0aXR1ZGUuIFRoaXMgYmVnaW5zIHdpdGggYSBwZXJzb25hbCBjb25zY2lvdXMgZGVjaXNpb24gYW5kIGVuZHMgd2l0aCBjaGFuZ2luZyBsaXZlcy4nXG4gIGNvbnN0IG1pY2hlbGxlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgbWljaGVsbGVIZWFkaW5nLmlubmVySFRNTCA9ICdXaG8gaXMgTWljaGVsbGU/J1xuICBtaWNoZWxsZURpdi5hcHBlbmRDaGlsZChtaWNoZWxsZUhlYWRpbmcpXG4gIG1pY2hlbGxlRGl2LmFwcGVuZENoaWxkKGFib3V0TWljaGVsbGUpXG4gIG1haW4uYXBwZW5kQ2hpbGQobWljaGVsbGVEaXYpXG4gIGNvbnN0IEZGT2JqZWN0aXZlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IEZGT2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgRkZPYmpIZWFkLmlubmVySFRNTCA9ICdGaWdodGVyIEZvdW5kYXRpb24gT2JqZWN0aXZlcydcbiAgY29uc3QgRkZQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICBjb25zdCBvYmplY3RpdmVzID0gWydGdW5kaW5nIGFuZCBBZHZvY2F0aW5nIGZvciBCcmFpbiBUdW1vciBSZXNlYXJjaCcsICdQcm9tb3RpbmcgQnJhaW4gVHVtb3IgQXdhcmVuZXNzJywgJ0JyYWluIFR1bW9yIFBhdGllbnQgYW5kIENhcmVnaXZlciBTdXBwb3J0JywgJ0NvbW11bml0eSBWb2x1bnRlZXIgRXZlbnRzJ11cbiAgb2JqZWN0aXZlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkuaW5uZXJIVE1MID0gaXRlbVxuICAgIEZGUGFyYS5hcHBlbmRDaGlsZChsaSlcbiAgfSlcbiAgRkZPYmplY3RpdmVzLmFwcGVuZENoaWxkKEZGT2JqSGVhZClcbiAgRkZPYmplY3RpdmVzLmFwcGVuZENoaWxkKEZGUGFyYSlcbiAgbWFpbi5hcHBlbmRDaGlsZChGRk9iamVjdGl2ZXMpXG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBsb2dvID0gcmVxdWlyZSgnLi9sb2dvLmpwZycpXG5pbXBvcnQgYnVpbGRIb21lIGZyb20gJy4vYnVpbGRIb21lJ1xuY29uc3QgaGVhZGVyOiBIVE1MRWxlbWVudCB8IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuaW1nLnNyYyA9IGxvZ29cbmltZy5hbHQgPSAnZmlnaHRlciBmb3VuZGF0aW9uJ1xuY29uc3QgaW1nSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbmltZ0hlYWQuY2xhc3NMaXN0LmFkZCgnaW1nSGVhZCcpXG5pbWdIZWFkLmlubmVySFRNTCA9ICdGaWdodCB0byBjdXJlIEdsaW9ibGFzdG9tYSEnXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaW1nKVxuXG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmgxLmlubmVySFRNTCA9ICdcIkkgVGhpbmsgdGhlcmUgaXMgQWx3YXlzIEhvcGVcIjxicj4gLU1pY2hlbGxlIEIuIERlSm9uZydcbmhlYWRlci5hcHBlbmRDaGlsZChoMSlcbmhlYWRlci5hcHBlbmRDaGlsZChpbWdIZWFkKVxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbmNvbnN0IHRhYnM6IHN0cmluZ1tdID0gWydIb21lJywgJ0Fib3V0JywgJ1Byb2dyYW1zJywgJ0V2ZW50cycsICdCbG9nJywgJ0NvbnRhY3QnLCAnU3RvcmUnXVxudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIGxpLmNsYXNzTGlzdC5hZGQodGFiKVxuICBsaS5pbm5lckhUTUwgPSB0YWJcbiAgZGl2LmFwcGVuZENoaWxkKGxpKVxuICBpZiAodGFiID09PSAnQWJvdXQnKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBsaS5pbm5lckhUTUwgPSAnTWVldCB0aGUgYm9hcmQnXG4gICAgY29uc3QgbGlCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpQi5pbm5lckhUTUwgPSAnUmVtZW1iZXJpbmcgTWljaGVsbGUnXG4gICAgbGlCLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZGl2LmFwcGVuZENoaWxkKGxpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChsaUIpXG4gIH0gaWYgKHRhYiA9PT0gJ2Jsb2cnKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBsaS5pbm5lckhUTUwgPSAnTGVzc29ucyBBbG9uZyB0aGUgV2F5J1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaSlcbiAgfSBpZiAodGFiID09PSAnUHJvZ3JhbXMnKSB7XG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHdoaWxlIChjb3VudCA8PSAyKSB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIHN3aXRjaCAoY291bnQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGxpLmlubmVySFRNTCA9ICdQYXRpZW50IFJlc291cmNlcydcbiAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGxpLmlubmVySFRNTCA9ICdDYXJlR2l2ZXIgUmVzb3VyY2VzJ1xuICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbGkuaW5uZXJIVE1MID0gJ0Z1bmRpbmcgQ2xpbmljYWwgVHJpYWxzJ1xuICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuYXYuYXBwZW5kQ2hpbGQoZGl2KVxufSlcbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG5cbmJ1aWxkSG9tZSgpXG4iLCJpbXBvcnQgbXVyYWwgZnJvbSAnLi9tdXJhbC5qcGcnXG5pbXBvcnQgcmFjZSBmcm9tICcuL3JhY2UuanBnJ1xuaW1wb3J0IHsgaG9wZSB9IGZyb20gJy4vaG9wZS5qcGVnJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRJbWFnZVNsaWRlciAoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBbbXVyYWwsIHJhY2UsIGhvcGVdXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdpbWdTbGlkZXInKVxuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd3JhcC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJXcmFwJylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltYWdlLnNyYyA9IGhlYWRpbmdbaV1cbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gIH1cbiAgbGV0IGNvdW50ID0gMFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGxldCB2dyA9IDI2XG4gICAgaWYgKGNvdW50ID09PSAtMykge1xuICAgICAgY291bnQgPSAwXG4gICAgICB2dyA9IHZ3ICogY291bnRcbiAgICAgIHNsaWRlci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICBzbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50LS1cbiAgICAgIHZ3ID0gdncgKiBjb3VudFxuICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYFxuICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0J1xuICAgIH1cbiAgfSwgNTAwMClcbiAgd3JhcC5hcHBlbmRDaGlsZChzbGlkZXIpXG4gIHJldHVybiB3cmFwXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=