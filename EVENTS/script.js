//EVENTS IN JS 

// The change in the state of an object is known as an event
// events are fired to notify code of "interesting changes" that may affect code execution

// types of EVENTS :
// 1. MOUSE EVENTS (click , double click)
// 2. KEYBOARD EVENTS (keypress , keyup , keydown)
// 3. FORM EVENTS (submit)
// 4. PRINT EVENTS and many more 

// to handle events in JS

let btn1 = document.querySelector("#btn1");

btn1.onclick =() => {
    console.log("I love you shivangi");
    let a = 2999;
    a++ ;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover=() => {
    console.log("love you shivangi joshi");
};

// //EVENT OBJECT

// It is a special object that has details about the event
// all event handlers have access to the event object's properties and methods

// Node.event=(e) => {
//     //handle here }

// e.target,e.type,e.clientX,e.clientY
