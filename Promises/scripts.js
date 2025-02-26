class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4, "red"); //instance of the Rectangle Class or the object of the Rectangle Class
const area = rect.area();
console.log(area);
rect.paint();

// **********Some more classes**********
const now = new Date(); //Time related stuff - Current date, time, ISOString
console.log(now.toISOString());
console.log(now);
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());

const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("name"));

// **********Set Timeout Wrapped inside Function**********
function promiseCallback(resolve) {
  setTimeout(resolve, 3000);
}
function maun() {
  console.log("main is called.");
}
promiseCallback(main);

// **********Partial Promisified Approach**********
function waitFor3S(resolve) {
  setTimeout(resolve, 3000);
}
function setTimeoutPromisified() {
  return new Promise(waitFor3S);
}
function main() {
  console.log("main is called.");
}
setTimeoutPromisified().then(main);

// **********Promisified Version of Set Timeout**********
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);

// **********Promisified Version of fs.readFile**********
const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {
  // [Wrapping of fs.readFile for making it Promisified]
  fs.readFile("a.txt", "utf-8", function (err, data) {
    sendTheFinalValueHere(data);
  });
}

function readFile(fileName) {
  return new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
  console.log(contents);
}
p.then(callback);
