const inquirer = require("inquirer");
const {prompt} = require("inquirer");
const mysql = require('mysql2');
const { resolve } = require("path");
const util = require('util');


const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password: 'root',
    database: "employee_db"
});

const query = util.promisify(db.query).bind(db);

db.query('query', (err, data)=>{

});

// query('SELECT * FROM department').then(data=> console.table(data))
// query('SELECT * FROM role').then(data=> console.table(data))
// query('SELECT * FROM employee').then(data=> console.table(data))


const main = async() => {
    const response = await prompt({
       message:'What would you like to do?',
        type: 'list',
        name:'choice',
        choices: ['View All Employees','View all Departments','View All Roles','View by Manager','View by Department', 'Update Managers',
        'Delete Department', 'Delete employees']
        });
    
        switch(response.choice){
            case 'View All Employees':
                const employees = await query('SELECT * FROM employee')
                console.table(employees);
                break;
                case 'View all Departments':
                const employeees = await query('SELECT * FROM department')
                console.table(employeees);
                break;

                case 'View All Roles':
                const employeeees = await query('SELECT * FROM role')
                console.table(employeeees);
                break;

            case 'View by Manager':
                const answer = await prompt({
                
                    message:'Choose your manager',
                    type: 'list',
                    name:'manager_choice',
                    choices:['Manager 1', 'Manager 2', 'Manager 3', 'Manager 4'],
                })

                    switch(answer.manager_choice){
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

                
        
            case 'View by Department':
                const selection = await prompt({
                
                    message:'Choose A Department',
                    type: 'list',
                    name:'department_choice',
                    choices:['Finance',
                    'Human Resources',
                    'Marketing',
                    'Production',
                    'Development',
                    'Quality Management',
                    'Sales',
                    'Research',
                    'Customer Service'],
                })

                    switch(selection.department_choice){
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
                const employee_list = await query('SELECT * FROM employee');
                console.table(employee_list);

                const update = await prompt({
                    message:'Enter the Employee id that you wish to update',
                    type: 'number',
                    name:'emp',
                }
                )
                const update_manage = await prompt({
                    message:'Enter the Employees new Manager ID',
                    type:'list',
                    name: 'managerid',
                    choices:[1,2,3,4]
                })
                const updateTable =await 
                query(`UPDATE employee SET employee.manager_id=${update_manage.managerid} WHERE ${update.emp}=employee.id`);
                console.table(updateTable);
                
                break;    
            
            case 'Delete employees':
                const employee_lists = await query('SELECT * FROM employee');
                console.table(employee_lists);

                const updates = await prompt({
                    message:'Enter the Employee id that you wish to Delete',
                    type: 'number',
                    name:'emp',
                }
                )
                
                const updaterTable =await 
                query(`DELETE FROM employee WHERE ${updates.emp}=employee.id`);
                console.table(updaterTable);

            break;
            case 'Delete Department':
                const employee_listss = await query('SELECT * FROM department');
                console.table(employee_listss);

                const updatess = await prompt({
                    message:'Enter the Department ID that you wish to Delete',
                    type: 'number',
                    name:'emp',
                }
                )
                
                const updaterrTable =await 
                query(`DELETE FROM department WHERE ${updatess.emp}=department.id`);
                console.table(updaterrTable);
                

            break;
}
}
main();
