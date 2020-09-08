function reverseArray(arr) {
let new_arr = [];
let j = 0;
for(let i = arr.length -1; i >=0 ; i--) {

    new_arr[j] = arr[i];
    j++;
}
return new_arr;

}


let arr = [0, 1, 2, 3, 4, 5]

let output = reverseArray(arr);

alert(output);
