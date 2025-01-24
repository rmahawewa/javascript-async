/**
 * The await keyword can only be used inside an async function.
 * The await keyword makes the function pause the execution and wait for a resolved promise before it continues
 */

async function myDisplay(){
    let myPromise = new Promise(function(resolve, reject){
        resolve("I love You!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

//Example 
/**
 * waiting for a timeout
 */
async function myDisplay(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function() {resolve("I love you!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

 //Example
async function getFile(){
    let myPromise = new Promise(function(resolve){
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function() {
            if(req.status == 200){
                resolve(req.response);
            }else{
                resolve("File not Found");
            }
        };
        req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
} 

getFile();