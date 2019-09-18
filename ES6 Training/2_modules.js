// if modules don't work check out
// https://www.udemy.com/es6-bootcamp-next-generation-javascript/learn/lecture/5331762#overview

/*
import keyValue from './modulesAndClassesExternal.js';
console.log(keyValue); */

// open -a "Google Chrome" --args --allow-file-access-from-files
// file:///Users/soohyeoklee/Documents/Projects/AcceleratedES6JSTraining/modulesAndClasses.html

/* AMD
require(['./modulesAndClassesExternal.js'], function(bears){
    console.log(bears)
})*/

/* NODE
var bears = require('./modulesAndClassesExternal.js');
console.log(bears);
*/

//ES6
//import bears from './modulesAndClassesExternal.js';

import {keyValue, test} from './modulesExternal.js';
 
console.log(keyValue); // => 1000
test();
console.log(keyValue); // => 2000

//Basic Import/exports

// this may not run depending on the browser
// if not using a browser, you need to host a local server
// if things do not work out
// check out plnkr.zip file instead
// load it on to http://plnkr.co/
