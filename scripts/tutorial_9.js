"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GreetPerson = /** @class */ (function () {
    function GreetPerson(name) {
        this.name = name;
        console.log(this.name + " GreetPerson Constructor");
    }
    GreetPerson.prototype.greet = function () { };
    GreetPerson.staticMethod = function () {
        console.log("Static Method");
        return 27;
    };
    return GreetPerson;
}());
// let gp = new GreetPerson("Srijan");
GreetPerson.staticMethod();
// console.log(gp.greet === GreetPerson.prototype.greet);
// Inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee Constructor");
        return _this;
    }
    return Employee;
}(GreetPerson));
var e = new Employee("Srijan");
console.log(Employee.staticMethod());
//# sourceMappingURL=tutorial_9.js.map