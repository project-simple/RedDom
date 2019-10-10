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
	}, true);
	describe('Test style get/set', function () {
		it("background get/set  ", function () {
			var t = RedDom('div').S('background', 'red');
			expect(t.S('background')).to.be.equal('red');
		}, true);
		it("''(공백) : 스타일에 공백넣으면 공백 리턴 ", function () {
			var t = RedDom('div').S('background', 'blue');
			t.S('background', '');
			expect(t.S('background') == '').to.be.true;
		}, true);
		it("null : 스타일에 null을 넣어도 ''(공백)리턴", function () {
			var t = RedDom('div').S('background', 'blue');
			t.S('background', null);
			expect(t.S('background') == '').to.be.true;
		}, true)
	});
	describe('Test attribute get/set', function () {
		it("removeAttribute - null : 속성을 지워서, get에 null리턴", function () {
			var t0 = RedDom('div').S('@id', 'removeTest_1');
			t0.S('@id', null);
			expect(t0.S('@id')).to.be.null;
		}, true);
		it("''(공백) : 속성에 ''(공백)을 저장", function () {
			var t0 = RedDom('div').S('@id', 'removeTest_2');
			t0.S('@id', '');
			expect(t0.S('@id') == '').to.be.true;
		}, true)
		it("get - input @value : 사용자가 입력한 value 리턴", function () {
			var t = RedDom('input').S('@type', 'text', '@value', 'test');
			t = t.S('@value')
			expect( t == 'test').to.be.true;
		}, true)
		it("get - input @value : 기본 속성값이 있어도 사용자 입력값을 리턴", function () {
			var valueBefore, valueAfter;
			var t = RedDom('<input type="text" value="이게나와라">');
			valueBefore = t.S('@value');
			t.dom.value = '이제는새로운값';
			valueAfter = t.S('@value');
			expect( valueBefore == '이게나와라' && valueAfter == '이제는새로운값').to.be.true;
		}, true)
	});
	describe('Test unit get/set', function () {
		it("get - px값 : 숫자로 리턴", function () {
			var widthBefore, widthAfter;
			var t = RedDom('div').S('width', 100);
			widthBefore = t.S('width');
			widthAfter = t.S('width', '100px').S('width');
			expect(widthBefore == 100 && widthAfter == 100).to.be.true;
		}, true);
		it("get - %형 : %붙여서 리턴 ", function () {
			var t0 = RedDom('div').S('width', '100%');
			t0 = t0.S('width');
			expect(t0 == '100%').to.be.true;
		}, true);
		it("get - em형 : em붙여서 리턴", function () {
			var t0 = RedDom('div').S('width', '100em');
			t0 = t0.S('width');
			expect(t0 == '100em').to.be.true;
		}, true)
	})
	describe('Test custom Key get/set', function () {
		describe('Test html', function () {
			it("html : S('html', value)", function () {
				var t0 = RedDom('div').S('html', '음하하하하');
				t0 = t0.S('html')
				expect(t0 == '음하하하하').to.be.true;
			}, true)
			it("+html : S('+html', value)", function () {
				var t0 = RedDom('div').S('html', '음하하하하');
				t0.S('+html','앞에붙어라-')
				t0 = t0.S('html')
				expect(t0 == '앞에붙어라-음하하하하').to.be.true;
			}, true)
			it("html+ : S('html+', value)", function () {
				var t0 = RedDom('div').S('html', '음하하하하');
				t0.S('html+','-뒤에붙어라')
				t0 = t0.S('html')
				expect(t0 == '음하하하하-뒤에붙어라').to.be.true;
			}, true)
		})
		describe('Test text', function () {
			it("text : S('text', value)", function () {
				var t0 = RedDom('div').S('text', '음하하하하');
				t0 = t0.S('text')
				expect(t0 == '음하하하하').to.be.true;
			}, true)
			it("+text : S('+text', value)", function () {
				var t0 = RedDom('div').S('text', '음하하하하');
				t0.S('+text','앞에붙어라-')
				t0 = t0.S('text')
				expect(t0 == '앞에붙어라-음하하하하').to.be.true;
			}, true)
			it("text+ : S('text+', value)", function () {
				var t0 = RedDom('div').S('text', '음하하하하');
				t0.S('text+','-뒤에붙어라')
				t0 = t0.S('text')
				expect(t0 == '음하하하하-뒤에붙어라').to.be.true;
			}, true)
		})
		describe('Test className', function () {
			it("className : css class를 set/get  ", function () {
				var t = RedDom('div').S( 'className', 'test');
				expect( t.S('className') == 'test').to.be.true;
			}, true)
			it("className+ : css class 추가", function () {
				var t = RedDom('div').S( 'className', 'test');
				t.S('className+', 'test2');
				expect( t.S('className') == 'test test2').to.be.true;
			}, true)
			it("className+ : css class 같은녀석은 중복추가안됨", function () {
				var t = RedDom('div').S( 'className', 'test');
				t.S('className+', 'test2').S('className+', 'test2').S('className+', 'test2');
				expect( t.S('className') == 'test test2').to.be.true;
			}, true)
			it("className- : css class 제거", function () {
				var t = RedDom('div').S( 'className', 'test test2');
				t.S('className-', 'test')
				expect( t.S('className') == 'test2').to.be.true;
			}, true)
			it("className : null입력 - get에 null 리턴", function () {
				var t = RedDom('div').S( 'className', 'test test2');
				t.S('className', null)
				expect( t.S('className') == null).to.be.true;
			}, true)
			it("className : ''(공백)입력 - get에 ''리턴", function () {
				var t = RedDom('div').S( 'className', 'test test2');
				t.S('className', '')
				console.log(t.S('className'), t, t.dom);
				expect( t.S('className') == '').to.be.true;
			}, true)
		})
		describe('Test container key', function () {
			it("> : 왼쪽을 부모로 자식을 등록", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				tParent.S('>',tChild)
				expect( tParent.dom.children[0]).to.be.equal(tChild.dom);
			}, true)
			it("< : 왼쪽을 부모로 자식을 등록", function () {
				var tParent = RedDom('div');
				var tChild = RedDom('div');
				tChild.S('<',tParent)
				expect( tParent.dom.children[0]).to.be.equal(tChild.dom);
			}, true)
		})
	})


});