const Intern = require("../lib/Intern");

describe("Intern", () => {

  it("Can get school from the command line", () => {
    const test = "UWA";
    const student = new Intern("Student1", 1, "student1@uwa.com", test);
    expect(student.school).toEqual(test);
  });

  it('getRole() to return "Student"', () => {
    const test = "Intern";
    const student = new Intern("Student1", 1, "student1@uwa.com", "UWA");
    expect(student.getRole()).toEqual(test);
  });

  it("Can get office number via getSchool()", () => {
    const test = "UWA";
    const student = new Intern("Student", 1, "student1@uwa.com", test);
    expect(student.getSchool()).toEqual(test);
  });

});