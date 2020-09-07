const prompt = require("prompt-sync")();
let x = parseInt(prompt("Please enter x: "));
let n = parseInt(prompt("Please enter n: "));
function pow(x,n) {

if(n < 1) {
    return "Please enter a positive integer";
} else{
return Math.pow(x, n);
}

}

console.log(pow(x, n));

