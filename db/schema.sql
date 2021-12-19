DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE  employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);

CREATE TABLE  manager_1_employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);
CREATE TABLE  manager_2_employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);
CREATE TABLE  manager_3_employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);
CREATE TABLE  manager_4_employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);


INSERT INTO role (name, salary,department_id) VALUES
('CEO', 1000000,7),
('VP',500000,1),
('sales associate',100000,7),
('finance associate',100000,1),
('production associate',100000,4);

INSERT INTO department (name) VALUES 
('Finance'),
('Human Resources'),
('Marketing'),
('Production'),
('Development'),
('Quality Management'),
('Sales'),
('Research'),
('Customer Service');


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Kamyar','Mivehchi',1,0),
('Jon','Shim',2,1),
('Georgi','Facello',2,1),
('Simmel','Bezalel',2,1),
('Kyoichi','Maliniak',5,4),
('Chirstian','Koblick',3,3),
('Parto','Bamford',3,3),
('Duangkaew','Piveteau',4,2),
('Sumant','Peac',5,2),
('Saniya','Kalloufi',3,4),
('Tzvetan','Zielinski',5,4),
('Anneke','Preusig',3,3),
('Suzette','Pettey',5,3),
('Bojan','Montemayor',4,2),
('Shahaf','Famili',5,4),
('Ramzi','Erde',3,4);



