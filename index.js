const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const prettier = require("prettier");
const { exit } = require("process");
const { type } = require("os");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/page-template");

async function userInput(status) {
  //1}
  switch (
    status //2}
  ) {
    case "confirm":
      // Confirm Manager
      inquirer
        .prompt([
          {
            type: "list",
            name: "manager",
            message: "Are you the Manager?",
            choices: ["Yes", "No"],
          },
        ])
        .then((response) => {
          //3),4}
          switch (
            response.manager //5}
          ) {
            case "No":
              console.info("Please ask your manager to complete this form");
              break;
            case "Yes":
              // Get Manager details
              inquirer
                .prompt([
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
                    name: "officeNumber",
                    message: "What is your officeNumber number?",
                  },
                ])
                // Add Manager details to Team
                .then((response1) => {
                  const employee = new Employee(
                    response1.name,
                    response1.id,
                    response1.email,
                    "Manager"
                  );
                  const manager = new Manager(
                    response1.name,
                    response1.id,
                    response1.email,
                    response1.officeNumber,
                    "Manager"
                  );
                  console.log("Manager = ", manager);

                  response1.role = "Manager";
                  teamInfo.push(manager);
                  managers.push(manager);
                  console.log(
                    "Response Manager:",
                    response1,
                    "Manager Information:",
                    managers
                  );
                  status = "confirmed";
                  addNext(status);
                })
                .catch((e) => {
                  console.log(e.message);
                });
              break;
          } // 5}
        }) //3), 4}
        .catch((e) => {
          console.log(e.message);
        });
      break;
    // ------------------------------------------------------------------------------------------------------------------
    // Ask to add member
    case "confirmed":
      inquirer
        .prompt([
          {
            type: "list",
            name: "addMember",
            message: "Would You Like To Add Another Employee?",
            choices: ["Yes", "No"],
          },
        ])
        .then((response) => {
          // 6),7}
          // If "NO" then exit
          switch (
            response.addMember //8}
          ) {
            case "No":
              console.log("The team information will be generated");
              writeToFile(teamInfo);
              break;
            case "Yes":
              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "type",
                    message: "Add a team member?",
                    choices: ["Engineer", "Intern"],
                  },
                ])
                // Get Engineer details
                .then((response) => {
                  // 9) & 10}
                  console.log(response);
                  switch (
                    response.type // 11}
                  ) {
                    case "Engineer":
                      inquirer
                        .prompt([
                          {
                            type: "input",
                            name: "name",
                            message: "What is the ENGINEER's name?",
                          },
                          {
                            type: "input",
                            name: "id",
                            message: "Provide their employee number",
                          },
                          {
                            type: "input",
                            name: "email",
                            message: "What is their email?",
                          },
                          {
                            type: "input",
                            name: "github",
                            message: "What is their GitHub username?",
                          },
                        ])
                        // Add Engineer details to Team
                        .then((response2) => {
                            const engineer = new Engineer(
                            response2.name,
                            response2.id,
                            response2.email,
                            response2.github,
                            "Engineer"
                          );

                          response2.role = "Engineer";
                          teamInfo.push(engineer);
                          engineers.push(engineer);
                          console.log(
                            "Response Engineer:",
                            response2,
                            "Engineer Information:",
                            engineers
                          );
                          status = "confirmed";
                          addNext(status);
                        })
                        .catch((e) => {
                          console.log(e.message);
                        });
                      break;
                    // Get Intern details
                    case "Intern":
                      inquirer
                        .prompt([
                          {
                            type: "input",
                            name: "name",
                            message: "What is the INTERN's name?",
                          },
                          {
                            type: "input",
                            name: "id",
                            message: "Provide their employee number",
                          },
                          {
                            type: "input",
                            name: "email",
                            message: "What is their email?",
                          },
                          {
                            type: "input",
                            name: "school",
                            message: "What is their school?",
                          },
                        ])
                        .then((response3) => {
                          const intern = new Intern(
                            response3.name,
                            response3.id,
                            response3.email,
                            response3.school,
                            "Intern"
                          );

                          response3.role = "Intern";
                          teamInfo.push(intern);
                          interns.push(intern);
                          console.log(
                            "Response Intern:",
                            response3,
                            "Intern Information:",
                            interns
                          );
                          addNext(status);
                        })
                        .catch((e) => {
                          console.log(e.message);
                        });
                      break;
                  } //11
                }) //9,10
                .catch((e) => {
                  console.log(e.message);
                });
              break;
          } //8
        }) //6,7
        .catch((e) => {
          console.log(e.message);
        });
  } //2
} //1

function addNext(status) {
  userInput(status);
}

function writeToFile(teamInfo) {
  let filename = "test.txt";
  let teamData = JSON.stringify(teamInfo); // <<<<< THIS MAY NOT WORK BUT YOU MAY NOT NEED THIS ANYWAY
  const html = generateHTML(teamInfo);
  console.log(html);
  writeFileAsync("./dist/team.html", html, "utf-8");
  console.log(
    "Object:",
    typeof teamInfo,
    teamInfo,
    "STRING:",
    typeof teamData,
    teamData
  );
  fs.writeFile(filename, teamData, (err) =>
    err ? console.log(err) : console.log("")
  );
}

function init(status) {
  userInput(status);
}

// Call the init function to invoke the application
let status = "confirm"; // "confirm" = confirm manager's details / "confirmed" = jump over the manager details
let teamInfo = [];
let managers = [];
let engineers = [];
let interns = [];

const filename = "test.txt";
init(status);
