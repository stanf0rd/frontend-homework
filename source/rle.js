'use strict';


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function rle(str) {
    if (typeof str !== 'string' || arguments.length != 1) {
        throw new TypeError('Invalid arguments, expected one string');
    }

    let result = "";
    let repeats = 0;

    for (let i = 0; i != str.length; ++i) {
        let char = str.charAt(i);
        let next = str.charAt(i + 1);
        if (isNumeric(char)) {
            throw new Error('Unable to encode string that includes digits');
        }
        if (next === char) repeats++;
        else {
            result += char;
            if (repeats) result += (repeats + 1).toString();
            repeats = 0;
        }
    }
    return result;
}
