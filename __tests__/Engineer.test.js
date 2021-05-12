const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const test = "Github";
  const engineer = new Engineer("Engineer", 1, "engineer@test.com", test);
  expect(engineer.github).toEqual(test);
});

test("getRole() should return \"Engineer\"", () => {
  const test = "Engineer";
  const engineer = new Engineer("Engineer", 1, "engineer@test.com", "Github");
  expect(engineer.getRole()).toEqual(test);
});

test("Get Github username via getGithub()", () => {
  const test = "GitHubUser";
  const engineer = new Engineer("Engineer", 1, "engineer@test.com", test);
  expect(engineer.getGithub()).toEqual(test);
});