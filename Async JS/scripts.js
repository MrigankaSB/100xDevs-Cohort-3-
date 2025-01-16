function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

let ans = sum("2", 3);
console.log(ans);
console.log(sum(2, 3));

function sum2(n) {
  summation = 0;
  for (let i = 0; i <= n; i++) {
    summation += i;
  }
  return summation;
}

console.log(sum2(5));
