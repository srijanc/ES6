"use strict";
var _a;
var firstname = "Srijan";
var lastname = "Chaudhary";
// Defining objects and object literals
var person = {
    firstname: firstname,
    lastname: lastname
};
function createPerson(firstname, lastname, age) {
    var fullname = firstname + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        // Function property
        isSenior: function () {
            return age > 50;
        }
    };
}
// console.log(person.firstname, " ", person.lastname);
var p = createPerson("Harshit", "Sethi", 25);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
// Similar functionality but using a different writing format
var ln = "last name";
var anotherperson = (_a = {
        "first name": "Karan"
    },
    _a[ln] = "Bansal",
    _a);
console.log(anotherperson);
//# sourceMappingURL=tutorial_7.js.map