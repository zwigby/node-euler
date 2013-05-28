var isPalindrome = function(num) {
  var str = num.toString();
  var ret = true;
  for(var i = 0, len = str.length, len2 = Math.floor(len / 2); i < len2; i++) {
    if(str[i] !== str[len - 1 - i]) {
      ret = false;
    }
  }
  return ret;
};

/**
 * Determines the largest palindrome product produced by the numbers that have
 * n digits, where n is the first parameter passed.
 *
 * If the number of digits is 2 then the largest palindrome is 9009, 91 x 99.
 *
 * @param  {Number} digits the number of digits
 * @return {Number}        the largest palindrome
 */
exports.largestPalindromeProduct = function(digits) {
  var v = Math.pow(10, (digits-1));
  var min = Math.pow(v, 2);
  var max = Math.pow(Math.pow(10, digits) - 1, 2);

  var products = function(num) {
    var m = v * 10 - 1;
    for(var i = m; i >= v; i--) {
      if(num % i === 0 && num / i <= m) {
        return i;
      }
    }
    return -1;
  };

  for(var i = max; i >= min; i--) {
    if(isPalindrome(i)) {
      if(products(i) !== -1) {
        return i;
      }
    }
  }
};