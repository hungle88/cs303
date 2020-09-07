const prompt = require("prompt-sync")();
const confirm = require("prompt-sync")();

function checkAge(age){
    age = prompt("How old are you?: ");
   return (age > 18) || confirm('Did your parents allow you?');
}

console.log(checkAge());