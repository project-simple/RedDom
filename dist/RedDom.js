(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RedDom", [], factory);
	else if(typeof exports === 'object')
		exports["RedDom"] = factory();
	else
		root["RedDom"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/RedDom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/project-simple-red-detector/dist/RedDetector.min.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,o){ true?module.exports=o():undefined}("undefined"!=typeof self?self:this,function(){return(t={},n.m=r={"./src/RedDetector.js":function(e,o,r){"use strict";r.r(o);function t(){return b.indexOf("whale")<0?0:(c=parseFloat(/whale\/([\d]+)/.exec(b)[1]),s="whale")}function n(){if(!(b.indexOf(p="chrome")<0&&b.indexOf(p="crios")<0))return s="chrome",c=parseFloat(("chrome"==p?/chrome\/([\d]+)/:/crios\/([\d]+)/).exec(b)[1])}function i(){return b.indexOf("firefox")<0?0:(s="firefox",c=parseFloat(/firefox\/([\d]+)/.exec(b)[1]))}function f(){return b.indexOf("safari")<0?0:(s="safari",c=parseFloat(/safari\/([\d]+)/.exec(b)[1]))}function d(){var e;return b.indexOf(e="opera")<0&&b.indexOf(e="opr")<0?0:c=(s="opera")==e?parseFloat(/version\/([\d]+)/.exec(b)[1]):parseFloat(/opr\/([\d]+)/.exec(b)[1])}function a(){return b.indexOf("naver")<0?0:s="naver"}
/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/
var s,c,u,l,p,x,m={},O=window.navigator,b=O.userAgent.toLowerCase(),v=O.platform.toLowerCase(),w=O.appVersion.toLowerCase(),y="pc",h=0;if(m=m||{},-1<b.indexOf("android"))s=u="android",y=-1==b.indexOf("mobile")?(s+="Tablet","tablet"):"mobile",l=(p=/android ([\d.]+)/.exec(b))?(p=p[1].split("."),parseFloat(p[0]+"."+p[1])):0,h=1,t()||a()||d()||n()||i()||(c=p=/safari\/([\d.]+)/.exec(b)?parseFloat(p[1]):0);else if(-1<b.indexOf(p="ipad")||-1<b.indexOf(p="iphone"))y="ipad"==p?"tablet":"mobile",s=u=p,l=(p=/os ([\d_]+)/.exec(b))?(p=p[1].split("_"),parseFloat(p[0]+"."+p[1])):0,h=1,t()||a()||d()||n()||i()||(c=(p=/mobile\/([\S]+)/.exec(b))?parseFloat(p[1]):0);else if(-1<v.indexOf("win")){for(p in x={5.1:"xp","6.0":"vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"})if(-1<b.indexOf("windows nt "+p)){l=x[p];break}u="win",(-1<b.indexOf("edge")?(-1<b.indexOf("iemobile")&&(u="winMobile"),s="edge",c=/edge\/([\d]+)/.exec(b)[1]):b.indexOf("msie")<0&&b.indexOf("trident")<0?void 0:(-1<b.indexOf("iemobile")&&(u="winMobile"),s="ie",c=-1<b.indexOf("msie 7")&&-1<b.indexOf("trident")?-1:b.indexOf("msie")<0?11:parseFloat(/msie ([\d]+)/.exec(b)[1])))||t()||d()||n()||i()||f()}else-1<v.indexOf("mac")?(u="mac",p=/os x ([\d._]+)/.exec(b)[1].replace("_",".").split("."),l=parseFloat(p[0]+"."+p[1]),t()||d()||n()||i()||f()):(u=-1<w.indexOf("x11")?"unix":-1<w.indexOf("linux")?"linux":0,t()||n()||i());for(p in x={device:y,isMobile:1==h,browser:s,browserVer:c,os:u,osVer:l,down:h?"touchstart":"mousedown",move:h?"touchmove":"mousemove",up:h?"touchend":"mouseup",click:"click",over:"mouseover",out:"mouseout"})x.hasOwnProperty(p)&&(m[p]=x[p]);o.default=m}},n.c=t,n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)n.d(r,t,function(e){return o[e]}.bind(null,t));return r},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s="./src/RedDetector.js")).default;function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r,t});

/***/ }),

/***/ "./src/RedDom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/project-simple-red-detector/dist/RedDetector.min.js");
/* harmony import */ var project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0__);

/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/


var UUID_TABLE, UUID;
var RedDom, RedDomCls, fn;
UUID = 0;
UUID_TABLE = {},
	//////////////////////////////////
	// 실제 클래스
	RedDomCls = function (k) {
		(this.dom = k).__uuid = UUID++;
		UUID_TABLE[this.dom.__uuid] = this;
		this.dom.dataset ? 0 : this.dom.dataset = {}
	},
	//////////////////////////////////
	// 클래스 팩토리
	RedDom = (function () {
		var result, t;
		return function (k) {
			if (k == 'body') k = document.body;
			if (k instanceof Element) result = UUID_TABLE[k.__uuid] ? UUID_TABLE[k.__uuid] : new RedDomCls(k);
			else if (k = k.trim(), k.charAt(0) == "<") {
				t = document.createElement("div"),
					t.innerHTML = k,
					result = new RedDomCls(t.childNodes[0]);
				t = null;
			} else if (k.charAt(0) == "#") {
				t = document.getElementById(k = k.substr(1, k.length - 1));
				if (t && UUID_TABLE[t.__uuid]) result = UUID_TABLE[t.__uuid];
				else if (t) result = new RedDomCls(t);
				else result = null
			} else result = new RedDomCls(document.createElement(k));
			return result;
		}
	})(),
	RedDom['RedDomCls'] = RedDomCls,
	//////////////////////////////////
	// 프로토타입 정의
	fn = RedDomCls.prototype,
	// 외부 유출용 프로토타입 정의
	RedDom.fn = fn,
	//////////////////////////////////
	// fn정의
	fn.S = (function () {
		var noPx = {'opacity': 1, 'z-index': 1, 'zIndex': 1};
		return function () {
			var arg = arguments;
			var max, i;
			var k, v, isAttr, tS, tD;
			k = project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0___default.a[k] ? project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0___default.a[k] : k, //모바일 터치이벤트 체크
				i = 0, max = arg.length,
				tD = this.dom,
				tS = tD.style;
			for (i; i < max; i++) {
				k = arg[i],
					isAttr = false,
					k.charAt(0) == "@" ? (isAttr = true, k = k.substr(1, k.length - 1)) : 0,
					i++, v = arg[i];
				if (v === null) {
					typeof this[k] == "function" ? this[k](v) :
						isAttr ? tD.removeAttribute(k) : tS[k] = ""
				} else if (i < arg.length) {
					typeof this[k] == "function" ? this[k](v) :
						isAttr ? tD.setAttribute(k, v) : typeof v == "number" ? tS[k] = noPx[k] ? v : (v + "px") : tS[k] = v
				} else {
					return typeof this[k] == "function" ? this[k]() :
						isAttr ? tD.getAttribute(k) : isNaN(parseFloat(tS[k])) ? tS[k] : (tS[k].indexOf('px') > -1) ? parseFloat(tS[k]) : tS[k]
				}
				if (i == max - 1) return this
			}
		}
	})(),
	//////////////////////////////////
	// method 기술하자.
	fn['className'] = function (v) {
		if (v === null) return this.dom.removeAttribute('class');
		else return v != undefined ? this.dom.className = v : this.dom.hasAttribute('class') ? this.dom.className : null
	},
	fn['className+'] = (function () {
		var arg, i, t;
		return function (v) {
			arg = v.split(' '), i = arg.length;
			while (i--) t = arg[i], ~this.dom.className.indexOf(t) ? 0 : this.dom.className += (' ' + t);
			return this.dom.className;
		}
	})(),
	fn['className-'] = (function () {
		var arg, i, t;
		return function (v) {
			arg = v.split(' '), i = arg.length;
			while (i--) t = arg[i], ~this.dom.className.indexOf(t) ? this.dom.className = this.dom.className.replace(t, '') : 0;
			return this.dom.className = this.dom.className.replace(/ +/g, ' ').trim()
		}
	})(),
	fn['+html'] = function (v) {
		return v != undefined ? this.dom.innerHTML = v + this.dom.innerHTML : this.dom.innerHTML
	},
	fn['html'] = function (v) {
		return v !== undefined ? this.dom.innerHTML = v : this.dom.innerHTML
	}, // set-null 일때 set-'' 과 동일하게 처리
	fn['html+'] = function (v) {
		return v != undefined ? this.dom.innerHTML += v : this.dom.innerHTML
	},
	fn['+text'] = function (v) {
		return v != undefined ? this.dom.textContent = v + this.dom.textContent : this.dom.textContent
	},
	fn['text'] = function (v) {
		return v !== undefined ? this.dom.textContent = v : this.dom.textContent
	}, // set-null 일때 set-'' 과 동일하게 처리
	fn['text+'] = function (v) {
		return v != undefined ? this.dom.textContent += v : this.dom.textContent
	},
	fn['value'] = function (v) {
		return v != undefined ? this.dom.value = v : this.dom.value
	},
	fn['parent'] = fn['<'] = function (v) {
		v = v == 'body' ? document.body : v instanceof RedDomCls ? v.dom : v;
		if (v == undefined) return this.dom.parentNode ? RedDom(this.dom.parentNode) : this.dom.parentNode;
		else v.appendChild(this.dom)
	},
	fn['remove'] = function () {
		if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom);
		return this
	},
	fn['addChild'] = fn['>'] = function (v) {
		this.dom.appendChild(v instanceof RedDomCls ? v.dom : v);
	},
	fn['addChildAt'] = function (index, v) {
		var refChild = this.dom.children[index];
		if (refChild) this.dom.insertBefore(v instanceof RedDomCls ? v.dom : v, refChild);
		else this.dom.appendChild(v instanceof RedDomCls ? v.dom : v);
	},
	fn['removeChild'] = function (v) {
		this.dom.removeChild(v instanceof RedDomCls ? v.dom : v);
	},
	fn['removeChildAt'] = function (index) {
		if (this.dom.children[index]) {
			this.dom.removeChild(this.dom.children[index])
		}
	},
	fn['getChildAt'] = function (index) {
		var t;
		return (t = this.dom.children[index]) ? RedDom(t) : null
	},
	fn['getChildNum'] = function () {
		return this.dom.children.length
	},
	fn['getChildIndex'] = function (v) {
		return Array.prototype.indexOf.call(this.dom.children, v.dom ? v.dom : v)
	},
	fn['getSelfIndex'] = function () {
		return Array.prototype.indexOf.call(this.dom.parentNode.children, this.dom)
	};
	///////////////////////////////////////////////////////////////////////////////////
	(function () {
		var keys, realKeys;
		var lX, lY, realX, realY, preventKey;
		var evtUUID, event_UUID_TABLE;
		var i;
		var preventKeyFunc;
		evtUUID = 0,
			event_UUID_TABLE = {},
			// 디텍팅과 관련된 녀석들
			// 디덱팅과 관련없는 녀석들은 여기서 허용함
			// mouse event
			keys = 'over,out,down,up,move,click,dblclick,wheel'.split(','),
			// TODO - safari not surpport 'wheel',
			// keyboard event
			keys.push('keydown', 'keyup', 'keypress'),
			// element event
			keys.push('blur', 'change', 'contextmenu', 'focus', 'input', 'invalid', 'reset', 'select', 'submit', 'search'),
			// TODO - safari not surpport 'invalid',
			// TODO - ie, firefox not surpport 'search',
			// drag event
			keys.push('drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'scroll'),
			realKeys = {},
			i = keys.length,
			preventKeyFunc = function (v) {
				v[preventKey]()
			},
			// lX = (detector.browser == 'ie' && detector.browserVer < 10) ? 'offsetX' : 'layerX',
			// lY = (detector.browser == 'ie' && detector.browserVer < 10) ? 'offsetY' : 'layerY',
			// realX = (detector.browser == 'firefox') ? 'pageX' : 'x',
			// realY = (detector.browser == 'firefox') ? 'pageY' : 'y',
			preventKey = (project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0___default.a.browser == 'ie') ? 'preventDefault' : 'stopPropagation';
		i = keys.length;
		while (i--) {
			(function () {
				var eventKey = keys[i];
				var tDomUUID;
				realKeys[eventKey] = project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0___default.a[eventKey] ? project_simple_red_detector__WEBPACK_IMPORTED_MODULE_0___default.a[eventKey] : eventKey;
				fn[eventKey] = function (handler) {
					tDomUUID = this.dom.__uuid;
					if (handler === null) {
						if (event_UUID_TABLE[tDomUUID]) {
							this.dom.removeEventListener(realKeys[eventKey], event_UUID_TABLE[tDomUUID][realKeys[eventKey]], true);
							event_UUID_TABLE[tDomUUID][realKeys[eventKey]] = undefined
						}
					} else {
						if (handler) {
							// 기존에 등록된 이벤트는 무조건 삭제
							if (event_UUID_TABLE[tDomUUID]) {
								this.dom.removeEventListener(realKeys[eventKey], event_UUID_TABLE[tDomUUID][realKeys[eventKey]], true);
								event_UUID_TABLE[tDomUUID][realKeys[eventKey]] = undefined
							}
							//console.log(event_UUID_TABLE)
							if (!event_UUID_TABLE[tDomUUID]) event_UUID_TABLE[tDomUUID] = {};
							event_UUID_TABLE[tDomUUID][realKeys[eventKey]] = function (e) {
								handler.call(UUID_TABLE[this.__uuid], {
									type: eventKey,
									target: e.target,
									// x: e[realX], y: e[realY],
									// deltaX: e.deltaX, deltaY: e.deltaY,
									// localX: e[lX], localY: e[lY],
									prevent: preventKeyFunc,
									nativeEvent: e,
									uuid: evtUUID++
								})
							};
							event_UUID_TABLE[tDomUUID][realKeys[eventKey]].originHandler = handler;
							this.dom.addEventListener(realKeys[eventKey], event_UUID_TABLE[tDomUUID][realKeys[eventKey]], true)
						} else {
							// 기존에 등록된 이벤트가 있으면 리턴
							return event_UUID_TABLE[tDomUUID][realKeys[eventKey]]
						}
					}
				}
			})()
		}
	})();
/* harmony default export */ __webpack_exports__["default"] = (RedDom);

/***/ })

/******/ })["default"];
});