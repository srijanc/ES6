let firstname = "Srijan";
let lastname = "Chaudhary";

// Defining objects and object literals
let person = {
    firstname,
    lastname
};

function createPerson(firstname, lastname, age){
    let fullname = firstname + lastname
    return {
        firstname,
        lastname,
        fullname,
        // Function property
        isSenior(){
            return age > 50;
        }
    }
}
// console.log(person.firstname, " ", person.lastname);

let p = createPerson("Harshit", "Sethi", 25);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());

// Similar functionality but using a different writing format
let ln = "last name"

let anotherperson = {
    "first name": "Karan",
    [ln]: "Bansal"
};
console.log(anotherperson);