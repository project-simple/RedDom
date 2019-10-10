"use strict";
/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/
import detector from 'project-simple-red-detector';

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


export default RedDom;