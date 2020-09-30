"use strict";

// function sumTo(n){
//     let sum = 0;

//     for(let i = 0; i <= n; i++){
//         sum+= i;
//     }
// return sum;

// }



// function sumTo(n){
// return n===1 ? n : n + sumTo(n - 1);

// }

function sumTo(n){
    return n*(1 + n)/2;
}

console.log(sumTo(100));
