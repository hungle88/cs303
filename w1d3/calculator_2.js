const prompt = require("prompt-sync")();

function Calculator() {
    this.read = function () {

        this.num_1 = +prompt("Please enter first number: ");
        this.num_2 = +prompt("Please enter second number: ");

    }

    this.sum = function () {

        return this.num_1 + this.num_2;
    }

    this.multiply = function () {

        return this.num_1 * this.num_2;
    }


}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.multiply() );

