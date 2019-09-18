// iterator loops thru to the end
// generator doesn't necessarily thru the end
// iterator yield 1 after another
// but generator can stop

// Iterator Basics //
let arr = [1,2,3];

console.log(typeof arr[Symbol.iterator]); // prints function

let it = arr[Symbol.iterator]();
console.log(it); // prints Object [Array Iterator] {}
console.log(it.next()); // prints { value: 1, done: false }
console.log(it.next()); // prints { value: 2, done: false }
// iterator is an obj/function which
// which knows how to access a collection (array in this case)
// the object holds

console.log(it.next()); // prints { value: 3, done: false }
console.log(it.next()); // prints { value: undefined, done: true }
// done is only true when it reaches the undefined value, past thru the collection


// Iterators in Action //
// every obj is iteratable with Symbol.iterator

arr[Symbol.iterator] = ()=>{
    let nextValue = 10;
    return{
        next() {
            nextValue++;
            return{
                //value: 10,
                //done: true
                value: nextValue,
                done: nextValue > 15 ? true:false,
                 
            };
        }
    };
}

let It = arr[Symbol.iterator]();
console.log(It);
console.log(It.next());
console.log(It.next());
console.log(It.next());
console.log(It.next());
console.log(It.next());
console.log(It.next());

for (let element of arr){
    console.log(element);
}

// creating custom iterable object
let person = {
    name: 'Max',
    hobbies: ['soccer', 'golf'],
    [Symbol.iterator](){
        let i = 0;
        let hobbies = this.hobbies;
        return{
            next(){
                let value = hobbies[i++];
                return{
                    value: value,
                    done: i > hobbies.length? true:false
                };
            }
        };
    }
};

for(let hobby of person){
    console.log(hobby);
}

// Generator Basics
function *select(){ //add *
    yield 'House'; //yield is lik return
    yield 'Garage';
}
select();
// we actually get back an iterator we can loop
let oh = select();
console.log(oh); // prints Object [Generator] {}
console.log(oh.next()); // prints { value: 'House', done: false }
console.log(oh.next()); // prints { value: 'Garage', done: false }
console.log(oh.next()); // { value: undefined, done: true }


// Generator in Action
let ohj ={
    [Symbol.iterator]: gen
};

function *gen(){
    yield 1;
    yield 2;
}
for (let x of ohj){
    console.log(x);
}

let oj = gen(); // this is alt to for of

//alt
function *gen1(end){
    for(let i=0; i<end; i++){
        yield i;
    }
}
let jt = gen1(2);
console.log(jt.next());
console.log(jt.next());
console.log(jt.next());
console.log(jt.next());

// controlling iteratators with throw and return
function *gen2(end){
    for(let i=0; i<end; i++){
        yield i;
    }
}

let ct = gen2(2);

console.log(ct.next());
// console.log(ct.throw('An error message')); // process stops


function *gen3(end){
    for(let i=0; i<end; i++){
        try{ // this allows to run through error
            yield i;
        } catch(e){
            console.log(e);
        }
    }
}

let yt = gen3(2);

console.log(yt.next());
console.log(yt.throw('An error message')); // forces an error
console.log(yt.return('HELLOOOOOOO')); // overwrite value
console.log(yt.next());
console.log(yt.next());