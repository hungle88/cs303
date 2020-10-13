
"use strict";


// Exercise 3:
// The last exercise for today comes from: https://www.learn-js.org/en/Inheritance
// Create an object called Teacher derived from the Person class, and implement a method called teach
// which receives a string called subject, and returns:
// [teacher's name] is now teaching [subject]

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    var result = this.name + " is now teaching " + subject;
    console.log(result);
    return result;
}

var teacher = new Teacher();

teacher.initialize("Adam", 45);
teacher.teach("Inheritance");