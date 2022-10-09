// Given 3 numbers a,b,c print a*b mod c.


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var a=userInput[0].split(' ').map((num)=>Number(num));
// console.log(a);
let b = a[0]*a[1];
let c = b%a[2];
console.log(c);

  //end-here
});