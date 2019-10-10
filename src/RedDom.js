"use strict";
/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/
import detector from 'project-simple-red-detector';

var UUID_TABLE, UUID;
var RedDom, RedDomCls, fn;
UUID = 0;
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
			k = detector[k] ? detector[k] : k, //모바일 터치이벤트 체크
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
	fn['@value'] = function (v) {
		return v != undefined ? this.dom.value = v : this.dom.value
	},
	fn['<'] = function (v) {
		v == 'body' ? v = document.body : v = v.dom,
			v.appendChild(this.dom)
	},
	fn['remove'] =function () {
		if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom);
		return this
	},
	fn['addChild'] = fn['>'] = function (v) {
		if(v instanceof RedDom) v = v.dom;
		this.dom.appendChild(v)
		return this
	},
	//TODO fn['addChildAt'] = function(){}
	//TODO fn['removeChild'] = function(){}
	//TODO fn['removeChildAt'] = function(){}
	fn['getChildAt'] = function (v) {
		var t;
		v = parseInt(v), v = 0 <= v ? v : this.dom.children.length + v;
		return (t = this.dom.children[v]) ? RedDom(t) : null
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
export default RedDom;