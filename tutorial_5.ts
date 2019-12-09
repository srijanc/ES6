// Common error in JS is use of this keyword
var employee = {    //employee object
    id: 1,
    greet: function(){
        console.log(this.id);
        // setTimeout(function(){console.log(this.id)}, 1000) -> here 'this' will throw an error, as this is within a different scope of reference
        setTimeout(() => {console.log(this.id)}, 1000)  // => function helps to resolve this keyword error
    }
};
employee.greet();