console.log("hello !"); //to print in console window 
alert("LOVE");  //To generate alert pop up while surfing over any webpage 

//WINDOW OBJECT 

//The window object represents an open window in a browser . It is browser's object (not JavaScript's) & is automatically created by Browser 
//It is a global object with lots of properties and methods

console.log(window); //Printing window objects on console window 

//window.alert('Love');

//DOM : When a web page is loaded , the browser creates a Document object Model of the page 
//HTML code is converted into special object named as Document which is part of JAVASCRIPT 

//DOM MAnipulation 

let heading = document.getElementById("heading"); //H1
console.log(heading); //OUTPUT ON CONSOLE : <h1 id="heading">DOM demo by Prince</h1>

//to learn more DOM manupilation concpets , kindly visit APNA COLLEGE

let div = document.querySelector("div");
console.log(div); //To access the div in console

let id = div.getAttribute("id");
console.log(id) //Asseccing through class or id 

let para = document.querySelector("p");
console.log(para.getAttribute("class")); //to get the attribute value 

//to change the class name para 
let shivi = document.querySelector("p");
console.log(shivi.setAttribute("newclass")); //to set the attribute value

//to change the style of any element 
let div = document.querySelector("div");

//to change background colour style of box 
div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";

//to chnage the font of box 
div.style.fontSize = "26px";

//changing the font
div.innerText ="Love you shivangi";

//Inserting a new element 
//first we have to create an element then it will bw inserted 

let newBtn = document.createElement("button");
newBtn.innerText = "Click me !";
console.log(newBtn);

//append : adds at the end of the node (inside)

let div=document.querySelector("div");
div.append(newBtn); //Appending the button in div box 

let div=document.querySelector("div");
div.prepend(newBtn); //Inserting the button at start of div box

let div=document.querySelector("div");
div.before(newBtn); //Inserting the button before the div box

let div=document.querySelector("div");
div.after(newBtn); //Inserting the button after the div box

//to delete the paragraph 
let para=document.querySelector("p");
para.remove();



