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


/**
 * http get with promises
 * 
 * 
 * Write a javascript function that makes an HTTP GET request and returns a Promise that resolves with the response data
 * 
 */

function make_Get_Request(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error (`HTTP error!vStatus: ${response.status}`);
            }
            return response.json();
        })
        .then(data => resilve(data))
        .catch(error => reject(error))
    })
}

make_Get_Request('https://example.com/data')
    .then(data => {
        console.log('Response data: ' + data);
    })
    .catch(error => {
        console.log('Error: ' + error.message);
    });