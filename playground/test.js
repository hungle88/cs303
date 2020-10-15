function Person(name){
    console.log(this);
    this.name = name;
    console.log("hello",this);

;}

function Doctor(name, dept){
    console.log(this);
    Person.call(this, name, dept);
    console.log(this)
}