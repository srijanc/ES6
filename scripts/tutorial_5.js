"use strict";
// Common error in JS is use of this keyword
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        console.log(this.id);
        // setTimeout(function(){console.log(this.id)}, 1000) -> here 'this' will throw an error, as this is within a different scope of reference
        setTimeout(function () { console.log(_this.id); }, 1000); // => function helps to resolve this keyword error
    }
};
employee.greet();
//# sourceMappingURL=tutorial_5.js.map