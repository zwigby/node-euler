var two = require('../solutions/2'),
    assert = require('assert');

var answer = two.evenFibonacciSum(10);
var correct = 10;

try {
  assert.equal(answer, correct);
  console.log("answer for 10 was correct : " + correct);
} catch(e) {
  console.log("answer for 10 was incorrect : you answered " + answer);
}

answer = two.evenFibonacciSum(100);
correct = 44;

try {
  assert.equal(answer, correct);
  console.log("answer for 100 was correct : " + correct);
} catch(e) {
  console.log("answer for 100 was incorrect : you answered " + answer);
}

answer = two.evenFibonacciSum(4000000);
correct = 4613732;

try {
  assert.equal(answer, correct);
  console.log("answer for 4,000,000 was correct : " + correct);
} catch(e) {
  console.log("answer for 4,000,000 was incorrect : you answered " + answer);
}