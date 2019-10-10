describe('Test RedDom', function () {
	describe('Test tag', function () {
		it('test html - get/set', function () {
			expect(RedDom('body').dom).to.equal(document.body);
		});
	});
});