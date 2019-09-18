function PersonO(){ // obj constructor

}
var personO = new PersonO();

class PersonC{ //class constructor
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    
    get name(){ //encapsulation
        return this._name;
    }
    set name(value){
        if(value.length > 2){
            this._name = value;
        }
        else{
            console.log('Name is too short');
        }
    }

    get age(){ 
        return this._age;
    }
    set age(value){
        this._age = value;
    }

    greet(){
        console.log(`Hello my name is ${this.name}.
        I am ${this.gender} and I am ${this.age} years old.`);
    }
}

let personC = new PersonC('Max', 27);
personC.greet();

// classes and prototypes

console.log(personC.__proto__ == PersonC.prototype);

class Max extends PersonC{ // class that inhertis from parent class
    constructor(name, age, gender){
        super(name, age); // super gives access to direct parent
        // necessary for properties when adding new properties
        this.gender = gender;
    }

    greet(){ // just to show difference b/w this.greet / super.greet
        console.log('Hello');
    }

    greetTwice(){
        this.greet(); // will refer to Max (calls to relative parent of method, which inherited from the parent class)
        super.greet(); // will refer to PersonC (parent) directly
    }
}

let max = new Max('Max', 27, 'male');

console.log('max.greet()');
max.greet();
console.log('max.greetTwice()');
max.greetTwice();

// Inheritence and prototypes

console.log(max.__proto__ === Max.prototype);

// static methods
class Helper{
    static logTwice(msg){
        for(let i = 0; i<= 1; i++){
            console.log(msg); 
        };
    }
}
let helper = new Helper();
//helper.logTwice('Logged'); // from instance of class

// Helper.logTwice('Directly from class'); // b4 static keyword it does not work
// cannot access class directly
// but if we make method static, we can use method without instantiating
// the class to make an object
Helper.logTwice('Directly from class');
//however after static keyword input
// helper.logTwice('Logged'); does not work anymore
// it is not inherited anymore since it's static

console.log(max);
max.name = 'ye';
console.log(max);
max.name = 'Anna';
console.log(max);
// getters and settor controls dataflow here in
// setting limits and restrictions on i/o
// checks for functionalities

// Extending Built-in Objects
// 'Sub-classing'
class ConvertableArray extends Array{
    convert(){
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted! ' + value));
        return returnArray;
    }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
console.log(numberArray.convert());