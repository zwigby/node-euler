var five = require('../solutions/5'),
    assert = require('assert');

var answer = five.smallestMultiple(10);
var correct = 2520;

try {
  assert.equal(answer, correct);
  console.log("answer for 10 was correct : " + correct);
} catch(e) {
  console.log("answer for 10 was incorrect : you answered " + answer);
}

answer = five.smallestMultiple(20);
correct = 906609;

try {
  assert.equal(answer, correct);
  console.log("answer for 20 was correct : " + correct);
} catch(e) {
  console.log("answer for 20 was incorrect : you answered " + answer);
}