# Average Population

- [Average Population](https://www.hackerrank.com/challenges/average-population/problem) `easy`

Query the average population for all cities in `CITY`, rounded down to the nearest integer.

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select 
	floor(avg(POPULATION)) as average_population 
from CITY;
```