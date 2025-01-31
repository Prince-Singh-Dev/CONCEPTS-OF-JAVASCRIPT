//Sync In JS

//Synchronous
//Synchronous means the code runs in a particular sequence of instructions given in the program . Each instruction waits for the previous instruction to complete its execution 

console.log("one");
console.log("two");
console.log("three");

//Asynchronous 
//Due to synchronous programming , sometimes imp instructions get blocked due to some previous instruction , which causes a delay in the UI . Asynchronous code execution allows to execute next instructions immediately and doen't block the flow 

function shivangi(){
    console.log("LOVE YOU");
}
console.log("Shivangi");
console.log("I");
setTimeout(shivangi , 2000); //timeout : 2 seconds = 2000 milliseconds

//CallBacks : It is a function passed as an argument to another function

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);

//Callback Hell : Nested callbacks stacked below one another forming a pyramid structure. 
//This style of programming becomes difficult to understand & manage.


//nesting : Nested if - else 
let age =19;
if(age>=18){
    if(age>=60){
        console.log("senior");
    }else {
        console.log("middle");
    }
}else{
    console.log("child");
}

//Nested loop : for loop within a for loop 
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        console.log(j);
    }
}

//CallBack Functions
function getData(dataId , getNextData ){ //2s
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData;
        }
    },3000);
}

//CallBack Hell
getData(1,()=>{
    console.log("getting data2 ...");
    getData(2,()=>{
        console.log("getting data3 ...");
        getData(3);
    });
});

//Promises use to solve the callback hell problem for programmers
//Promises is for "Eventual" complettion of task. It is an object in JS. It is a solution to callback hell . 
//Resolves and reject are callbacks provided by JS

let promise = new Promise(( resolve , reject ) => {
    console.log("I am a promise");
});
