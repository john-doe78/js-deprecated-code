# Revising Aggregations - The Count Function

- [Revising Aggregations - The Count Function](https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem) `easy`

Query a count of the number of cities in `CITY` having a Population larger than `100, 000`.

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select count(NAME) as cities
from CITY
where POPULATION > 100000;
```

