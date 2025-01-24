// Example 1

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5,5, myDisplayer);

// Example 2

//Create an array
const myNumbers = [4,1,-20,-7,5,9,-6];

//Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

//Display Result
document.getElementById("demo").innerHTML = posNumbers;

//Keep only positive numbers
function removeNeg(numbers, callback){
    const myArray = [];
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
}

//Example 4

const numbers_array = [2,5,4,8,21,22,26,28,37,38];

function devide_by_two(numbers, callback){
    const array = [];
    for(const x of numbers){
        if(callback(x)){
            array.push(x);
        }
    }
    return array;
}

 const evenNumbers = devide_by_two(numbers_array, (x) => x % 2 === 0);

 console.log(evenNumbers);


 //Example 5

 function myDisplayer(something){
    document.getElementById("demo").innerHTML = something;
 }

 function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2l
    myCallback(sum);
 }

 myCalculator(5,5,myDisplayer);

 