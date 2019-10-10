describe('Test RedDom', function () {
	['div', 'button', 'ul', 'li', 'table', 'input'].forEach(function (tagName) {
		it('test - make by tagName : ' + tagName, function () {
			var t0 = RedDom(tagName);
			expect(t0.dom.tagName).to.equal(tagName.toUpperCase());
		});
	});
	it('test - make by tag : ' + '<div><test>test</test></div>', function () {
		var t0 = RedDom('<div><test>test</test></div>');
		expect(t0.dom.innerHTML == '<test>test</test>' && t0.dom.tagName == 'DIV').to.be.true;
	});
	it('test - make by id search : ' + '#id', function () {
		var t0 = document.createElement('div');
		t0.setAttribute('id', 'test-id');
		document.body.appendChild(t0);
		expect(RedDom('#test-id').dom).to.be.equal(t0);
	});
	it('test - make by Dom Element', function () {
		var t0 = document.createElement('div');
		t0.setAttribute('className', 'dom-test');
		document.body.appendChild(t0);
		expect(RedDom(t0).dom).to.be.equal(t0);
	});
	it('test - Returns null if a nonexistent id is found', function () {
		expect(RedDom('#noIdTest')).to.be.null;
	});
	it('test - body', function () {
		expect(RedDom('body')).to.be.equal(RedDom(document.body));
	});
});
describe('Test "S" method', function () {
	it("(RedDom Instance).S(key, value) - get/set", function () {
		var result = RedDom("div");
		console.log(result);
		result.S('width', 100, 'fontSize', 10);
		expect(result.S('width') == 100 && result.S('fontSize') == 10).to.be.true;
	});
	describe('Test style get/set', function () {
		it("background get/set  ", function () {
			var t = RedDom('div').S('background', 'red');
			expect(t.S('background')).to.be.equal('red');
		});
		it("''(공백) : 스타일에 공백넣으면 공백 리턴 ", function () {
			var t = RedDom('div').S('background', 'blue');
			t.S('background', '');
			expect(t.S('background') == '').to.be.true;
		});
		it("null : 스타일에 null을 넣어도 ''(공백)리턴", function () {
			var t = RedDom('div').S('background', 'blue');
			t.S('background', null);
			expect(t.S('background') == '').to.be.true;
		})
	});
	describe('Test attribute get/set', function () {
		it("removeAttribute - null : 속성을 지워서, get에 null리턴", function () {
			var t0 = RedDom('div').S('@id', 'removeTest_1');
			t0.S('@id', null);
			expect(t0.S('@id')).to.be.null;
		});
		it("''(공백) : 속성에 ''(공백)을 저장", function () {
			var t0 = RedDom('div').S('@id', 'removeTest_2');
			t0.S('@id', '');
			expect(t0.S('@id') == '').to.be.true;
		})
		it("get - input @value : 사용자가 입력한 value 리턴", function () {
			var t = RedDom('input').S('@type', 'text', '@value', 'test');
			t = t.S('@value')
			expect(t == 'test').to.be.true;
		})
		it("get - input @value : 기본 속성값이 있어도 사용자 입력값을 리턴", function () {
			var valueBefore, valueAfter;
			var t0 = RedDom('<input type="text" value="이게나와라">');
			valueBefore = t0.S('@value');
			t0.dom.value = '이제는새로운값';
			valueAfter = t0.S('@value');
			console.log(t0)
			expect(valueBefore == '이게나와라' && valueAfter == '이제는새로운값').to.be.true;
		})
	});
	describe('Test unit get/set', function () {
		it("get - px값 : 숫자로 리턴", function () {
			var widthBefore, widthAfter;
			var t = RedDom('div').S('width', 100);
			widthBefore = t.S('width');
			widthAfter = t.S('width', '100px').S('width');
			expect(widthBefore == 100 && widthAfter == 100).to.be.true;
		});
		it("get - %형 : %붙여서 리턴 ", function () {
			var t0 = RedDom('div').S('width', '100%');
			t0 = t0.S('width');
			expect(t0 == '100%').to.be.true;
		});
		it("get - em형 : em붙여서 리턴", function () {
			var t0 = RedDom('div').S('width', '100em');
			t0 = t0.S('width');
			expect(t0 == '100em').to.be.true;
		})
	})
	describe('Test custom Key get/set', function () {
		describe('Test html', function () {
			it("html : S('html', value)", function () {
				var t0 = RedDom('div').S('html', '음하하하하');
				t0 = t0.S('html')
				expect(t0 == '음하하하하').to.be.true;
			})
			it("+html : S('+html', value)", function () {
				var t0 = RedDom('div').S('html', '음하하하하');
				t0.S('+html', '앞에붙어라-')
				t0 = t0.S('html')
				expect(t0 == '앞에붙어라-음하하하하').to.be.true;
			})
			it("html+ : S('html+', value)", function () {
				var t0 = RedDom('div').S('html', '음하하하하');
				t0.S('html+', '-뒤에붙어라')
				t0 = t0.S('html')
				expect(t0 == '음하하하하-뒤에붙어라').to.be.true;
			})
		})
		describe('Test text', function () {
			it("text : S('text', value)", function () {
				var t0 = RedDom('div').S('text', '음하하하하');
				t0 = t0.S('text')
				expect(t0 == '음하하하하').to.be.true;
			})
			it("+text : S('+text', value)", function () {
				var t0 = RedDom('div').S('text', '음하하하하');
				t0.S('+text', '앞에붙어라-')
				t0 = t0.S('text')
				expect(t0 == '앞에붙어라-음하하하하').to.be.true;
			})
			it("text+ : S('text+', value)", function () {
				var t0 = RedDom('div').S('text', '음하하하하');
				t0.S('text+', '-뒤에붙어라')
				t0 = t0.S('text')
				expect(t0 == '음하하하하-뒤에붙어라').to.be.true;
			})
		})
		describe('Test className', function () {
			it("className : css class를 set/get  ", function () {
				var t = RedDom('div').S('className', 'test');
				expect(t.S('className') == 'test').to.be.true;
			})
			it("className+ : css class 추가", function () {
				var t = RedDom('div').S('className', 'test');
				t.S('className+', 'test2');
				expect(t.S('className') == 'test test2').to.be.true;
			})
			it("className+ : css class 같은녀석은 중복추가안됨", function () {
				var t = RedDom('div').S('className', 'test');
				t.S('className+', 'test2').S('className+', 'test2').S('className+', 'test2');
				expect(t.S('className') == 'test test2').to.be.true;
			})
			it("className- : css class 제거", function () {
				var t = RedDom('div').S('className', 'test test2');
				t.S('className-', 'test')
				expect(t.S('className') == 'test2').to.be.true;
			})
			it("className : null입력 - get에 null 리턴", function () {
				var t = RedDom('div').S('className', 'test test2');
				t.S('className', null)
				expect(t.S('className') == null).to.be.true;
			})
			it("className : ''(공백)입력 - get에 ''리턴", function () {
				var t = RedDom('div').S('className', 'test test2');
				t.S('className', '')
				console.log(t.S('className'), t, t.dom);
				expect(t.S('className') == '').to.be.true;
			})
		})
		describe('Test container key', function () {
			it("> : 왼쪽을 부모로 자식을 등록 : RedDom Instance", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				tParent.S('>', tChild)
				expect(tParent.dom.children[0]).to.be.equal(tChild.dom);
			})
			it("> : 왼쪽을 부모로 자식을 등록 : Dom Element", function () {
				var tParent = RedDom('body');
				var tChild = document.createElement('div');
				tParent.S('>', tChild)
				expect(document.body.children[document.body.children.length-1]).to.be.equal(tChild);
			})
			it("< : 오른쪽을 부모로 자식을 등록 - RedDom Instance", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				tChild.S('<', tParent)
				expect(tParent.dom.children[0]).to.be.equal(tChild.dom);
			})
			it("< : 오른쪽을 부모로 자식을 등록 - body", function () {
				var tParent = 'body';
				var tChild = RedDom('div');
				tChild.S('<', tParent)
				expect(document.body.children[document.body.children.length-1]).to.be.equal(tChild.dom);
			})
			it("< : 오른쪽을 부모로 자식을 등록 - Dom Element", function () {
				var tParent = document.createElement('div');
				var tChild = RedDom('div');
				tChild.S('<', tParent)
				expect(tParent.children[0]).to.be.equal(tChild.dom);
			})
			it("remove : 자신을 부모에게서 제거", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				tParent.S('>', tChild)
				tChild.remove()
				expect(tParent.dom.children[0]).to.be.undefined;
			})
			it("remove : 부모가 없을떄 에러안나는지 확인", function () {
				var result = true
				var tChild = RedDom('div');
				try {
					tChild.remove()
				}catch (e) {
					result = false
				}
				expect(result).to.be.true;
			})
			it("addChild : 자식을 등록 : RedDom Instance", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				tParent.S('addChild', tChild)
				expect(tParent.dom.children[0]).to.be.equal(tChild.dom);
			})
			it("addChild : 자식을 등록 : Dom Element", function () {
				var tParent = RedDom('body');
				var tChild = document.createElement('div');
				tParent.S('addChild', tChild)
				expect(document.body.children[document.body.children.length-1]).to.be.equal(tChild);
			})
			it("removeChild : 자식중에 타겟을 제거 : RedDom Instance", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				var tChild2 = RedDom('button')
				var tChild3 = RedDom('input')
				tParent.S(
					'>', tChild,
					'>', tChild2,
					'>', tChild3
				)
				tParent.S('removeChild', tChild)
				expect(tParent.dom.children[0]).to.be.equal(tChild2.dom);
			})
			it("removeChild : 자식중에 타겟을 제거 : Dom Element", function () {
				var tParent = RedDom('div');
				var tChild = document.createElement('div');
				var tChild2 = RedDom('button')
				var tChild3 = RedDom('input')
				tParent.S(
					'>', tChild,
					'>', tChild2,
					'>', tChild3
				)
				tParent.S('removeChild', tChild)
				expect(tParent.dom.children[1]).to.be.equal(tChild3.dom);
			})
			it("removeChildAt : 자식을 인덱스로 제거", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				var tChild2 = RedDom('button')
				var tChild3 = RedDom('input')
				tParent.S(
					'>', tChild,
					'>', tChild2,
					'>', tChild3
				)
				tParent.S('removeChildAt', 0)
				expect(tParent.dom.children[0]).to.be.equal(tChild2.dom);
			})
			it("removeChildAt : 자식을 인덱스로 제거", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				var tChild2 = RedDom('button')
				var tChild3 = RedDom('input')
				tParent.S(
					'>', tChild,
					'>', tChild2,
					'>', tChild3
				)
				tParent.S('removeChildAt', 1)
				expect(tParent.dom.children[1]).to.be.equal(tChild3.dom);
			})
			it("removeChildAt : 해당 인덱스에 자식이 없을떄 에러안나는지 확인", function () {
				var result = true
				var tChild = RedDom('div');
				try {
					tChild.removeChildAt(0)
				}catch (e) {
					result = false
				}
				expect(result).to.be.true;
			})
			it('getChildAt - TODO')
			it('getChildNum - TODO')
			it('getChildIndex - TODO')
			it('getSelfIndex - TODO')
		})
	})
});
