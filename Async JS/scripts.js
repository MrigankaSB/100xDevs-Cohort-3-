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

// Example 5.a: I/O With Asynchronous Nature:
// const fs = require("fs");   [Already been declared]
function read(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8", read);
fs.readFile("b.txt", "utf-8", read);

console.log("Hello!");

// Example 5.b: I/O With Asynchronous Nature:
// const fs = require("fs");   [Already been declared]
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// Example 6: SetTimeout:
function run() {
  console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");

// Example 7: WebASPIs, Callback, Event Loop:
function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 1000);

console.log("Welcome to the loop!");

let c = 0;
for (let i = 0; i < 10000000000; i++) {
  c = c + 1;
}

console.log("Expensive Operation done!");
