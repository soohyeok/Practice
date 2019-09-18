// useful obj helper to work with async tasks
// 'promises' to get back at some point in future
// escapes call back hell

//creating and resolving promises

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Done!');
    },1500);
});

promise.then(function(value){
    console.log(value);
}); // once promise is resolved do w/e in argument

// Rejecting promises

let promiseF = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('Failed!');
    },1500);
});

promiseF.then(function(value){
    console.log(value);
}, function(error){
    console.log(error);
});

// Chaining promises

function waitASecond(seconds){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            seconds++;
            resolve(seconds);
        }, 1000);
    });
}

waitASecond(0)
    .then(waitASecond) //automatically takes result of resolve as arg
    .then(function(seconds){
        console.log(seconds);
    })

//Catching Error

function waitAsecond(seconds){
    return new Promise(function(resolve,reject){
        if(seconds > 2){
            reject('Rejected!');
        } else {

        
        setTimeout(function(){
            seconds++;
            resolve(seconds);
        }, 1000);
        }
    });
}

waitAsecond(1)
    .then(waitAsecond) //automatically takes result of resolve as arg
    .then(function(seconds){
        console.log('waitAsecond: ' + seconds);
    })
    .catch(function(error){
        console.log('waitAsecond: ' + error);
    });

// Built-in Methods All-and-Race
let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise1');
        resolve('Resolved!');
    }, 1000);
});

let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise2');
        reject('Rejected!');
    }, 2000);
});
let promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Rejected!');
    }, 2000);
});

Promise.all([promise1, promise2]) // waits for all promise to finish
    .then(function(success){      // and only if all promises are resolved
        console.log('all: ' + success); // the entirety is resolved
    })                                  // even if 1 is rejected, all is rejected
    .catch(function(error){
        console.log('all: ' + error);
    });

Promise.all([promise1, promise3]) // waits for all promise to finish
    .then(function(success){      // and only if all promises are resolved
        console.log(success); // the entirety is resolved
    })                                  // even if 1 is rejected, all is rejected
    .catch(function(error){
        console.log('all: ' + error);
    }); // returns array ['Resolved!', 'Resolved!']


Promise.race([promise1, promise2]) // waits for all promise to finish
    .then(function(success){      // and only if all promises are resolved
        console.log('race: ' + success); // the entirety is resolved
    })                                  // even if 1 is rejected, all is rejected
    .catch(function(error){
        console.log('race: ' + error);
    }); 