let Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

let Student = function () {};
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
  let result = this.name + " just learned " + subject;
    console.log(result);
    return result;
};

let Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  let result = this.name + " is now teaching " + subject;
  console.log(result);
  return result;
};

let teacher = new Teacher();

teacher.initialize("Hung", 32);
teacher.teach("Inheritance");

let student = new Student();
student.initialize("John", 25);
student.learn("Inheritance");
