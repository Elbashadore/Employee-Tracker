const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();
const express = require('express');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// questions for starting the app
const startApp = [
    {
        type: 'list',
        name: 'startupOptions',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees','Add a department','Add a role','Add an employee','Update an employee role']
    }
];

// questions for adding a department name
const department = [
    {
        type:'input',
        name: 'department',
        message: 'Enter the department name:'
    }
];

// questions for adding a role

const role = [
    {
        type:'input',
        name:'roleName',
        message: "Enter the role's name:"
    },
    {
        type:'input',
        name:'salary',
        message:"Enter the role's salary:"
    },
    {
        type:'input',
        name:'departmentId',
        message:"Enter the role's department ID:"
    }
]



const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the employee_db database.`)
  );


// Init function called when the app is started
function init() {
    inquirer.prompt(startApp).then((answers)=>{
        const {startupOptions} = answers;
        switch(startupOptions){
            case 'View all departments':
                viewallDepartments();
                break;
            case 'View all roles':
                viewallRoles();
                break;
            case 'View all employees':
                viewallEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                break;
            case 'Update an employee role':
                break;
        }

    })
};



// Function to view all departments

function viewallDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        init();
      });
};

// Function to view all roles

function viewallRoles(){
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        init();
      });
};

// Function to view all employees

function viewallEmployees(){
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        init();
      });
};

// function to add a department

function addDepartment(){
    inquirer.prompt(department).then((answers)=>{
        const {department} = answers
        db.query(`INSERT INTO department (name) VALUES ('${department}');`)
        init();
    })
};

//function to add a role

function addRole(){
    inquirer.prompt(role).then((answers)=>{
        const {departmentId,salary,roleName} = answers
        db.query(`INSERT INTO role (title,salary,department_id) VALUES ('${roleName}','${salary}','${departmentId}');`)
        init();
    })
};


// function to add an employee


// function to update an employee role





init();