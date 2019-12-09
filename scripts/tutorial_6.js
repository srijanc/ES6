"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColours = function (message) {
    var colours = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colours[_i - 1] = arguments[_i];
    }
    // ... signifies remaining parameter which is called as Rest operator (during function definition)
    console.log(message);
    console.log(colours);
    for (var i in colours) {
        console.log(colours[i]);
    }
};
var message = "List of colours";
var colourArray = ['Orange', 'Yellow', 'Black'];
displayColours.apply(void 0, __spreadArrays([message], colourArray)); // Use of Spread operator during function call
displayColours(message, 'Red');
displayColours(message, 'Red', 'Green');
displayColours(message, 'Red', 'Green', 'Blue');
//# sourceMappingURL=tutorial_6.js.map