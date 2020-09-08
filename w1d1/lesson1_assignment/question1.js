function maxOfThree(num_1, num_2, num_3) {

let arr=[];
arr.push(+num_1);
arr.push(+num_2);
arr.push(+num_3);
// console.log(arr);
return Math.max(...arr);

}

let num_1 = 2;
let num_2 = 5;
let num_3 = -1;

let output = maxOfThree(num_1, num_2, num_3);
console.log(output);
