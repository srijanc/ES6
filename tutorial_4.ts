var getValue = function(){
    return 10;
}
console.log(getValue());

// Re-writing the above function using the arrow function
const getArrowvalue = (m) => 10 * m;
// function_name    parameter_value     return_value
// If only one statement is there, then no need to put curly braces, whereas multiple
// statements are to be written within curly braces
console.log(getArrowvalue(5));