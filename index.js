const inquirer = require("inquirer");
const fs = require("fs");
const generateReport = require("./lib/generateReport");

const addTeamManager = [
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

const question = [
  {
    type: "list",
    name: "type",
    message: "Add another team member?",
    choices: [
      { name: "Engineer", value: 0 },
      { name: "Intern", value: 1 },
      { name: "Manager", value: 2 },
      { name: "No - finish building my team", value: 3 },
    ],
  },
];

const addTeamMembers = [
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
    .prompt(addTeamManager)
    .then((team) => {
      const report1 = generateReport.generateReport(team);
      writeToFile(filename, report1);
      // Nest 2 - prompt to add more team members
      inquirer
        .prompt(question)
        .then((responses) => {
          if (responses.type === 0) {
            const positionOfStaff = "Engineer";
            console.log("GOT PAST ENGINEER", positionOfStaff);
          } else if (responses.type === 1) {
            const positionOfStaff = "Intern";
            console.log("GOT PAST INTERN", positionOfStaff);
          } else if (responses.type === 2) {
            const positionOfStaff = "Manager";
            console.log("GOT PAST MANAGER", positionOfStaff);
          } else if (responses.type === 3) {
            console.log("To exit");
            return;
          } else {
          //Nest 3 - prompt for additional team member information
          inquirer
            .prompt(addTeamMembers)
            .then((result2) => {
              console.log("RESULT: ", result2);
            })
            .catch((err) => console.log("NEGAITIVE RESULT #3 !!!"));
        }})
        .catch((err) => console.log("NEGAITIVE RESULT #2 !!!"));
    })
    .catch((err) => console.log("NEGAITIVE RESULT #1 !!!"));
}

// This init the function to invoke the app
const filename = "test.txt";
init();
