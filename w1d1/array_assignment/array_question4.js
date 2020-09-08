function sumInput() {
    let arr = [];
    while (true) {


        let num = prompt("Please enter a number: ");
        if (num === "" || !isFinite(num) || num === null) {
            break;
        } else {

            arr.push(+num);
        }
    }


let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
    }


alert(sumInput());