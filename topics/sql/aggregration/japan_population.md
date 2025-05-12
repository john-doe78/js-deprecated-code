# Japan Population

- [Japan Population](https://www.hackerrank.com/challenges/japan-population/problem) `easy`

Query the sum of the populations for all Japanese cities in `CITY`. The COUNTRYCODE for Japan is `JPN`.

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select sum(POPULATION) as Populations
from CITY 
where COUNTRYCODE="JPN";
```