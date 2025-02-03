//fetch API 
//The fetch API provides an interface for fetching (sending/receiving) resources . It uses Request and Response objects 
//The fetch() mathod is used to fetch a resource (data).
//let promise = fetch(url,[options])
//API : Application Programming Interface 

const URL ="https://alexwohlbruck.github.io/cat-facts/";  //Free api link from Browser 

const getFacts = async() => {
    console.log("getting data ....");
    let response = await fetch (URL);  //Getting a response from Fetch API function 
    console.log(response); //Printing the response , In JSON format
    console.log(response.status); //Printing response status 
    let data = await response.json();
    console.log(data)
}

//Understanding Some IMP Terms 

//AJAX is Asynchronous JS & XML
//JSON is Javascript Object Notation 
//json() method : returns a second promise that resolves with result of parsing the response body text as JSON . (Input is JSON , Output is JS object)


//Request And Response : HTTP Verbs , Response Status Code 
//HTTP response headers also constain details about the responses , such as content type , HTTP status code etc.
