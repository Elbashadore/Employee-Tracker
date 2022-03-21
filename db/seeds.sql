INSERT INTO department (name)
VALUES ('sales'),
			 ('IT'),
			 ('Human Resources'),
			 ('Marketing');
       
INSERT INTO role (title,salary,department_id)
VALUES ('VP of marketing',1000000,2),
			 ('Director of marketing',65000,2),
			 ('Market analyst',25,2),
			 ('Head of sales',75000,1),
			 ('Sales manager',55000,1),
			 ('HR consultant',45000,7);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ('Ralph','Machio',7,6),
			 ('Johnny','Depp',6,9),
			 ('Stacy','Smom',42,0);