// Calling in all required packages.
const mysql = require('mysql');
const inquirer = require('inquirer');

// Settings for database connection.
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root'
  password : '0017',
  database : 'employee_db'
});

// Establish connection, or else throw error.
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Utilize Inquirer to prompt user for selection.
const start = () => {
    inquirer.prompt({
        name: 'firstAction',
        type: 'list',
        message: 'Welcome to the Employee Management System. What would you like to do?',
        choices: ['View All Employees', 'View Employees by Department','View Employees by Role', 'Add Employee', 'Remove Employee', 'Update Employee Role'],
    })
    .then((answers) => {
        if (answers.firstAction === 'View All Employees') {
            viewAll();
        }
        if (answers.firstAction === 'View Employees by Department') {
            viewDept();
        }
        if (answers.firstAction === 'View Employees by Role') {
            viewRole();
        }
        if (answers.firstAction === 'Add Employee') {
            addEmployee();
        }
        if (answers.firstAction === 'Remove Employee') {
            removeEmployee();
        }
        if (answers.firstAction === 'Update Employee Role') {
            updateEmployee();
        } else {
        connection.end();
      }
    });
};