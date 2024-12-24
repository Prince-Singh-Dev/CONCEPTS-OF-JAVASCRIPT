//Making of functions in javascript 
function myfunction(msg){
    //parameter --> input
    console.log(msg);
}

myfunction("I Love Shivangi Joshi") //argument
//OutPut : I Love Shivangi Joshi

//Function --> 2 numbers sum :

function Love(x,y) {
    console.log(x+y);
}//For The output : type Love(1,2); and then enter on console 

//for returning a value 
function val(x,y){
    s = x+y;
        console.log("Love Shivi"); //This will print on console 
        return s;
        console.log("I don't Love anyone else"); //No Output in console as after return no line will work 
}

let x = val(3,4);
console.log(x);
//Output : 7 

//Function parameters are like Local variables of Function and they have Block scope of function 

//Arrow Function : Compact Way of Writing a Function 
// const functionname = (param1 , param2 , ...)=>{
//      do some work 
//}

//for example : const sum =(a,b)=>{
//  return a+break;
//}

const arrowsum = (a,b)=>{
    console.log(a+b);
}
// Output : (a,b)=>{
//     console.log(a+b);
// }

const arrowmulti = (a,b)=>{
    console.log(a*b);
} 

// Output :arrowmulti(3,4)
//                      12

