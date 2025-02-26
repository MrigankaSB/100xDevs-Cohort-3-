// 1
const fs = require("fs");

console.log("_____Top of the file_____");

function readTheFile1(resolve1) {
  console.log("readTheFiled called");
  setTimeout(function () {
    console.log("Callback based setTimeout completed");
    resolve1();
  }, 3000);
}

function setTimeoutPromisified1(fileName) {
  console.log("setTimeoutPromisified called");
  return new Promise(readTheFile1);
}

const p1 = setTimeoutPromisified1();

function callback1() {
  console.log("Timer is done");
}

p1.then(callback1);

console.log("_____End of the file_____");

// 2
class Promise2 {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolve2();
    });
  }
  then(callback2) {
    this.resolve2 = callback2;
  }
}

function readTheFile2(resolve2) {
  setTimeout(() => {
    console.log("Callback based setTimeout completed");
    resolve2();
  }, 5000);
}

function setTimeoutPromisified2() {
  return new Promise2(readTheFile2);
}

let p2 = setTimeoutPromisified2();

function callback2() {
  console.log("Callback has been called");
}

p2.then(callback2);
