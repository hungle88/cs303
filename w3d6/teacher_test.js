/* global describe learn teach assert  */

describe("describe", function () {
  it("initial name and age of the student", function () {
    let student = new Student();
    student.initialize("Hung", 32);
    assert.equal(student.prototype.describe(), "Hung, 32");
  });
});

describe("learn", function () {
  it("the subject student is learning", function () {
    let student = new Student();
    student.initialize("Hung", 32);
    assert.equal(
      student.learn("Inheritance"),
      "John just learned Inheritance"
    );
  });
});

describe("teach", function () {
  it("the subject the teacher is teaching", function () {
    let teacher = new Teacher();
    teacher.initialize("Pete", 52);
    teacher.teach("Inheritance");
    assert.equal(
      teacher.teach("Inheritance"),
      "Pete is teaching Inheritance"
    );
  });
});
