# Weather Observation Station 4

- [Weather Observation Station 4](https://www.hackerrank.com/challenges/weather-observation-station-4/problem) `easy`

Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.

The STATION table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

```sql
select count(CITY) - count(distinct CITY) as difference 
from STATION;
```