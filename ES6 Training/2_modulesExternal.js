/* AMD
define('modulesAndClassesExternal.js', function(){
    return 'bears';
})*/

/* NODE
module.exports = 'bears';
*/

// ES6
//export default 'bears';

let keyValue = 1000;
 
function test() {
  keyValue = 2000;
  console.log('tested!');
}
   
export {keyValue, test};