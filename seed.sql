USE employee_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Raul", "Tejada", 2, 2), ("Arcade", "Gannon", 1, 1), ("Dean", "Domino", 3, 2), ("Joshua", "Graham", 2, 1), ("Aaron", "Kimball", 3, 2),  ("Robert", "House", 2, 1), ("Craig", "Boone", 1, 2), ("Ruby", "Nash", 1, 1), ("Jason", "Bright ", 3, 2),("Lily", "Bowen ", 4, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Success Manager", 55000, 1), ("Business Development Representative", 45000, 1), ("User Support", 40000, 2), ("Full Stack Developer", 75000, 3), (" Quality Assurance Analyst", 55000, 3);

INSERT INTO department (name)
VALUES ("Sales"), ("Support"), ("Engineering");