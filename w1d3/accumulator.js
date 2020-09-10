const prompt = require("prompt-sync")();

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function () {

        this.value += +prompt("Please enter a number: ");


    }



}


let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);