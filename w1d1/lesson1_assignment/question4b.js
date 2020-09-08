function reverseArrayInPlace(arr){
    let half_length = Math.floor((arr.length-1)/2);
    let temp = 0;
    
    for (let i = 0; i <= half_length; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 -i] = temp;
    
    
    }
    
    
    
    return arr;
    
    
    
    }
    
    
    let arr =[1, 2, 3, 4, 5];
    let output = reverseArrayInPlace(arr);
    alert(output)