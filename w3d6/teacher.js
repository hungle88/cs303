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

let teacher = new Teacher();
teacher.initialize("Hung", 32);
teacher.teach("Inheritance");
