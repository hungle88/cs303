describe("the subject the teacher is teaching", function () {
  it("Hung is now teaching Inheritance", function () {
    assert.equal(
      "Hung is now teaching Inheritance",
      teacher.teach("Inheritance")
    );
  });
});
describe("the subject the student just learned", function () {
  it("John just learned Inheritance", function () {
    assert.equal(
      "John just learned Inheritance",
      student.learn("Inheritance")
    );
  });
});

describe("initial name and age", function () {
    it("Hung, 32 years old.", function () {
      assert.equal(
        "Hung, 32 years old.",
        teacher.describe()
      );
    });
  });