DROP DATABASE IF EXISTS employee_db;

-- Generating database and assuming focus.
CREATE DATABASE employee_db;

USE employee_db;

-- Total of three tables.
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

USE employee_db;

USE employee_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Raul", "Tejada", 2, 4),
("Arcade", "Gannon", 1, 3),
("Dean", "Domino", 3, 4), 
("Joshua", "Graham", 2, null),
("Aaron", "Kimball", 3, 4), 
("Robert", "House", 2, null),
("Craig", "Boone", 1, 4),
("Ruby", "Nash", 1, 4),
("Jason", "Bright ", 3, 4),
("Lily", "Bowen ", 4, 4);

