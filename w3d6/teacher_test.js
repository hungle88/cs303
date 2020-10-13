describe("teach", function () {
  it("the subject the teacher is teaching", function () {
    assert.equal(
      "Hung is now teaching Inheritance",
      teacher.teach("Inheritance")
    );
  });
});
describe("learn", function () {
  it("the subject the student is learning", function () {
    assert.equal(
      "John just learned Inheritance",
      student.learn("Inheritance")
    );
  });
});
