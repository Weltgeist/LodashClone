
const _ = {
  /**
   * clamps a number between two inclusive bounds.
   * @param {num} number Number to bound
   * @param {num} lower Lower Bound
   * @param {num} upper Upper bound
   * @returns {num} Bounded number
   */
  clamp(number, lower, upper){
    return Math.min(Math.max(number, lower), upper);
  },
  /**
   * verify if a number exist in between an [lower bound] and ]upper bound[.
   * @param {num} number number to check range
   * @param {num} start inclusive lower bound
   * @param {num} end non-inclusive upper bound
   * @returns {bool} Result if in range or not
   */
  inRange(number, start, end){
    let temp = 0;
    let isInRange = false;
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    } else if ( start > end) {
      temp = end;
      end = start;
      start = temp;
    }
    isInRange = number >= start && number < end;
    return isInRange;
  },
  /**
   * Seperate a words string into a word array.Only split with ' '.
   * @param {string} string string to split 
   * @returns {array} splitted string
   */
  words(string){
    return string.split(' ')
  },
  /**
   * add a space pad on both side of a string.
   * @param {*} string string to pad
   * @param {*} length Length of string with pads
   * @returns {string} Padded String
   */
  pad(string, length){
    let pad = 0;
    let left = 0;
    let right = 0;
    let paddedString = '';
    let padChar = ' '; 
    if(string.length > length){
      return string;
    } else {
      pad = length - string.length;
      left = Math.floor(pad/2);
      right = Math.ceil(pad/2); 
      paddedString = padChar.repeat(left) + string + padChar.repeat(right);
      return paddedString;
    }
  },
  /**
   * verify if an object's key has a value.
   * @param {object} object object to check
   * @param {string} key  key with value to verify
   * @returns {bool} has value or not
   */
  has(object,key){
    return !(typeof object[key] === 'undefined');
  },
  /**
   * invert each key,value par of a  object in a non-mutatively way.
   * @param {object} object object to invert
   * @returns inverted object
   */
  invert(object){
    let invertedObject = {};
    for (key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  /**
   * Find 1st key whose value is a truthy output of a predictive function.
   * @param {*} object object to search
   * @param {*} func predicate function
   * @returns {*} truthy value if key is found or undefined
   */
  findKey(object, func){
    let pass = false;
    for (key in object){
      pass = func(object[key]);
      if (pass) return key;
    }
    return undefined;
  },
  /**
   * drops/shifts elements from start of array, returns new array.
   * @param {array} arr arr to work on
   * @param {int} num number of elements to shift
   * @returns {array}  sliced array
   */
  drop(arr,num){
    let narr = [];
    if(typeof num === 'undefined') num = 1;
    if(num > arr.length) num = arr.length;
    narr = arr.slice(num);
    return narr;
  },
  dropWhile(arr, predicate){
    let narr = [];
    let dropNum = 0;
    if (typeof predicate === 'undefined') return;
    dropNum = arr.findIndex((element,index) => !predicate(element,index,arr));
    if (dropNum === -1) dropNum = arr.length; 
    narr = this.drop(arr, dropNum);
    return narr;
  }
};



// Do not write or modify code below this line.
module.exports = _;