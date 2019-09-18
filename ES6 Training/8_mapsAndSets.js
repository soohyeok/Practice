// Maps and Sets
// Map (*_*)
let cardAce = {
    name: 'Ace of Spades'
};
let cardKing = {
    name: 'King of Clubs'
};

// creating a map
// (key, value) pairs
let deck = new Map();
// .set: Adding to map introducing new key, value pairs
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck);/*
Map {
    'as' => { name: 'Ace of Spades' },
    'kc' => { name: 'King of Clubs' } }*/
console.log(deck.size);
console.log(deck.get('as'));
deck.delete('as');
console.log(deck); //Map { 'kc' => { name: 'King of Clubs' } }
console.log(deck.get('as')); // undefined
console.log(deck.delete('kc')); // true
console.log(deck); // Map{}

deck.set('ac', {name: 'Ace of Clubs'});
deck.set('ah', {name: 'Ace of Hearts'});
for(daKey of deck.keys()){
    console.log(daKey);
} /*
ac
ah */

for(daValue of deck.values()){
    console.log(daValue); 
} /* gives back values
{ name: 'Ace of Clubs' }
{ name: 'Ace of Hearts' } */

for(daEntries of deck.entries()){
    console.log(daEntries);
} /* gives back arrays of key value pairs
[ 'ac', { name: 'Ace of Clubs' } ]
[ 'ah', { name: 'Ace of Hearts' } ]
*/
console.log('hello');

// getting key by value
for([key, value] of deck.entries()){
    if(value.name === 'Ace of Hearts'){
        //return key;
    }
}

// The weak map
// called weak bc it holds weak references to entries in map
let weakDeck = new WeakMap();
// cannot use strings
// weakDeck.set('as', cardAce);
// weakDeck.set('kc', cardKing);
/* TypeError: Invalid value used as weak map key
    at WeakMap.set (<anonymous>)*/
    // key has to be reference type not primitive type
    // for the garbage collection purposes
    // use objects as keys
    // adv: garbage collection
    // disadv: have to use obj as keys and not enumerable(can't loop thru it)
console.log(weakDeck); /*
WeakMap { [items unknown] } */

let key1 = {a:1};
let key2 = {b:2};

weakDeck.set(key1, cardAce);
weakDeck.set(key2, cardKing);
console.log(weakDeck); /*
WeakMap { [items unknown] } */
console.log(weakDeck.get(key1));/*
{ name: 'Ace of Spades' } */
//cannot use for of loop or size property

//Sets: creation and adding items
let set = new Set([1,1,1]); //holds unique values
console.log(set); // Set { 1 }
// set is like an array but each value can only appear once
set.add(2); //when you write pre-existing value it is just not executed
// instead of being over written
set.delete(1); // no matter how many times 1 was added before
// it doesn't matter and it just gets deleted (1 was added 3 times in 
// initialization [1,1,1])

console.log(set.has(1)); // false
console.log(set.has(2)); // true

for(element of set){
    console.log(element);
}
set.add(3.5);
// key value pairs exist altho
// key = value
for(element of set.entries()){
    console.log(element);
}

// WeakSet 
// let weakSet = new WeakSet([1,1,1]); // invalid value
let weakSet = new WeakSet([{a:1},{b:2},{b:2}]);
/*for(element of set){
    console.log(element);
} cannot use this since not iterable*/
console.log(weakSet.has({b:2})); // false
// we just created 3 new objects when we called {b:2} 3 times
// since creating new obj creates new reference
let obj_1 = {a:1};
let obj_2 = {b:2};
let weak_Set = new WeakSet([obj_1, obj_2, obj_2]);
console.log(weak_Set.has(obj_2)); //true
weak_Set.delete(obj_2);
console.log(weak_Set.has(obj_2)); //false // we just deleted it

