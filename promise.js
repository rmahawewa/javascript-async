/**
 * A JavaScript Promise can be
 * 
 * Pending
 * Fulfilled
 * Rejected
 * 
 * 
 * 
 * The promise supports two properties: state and result.
 * While a Promise object is "pending" (working), the result is undefined.
 * When a Promise object is "fulfilled", the result is a value.
 * When a Promise onject is "rejected", the result is an error object.
 */

//Example1

let myPromise = new Promise(function(myResolve, myReject){

    myResolve();
    myReject();
});

myPromise.then(
    function(value) {/** code if successful */},
    function(Error){/** code if some error */}
);


//Example 2

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

let myPromise1 = new Promise(function(myResolve, myReject) {
    let x = 0;

    //The producing code (this may take some time)

    if(x == 0){
        myResolve("OK");
    }else{
        myReject("Error");
    }
});

myPromise1.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);


// Example 3

let myPromise2 = new Promise(function(myResolve, myReject) {
    setTimeout(function() {myResolve("I love you!");}, 3000);
});

myPromise.then(function(value){
    document.getElementById("demo").innerHTML = value;
});

//Example 4
let myPromise3 = new Promiae(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function(){
        if(req.status == 200){
            myResolve(req.response);
        }else{
            myReject("File not Found");
        }
    };
    req.send();
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);