# The Blunder

- [The Blunder](https://www.hackerrank.com/challenges/the-blunder/problem)

Samantha was tasked with calculating the average monthly salaries for all employees in the `EMPLOYEES` table, but did not realize her keyboard's  key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeros removed), and the actual average salary.

Write a query calculating the amount of error (i.e.:  `actual - miscalculated` average monthly salaries), and round it up to the next integer.

The `EMPLOYEES` table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/12893/1443817108-adc2235c81-1.png)

```sql
select ceil(avg(Salary) - avg(replace(Salary, "0", ""))) 
from EMPLOYEES ;
```