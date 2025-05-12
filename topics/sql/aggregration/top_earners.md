# Top Earners

![Top Earners](https://www.hackerrank.com/challenges/earnings-of-employees/problem)

We define an employee's total earnings to be their monthly `salary*months` worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as 2 space-separated integers.

![](https://s3.amazonaws.com/hr-challenge-images/19629/1458557872-4396838885-ScreenShot2016-03-21at4.27.13PM.png)

```sql
select salary*months as earnings, 
	count(employee_id) as number_of_employees 
from Employee 
group by salary*months 
order by salary*months desc 
limit 1;
```