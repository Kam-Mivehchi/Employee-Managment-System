# Employee management system

##  Back End
- created Employee database with 3 tables (role,employee,and departments) in SQL
- employee table tracks employee names, role id and their manager id
- department table tracks department name and assigns it an id
- role table tracks the companies positions, pay and the department they are a part of.

## Front End - CLI
-User uses command line to launch and interact with the application
-user is prompted with 8 options: View all departments,view all roles,view all employees, view by manager, view by department, update managers, delete department and delete employees
-upon selection of any view option the user is presented with the corresponding table in the terminal
-view by manager prompt a follow up question asking user to specify the manager they want to see
-update manager displays the employee table and asks the user for the user id of the employee they want to update, then asks what their new manager will be.

## Future Improvements
-make the app continuous,add a return to menu or quit function
-allow user to view changes automatically after deployment

## Instructions
-clone repository
-navigate to directory in terminal
-npm install inquirer, mysql2 and express
-type 'node index.js' in terminal


## Walkthrough


https://user-images.githubusercontent.com/90432404/146663442-0f990856-c656-4a02-88d5-71901f1ecc05.mp4


