
const inquirer = require("inquirer");
const fs = require("fs");
const generateReport = require("./lib/generateReport");
const { exit } = require("process");
const { type } = require("os");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

async function userInput(count1, count2) { //1}
    // console.log("Got here", count1);
    // if (count1 === 0) { //2}
        // Confirm Manager
        inquirer.prompt([
            {
                type: "list",
                name: "manager",
                message: "Are you the Manager?",
                choices: ["Yes", "No"],
            }
        ])
            .then((response) => { //3),4}
                switch (response.manager) { //5}
                    case "No":
                        console.info("Please ask your manager to complete this form");
                        break;
                    case "Yes":
                        count1 = 1
                        // if (count2 === 0) { //6}
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
                                .then((response) => {
                                    response.type = "Manager";
                                    team.push(response);
                                    console.log("Response Manager:", response, "Team3:", team);
                                    count2 = 1
                                })
                                // Ask to add memeber
                                .then(() => { // 7),8}
                                    inquirer.prompt([
                                        {
                                            type: "list",
                                            name: "addMember",
                                            message: "Would You Like To Add Another Employee?",
                                            choices: ["Yes", "No"],
                                        },
                                    ])
                                        .then((response) => {  // 9),10}
                                            // If "NO" then exit
                                            switch (response.addMember) { //11}
                                                case "No":
                                                    console.log("The team list will be generated");
                                                    break;
                                                case "Yes":
                                                    inquirer.prompt([
                                                        {
                                                            type: "list",
                                                            name: "type",
                                                            message: "Add a team member?",
                                                            choices: ["Engineer", "Intern", "Other"],
                                                        },
                                                    ])
                                                        // Get Engineer details
                                                        .then((response) => { // 12) & 13}
                                                            console.log(response);
                                                            switch (response.type) { // 14}
                                                                case "Engineer":
                                                                    inquirer.prompt([
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
                                                                        .then(() => {
                                                                            response.type = "Engineer";
                                                                            team.push(response);
                                                                            console.log("Response Engineer:", response, "Team4:", team);
                                                                            addNext(count1, count2);
                                                                        });
                                                                    break;
                                                                // Get Intern details
                                                                case "Intern":
                                                                    inquirer.prompt([
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
                                                                        .then(() => {
                                                                            response.type = "Intern";
                                                                            team.push(response);
                                                                            console.log("Response Intern:", response, "Team5:", team);
                                                                            addNext(count1, count2);
                                                                        });
                                                                    break;
                                                            } //14
                                                        }) //12,13
                                            } //11

                                        }) //9,10
                                }) //7,8
                        // } //6
                } //5
            }) //3,4
    // } //2
}; //1

// .catch((e) => { console.log(e.message); })

function addNext(count1, count2) {
    console.log("COUNTS:", count1, count2);
    userInput(count1, count2);
};

function writeToFile(filename, team) {
    fs.writeFile(filename, team, (err) =>
        err ? console.log(err) : console.log("")
    );
};

function init(count1, count2) {
    userInput(count1, count2);
};

// Call the init function to invoke the application
let count1 = 0; // Counter for confirm manager question
let count2 = 0; // Counter for inputing manager details
let team = [];
const filename = "test.txt";
init(count1, count2);










// ==========================================================================================================================================================
// DO NOT DELETE
//
// const inquirer = require("inquirer");
// const fs = require("fs");
// const generateReport = require("./lib/generateReport");
// const { exit } = require("process");
// const { type } = require("os");

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const employees = [];

// async function confirmManager() {
//     return response1 = await inquirer.prompt([
//         {
//             type: "confirm",
//             name: "manager",
//             message: "Are you the team manager?",
//         },
//     ]);
// };

// async function addManager() {
//     return response2 = await inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your name?",
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Provide your employee number",
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your email?",
//         },
//         {
//             type: "input",
//             name: "office",
//             message: "What is your office number?",
//         },
//     ])
// };

// async function menu() {
//     return response2 = await inquirer.prompt([
//         {
//             type: "list",
//             name: "type",
//             message: "Add a team member?",
//             choices: ["Manager", "Engineer", "Intern", "Exit"],
//         },
//     ])
// };

// async function moreMembers() {
//     return response2 = await inquirer.prompt([
//         {
//             type: "list",
//             name: "type",
//             message: "Add a team member?",
//         },
//     ])
// };

// async function addEngineer() {
//     return response4 = await inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your name?",
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Provide your employee number",
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your email?",
//         },
//         {
//             type: "input",
//             name: "GitHub",
//             message: "What is your GitHub username?",
//         },
//     ])
// };

// async function addIntern() {
//     return response5 = await inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your name?",
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Provide your employee number",
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your email?",
//         },
//         {
//             type: "input",
//             name: "school",
//             message: "What is your school?",
//         },
//     ])
// };

// function addNext() {
//     inquirer
//     .prompt([
//       {
//       type: "list",
//       name: "add",
//       message: "Would You Like To Add Another Employee?",
//       choices: ["Yes", "No"]
//       }
//     ])
//     .then(function(res) {
//       if (res.add === "Yes") {
//         menu();
//       } else {
//         console.log("Done");
//         // completedRoster(employees);
//       }
//     });
// };

// function writeToFile(filename, team) {
//     fs.writeFile(filename, team, (err) =>
//         err ? console.log(err) : console.log("")
//     );
// };

// function init() {
//     var counter = 0
//     confirmManager()
//         .then((response1) => {
//             if (!response1.manager) {
//                 console.log("Please ask your manager to complete this form");
//                 exit;
//             } else {
//                 menu()
//                     .then((response2) => {
//                         if (response2.type === 'Manager') {
//                             addManager()
//                             .then(function () {
//                                 addNext()
//                             })
//                                 .then((response3) => {
//                                     response3.type = "Manager";
//                                     console.log("Response 3:", response3);
//                                     team.push(response3);
//                                     console.log("Team3:", team);
//                                 })
//                                 .catch(e => { console.log(e.message) })
//                         } else if (response2.type === "Engineer") {
//                             addEngineer()
//                                 .then((response4) => {
//                                     response4.type = "Engineer";
//                                     console.log("Response 4:", response4);
//                                     team.push(response4);
//                                     console.log("Team4:", team);
//                                 })
//                                 .then(function () {
//                                     addNext()
//                                 })
//                                 .catch(e => { console.log(e.message) })
//                         } else if (response2.type === "Intern") {
//                             addIntern()
//                                 .then((response5) => {
//                                     response5.type = "Intern";
//                                     console.log("Response 5:", response5);
//                                     team.push(response5);
//                                     console.log("Team5:", team);
//                                 })
//                                 .then(function () {
//                                     addNext()
//                                 })
//                                 .catch(e => { console.log(e.message) })
//                         } else if (response2.type === "Exit") {
//                             exit;
//                         } else {
//                             console.log("Got here");
//                         }

//                     })
//                 counter++;
//             }
//         })
// };
// // This init the function to invoke the app
// let team = [];
// const filename = "test.txt";
// init();
