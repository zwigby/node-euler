/**
 * Calculates the sum of all the numbers that are multiples of either 3 or 5 up
 * to but not including the value passed in.
 *
 * If 10 is passed in as value, the numbers 3, 5, 6, and 9 will be summed. This
 * will return 23.
 *
 * @param  {Number} value the maximum value to include multiples of
 * @return {Number}       the sum of the 3 and 5 multiples up to value
 */
exports.threeFiveMultipleSum = function(value) {
  var ret = 0;
  for(var i = 3; i < value; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      ret += i;
    }
  }
  return ret;
};