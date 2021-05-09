const inquirer = require("inquirer");
const fs = require("fs");
const generateReport = require("./lib/generateReport");
const { exit } = require("process");

let team = [];

async function confirmManager() {
    return response1 = await inquirer.prompt([
        {
            type: "confirm",
            name: "manager",
            message: "Are you the team manager?",
        },
    ]);
};

async function menu() {
    return response2 = await inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Add a team member?",
            choices: ["Manager", "Engineer", "Intern", "Exit"],
        },
    ])
};

async function addManager() {
    return response3 = await inquirer.prompt([
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
};

async function addEngineer() {
    return response4 = await inquirer.prompt([
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
            name: "GitHub",
            message: "What is your GitHub username?",
        },
    ])
};

async function addIntern() {
    return response5 = await inquirer.prompt([
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
            name: "school",
            message: "What is your school?",
        },
    ])
};

function writeToFile(filename, team) {
    fs.writeFile(filename, team, (err) =>
        err ? console.log(err) : console.log("")
    );
};

function init() {
    confirmManager()
        .then((response1) => {
            if (!response1.manager) {
                console.log("Please ask your manager to complete this form");
                exit;
            } else {
                menu()
                    .then((response2) => {
                        if (response2.type === 'Manager') {
                            addManager()
                                .then((response3) => {
                                    console.log("Response 3:", response3);
                                    team.push(response3);
                                    console.log("Team3:", team);
                                }
                                )
                                .catch(e => { console.log(e.message) })
                        } else if (response2.type === "Engineer") {
                            addEngineer()
                                .then((response4) => {
                                    console.log("Response 4:", response4);
                                    team.push(response4);
                                    console.log("Team4:", team);
                                }
                                )
                                .catch(e => { console.log(e.message) })
                        } else if (response2.type === "Intern") {
                            addIntern()
                                .then((response5) => {
                                    console.log("Response 5:", response5);
                                    team.push(response5);
                                    console.log("Team5:", team);
                                }
                                )
                                .catch(e => { console.log(e.message) })
                        } else if (response2.type === "Exit") {
                            exit;
                        } else {
                            console.log("Got here");
                            writeToFile(filename, team);
                        }
                    })
                    .catch(e => { console.log(e.message) });
            };
        })
        .catch(e => { console.log(e.message) });
};
// This init the function to invoke the app
const filename = "test.txt";
init();

