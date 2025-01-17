// Example 1: Normal Fucntion
function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

let ans = sum("2", 3);
console.log(ans);
console.log(sum(2, 3));

// Example 2: Function with Interation
function sum2(n) {
  summation = 0;
  for (let i = 0; i <= n; i++) {
    summation += i;
  }
  return summation;
}

console.log(sum2(5));

// Example 3: I/O Heavy Operations (Synchronous)
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

// Example 4: Functional Arguments
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b);
}

console.log(doOperation(1, 2, sum));
console.log(doOperation(1, 2, multiply));
console.log(doOperation(1, 2, subtract));
console.log(doOperation(1, 2, divide));
