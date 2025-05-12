# Weather Observation Station 16

- [Weather Observation Station 16](https://www.hackerrank.com/challenges/weather-observation-station-16/problem)

Query the smallest Northern Latitude (LAT_N) from STATION that is greater than 38.7780. Round your answer to 4 decimal places.

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

```sql
select round(min(LAT_N), 4) as northern_value 
from STATION 
where LAT_N > 38.7780;
```