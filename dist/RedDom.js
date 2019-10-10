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
UUID = 0
UUID_TABLE = {},
	//////////////////////////////////
	// 실제 클래스
	RedDomCls = function (k) {
		(this.dom = k).__uuid = UUID++,
			UUID_TABLE[this.dom.__uuid] = this,
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
					result = new RedDomCls(t.childNodes[0])
				t = null;
			} else if (k.charAt(0) == "#") {
				t = document.getElementById(k = k.substr(1, k.length - 1));
				if (t && UUID_TABLE[t.__uuid]) result = UUID_TABLE[t.__uuid]
				else if (t) result = new RedDomCls(t)
				else result = null
			} else result = new RedDomCls(document.createElement(k))
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
		var noPx = {'opacity': 1, 'z-index': 1, 'zIndex': 1}
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
	fn['@value'] = fn['value'] = function (v) {
		return v != undefined ? this.dom.value = v : this.dom.value
	},
	// 이거 개선의 여지가 있군.. body도 우리돔으로 바꿔야하나..
	fn['>'] = function (v) {
		v == 'body' ? v = document.body : 0,
			this.dom.appendChild(v.dom)
	},
	fn['<'] = function (v) {
		v == 'body' ? v = document.body : v = v.dom,
			v.appendChild(this.dom)
	},
	fn['-'] = fn['remove'] = (function () { // children 기반 연산, ss에서 사용 가능
		var len, t
		return function (arg) {
			if (arg == undefined || arg == 'self') this.dom.parentNode.removeChild(this.dom)
			else if (arg == 'all') this.dom.innerHTML = '';
			else if (arg instanceof Array) { // arg:[aDom,aDom,dom,dom ...] TODO : ss에서 배열을 받을지 말지 결정..?
				len = arg.length
				while (len--) t = arg[len], this.dom.removeChild(t.dom ? t.dom : t);
			} else if (!isNaN(arg)) { // arg:Number
				arg = parseInt(arg);
				if ((len = this.dom.children.length) == 0) console.log('There is no child element to be removed, ', this);
				else this.dom.removeChild(this.dom.children[len <= arg ? len - 1 : 0 <= arg ? arg : len + arg]);
			} else if (typeof arg == 'string') { // arg:query
				t = this.dom.querySelectorAll(arg), len = t.length;
				while (len--) this.dom.removeChild(t[len]);
			} else this.dom.removeChild(arg.dom ? arg.dom : arg); // arg: aDom or Element
			return this
		}
	})(),
	fn['+'] = fn['add'] = (function () { // children 기반 연산, dom에서 직접 사용
		var len, t;
		return function (o, v) {
			if (arguments.length == 1) {
				if (o instanceof Array) { // arg:[aDom,aDom,dom,dom ...] TODO : 배열을 받을지 말지 결정..?
					len = arg.length
					while (len--) t = arg[len], this.dom.removeChild(t.dom ? t.dom : t)
				} else this.dom.appendChild(o.dom ? o.dom : o)
				return this;
			}
			v = v.dom ? v.dom : v
			if (!isNaN(o)) { // o:Number
				len = this.dom.children.length;
				t = 0 <= o ? o : len < -o ? 0 : len + parseInt(o) + 1; // -1 이면 맨 마지막, -999 이면 0번째 앞에 넣는다
				if (t = this.dom.children[t]) this.dom.insertBefore(v, t)
				else 0 <= o ? console.log('There is no nth-child(' + o + ') in this element, ', this) : 0, this.dom.appendChild(v)
			} else if (typeof o == 'string') { // o:query
				if (t = this.dom.querySelector(o)) this.dom.insertBefore(v, t);
				else console.log('There is no nth-child(' + o + ') in this element, ', this), this.dom.appendChild(v)
			} else this.dom.insertBefore(v, o.dom ? o.dom : o) // o:Element 일떄, v를 o앞에 넣는다.
			return this
		}
	})(),
	fn['getChildAt'] = function (v) {
		var t;
		v = parseInt(v), v = 0 <= v ? v : this.dom.children.length + v;
		return (t = this.dom.children[v]) ? Alucard.Dom(t) : null
	},
	fn['getChildLength'] = function () {
		return this.dom.children.length
	},
	fn['getChildIndex'] = function (v) {
		return Array.prototype.indexOf.call(this.dom.children, v.dom ? v.dom : v)
	},
	fn['getSelfIndex'] = function () {
		return Array.prototype.indexOf.call(this.dom.parentNode.children, this.dom)
	};


/* harmony default export */ __webpack_exports__["default"] = (RedDom);

/***/ })

/******/ })["default"];
});