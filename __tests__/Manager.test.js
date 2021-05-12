const Manager = require("../lib/Manager");

describe("Manager", () => {

  it("Can set office number via the parameter passed", () => {
    const test = 9400000;
    const manager = new Manager("Shelby", 1, "info@test.com", test);
    expect(manager.office).toEqual(test);
  });

  it('getRole() to return "Manager"', () => {
    const test = "Manager";
    const manager = new Manager("Shelby", 1, "info@test.com", 9400000);
    expect(manager.getRole()).toEqual(test);
  });

  it("Can get office number via getOffice()", () => {
    const test = 9400000;
    const manager = new Manager("Foo", 1, "test@test.com", test);
    expect(manager.getOffice()).toEqual(test);
  });

});
