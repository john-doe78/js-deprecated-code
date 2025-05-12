create table employees (
    e_id int primary key,
    e_name varchar(50),
    dept varchar(50),
    salary int
);

insert into employees (e_id, e_name, dept, salary) values
    (1, 'ram', 'hr', 10000),
    (2, 'amrit', 'mrkt', 20000),
    (3, 'ravi', 'hr', 30000),
    (4, 'nitin', 'mrkt', 40000),
    (5, 'varun', 'it', 50000);

write a query to display all the dept names where no of employees are less than 2

