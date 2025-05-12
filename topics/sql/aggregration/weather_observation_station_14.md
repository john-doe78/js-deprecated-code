# Weather Observation Station 14

![Weather Observation Station 14](https://www.hackerrank.com/challenges/weather-observation-station-14/problem)

Query the greatest value of the Northern Latitudes (LAT_N) from `STATION` that is less than 137.2345. Truncate your answer to  decimal places.

The `STATION` table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

```sql
select round(max(LAT_N), 4) as greatest_value 
from STATION
where LAT_N < 137.2345;
```