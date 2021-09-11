//this will be the index menu
//inquirer
const inquirer = require("inquirer");
//viewAllDepartments
const viewAllDepartments = require("../lib/viewAllDepartments")

const questions = [
    {
        type: "list",
        name: "indexChoice",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role"]
    }
];

function indexMenu () {
    inquirer.prompt(questions).then((data) => {
        switch (data.indexChoice) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                console.log("navigated to View All Roles")
                break;
            case "View All Employees":
                console.log("navigated to View All Employees")
                break;
            case "Add A Department":
                console.log("navigated to Add A Department")
                break;
            case "Add A Role":
                console.log("navigated to Add A Role")
                break;
            case "Add An Employee":
                console.log("navigated to Add An Employee")
                break;
            case "Update An Employee Role":
                console.log("navigated to Update An Employee Role")
                break;
        
            default:
                console.log("error")
                break;
        }
    })
}

module.exports = indexMenu
