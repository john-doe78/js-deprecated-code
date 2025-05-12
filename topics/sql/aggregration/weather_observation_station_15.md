# Weather Observation Station 15

![Weather Observation Station 15](https://www.hackerrank.com/challenges/weather-observation-station-15/problem)

Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than 137.2345. Round your answer to 4 decimal places.

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

```sql
select round(LONG_W, 4)
from STATION
where LAT_N < 137.2345
order by LAT_N desc 
limit 1;
```