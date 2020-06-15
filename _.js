
const _ = {
  /**
   * clamps a number between two inclusive bounds.
   * @param {num} number Number to bound
   * @param {num} lower Lower Bound
   * @param {num} upper Upper bound
   * @returns {num} Bounded number
   */
  clamp(number, lower, upper){
    return Math.min(Math.max(number,lower), upper);
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
   * Seperate a words string into a word array.
   * @param {string} string string to split 
   * @returns {array} splitted string
   */
  words(string){
    return string.split(' ')
  }
};



// Do not write or modify code below this line.
module.exports = _;