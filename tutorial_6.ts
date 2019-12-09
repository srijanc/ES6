let displayColours = function(message, ...colours){
    // ... signifies remaining parameter which is called as Rest operator (during function definition)
    console.log(message);
    console.log(colours);

    for(let i in colours){
        console.log(colours[i]);
    }
}

let message = "List of colours";

let colourArray = ['Orange', 'Yellow', 'Black'];
displayColours(message, ...colourArray); // Use of Spread operator during function call

displayColours(message, 'Red');
displayColours(message, 'Red', 'Green');
displayColours(message, 'Red', 'Green', 'Blue');