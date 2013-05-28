var one = require('../solutions/1'),
    assert = require('assert');

var answer = one.threeFiveMultipleSum(10);
var correct = 23;

try {
  assert.equal(answer, correct);
  console.log("answer for 10 was correct : " + correct);
} catch(e) {
  console.log("answer for 10 was incorrect : you answered " + answer);
}

answer = one.threeFiveMultipleSum(100);
correct = 2318;

try {
  assert.equal(answer, correct);
  console.log("answer for 100 was correct : " + correct);
} catch(e) {
  console.log("answer for 100 was incorrect : you answered " + answer);
}

answer = one.threeFiveMultipleSum(1000);
correct = 233168;

try {
  assert.equal(answer, correct);
  console.log("answer for 1000 was correct : " + correct);
} catch(e) {
  console.log("answer for 1000 was incorrect : you answered " + answer);
}