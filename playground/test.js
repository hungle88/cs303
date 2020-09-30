function valueMap(arr){

return arr.age;
    
    }
    
    
    
        function max(arr){

            let maxValue = Math.max(...arr);
            
            return maxValue;
            
            }
    
    abc = [{age:1}, {age:2}, {age:33} ];
    
    console.log(abc.map(valueMap).reduce(max, 0));
