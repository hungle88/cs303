function multiply(arr) {
    let output = 1;
        for(num of arr) {
    
    output *= num;
    
    }
    
    return output;
    
    
    }
    
    alert(multiply([1, 2, 3, 4]));