'use strict';


QUnit.module('Тестируем функцию rle', function() {
    QUnit.test('rle() работает правильно', function(assert) {
        assert.strictEqual(rle('AAAB'), 'A3B');
        assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
        assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
    });

    QUnit.test('расширенный тест rle() пройден', function(assert) {
        let strings = [
            {target: 'abcdef', expect: 'abcdef'},
            {target: 'aabbbcccdbbdddbkkk', expect: 'a2b3c3db2d3bk3'},
            {target: 'mfiiqkkeeeklllee', expect: 'mfi2qk2e3kl3e2'},
            {target: 'kkkKKKKKffffiiiiYYeehekvm', expect: 'k3K5f4i4Y2e2hekvm'},
            {target: 'ffffffffffdddddddddddjjjjjjjjjjrrrrrrr', expect: 'f10d11j10r7'}
        ];

        for (let key of strings) {
            assert.strictEqual(rle(key.target), key.expect);
        }
    });

    QUnit.test('отправка строк с цифрами в rle()', function(assert) {
        assert.throws(
            () => rle('a2b3c3db2d3bk3'),
            Error, 'Unable to encode string that includes digits'
        );
    });

    QUnit.test('отправка неверных аргументов в rle()', function(assert) {
        let err = new TypeError('Invalid arguments, expected one string');
        let argsSet = [
            [],
            [NaN],
            ['test', NaN],
            [undefined],
            ['test', undefined, NaN],
            [5],
            ['test', 5]
        ];
        for (let args of argsSet) {
            assert.throws(() => rle.apply(args), err);
        }
    });

});
