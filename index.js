const inquirer = require("inquirer");
const fs = require("fs");
const report = require("./lib/Report");

const teamManager = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "Provide your employee number",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "office",
    message: "What is your office number?",
  },
  {
    type: "confirm",
    name: "position",
    message: "Are you the team leader? (Y/N)",
  },
];

const teamInfo = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "Provide your employee number",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "office",
    message: "What is your office number?",
  },
  {
    type: "checkbox",
    name: "position",
    message: "What is your postion",
    choices: ["Team leader", "Engineer", "Intern", "Manager"],
  },
];

function writeToFile(filename, markdown) {
  fs.writeFile(filename, markdown, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function getTeamMembers() {
  inquirer.prompt(teamInfo).then((project) => {
    const markdown = generateMarkdown.generateMarkdown(project);
    writeToFile(filename, markdown);
  });
}

function init() {
  inquirer.prompt(teamManager).then((project) => {
    const markdown = generateMarkdown.generateMarkdown(project);
    writeToFile(filename, markdown);
  });

//   readline.question("Do you want to input more team members?", (response) => {
//     getTeamMembers();
//     readline.close();
//   });
}

const filename = "README.md";
init();
