const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const mysql = require('mysql2');
const { resolve } = require("path");
const util = require('util');


const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: "employee_db"
});

const query = util.promisify(db.query).bind(db);

db.query('query', (err, data) => {

});

// query('SELECT * FROM department').then(data=> console.table(data))
// query('SELECT * FROM role').then(data=> console.table(data))
// query('SELECT * FROM employee').then(data=> console.table(data))


const main = async () => {
    const response = await prompt({
        message: 'What would you like to do?',
        type: 'list',
        name: 'choice',
        choices: ['View All Departments', 'View all Roles', 'View All Employees', 'Add a department', 'Add a New Employee', 'Add a Role', 'Update a Role', 'Update Managers', 'View Employees by Manager', 'View Employees by Department', 'Delete',]
    }

    )

    switch (response.choice) {
        case 'Delete':
            const ask4 = await prompt([{
                message: 'What would you like to delete?',
                type: 'list',
                name: 'del',
                choices: ['Department', 'Role', 'Employee']
            },
            {
                message: 'Enter the Id you wish to delete',
                type: 'input',
                name: 'delId',
                choices: Number
            }
            ])
            switch (ask4.del) {
                case 'Department':

                    const delete1 = await query('DELETE FROM department WHERE id =?', ask4.delId)
                    console.table(delete1)
                    break;

                case 'Role':

                    const delete2 = await query('DELETE FROM role WHERE id =?', ask4.delId)
                    console.table(delete2)
                    break;

                case 'Employee':

                    const delete3 = await query('DELETE FROM employee WHERE id =?', ask4.delId)
                    console.table(delete3)
                    break;

            }

            break;

        case 'Update a Role':
            const ask2 = await prompt([{
                message: 'Please enter the employee id you wish to update',
                type: 'type',
                name: 'employ',
                input: Number
            },
            {
                message: 'Please enter the new role id ',
                type: 'type',
                name: 'newrole',
                input: Number
            }
            ])

            const update1 = await query('UPDATE employee  SET role_id=? WHERE ?=employee.id', [ask2.newrole, ask2.employ])
            console.log(update1)
            break;
        case 'Add a Role':

            const ask1 = await prompt([{
                message: 'Please enter the new role',
                type: 'type',
                name: 'role',
                input: String
            },
            {
                message: 'Please enter the Salary for the role',
                type: 'type',
                name: 'sal',
                input: Number
            },
            {
                message: 'Please enter the department id for the role',
                type: 'type',
                name: 'id',
                input: Number
            }
            ])

            const insert1 = await query('INSERT INTO role (name, salary, department_id) VALUES (?,?,?)', [ask1.role, ask1.sal, ask1.id])
            console.log(insert1)
            break;
        case 'Add a New Employee':

            const ask3 = await prompt([{
                message: 'Please enter Employee First Name',
                type: 'type',
                name: 'first',
                input: String
            },
            {
                message: 'Please enter employee last name',
                type: 'type',
                name: 'last',
                input: String
            },
            {
                message: 'Please enter the role id',
                type: 'type',
                name: 'rol',
                input: Number
            },
            {
                message: 'Please enter manager id',
                type: 'type',
                name: 'man',
                input: Number
            }
            ])

            const insert2 = await query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [ask3.first, ask3.last, ask3.rol, ask3.man])
            console.log(insert2)
            break;
        case 'Add a department':


            const ask = await prompt({
                message: 'Please enter the new department',
                type: 'type',
                name: 'choice',
                input: String
            })
            const inset = await query('INSERT INTO department (name) VALUES (?)', ask.choice)
            console.table(inset)
            break;
        case 'View All Departments':
            const departments = await query('SELECT * FROM department')
            console.table(departments);
            const home = await prompt({
                message: 'Return home',
                type: 'list',
                name: 'choice',
                choices: ['Home',]

            })
            if (home.choice == 'Home') {
                main();

            }

            break;

        case 'View all Roles':
            const role = await query('SELECT * FROM role')
            console.table(role)
            const back = await prompt({
                message: 'Return home',
                type: 'list',
                name: 'choice',
                choices: ['Home',]

            })
            if (back.choice == 'Home') {
                main();

            }
            break;



        case 'View Employees by Manager':
            const answer = await prompt({

                message: 'Choose your manager',
                type: 'list',
                name: 'manager_choice',
                choices: ['Manager 1', 'Manager 2', 'Manager 3', 'Manager 4'],
            })

            switch (answer.manager_choice) {
                case 'Manager 1':
                    const manager_1_employees = await query('SELECT * FROM employee WHERE employee.manager_id =1');
                    console.table(manager_1_employees);
                    break;

                case 'Manager 2':
                    const manager_2_employees = await query('SELECT * FROM employee WHERE employee.manager_id =2');
                    console.table(manager_2_employees);
                    break;
                case 'Manager 3':
                    const manager_3_employees = await query('SELECT * FROM employee WHERE employee.manager_id =3');
                    console.table(manager_3_employees);
                    break;
                case 'Manager 4':
                    const manager_4_employees = await query('SELECT * FROM employee WHERE employee.manager_id =4');
                    console.table(manager_4_employees);
                    break;
            }

            break;



        case 'View All Employees':
            const selection = await query("SELECT employee.id, employee.first_name, employee.last_name, role.name, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;")
            console.table(selection);
            const backe = await prompt({
                message: 'Return home',
                type: 'list',
                name: 'choice',
                choices: ['Home',]

            })
            if (backe.choice == 'Home') {
                main();

            }
            break;


        case 'View Employees by Department':
            const selection4 = await prompt({

                message: 'Choose A Department',
                type: 'list',
                name: 'department_choice',
                choices: ['Finance',
                    'Human Resources',
                    'Marketing',
                    'Production',
                    'Development',
                    'Quality Management',
                    'Sales',
                    'Research',
                    'Customer Service'],
            })

            switch (selection4.department_choice) {
                case 'Finance':
                    const finance = await query('SELECT * FROM employee WHERE employee.role_id =1');
                    console.table(finance);
                    break;

                case 'Human Resources':
                    const human_resources = await query('SELECT * FROM employee WHERE employee.role_id =2');
                    console.table(human_resources);
                    break;
                case 'Marketing':
                    const marketing = await query('SELECT * FROM employee WHERE employee.role_id =3');
                    console.table(marketing);
                    break;
                case 'Production':
                    const production = await query('SELECT * FROM employee WHERE employee.role_id =4');
                    console.table(production);
                    break;
                case 'Development':
                    const development = await query('SELECT * FROM employee WHERE employee.role_id =5');
                    console.table(development);
                    break;
                case 'Quality Management':
                    const quality_management = await query('SELECT * FROM employee WHERE employee.role_id =6');
                    console.table(quality_management);
                    break;
                case 'Sales':
                    const sales = await query('SELECT * FROM employee WHERE employee.role_id =7');
                    console.table(sales);
                    break;
                case 'Research':
                    const research = await query('SELECT * FROM employee WHERE employee.role_id =8');
                    console.table(research);
                    break;
                case 'Customer Service':
                    const customer_service = await query('SELECT * FROM employee WHERE employee.role_id =9');
                    console.table(customer_service);
                    break;
            }

            break;

        case 'Update Managers':
            const employee_list = await query('SELECT * FROM employee')
            console.table(employee_list);

            const update = await prompt(
                [{
                    message: 'Enter the Employee id that you wish to update',
                    type: 'type',
                    name: 'emp',
                    input: Number
                },
                {
                    message: 'Enter the Employees new Manager ID',
                    type: 'list',
                    name: 'managerid',
                    choices: [1, 2, 3, 4]
                }]
            )

            const updateTable = await
                //change for security reason
                query('UPDATE employee SET employee.manager_id=? WHERE id=?', [update.managerid, update.emp]);
            console.table(updateTable);

            break;
    }
}
main();