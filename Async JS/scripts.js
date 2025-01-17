// Example 1
function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

let ans = sum("2", 3);
console.log(ans);
console.log(sum(2, 3));

// Example 2
function sum2(n) {
  summation = 0;
  for (let i = 0; i <= n; i++) {
    summation += i;
  }
  return summation;
}

console.log(sum2(5));

// Example 3
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);
