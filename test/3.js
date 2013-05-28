var three = require('../solutions/3'),
    assert = require('assert');

var answer = three.largestPrimeFactor(33);
var correct = 11;

try {
  assert.equal(answer, correct);
  console.log("answer for 33 was correct : " + correct);
} catch(e) {
  console.log("answer for 33 was incorrect : you answered " + answer);
}

answer = three.largestPrimeFactor(13195);
correct = 29;

try {
  assert.equal(answer, correct);
  console.log("answer for 13195 was correct : " + correct);
} catch(e) {
  console.log("answer for 13195 was incorrect : you answered " + answer);
}

answer = three.largestPrimeFactor(600851475143);
correct = 6857;

try {
  assert.equal(answer, correct);
  console.log("answer for 600,851,475,143 was correct : " + correct);
} catch(e) {
  console.log("answer for 600,851,475,143 was incorrect : you answered " + answer);
}