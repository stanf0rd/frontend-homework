'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('расширенный тест rle пройден', function (assert) {
		let strings = {
			'a': 'a',
			'abcdef': 'abcdef',
			'aabbbcccdbbdddbkkk': 'a2b3c3db2d3bk3',
			'mfiiqkkeeeklllee': 'mfi2qk2e3kl3e2',
			'kkkKKKKKffffiiiiYYeehekvm': 'k3K5f4i4Y2e2hekvm',
			'ffffffffffdddddddddddjjjjjjjjjjrrrrrrr': 'f10d11j10r7'
		}
		for (let key in strings) assert.strictEqual(rle(key), strings[key])
	});
});
