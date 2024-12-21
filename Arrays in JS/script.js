// Arrays in JS : Collection of Items --> linear 
//to create array 

let marks = [97,86,67,89];
console.log(marks);  
console.log(marks,length); //length is property of array 

//Output of this Array on Console : (4) [97, 86, 67, 89]

let actors=["ironman","thor",'scarletjohnson',"RDJ","ShivangiJoshi"];
console.log(actors,length);

//Array Indices : arr[0],arr[1],arr[2],...

//in console trying to access array indices :
//marks[0] : 97
//marks[5] : undefined

// Strings : immutable and Array : mutable

//Looping over an Array 
//Problem statement : Print all items of actors

for(let i=0 ; i< actors.length ; i++){ //By using For Loop
    console.log(actors[i]);
    /*OUTPUT : ironman
               thor
               scarletjohnson
               RDJ
               ShivangiJoshi 
    */
}

//For of loop

for(let actor of actors){
    console.log(actor); //Same output
}

//Practice question : calculate the average mark of entire class 

let mark=[85,97,44,37,76,60];
let sum=0;
for(let val of mark){
    sum+=val;
}
let avg =sum/mark.length;
console.log('avg marks of the entire class =',avg); 
//OUTPUT OF THIS QUESTION : avg marks of the entire class = 66.5

//Array Methods :

//Push() : add to end
//Pop() : delete from end and return 
//toString() : converts array to string 
//Concat() : joins multiple arrays and return result 
//unshift() : add to start 
//shift() : delete from start and return
//slice(): returns a piece of the array 
//splice (): change original array (add,remove,replace)

// Push Function : 
let fooditems = ['potato','tomato','apple','litchi']
fooditems.push("chips");
console.log(fooditems); //Output : (5) ['potato', 'tomato', 'apple', 'litchi', 'chips']

//PopFunction : 
fooditems.pop();
console.log(fooditems); //Output : (4) ['potato', 'tomato', 'apple', 'litchi']

let deletedval = fooditems.pop();
console.log(deletedval); //Output : litchi

//toString Function :
console.log(fooditems.toString()); //Output : potato,tomato,apple
console.log(mark.toString()); //Output : 85,97,44,37,76,60

//Concat Function :
let marvel =['thor','iron man','spiderman','antman','hulk'];
let dc =['batman','superman'];
let heroes = marvel.concat(dc);
console.log(heroes);
//Output : (5) ['thor', 'iron man', 'spiderman', 'batman', 'superman']

//unShift Function :

marvel.unshift('Hulk');
console.log(marvel);

//Shift Function :
let val=marvel.shift();
console.log('deleted', val); //Output : deleted Hulk

//Slice method :
console.log(marvel.slice(1,3)); //Output : ['iron man', 'spiderman']

//Splice Method :
//splice(startindex,deletecount,newelement);

let arr =[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
console.log(arr);






















 

