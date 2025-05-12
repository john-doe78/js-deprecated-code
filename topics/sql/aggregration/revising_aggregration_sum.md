# Revising Aggregations - The Sum Function

- [Revising Aggregations - The Sum Function](https://www.hackerrank.com/challenges/revising-aggregations-sum/problem) `easy`

Query the total population of all cities in `CITY` where District is `California`.

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select
	sum(POPULATION) as total_population
from CITY
where DISTRICT="California";
```