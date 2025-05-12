# Weather Observation Station 2

- [Weather Observation Station 2](https://www.hackerrank.com/challenges/weather-observation-station-2/problem) `easy`

Query the following two values from the STATION table:

The sum of all values in LAT_N rounded to a scale of 2 decimal places.
The sum of all values in LONG_W rounded to a scale of 2 decimal places.

The STATION table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

where `LAT_N` is the northern latitude and `LONG_W` is the western longitude.

```sql
select 
	round(sum(LAT_N), 2) as lat, 
	round(sum(LONG_W), 2) as lan 
from STATION;
```