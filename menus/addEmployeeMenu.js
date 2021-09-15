//inquirer
const inquirer = require("inquirer");
//AddADepartment
const addAnEmployee = require("../lib/addAnEmployee");

const currentDepartments = [];
const currentDepartmentIds = {};
const roles = [];
const currentRoles = [];
const currentRoleIds = {};
const currentRoleDepartmentIds = {};

const questions = [
    {
      type: "input",
      name: "firstName",
      message: "What is the first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the last name?",
    },
    {
      type: "list",
      name: "department",
      message: "What Department?",
      choices: currentDepartments,
    },
  ];

  const whatRole = [
    {
      type: "list",
      name: "role",
      message: "What Role?",
      choices: roles
    }
  ]

  function addEmployeeMenu() {
    //db connection
    const db = require("../config/connection");
    const sql = "SELECT * FROM departments";
    const sql2 = "SELECT * FROM roles";
    //Gathering the departement names to use in the prompt as options
    db.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      for (const key in results) {
        const element = results[key];
          currentDepartments.push(element.department_name)
          currentDepartmentIds[element.department_name] = element.id
      }
    });
    //Gathering the roles to use in the prompt as options
    db.query(sql2, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      for (const key in results) {
        const element = results[key];
          currentRoles.push(element.role_name)
          currentRoleIds[element.role_name] = element.id
          currentRoleDepartmentIds[element.role_name] = element.role_department_id
      }
    });
    
    inquirer.prompt(questions).then((data) => {
      const employee = {};
      employee.departmentId = currentDepartmentIds[data.department];
      employee.firstName = data.firstName;
      employee.lastName = data.lastName;
      employee.role = 0;
      console.log(employee.departmentId)
      for (const key in currentRoleDepartmentIds) {
          const element = currentRoleDepartmentIds[key];
          if (element == employee.departmentId) {
            roles.push(key)
          }
      }

      inquirer.prompt(whatRole).then((roleData) => {
        employee.role = currentRoleDepartmentIds[roleData.role]
        addAnEmployee(employee.firstName, employee.lastName, employee.role, employee.departmentId);
      });
    });
  }
  
  module.exports = addEmployeeMenu;