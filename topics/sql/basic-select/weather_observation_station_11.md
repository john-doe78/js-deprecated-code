# Weather Observation Station 11

- [Weather Observation Station 11](https://www.hackerrank.com/challenges/weather-observation-station-11/problem) `easy`

Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

The STATION table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg)

```sql
select distinct CITY
from STATION
where 
    CITY not regexp "^[aeiou]" or CITY not regexp "[aeiou]$";
```