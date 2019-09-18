let obj_1 = {
    a: 1
}
let obj_2 = {
    b: 2
}

// Object.assign adds properties of objects into a single object
var obj_1and2 = Object.assign(obj_1, obj_2);
console.log(obj_1and2);

// what if objects have different prototypes?
class Obj_1 {
    constructor(){
        this.a = 1;
    }
}

class Obj_2{
    constructor(){
        this.b = 2;
    }
}
var obj_1a = new Obj_1;
var obj_2a = new Obj_2;

var obj_1a2a = Object.assign(obj_1a, obj_2a);
console.log(obj_1a2a)

console.log(obj_1a.__proto__ === Obj_1.prototype); //T
console.log(obj_2a.__proto__ === Obj_2.prototype); //T
console.log(Obj_1.prototype === Obj_2.prototype); //F
// combined obj takes prototype of first obj arg
console.log(obj_1a2a.__proto__ === Obj_1.prototype); //T
console.log(obj_1a2a.__proto__ === Obj_2.prototype); //F

// we can put empty obj as argument
// but the {} empty obj is first arg here so new obj
// takes prototype of Object
var obj_01a2a = Object.assign({}, obj_1a, obj_2a);
console.log(obj_01a2a.__proto__ === Object.prototype); //T
console.log(obj_01a2a.__proto__ === Obj_1.prototype); //F
console.log(obj_01a2a.__proto__ === Obj_2.prototype); //F

console.log (`------- FOR BETTER READ -----------`);
let common_obj = {
    //name: 'Max'
};
let common_obj2 = {
    name: 'Anna'
};
console.log(common_obj.__proto__ === Object.prototype); //T
Object.setPrototypeOf(common_obj, common_obj2);
console.log(common_obj.__proto__ === Object.prototype); //F
console.log(common_obj.__proto__ === common_obj2); //T
console.log(common_obj.name); // Anna

console.log (`---------- MATH OBJECT -----------`);
// The Math Object

console.log(Math.sign(-10)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(3)) // 1
console.log(Math.sign(NaN)); // NaN
console.log(Math.sign('number')); // NaN
console.log(Math.sign(undefined)); // NaN

// trunc cuts off everything after decimal
console.log(Math.trunc(0.78)); // 0
console.log(Math.trunc(3)); // 3

// it seem similar to floor but difference is in (-)
console.log(Math.floor(-3.78)); // -4
console.log(Math.trunc(-3.78)); // -3

console.log (`---------- STRING -----------`);
// String
let Name = 'Soo Hyeok Lee';
// .startsWith: checks if string starts with arg
console.log(Name.startsWith('Soo')); //T
console.log(Name.startsWith('Lee')); //F
// .endsWith: checks if string ends with arg
console.log(Name.endsWith('Lee')); //T
console.log(Name.endsWith('Le')); //F
// .includes: checks if it includes
console.log(Name.includes('ee')); //T
console.log(Name.includes('o H')); //T
console.log(Name.includes('os')); //F

let number = NaN;
console.log(isNaN(number));

console.log (`---------- Number Object -----------`);
// Number Object
// isNaN(#) checks if is NaN
console.log(isNaN(NaN)); //T
console.log(isNaN(undefined)); //T
console.log(isNaN('NaN')); //T
console.log(Number.isNaN('NaN')); //F
// isFinite
console.log(Number.isFinite(100000000)); //T
console.log(Number.isFinite(Infinity)); //F
console.log(!Number.isFinite(Infinity)); //T
// isInteger
console.log(Number.isInteger(Infinity)); //F
console.log(Number.isInteger(5)); //T
console.log(Number.isInteger(7.14)); //F

console.log (`---------- Arrays -----------`);
// Arrays

// Array()
let arr = Array();
console.log(arr); // []
arr = Array(5);
console.log(arr); // [undefined, undefined, undefined, undefined, undefined]

// Array.of()
arr = Array.of(5);
console.log(arr); // [5]
console.log(Array.of(5, 10, 11)); //[5,10,11]

// Array.from()
arr = [10, 11, 13];
let newArr = Array.from(arr, val => val *2);
console.log(newArr); //[10, 11, 13]

// .fill : takes old array and fills every index with specified arg value
arr.fill(100);
console.log(arr); //[100, 100, 100]
// start(inclusive) and end(exclusive)
arr = [1, 2, 3];
arr.fill(100, 1,2);
console.log(arr); // [1, 100, 3]

// .find()
// gives the first value it finds that meets the condition
console.log(arr.find(val => val >= 2)); // 100

// MDN example of .find
var inventory =[
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit){
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries));

// .copyWithin
arr = [1,2,3];
// .copyWithin(a, b) copies b index value to a index
console.log(arr.copyWithin(1, 2)); // [1,3,3]
console.log(arr); //[1,3,3] this affects original array
console.log(arr.copyWithin(1,0)); // [1,1,3]
// .copyWithin(a, b, c) copies b-index(inclusive)
// to c-index(exclusive) values to a-index
brr = [1,2,3,4,5,6,7,8,9];
console.log(brr.copyWithin(1,3,5)); // [1,4,5,4,5,6,7,8,9]
console.log(brr.copyWithin(6,0,3)); // [1,4,5,4,5,6,1,4,5]
// it doesn't increase array size though

// .entries()
let crr = [1,2,3];
console.log(crr.entries()); //Object [Array Iterator] {}

let IT = crr.entries();
for(let x of IT){
    console.log(x);
}/* results in:
[ 0, 1 ]  // index, value
[ 1, 2 ]
[ 2, 3 ] */

let drr = [1,6,4];
console.log(drr.entries()); //Object [Array Iterator] {}