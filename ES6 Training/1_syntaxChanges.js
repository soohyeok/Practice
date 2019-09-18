// let & const
// let allows block scope since ES6

if (true){
    var a = 'a';
    let b = 'b';
}
console.log(a);
// console.log(b); // err: b is not defined

let name = 'soo';
const age = 25;
//age = 27; // err: assignment to const variable

const AGES = [1, 2, 3];
console.log(AGES); // [1,2,3]
AGES.push(4);
console.log(AGES); // [1,2,3,4] pointer doesn't change

const OBJ = {
    age: 25
};
console.log(OBJ.age); //25
OBJ.age = 30;
console.log(OBJ.age); //30

// hoisting in ES6

hoist = 25;
console.log(hoist);
var hoist;

/* hoisting with let does not work;
   variable has to be declared before initialized
Hoist = 25;
console.log(Hoist);
let Hoist; */

function doSomething11(){
    ahoy = 27;
}
let ahoy;
doSomething11();
console.log(ahoy); //valid approach bc declared being initialized

// Functions
function oldFn(){
    console.log('Hello!');
}
oldFn();

var fn = () => {
    console.log('Hello!');
};
fn();

var fn2 = () => console.log('onelineofcode');
fn2();

var fn3 = () => 'we can return without return';
console.log(fn3());

var fn4 = () =>{
    let a = 2;
    let b = 3;
    return a+b;
}
console.log(fn4());

var fn5 = (a,b) => a+b; // as long as code is one line
console.log(fn5(5,4)); // can use return without 'return'

var fn6 = a => a + 5; // 1 argument no () required
console.log(fn6(7));

/*
setTimeout(a => a+5, 1000);
setTimeout(() => console.log('timer ended'), 1000);
*/
//// THISSSS

function FN(){
    console.log(this);
}
FN(); // prints window object
var FN2 = () => console.log(this);
FN2();

var button = document.querySelector('button');

// must understand these are handled differently
button.addEventListener('click', FN); // prints button element
button.addEventListener('click', FN2); // prints window object

// functions and parameters
function isEqualTo(n1, n2){
    return n1 == n2;
}

console.log(isEqualTo(10,10)); //true
// with es6 we can put default value

function isEqualTo1(n1, n2 = 0){
    return n1 == n2;
}

console.log(isEqualTo1(3)); // false
console.log(isEqualTo1(0)); // true

function isEqualTo2(n1 = 0, n2 = 0){
    return n1 == n2;
}
console.log(isEqualTo2(0)); // true

console.log('i\'m here');

function isEqualTo3(n1 = 0, n2){
    return n1 == n2;
}

console.log(isEqualTo3(0)); // false // this is useless
// if we only put in single value, it will pass into
// the first param
// bc we have to pass argument into the first param
// in order to pass arg to 2nd param

// main thing to take away 
var outervariable = 5
function isEqualTo4(n1, n2 = outervariable){
    return n1 == n2;
}
console.log(isEqualTo4(5)); // true

/*
function isEqualTo5(n1 = n2, n2 = 5){
    console.log('whatever');
}*/ // this thing doesn't work bc n2 is called b4 declaration

function isEqualTo5(n1 = 0, n2 = n1){
    console.log('whatever');
} // this works bc n1 is set already when n2 = n1 is called

// object literal extensions

let new_obj = {
    name: 'Soo',
    age: 25
};
console.log(new_obj);


let Name = 'Anna';
let Age = 24;
let greet = () =>{
    console.log('methods get pulled too');
    console.log(this.Name + ' is ' + this.age + ' years old');
}
let ageField = "age";

let NEW_obj = {
    Name,  //this is filled in by Name Anna
    Age: 27,
    [ageField]: 28, // can't just use , | must assign value
    // whatever u call within [], the value of it becomes the
    // property name, here instead of ageField or "age" being
    // property name, the propertyname is simply age
    greet,
    'string Property': 'call has to be in string'
}; // the object keys pull from nearby variables
// that matches with the property name
console.log(NEW_obj);

// perk of this is that property name could be spaced
console.log(NEW_obj['string Property']);

console.log(NEW_obj.greet());

//still can be called like this
console.log(NEW_obj[ageField]);
console.log(NEW_obj.age);

// rest operator
let theNumbers = [1,2,3,4,5];
var sumUp = (...toAdd) => {
    let result =0;
    for(let i=0; i<toAdd.length; i++){
        result += toAdd[i];
    }
    return result;
};
console.log(sumUp(theNumbers)); // results in 01,2,3,4,5
console.log(sumUp(100, 10, 20));
// having rest operator ... causes all argument to be
// put into array
console.log(sumUp(100, 10, '20')); //results in '11020;
// adds the integers and meets a string that latches on to it

// spread operator
// looks same as rest but used in different situation
// let theNumbers = [1,2,3,4,5]; declared above
console.log(Math.max(theNumbers)); // results in NaN
// bc it accepts number like 1,2,3,4 but doesn't accept arrays
console.log(Math.max(1,2,3));
console.log(Math.max(...theNumbers)); // ... spreads the
// values in array out into individual values

// rest occurs when accepting arguments
// spread elsewhere

// The for-of loop
let testResults = [1.23, 1.10, 4.1];
for(let testResult of testResults){
    console.log(testResult); 
} // seems like a forEach loop to me


// Template literals
let namex = 'Soo';
let descriptionx = `
    Hello, I'm ${namex + '!!!'/*also can add stuff in it*/}
`; // sht next to 1 (left of)
/*let descriptiony = "
    yeah
";*/ //cannot do multiline with regular string '' ""
console.log(descriptionx);

// destructuring Arrays

let numbers = [1,2,3];
//let a = numbers[0];
//let b = numbers[1];

let [A,B,C,D] = numbers;
console.log(A);
console.log(B);
console.log(D); // undefined when not initialized
console.log(numbers);

let [E,...F] = numbers;
console.log(E);
console.log(F); //other than E is saved to F

let numbers1 = [1,2,'3']; //strings work too
// default value can be set
let [e = "kimchi", f, g, h = 'Default'] = numbers1;
console.log(e,f,g,h);

//swapping values
let x_1 = 5;
let x_2 = 10;
[x_2, x_1] = [x_1, x_2];
console.log(x_1, x_2); // prints 10 5


let numbers_1 = [1,2,3];
let [a_1, , c_1] = numbers_1; // we can leave out # as well
console.log(a_1,c_1); // prints 1 3

// considering this we don't even have to declare numbers
// just accept the numbers and set them straight to
// the destructuring
let [a_2, b_2] = [1,2,3];
console.log(a_2, b_2); // prints 1 2

// Destructuring - Objects
let obj_1 = {
    k1: 'Max',
    k2: 27,
    k3: function (){
        console.log('Hello there!');
    }
};


let {k1, k2, k3} = obj_1; // name inside {} have to be
                    // same as the property name
console.log(k1, k2, k3);
/* commented out for redeclaration error
let {k1, k3} = obj_1; // we cannnot leave out by */
// using k1, , k3 bc we're referencing them by name already
// but we can set up alias
let {k1: theName, k3: theGreet} = obj_1;
console.log(theName);
theGreet(); // now k3() doesn't work


