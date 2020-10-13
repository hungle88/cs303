describe("teach", function () {
  it("the subject the teacher is teaching", function () {
    assert.equal(
      "Hung is now teaching Inheritance",
      teacher.teach("Inheritance")
    );
  });
});
describe("learn", function () {
  it("the subject the student just learned", function () {
    assert.equal(
      "John just learned Inheritance",
      student.learn("Inheritance")
    );
  });
});

describe("describe", function () {
    it("initial name and age", function () {
      assert.equal(
        ("Hung, 32 years old."),
        teacher.describe()
      );
    });
  });