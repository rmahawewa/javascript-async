/**
 * Delayed Callback Execution
 * Write a JAvaScript function that takes a callback and invokes it after a delay od 2 seconds.
 * 
 */

function invokeAfterDelay(callback){
    setTimeout(callback, 2000);
}

function display_message(){
    console.log('Hello!');
}

invokeAfterDelay(display_message);