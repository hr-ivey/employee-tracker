DROP DATABASE IF EXISTS employee_db;

-- Generating database and assuming focus.
CREATE DATABASE employee_db;

USE employee_db;

-- Three tables.
CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id int NOT NULL,
manager_id int NOT NULL
);

CREATE TABLE role (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary decimal NOT NULL,
department_id int NOT NULL
);

CREATE TABLE department (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL
);
