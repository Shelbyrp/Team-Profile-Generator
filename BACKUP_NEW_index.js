const inquirer = require("inquirer");
const fs = require("fs");
const generateReport = require("./lib/generateReport");
const { exit } = require("process");
const { type } = require("os");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

async function userInput(status) { //1}
    // console.log("Current status =", status);
    switch (status) { //2}
        case "confirm":
            // Confirm Manager
            inquirer.prompt([
                {
                    type: "list",
                    name: "manager",
                    message: "Are you the Manager?",
                    choices: ["Yes", "No"],
                },
            ])
                .then((response) => { //3),4}
                    switch (response.manager) { //5}
                        case "No":
                            console.info("Please ask your manager to complete this form");
                            break;
                        case "Yes":
                            // Get Manager details
                            inquirer.prompt([
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
                            ])
                                // Add Manager details to Team
                                .then((response1) => {
                                    response1.position = "Manager";
                                    team.push(response1);
                                    console.log("Response Manager:", response1, "Team:", team);
                                    status = "confirmed";
                                    addNext(status);
                                })
                                .catch((e) => { console.log(e.message); })
                            break;
                    } // 5}
                }) //3), 4}
                .catch((e) => { console.log(e.message); })
            break;
        // ------------------------------------------------------------------------------------------------------------------
        // Ask to add member
        case "confirmed":
            inquirer.prompt([
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
                    switch (response.addMember) { //8}
                        case "No":
                            console.log("The team list will be generated");
                            break;
                        case "Yes":
                            inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "type",
                                        message: "Add a team member?",
                                        choices: ["Engineer", "Intern", "Other"],
                                    },
                                ])
                                // Get Engineer details
                                .then((response) => {
                                    // 9) & 10}
                                    console.log(response);
                                    switch (response.type) { // 11}
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
                                                        name: "GitHub",
                                                        message: "What is their GitHub username?",
                                                    },
                                                ])
                                                // Add Engineer details to Team
                                                .then((response2) => {
                                                    response2.position = "Engineer";
                                                    team.push(response2);
                                                    console.log("Response Engineer:", response2, "Team:", team);
                                                    addNext(status);
                                                })
                                                .catch((e) => { console.log(e.message); })
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
                                                    response3.position = "Intern";
                                                    team.push(response3);
                                                    console.log("Response Intern:", response3, "Team:", team);
                                                    addNext(status);
                                                })
                                                .catch((e) => { console.log(e.message); })
                                            break;
                                        // Get Intern details
                                        case "Other":
                                            inquirer.prompt([
                                                {
                                                    type: "input",
                                                    name: "name",
                                                    message: "What is the other person's name?",
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
                                                    name: "hobby",
                                                    message: "What is their hobby?",
                                                },
                                                {
                                                    type: "input",
                                                    name: "position",
                                                    message: "Provide their position",
                                                },
                                            ])
                                                .then((response4) => {
                                                    team.push(response4);
                                                    console.log("Response Other:", response4, "Team:", team);
                                                    addNext(status);
                                                })
                                                .catch((e) => { console.log(e.message); })
                                            break;
                                    } //11
                                }) //9,10
                                .catch((e) => { console.log(e.message); })
                            break;
                    } //8
                }) //6,7
                .catch((e) => { console.log(e.message); })
    } //2
}; //1

function addNext(status) {
    userInput(status);
};

function writeToFile(filename, team) {
    fs.writeFile(filename, team, (err) =>
        err ? console.log(err) : console.log("")
    );
};

function init(status) {
    userInput(status);
};

// Call the init function to invoke the application
let status = "confirm"; // "confirm" = confirm manager's details / "confirmed" = jump over the manager details
let team = [];
const filename = "test.txt";
init(status);
