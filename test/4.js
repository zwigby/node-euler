var four = require('../solutions/4'),
    assert = require('assert');

var answer = four.largestPalindromeProduct(2);
var correct = 9009;

try {
  assert.equal(answer, correct);
  console.log("answer for 2 digits was correct : " + correct);
} catch(e) {
  console.log("answer for 2 digits was incorrect : you answered " + answer);
}

answer = four.largestPalindromeProduct(3);
correct = 906609;

try {
  assert.equal(answer, correct);
  console.log("answer for 3 digits was correct : " + correct);
} catch(e) {
  console.log("answer for 3 digits was incorrect : you answered " + answer);
}