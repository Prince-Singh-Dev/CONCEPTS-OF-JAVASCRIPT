//Prototypes in JS 
// A javasccript object is an entity having state and behaviour (properties and method)
// JA objects have a special property called prototype (Type of reference to an object)
// We can set prototype using __proto__

const student ={
    fullName : "Shivangi Joshi",
    marks : 94.4,
    printFullName : function(){
        console.log("FullName= ",fullName)
    }
}

//Creating an object name student , defining some classes and a function in it 
// ON console window , type student , you will get the object , to access the class , type student.fullName

//Creating our own prototype 

const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const Prince = {
    salary: 50000,
    calcTax(){
        console.log("Tax rate is Love to Shivangi Joshi");
    },
};

Prince.__proto__ = employee;

//Classes in JS (Blueprint or template to create a object)
//Class is a program-code template for creating objects
//Those objects will have some state (variables) & some behaviour (functions) inside it 

//creating a class of name ToyotaCar

class ToyotaCar{
    constructor(brand , mileage){ //Creating a constructor for ToyotaCar class
        console.log("Company named to Shivangi Joshi");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

//To create an object from a class

let fortuner = new ToyotaCar("fortuner" , 10);
let lexus = new ToyotaCar("lexus" , 12);

//Constructor is special method in class , automatically invoked by new and initializes object 

//Inheritance in JS 
// Inheritance is passing down properties and methods from parent class to child class
// If child and parent have some method , child's method will be used. [Method Overriding]

//1st Example
class Parent {
    hello(){
        console.log("hello");
    }
}

class Child extends Parent {}

let obj = new Child();

//2nd Example 

class person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class love extends person{
    work(){
        console.log("I LOVE YOU ");
    }
} 

let ShivangiObj = new love();


//SUPER KEYWORD 
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

//PRACTICE QUESTION 01
//You are creating a website for your college . Create a class User with 2 properties , name and email . It also has a method called viewData() that allows user to view website data 


let DATA = "secret information";
class User {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data = ",DATA);
    }
}

let student1 = new User ("Shivangi","shivangi@123gmail.com");
let student2 = new User ("prince","prince@123gmail.com");

let teacher1 = new User("Dean","Dean@123gmail.com");

//Error Handling >>>> try-catch 

let a=5;
let b=10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c); //error
} 
catch(error) {
    console.log(error);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);