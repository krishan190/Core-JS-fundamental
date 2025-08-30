// A callback function is a function passed into another function as an argument ,
//  which is then invoked inside the outer function to complete some kind of routine or actions.

function greeting(name){
 alert("hello " + name);
}

function processUserInput(callback){
    var name=prompt("pls enter your name");
    callback(name);
}

processUserInput(greeting);


