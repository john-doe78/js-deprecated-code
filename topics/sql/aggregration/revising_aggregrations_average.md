# Revising Aggregations - Averages 

- [Revising Aggregations - Averages](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem) `easy`

Query the average population of all cities in `CITY` where District is `California`.

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select 
	avg(POPULATION) as average_population 
from CITY 
where DISTRICT="California";
```