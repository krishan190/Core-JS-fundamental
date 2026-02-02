// what is this?

// we see this keyword in different types of functions in js such as named function ,annonymous function , arrow function , methods inside object, class constructor etc.

// The value of this depends on how a function was called at runtime.


// this is a reference to the object that is executing the current function.

// -It is NOT where the functio is written or defined.
// -It is NOT the object that owns the function.


// Common Usage

// 1==>Object methods : When a function (not arrow function) is called as a method of an object, this refers to the object the method is called on.

const user={
    name:"John Doe",
    greet:function(){
        console.log("Hello, "+this.name);
    }
}

user.greet();//Hello, John Doe

// 2==> Arrow function DO NOT have their own this They inherit this from the surrounding lexical context.

const user2={
    name:"Jane Doe",
    greet:()=>{
        console.log("Hello, "+this.name);
    }
}

user2.greet();//Hello, undefined (in browser, this refers to the global window object)

// LOSS OF THIS

// Function loses this when assigned as a values into other variables.

const user3={
    name:"Alice",
    greet(){
        console.log("Hello, "+this.name);
    }
}

user3.greet();//Hello, Alice

const greetFunction=user3.greet;
greetFunction();//Hello, undefined (in browser, this refers to the global window object)

// this inside classes

// In a class this refers to the specific instance of the object created with the new keyword.

class Person{
    constructor(name){
        this.name=name;
    }   
    greet(){
        console.log("Hello, "+this.name);
    }   
}

const person1=new Person("Bob");
person1.greet();//Hello, Bob

