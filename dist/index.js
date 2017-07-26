(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-js-popover"] = factory(require("vue"));
	else
		root["vue-js-popover"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = undefined;

var _vue = __webpack_require__(13);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = exports.events = new _vue2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(4),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bus = __webpack_require__(0);

var pointerSize = 6;
var directions = {
  left: [-1, 0],
  right: [1, 0],
  top: [0, 1],
  bottom: [0, -1]
};

exports.default = {
  name: 'Popover',
  render: function render(createElement) {
    if (!this.visible) {
      return;
    }

    return createElement('div', {
      class: this.className,
      style: this.style,
      attrs: {
        'data-popover': this.name
      },
      on: {
        click: function click(event) {
          event.stopPropagation();
        }
      },
      ref: 'dropdown'
    }, this.$slots.default);
  },
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 180
    },
    pointer: {
      type: Boolean,
      default: true
    },
    event: {
      type: String,
      default: 'click'
    },
    anchor: {
      type: Number,
      default: 0.5,
      validator: function validator(v) {
        return v >= 0 && v <= 1;
      }
    }
  },
  data: function data() {
    return {
      visible: false,
      positionClass: '',
      position: {
        left: 0,
        top: 0
      }
    };
  },
  mounted: function mounted() {
    _bus.events.$on(this.showEventName, this.showEventListener);
    _bus.events.$on(this.hideEventName, this.hideEventListener);
  },
  beforeDestroy: function beforeDestroy() {
    _bus.events.$off(this.showEventName, this.showEventListener);
    _bus.events.$off(this.hideEventName, this.hideEventListener);
  },

  computed: {
    showEventName: function showEventName() {
      return 'show:' + this.event;
    },
    hideEventName: function hideEventName() {
      return 'hide:' + this.event;
    },
    className: function className() {
      return ['vue-popover', this.pointer && this.positionClass];
    },
    style: function style() {
      return _extends({
        width: this.width + 'px'
      }, this.position);
    }
  },
  methods: {
    showEventListener: function showEventListener(event) {
      var _this = this;

      if (this.visible) {
        _bus.events.$emit(this.hideEventName);
        return;
      }

      this.$nextTick(function () {
        var target = event.target,
            name = event.name,
            position = event.position;


        if (name === _this.name) {
          var direction = directions[position];

          _this.positionClass = 'dropdown-position-' + position;
          _this.visible = true;

          _this.$nextTick(function () {
            var position = _this.getDrodownPosition(target, _this.$refs.dropdown, direction);

            _this.position = {
              left: position.left + 'px',
              top: position.top + 'px'
            };

            _this.$emit('show', _extends({}, event, { position: position }));
          });
        }
      });
    },
    hideEventListener: function hideEventListener(event) {
      if (this.visible) {
        this.visible = false;
        this.$emit('hide', event);
      }
    },
    getDrodownPosition: function getDrodownPosition(target, dropdown, direction) {
      var trRect = target.getBoundingClientRect();
      var ddRect = dropdown.getBoundingClientRect();

      var offsetLeft = target.offsetLeft,
          offsetTop = target.offsetTop;

      var shiftY = 0.5 * (ddRect.height + trRect.height);

      var centerX = offsetLeft - 0.5 * (ddRect.width - trRect.width);
      var centerY = offsetTop + trRect.height - shiftY;

      var x = direction[0] * 0.5 * (ddRect.width + trRect.width);
      var y = direction[1] * shiftY;

      if (this.pointer) {
        x += direction[0] * pointerSize;
        y += direction[1] * pointerSize;
      }

      return {
        left: centerX + x,
        top: centerY - y
      };
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Tooltip',
  props: {
    event: {
      type: String,
      default: 'hover'
    },
    pointer: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 160
    }
  },
  data: function data() {
    return {
      value: ''
    };
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Popover = __webpack_require__(2);

var _Popover2 = _interopRequireDefault(_Popover);

var _Tooltip = __webpack_require__(3);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _bus = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPosition = 'bottom';

var prepareBinding = function prepareBinding(binding) {
  var arg = binding.arg,
      modifiers = binding.modifiers,
      value = binding.value;

  var mods = Object.keys(modifiers || {});

  return {
    name: arg,
    position: mods[0] || defaultPosition,
    value: value
  };
};

var addClickEventListener = function addClickEventListener(target, params) {
  var click = function click(srcEvent) {
    _bus.events.$emit('show:click', _extends({}, params, { target: target, srcEvent: srcEvent }));

    var handler = function handler(srcEvent) {
      _bus.events.$emit('hide:click', _extends({}, params, { target: target, srcEvent: srcEvent }));
      document.removeEventListener('click', handler);
    };

    document.addEventListener('click', handler);
    srcEvent.stopPropagation();
  };

  target.addEventListener('click', click);

  target.$popoverRemoveClickHandlers = function () {
    target.removeEventListener('click', click);
  };
};

var addHoverEventListener = function addHoverEventListener(target, params) {
  var mouseover = function mouseover(srcEvent) {
    _bus.events.$emit('show:hover', _extends({}, params, { target: target, srcEvent: srcEvent }));
  };

  var mouseleave = function mouseleave(srcEvent) {
    _bus.events.$emit('hide:hover', _extends({}, params, { target: target, srcEvent: srcEvent }));
  };

  target.addEventListener('mouseover', mouseover);
  target.addEventListener('mouseleave', mouseleave);

  target.$popoverRemoveHoverHandlers = function () {
    target.removeEventListener('mouseover', mouseover);
    target.removeEventListener('mouseleave', mouseleave);
  };
};

exports.default = {
  install: function install(Vue) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    document.addEventListener('resize', function (event) {
      _bus.events.$emit('hide', { srcEvent: event });
    });

    Vue.component('Popover', _Popover2.default);

    Vue.directive('popover', {
      bind: function bind(target, binding) {
        var params = prepareBinding(binding);

        addClickEventListener(target, params);
        addHoverEventListener(target, params);
      },
      unbind: function unbind(target, binding) {
        target.$popoverRemoveHoverHandlers();
        target.$popoverRemoveClickHandlers();
      }
    });

    if (params.tooltip) {
      if (params.debug) {
        console.log('vue-js-popover | tooltip active');
      }
      Vue.component('Tooltip', _Tooltip2.default);
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".vue-popover{display:block;position:absolute;background:#fff;box-shadow:0 4px 20px 0 rgba(52,73,94,.2);padding:5px;border-radius:5px;z-index:998}.vue-popover:before{display:block;position:absolute;width:0;height:0;content:\"\"}.vue-popover.dropdown-position-bottom:before{border-bottom:6px solid #fff;top:-6px;filter:drop-shadow(0 -2px 2px rgba(52,73,94,.1))}.vue-popover.dropdown-position-bottom:before,.vue-popover.dropdown-position-top:before{border-left:6px solid transparent;border-right:6px solid transparent;left:calc(50% - 6px)}.vue-popover.dropdown-position-top:before{border-top:6px solid #fff;bottom:-6px;filter:drop-shadow(0 2px 2px rgba(52,73,94,.1))}.vue-popover.dropdown-position-left:before{border-left:6px solid #fff;right:-6px;filter:drop-shadow(2px 0 2px rgba(52,73,94,.1))}.vue-popover.dropdown-position-left:before,.vue-popover.dropdown-position-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;top:calc(50% - 6px)}.vue-popover.dropdown-position-right:before{border-right:6px solid #fff;left:-6px;filter:drop-shadow(-2px 0 2px rgba(52,73,94,.1))}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('popover', {
    attrs: {
      "name": "tooltip",
      "pointer": _vm.pointer,
      "width": _vm.width,
      "event": _vm.event
    },
    on: {
      "show": function($event) {
        _vm.value = $event.value
      }
    }
  }, [_vm._v("\n  " + _vm._s(_vm.value) + "\n")])
},staticRenderFns: []}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("7527e474", content, true);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map