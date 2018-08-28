'use strict';


function rle(string) {
    let result = ""
    let repeats = 0
    for (let i = 0; i != string.length; ++i) {
        let char = string.charAt(i)
        let next = string.charAt(i + 1)
        if (next === char) repeats++
        else {
            result += char
            if (repeats) result += (repeats + 1).toString()
            repeats = 0
        }
    }
    return result
}
