const inquirer = require("inquirer");
const fs = require("fs");
const generateReport = require("./lib/generateReport");

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
    message: "Are you the team leader?",
  },
];

const addTeamMembers = [
  {
    type: "list",
    name: "add",
    message: "Add another team members?",
    choices: ["Engineer", "Intern", "Manager", "No - finish building my team"],
  },
];

const teamMembers = [
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
];

function writeToFile(filename, report1) {
  fs.writeFile(filename, report1, (err) =>
    err ? console.log(err) : console.log("")
  );
}

function init() {
  // Nest 1 - Get team leader information
  inquirer
    .prompt(teamManager)
    .then((team) => {
      const report1 = generateReport.generateReport(team);
      writeToFile(filename, report1);

      // Nest 2 - prompt to add more team members
      inquirer
        .prompt(addTeamMembers)
        .then((result1) => {
          console.log("RESULT 1: ", result1);
          if (
            result[0] === "Engineer" ||
            result[0] === "Intern" ||
            result[0] === "Manager"
          ) {
            //Nest 3 - prompt for additional team member information
            inquirer
              .prompt(addTeamMembers)
              .then((result2) => {
                console.log("RESULT 2: ", result2);
              })
              .catch((err) => console.log("NEGAITIVE RESULT #2 !!!"));
          } else {
            return;
          }
        })
        .catch((err) => console.log("NEGAITIVE RESULT #2 !!!"));
    })
    .catch((err) => console.log("NEGAITIVE RESULT !!!"));
}

const filename = "README.md";
init();
