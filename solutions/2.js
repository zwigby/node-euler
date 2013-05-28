/**
 * Calculates the sum of all the numbers that are an even fibonacci number not
 * exceeding the value passed in.
 *
 * If 10 is passed in the fibonacci numbers are 1, 2, 3, 5, 8. The even values
 * are then 2 and 8. The sum would be 10.
 *
 * @param  {Number} value the maximum value of the fibonacci value to include
 * @return {Number}       the sum of the even valued fibonacci numbers
 */
exports.evenFibonacciSum = function(value) {
  var getFibonacciSequence = function(max) {
    var values = [1, 2];
    var i = 1;
    var next = 0;

    do {
      next = values[i] + values [i - 1];
      if (next < max) {
        values.push(next);
        i++;
      }
    } while(next < max);

    return values;
  };

  var nums = getFibonacciSequence(value);
  var ret = 0;
  for(var i = 0, len = nums.length; i < len; i++) {
    if(nums[i] % 2 === 0) {
      ret += nums[i];
    }
  }
  return ret;
};