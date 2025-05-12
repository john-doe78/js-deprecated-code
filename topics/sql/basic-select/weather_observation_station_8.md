# Weather Observation Station 8

- [Weather Observation Station 8](https://www.hackerrank.com/challenges/weather-observation-station-8/problem) `easy`

Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.

The `STATION` table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

```sql
select distinct CITY 
from STATION 
where 
	left(CITY, 1) in ("a", "e", "i", "o", "u") 
	and right(CITY, 1) in ("a", "e", "i", "o", "u");
```