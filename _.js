
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
  has(object,key){
    return !(typeof object[key] === 'undefined');
  }
};



// Do not write or modify code below this line.
module.exports = _;