# Population Density Difference

- [Population Density Difference](https://www.hackerrank.com/challenges/population-density-difference/problem) `easy`

Query the difference between the maximum and minimum populations in `CITY`.

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select 
	(max(POPULATION) - min(POPULATION)) as population_differences 
from CITY;
```