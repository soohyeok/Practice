let symbol = Symbol('debug');
console.log(symbol);
console.log(typeof symbol); // it is a primitive

let anotherSymbol = Symbol('debug'); // unqiue id

console.log(symbol == anotherSymbol); // false: stand for unique id

let obj ={
    name: 'max',
    [symbol]: 22
}

console.log(obj);

let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age'); // shared id
console.log(symbol1 == symbol2);

let person = {
    name: 'Max',
    age: 30
};

function makeAge(person){
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 27;
}

makeAge(person);
console.log(person[symbol1]);
// if .for is removed they are not shared anymore

console.log(person['age']); // symbols don't overwrite
// preset property values since pointers are different

// well known symbols

class newEx {
    
}

let ex = new newEx();
console.log(ex.__proto__.toString()); // prints [object Object]

newEx.prototype[Symbol.toStringTag] = 'newEx';
// we can overwrite it with symbol
console.log(ex.__proto__.toString()); // prints [object newEx]

let numbers = [1,2,3];
console.log(numbers+1); // 1,2,31
numbers[Symbol.toPrimitive] = () =>{
    return 999;
}
console.log(numbers + 1);

// symbols allow you to override default behavior on
// built-in objects
