var knownPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var knownPrimesLen = knownPrimes.length;

var checkPrime = function(num, prime) {
  if(num % prime === 0) {
    return num / prime;
  }
  return -1;
};

var isPrime = function(num) {
  var max = Math.ceil(Math.sqrt(num));

  for(var i = 999; i < max; i += 2) {
    if(num % i === 0) {
      return [i, num / i];
    }
  }
  return [i, -1];
};

var findPrimes = function(value) {
  var primes = [];
  var rem = -1;

  if(knownPrimes.indexOf(value) > -1) {
    return [value];
  }

  for(var i = 0, len = knownPrimesLen; i < len; i++) {
    if((rem = checkPrime(value, knownPrimes[i])) !== -1) {
      break;
    }
  }

  if(rem !== -1) {
    primes.push(knownPrimes[i]);
    primes = primes.concat(findPrimes(rem));
  } else {
    var ret = isPrime(value);
    if(ret[1] !== -1) {
      primes.push(ret[0]);
      primes = primes.concat(findPrimes(ret[1]));
    } else {
      primes.push(value);
    }
  }

  return primes;
};

/**
 * Calculates the largest prime factor of the value passed in.
 *
 * The prime factors of 13195 are 5, 7, 13 and 29. Therefore the number 29 would
 * be returned.
 *
 * @param  {Number} value the number to calculate the largest prime factor of
 * @return {Number}       the largest prime factor of the value passed in
 */
exports.largestPrimeFactor = function(value) {
  var primes = findPrimes(value);

  primes = primes.filter(function(e, i, arr) {
    return arr.lastIndexOf(e) === i;
  });

  primes.sort(function(a,b) {
    return a - b;
  });

  return primes[primes.length - 1];
};
