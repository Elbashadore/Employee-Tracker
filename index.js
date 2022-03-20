const inquirer = require('inquirer');


const startApp = [
    {
        type: 'list',
        name: 'startupOptions',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees','Add a department','Add a role','Add an employee','Update an employee role']
    }
];

// Init function called when the app is started
function init() {
    inquirer.prompt(startApp).then((answers)=>{
        const {startupOptions} = answers;
        switch(startupOptions){
            case 'View all departments':
                break;
            case 'View all roles':
                break;
            case 'View all employees':
                break;
            case 'Add a department':
                break;
            case 'Add a role':
                break;
            case 'Add an employee':
                break;
            case 'Update an employee role':
                break;
        }

    })
}

init();