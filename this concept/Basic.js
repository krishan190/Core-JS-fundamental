"use strict";

//1=> this in global space

console.log(this); //global object [i.e window object in the browser]


//2=> this inside a function
// if i run this below function in use strict mode then this will be print undefined

function x() {
    // the value depends on strict / non-strict mode
    console.log(this);
}

x();

//3=> this inside non-strict mode - (this substitution)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode

// 4=> this keyword value depends on how the function is called (window)

x(); //when you call it without refernece of any object then it becomes undefined
window.x();


// this inside a object's method

// ⭐⭐⭐if you will make a function as a part of an object then it is known as method

const student1 = {
    name: "krishan",
    printName: function () {
        console.log(this.name);//10

    }
}
// here this will point to the student obj.

// x is a method of object obj.

student1.printName();


// now if you want to share the this above x function [student] with this below object we can use call, apply, bind
const student2 = {
    name: "Deepika"
}

//⭐⭐⭐ now i have object student1 and student2 and student has a method printName and i want to reuse this method for student2
// if i want to share the method of student with student2 

student1.printName.call(student2)//value of this = student2



//call , apply and bind methods (sharing methods)

// this inside arrow function[arrow function does not have their own this]

const obj = {
    a: 10,
    x: () => {
        console.log(this);//this will be pointing to the window object 
    }
}

obj.x();


const obj2 = {
    a: 20,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this);
        }
        y();
    }
};

obj2.x()


// this inside DOM elements => reference to HTML elements

// this behave different inside class, constructor