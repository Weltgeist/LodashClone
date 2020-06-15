
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
  }
};



// Do not write or modify code below this line.
module.exports = _;