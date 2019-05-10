const _ = {
  clamp(number, lb, ub){
    return Math.minI(Math.max(number, lb),ub);
  
  },
  inRange(num, start, end){
    if(typeof(end) == 'undefined'){
      end = start;
      start = 0;
    }
    if(start > end){
      let i = start;
      start = end;
      end = i;
    }
    if(num < start || num > end){
      return false;
    }
    else{
      return true;
    }
  },
  words(string){
    return string.split(' ');
  },
  pad(string, length){
    if(length <= string.length){
      return string;
    }
    else{
      let startPaddingLength = Math.floor((length - string.length)/2);
      let endPaddingLength = length -string.length - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    }
  },
  has(object, key){
    return undefined != object[key];
  },
  invert(object){
    let invertedObj = {};
    for (x in object){
      invertedObj[object[x]] = x;
    }
    return invertedObj;
  },
  findKey(object, predicate){
    for(let x in object){
    	let value = object[x];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return x;
      };
    };
    return undefined;
  },
  drop(arr, n){
    if(n == undefined){
      n = 1;
    }
    return arr.slice(arr.length - n,arr.length);
  },
  dropWhile(arr, predicate){
    let dropNumber = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  chunk(arr, n){
    if(n == undefined){
      n = 1;
    };
    let chunkArray = [];
    for(let i = 0; i < arr.length; i+=n){
      chunkArray.push(arr.slice(i, i+n));
    };
    return chunkArray;
  },
};




// Do not write or modify code below this line.
module.exports = _;
