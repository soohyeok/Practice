// Proxy API
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Traps
let person ={
    someProp: 'Max'
};

let handler ={
    get(target, name){
        return name in target ? target[name]: 'N/A'; // target is obj, name is name of property
    }
};

// Built-in proxy Obj
//1st arg: target, 2nd arg: handler
var proxy = new Proxy(person, handler);

console.log(proxy);
console.log(proxy.someProp); // => Max
console.log(proxy.name); // => NA

// Proxys and Reflect
console.log(`-----Proxys and Reflect-----`)

let handleR ={
    get(target, name){
        return name in target ? target[name]: 'N/A'; // target is obj, name is name of property
    },
    set(target, property, value){
        if(value.length >= 2){
            Reflect.set(target, property, value);
        }
    }
};

let persoN ={
    age: 27,
    name: 'Max'
};

var proxY = new Proxy(persoN, handleR);
console.log(proxY.name); // => Max
proxY.name = 'M'; //doesn't meet handleR filter
console.log(proxY.name); // => Max
proxY.name = 'Moooooooo'; // length >= 2, so passes
console.log(proxY.name); // => Moooooooo

// Using Proxy as prototypes
console.log(`---- Using Proxy as Prototype ----`);

let person_1 ={
    name: 'Max',
    age: 27
};

let handler_1 ={
    get(target, name){
        return name in target ? target[name]: 'N/A'; // target is obj, name is name of property
    }
};

var proxy_1 = new Proxy({}, handler);
console.log(proxy_1.name); // => undefined

Reflect.setPrototypeOf(person_1, proxy_1);
console.log(person_1.name); // => MAX
console.log(person_1.age); // => 27
console.log(person_1.something); // => N/A
var anObj = {};
console.log(anObj.name); // => undefined
// my analysis on perks of proxy
// by having set up handler on objects, we can control
// filters by setting up conditions and manipulate
// return value when condition is not met

// Proxys can be prototypes


// Proxies as Proxies
console.log(`----Proxies as Proxies----`);
let p_person ={
    name: 'Max',
    age: 27
};

let p_handler ={
    
};

let pp_handler ={
    get(target, name){
        return name in target ? target[name]: 'N/A'; // target is obj, name is name of property
    }
};

var p_proxy = new Proxy({}, p_handler);

let pp_proxy = new Proxy(p_proxy, pp_handler);

Reflect.setPrototypeOf(p_person, pp_proxy); // => N/A

console.log(p_person.hobbies);

// Wrapping Functions
console.log(`----Wrapping Functions with Proxy ----`);

function log(msg){
    console.log(`Log entry created, msg: ${msg}`);
}
log('Hello!');

let msgHandler = {
    apply(target, thisArg, argList){
        if(argList.length == 1){
            return Reflect.apply(target, thisArg, argList);
        }
        else{
            console.log(`ERR!`);
        }
    }
};

let msgProxy = new Proxy(log, msgHandler);
msgProxy('Hello', 'hey'); // => ERR!
msgProxy('Hello'); // => Log entry created, msg: Hello

// Revocable Proxies

let person_revocable = {
    name: 'REVOCABLE'
};

let handler_revocable = {
    get: function(target, property){
        return Reflect.get(target, property);
    }
};

//let proxy_revocable = new Proxy(person_revocable, handler_revocable);
let {proxy, revoke} = Proxy.revocable(person_revocable, handler_revocable);
// the name here has to be 'proxy' for some reason
console.log(proxy.name);
//reVoke();
//console.log(proxy.name); // now error