# New Companies

- [New Companies](https://www.hackerrank.com/challenges/the-company/problem) `medium`

Amber's conglomerate corporation just acquired some new companies.

Given the table schemas below, write a query to print the `company_code`, `founder` name, total number of `lead managers`, total number of `senior managers`, total number of `managers`, and total number of `employees`. Order your output by ascending `company_code`.

Note: The tables may contain duplicate records.

```sql
select 
	c.company_code, 
	c.founder, 
	count(distinct e.lead_manager_code) as lead_managers, 
	count(distinct e.senior_manager_code) as senior_managers, 
	count(distinct e.manager_code) as managers, 
	count(distinct e.employee_code) as employees
from Employee as e 
join Company as c 
	on c.company_code=e.company_code 
group by c.company_code, c.founder 
order by c.company_code;
```