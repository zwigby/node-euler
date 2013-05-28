/**
 * Calculates the smallest value that is a multiple of every natural number from
 * 1 to max number.
 *
 * If the max number is 10 the smallest mutliple is 2520.
 *
 * @param  {Number} max the maximum divisor value
 * @return {Number}     the multiple
 */
exports.smallestMultiple = function(max) {
  var val = max;
  var check = false;

  while(true) {
    val += max;
    check = true;

    for(var i = max - 1; i >= 2; i--) {
      if(val % i !== 0) {
        check = false;
        break;
      }
    }

    if(check) {
      return val;
    }
  }
};