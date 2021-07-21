// Calling in all required packages.
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');

// Settings for database connection.
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password : '0017',
  database : 'employee_db',
});

// Establish connection, or else throw error.
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
});

// User greeting.
console.log(chalk.green('Welcome to the Employee Tracker.'));

// Utilize Inquirer to prompt user for selection.
const start = () => {
    inquirer.prompt({
        name: 'firstAction',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Departments','View All Roles', 'Add Employee', 'Remove Employee', 'Update Employee Role'],
    })
    .then((answers) => {
        if (answers.firstAction === 'View All Employees') {
            viewAll();
        }
        if (answers.firstAction === 'View All Departments') {
            viewDept();
        }
        if (answers.firstAction === 'View All Roles') {
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

// View all employees.
const viewAll = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
                console.table(res);
    });
};

// View all departments.
const viewDept = () => {
    connection.query('SELECT name FROM department', (err, res) => {
        if (err) throw err;
                console.table(res);
    });
};

// View all roles.
const viewRole = () => {
    connection.query('SELECT title FROM role', (err, res) => {
        if (err) throw err;
                console.table(res);
    });
};

// Add a new employee.
const addEmployee = () => {
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id, department_id) VALUES (?, ?, ?, ?, ?)', [
        'John',
        'Doe',
        1,
        1,
        1
    ], (err, res) => {
        if (err) throw err;
        connection.end();
    });
}

// Remove an existing employee. 
const removeEmployee = () => {
    connection.query('DELETE FROM employee WHERE id = ?', [1], (err, res) => {
        if (err) throw err;
        connection.end();
    });
}

// Update an existing employee. 
const updateEmployee = () => {
    connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [2, 1], (err, res) => {
        if (err) throw err;
        connection.end();
    });
}

start();