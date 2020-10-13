let Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
};
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
};
let Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
};


let Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject)
{
 console.log(this.name + " is teaching " + subject);
};

let me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
console.log(me.describe);
let someone = new Teacher();
someone.initialize("Hung", 32);
someone.teach("Inheritance");
// console.log(Student.prototype.describe);