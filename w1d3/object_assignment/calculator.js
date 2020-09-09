const prompt = require("prompt-sync")();

let calculator = {
read: function(){

this.num_1 = +prompt("Please enter first number: ");
this.num_2 = +prompt("Please enter second number: ");

},

sum: function(){

    return this.num_1 + this.num_2;
},

multiply: function(){

    return this.num_1 * this.num_2;
},


}

calculator.read();
console.log(calculator.sum());
console.log(calculator.multiply());