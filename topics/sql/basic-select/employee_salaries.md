# Employee Salaries

- [Employee Salaries](https://www.hackerrank.com/challenges/salary-of-employees/problem) `easy`

Write a query that prints a list of employee names (i.e.: the name attribute) for employees in `Employee` having a salary greater than `$2000` per month who have been employees for less than 10 months. Sort your result by ascending `employee_id`.

The Employee table containing employee data for a company is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/19629/1458557872-4396838885-ScreenShot2016-03-21at4.27.13PM.png)

where `employee_id` is an employee's ID number, `name` is their name, `months` is the total number of months they've been working for the company, and `salary` is the their monthly salary.

```sql
SELECT name FROM Employee
WHERE salary > 2000 AND months < 10 
ORDER BY employee_id asc;
```