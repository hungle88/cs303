let arr1 =[1, 2, 3, 4, 5];

function even(arr){

    let newArr=[];
    let j = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {

            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

let output = even(arr1);
console.log(output);