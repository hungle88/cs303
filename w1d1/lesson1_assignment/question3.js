function findLongestWord(arr) {
let word_length_arr = arr.map(n =>n.length);
return Math.max(...word_length_arr);

}


let arr = ["hello", "hi", "bye"];
let output = findLongestWord(arr);
alert(output);