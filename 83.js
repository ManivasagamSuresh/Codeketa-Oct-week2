// You are provided with a number ’n’. Your task is to tell whether that number is saturated. A saturated number is a number which is made by exactly two digits.


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

 var a=userInput[0].split('').map((num)=>Number(num));
// console.log(a);
var b =[...new Set(a)];
// console.log(b);
if(b.length==2){console.log("Saturated")}
else{
    console.log("Unsaturated");
}

  //end-here
});