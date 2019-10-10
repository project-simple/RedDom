describe('Test constuctor', function () {
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
});