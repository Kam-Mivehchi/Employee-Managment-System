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
('Kamyar','Mivehchi',8,0),
('Jon','Shim',1,1),
('Georgi','Facello',8,1),
('Simmel','Bezalel',2,1),
('Kyoichi','Maliniak',8,4),
('Chirstian','Koblick',4,3),
('Parto','Bamford',3,3),
('Duangkaew','Piveteau',3,2),
('Sumant','Peac',3,2),
('Saniya','Kalloufi',1,4),
('Tzvetan','Zielinski',5,4),
('Anneke','Preusig',1,3),
('Suzette','Pettey',6,3),
('Bojan','Montemayor',7,2),
('Shahaf','Famili',8,4),
('Ramzi','Erde',9,4);



