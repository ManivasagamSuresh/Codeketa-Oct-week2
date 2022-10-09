// Given a number N, print yes if the number is a multiple of 7 else print no.


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
if(a%7==0)
{
    console.log("yes")
}
else{
    console.log("no")
}


  //end-here
});