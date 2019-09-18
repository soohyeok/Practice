// has to do with meta-programming
// gives us tools to evaluate our code in the runtime
// has a lot of built in static methods
// at least 2~3 adv
// 1. it bundles all of these things
// currently there are obj, built in keywords here and there
// but everything is bundled into one reflectAPI
// 2. new features
// 3. together with Proxy API
// it works well together -> next lesson

// Reflect API
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

// Reflect.construct:
console.log(`Reflect.construct ----------`);
class aClass{
    constructor(val){
        this.prop1 = val;
    }
}
function TopObj(){
    this.prop2 = 2000;
}

//this line same work as let aInstance = new aClass;
let aInstance = Reflect.construct(aClass, ['prop1_val'], TopObj);
//construct takes 3 arguments(class, array, function or class)
// third arg will overwrite the prototype of the new instance
console.log(aInstance instanceof aClass); //(false due to overwrite; if no 3rd arg above: true)
console.log(aInstance.__proto__ == aClass.prototye); //f
console.log(aInstance.__proto__ == TopObj); //f
console.log(aInstance.__proto__ == TopObj.prototype); //t

// Reflect.apply()
console.log(`Reflect.apply ----------`);
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(addInFront){
        console.log(`${addInFront} Hello, I am ${this.name}`);
    }
}
let person = Reflect.construct(Person, ['Soo', 25]);
// let person = new Person('Soo', 25); same thang

person.greet();
Reflect.apply(person.greet, person, []); //info below
// useful in that
// 2nd arg let us point
// what this keyword should point to
// 3rd arg: pass in any arg this function should take
Reflect.apply(person.greet, {name: 'Anna'}, []); //can control
// undefined Hello, I am Anna
Reflect.apply(person.greet, person, ['this is arg.']);
// this is arg. Hello, I am Soo

// Reflect and Prototypes
console.log(`Reflect and Prototypes ----------`);
class Person_Proto{
    constructor(){
        this.name = 'Soo';
    }
}
let person_Proto = new Person_Proto();
console.log(Reflect.getPrototypeOf(person_Proto));
// => Person_Proto{}
// this gives name of prototype rather than just Obj Obj so
// easier to analyze for devs
console.log(Reflect.getPrototypeOf(person_Proto) == Person_Proto.prototype);
// => true

//Changing Prototype
let proto ={
    age: 30
};
Reflect.setPrototypeOf(person_Proto, proto);
console.log(Reflect.getPrototypeOf(person_Proto));
// => { age: 30 }

// Reflect construct(), apply(), prototype interaction
console.log(`Reflect construct apply prototype-----`);

class someClass{
    
}
let someObj = new someClass();
let someProto ={
    age: 30,
    greet(){
        console.log('Hello');
    }
}
Reflect.setPrototypeOf(someObj, someProto);
Reflect.apply(someObj.greet, null, []);

// Accessing Properties with Reflect
console.log(`----Accessing Properties with Reflect----`);
class PERson{
    constructor(name, age){
        this._name = name;
        this.age = age;
    }
    
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let mum = {
    _name: 'Mum'
};

let pERson = new PERson('Max', 27);
console.log(Reflect.get(pERson, '_name')); // => Max

Reflect.set(pERson, '_name', 'Anna');
console.log(Reflect.get(pERson, '_name')); // => Anna

console.log(Reflect.get(pERson, 'name', mum));
// still Anna; but with get name enabled in PERson class
// it changes to => Mum

Reflect.set(pERson, 'name', 'Anna', mum); //settor overrides
// the _name in the mum object
console.log(Reflect.get(pERson, 'name', mum)); //=> anna

console.log(mum); // => { _name: 'Anna' }

//checking if certain property exists
console.log(Reflect.has(pERson, 'name'));

// Analyzing Objects with Reflect.ownKeys()
console.log(`----Analyzing Objects with Reflect.ownKeys()----`);
console.log(Reflect.ownKeys(pERson)); //=> [ '_name', 'age' ]

// Creating & Deleting Properties with Reflect
console.log(`----Creating & Deleting Properties with Reflect----`);

Reflect.defineProperty(pERson, 'hobbies',{
    writable: true, //by default it's read-only
    value: ['Sports', 'Cooking'],
    configurable: true //whether this configuration could b changed
}); 

console.log(Reflect.ownKeys(pERson)); //=>[ '_name', 'age', 'hobbies' ]
console.log(pERson.hobbies); //=>[ 'Sports', 'Cooking' ]

// if writable was false, this would be just ignored
pERson.hobbies = ['Nothing']; 

console.log(pERson.hobbies); // => [ 'Nothing' ]

delete pERson.age;
console.log(pERson.age); // => undefined

Reflect.deleteProperty(pERson, 'hobbies');
console.log(pERson.hobbies); // => undefined

//Preventing Object Extensions
console.log(`----Preventing Object Extensions----`);

console.log(pERson); // => PERson { _name: 'Anna' }

// lets LOCK object!
Reflect.preventExtensions(pERson);

// Reflect.defineProperty() will cause error now
pERson['hello'] = 'hi'; // this doesn't alter anything
console.log(pERson); //=> PERson { _name: 'Anna' }

obj_111 = {};
obj_111.name = 'hi';
console.log(obj_111); // => { name: 'hi' }

// to check if we can add extensions
console.log(Reflect.isExtensible(pERson)); // f
console.log(Reflect.isExtensible(person)); // t

