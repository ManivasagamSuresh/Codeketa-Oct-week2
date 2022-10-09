// You are given string ‘s’. Your task is to modify the string as mentioned below:-
// 1)The string should not have three consecutive same characters.
// 2)You can add any number of characters anywhere in the string. Find the minimum number of characters which Ishaan must insert in the string.

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

  
  let a = userInput[0].split('');
//   console.log(a);
  var b = 0;
  
  for (var i = 0 ; i<a.length;i++)
  {
      var count=0;
     for(var j=0;j<3;j++)
     {
         
         if(a[i]==a[i+j])
         {
         count++;
         }
         if(count==3){b=b+1}
     }
  }
  console.log(b);

  //end-here
});