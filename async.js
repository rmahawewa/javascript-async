//Example
async function myFunction () {
    return "Hello";
}

//this is same as

function myFunction(){
    return Promide.resolve("Hello");
}

//Here is how to use the Promise

myFunction().then(
    function(value) {/** code if successful */},
    function(error) {/** code if some error */}
);

//Example

async function myFunction(){
    return "Hello";
}

myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

//Example

async function myFunction(){
    return "Hello";
}

myFunction().then(
    function(value){myDisplayer(value);}
);