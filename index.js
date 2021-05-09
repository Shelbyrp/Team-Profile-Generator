const inquirer = require("inquirer");
const fs = require("fs");
const generateReport = require("./lib/generateReport");

const questionTeamManager = [
  {
    type: "confirm",
    name: "leader",
    message: "Are you the team leader?",
  },
];

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
];

const questionMoreTeamMembers = [
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
  inquirer.prompt(questionTeamManager).then((response) => {
    if (!response.leader) {
        console.log("Please ask your team leader to complete this form");
        return;
      };
      // Nest 2 - Get team leader information
      inquirer
        .prompt(addTeamManager)
        .then((response) => {
          response.position = "Team Manager";
          const report1 = generateReport.generateReport(response);
          writeToFile(filename, report1);
          console.log(response.position);
          console.log("RESULT: ", response);
          // Nest 3 - prompt to add more team members
          inquirer
            .prompt(questionMoreTeamMembers)
            .then((response) => {
              if (response.type === 3) {
                console.log("To exit");
                return;
              } else {
                if (response.type === 0) {
                  var positionOfStaff = "Engineer";
                }
                if (response.type === 1) {
                  var positionOfStaff = "Intern";
                }
                if (response.type === 2) {
                  var positionOfStaff = "Manager";
                }
                //Nest 4 - prompt for additional team member information
                inquirer
                  .prompt(addTeamMembers)
                  .then((response) => {
                    response["position"] = positionOfStaff;
                    console.log("RESULT: ", response);
                  })
                  .catch((err) => console.log("NEGAITIVE RESULT #3 !!!"));
              }
            })
            .catch((err) => console.log("NEGAITIVE RESULT #2 !!!"));
        })
        .catch((err) => console.log("NEGAITIVE RESULT #1 !!!"));
    }
  )
}

// This init the function to invoke the app
const filename = "test.txt";
init();
