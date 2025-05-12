# Weather Observation Station 17

![Weather Observation Station 17](https://www.hackerrank.com/challenges/weather-observation-station-17/problem)

Query the Western Longitude (LONG_W) where the smallest Northern Latitude (LAT_N) in STATION is greater than 38.7780. Round your answer to 4 decimal places.

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

```sql
select round(LONG_W, 4)
from STATION
where LAT_N > 38.7780 
order by LAT_N asc 
limit 1;
```