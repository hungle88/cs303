function sayHi() { alert("Hi");}
console.log(sayHi);
console.log(sayHi());
func1 = sayHi;
func2 = sayHi();
console.log(func1);
console.log(func1());
console.log(func2);
myArray = [func1, func1()];
console.log(myArray[0]);
console.log(myArray[0]());
console.log(myArray[1]);
console.log(myArray[1]());
console.log(func2());