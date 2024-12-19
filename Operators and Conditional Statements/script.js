console.log("hello world !");
// to write commemts in java script we will use "//" this is a single line comment 
/* if we want a multi line comments */

//ARITHMETIC OPERATORS 
let a = 5
let b = 2
console.log("a+b =",a+b); //for addition
console.log("a-b =",a-b); //for subtraction
console.log("a*b =",a*b); //for multiplication
console.log("a/b =",a/b); //for division
console.log("a%b =",a%b); //Modulus operator , it will return the remainder  
console.log("a**b =",a**b); //Exponentiation , it will return as a raise to the power b

//there are two unary operators in java ; They are Increment symbol is '++' and Decrement symbol is '--' thus they will return as increment will give a=a+1 and decrement will give a=a-1

a = a+1;
console.log(a);
// Using Increment operator then 
a++
console.log(a);

b = b-1;
console.log(b);
// Using Decrement operator then 
b--
console.log(b);

// Operators in JS :

// Assinment operators : = , += , -= , *= , %= , **= 
// Comparison operator Symbols : Equal to , Equal to & type , Not equal to , Not Equal to & type are == , === , != , !== respectively 

//Logical Operator : 

//Logical AND && { if condition 1 and condition 2 is true then it will return true }
//Logical OR || {if any one condition is true then answer will be true }
//Logical NOT ! { if condition in true then it will return false and if false then it returns true}

//Conditional statement use to apply some condition to the code 

//if condition
let x = 25;

if(x>=18){
    console.log("You Can Vote !");
}

if (x <=18){
    console.log("You Can't Vote");
}

//if-else conditon : if " if " statement is false then it will run the else statement

let age = 15;

if(age>=18){
    console.log("You Can Vote !");
}

else{
    console.log("You Can't Vote");
}

// else if statement : if we have to check multiple conditions 

let y = 6;

if (y<18){
    console.log("junior");
}else if (y>60){
    console.log("senior");
}else{
    console.log("middle");
}

//Ternary operator is a special operator as it can work 3 operands where 1 is condition and 2 are outputs :
// condition ? true output : false output

let z=25;
let result = z >18 ? "adult" : "not adult"
console.log(result);

//MDN Docs to read the theory of java script on browser....

