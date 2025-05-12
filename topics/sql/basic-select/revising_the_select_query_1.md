# Revising the Select Query I

- [Revising the Select Query I](https://www.hackerrank.com/challenges/revising-the-select-query/problem) `easy`

Query all columns for all American cities in the `CITY` table with populations larger than `100000`. The CountryCode for America is `USA`.

The `CITY` table is described as follows:

![city](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select * 
from CITY
where CountryCode="USA" and POPULATION > 100000;
```