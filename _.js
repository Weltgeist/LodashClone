
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
  }
};



// Do not write or modify code below this line.
module.exports = _;