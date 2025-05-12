# Average Population of Each Continent

![Average Population of Each Continent](https://www.hackerrank.com/challenges/average-population-of-each-continent/problem)

Given the `CITY` and `COUNTRY` tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.

Note: `CITY.CountryCode` and `COUNTRY.Code` are matching key columns.

The `CITY` and `COUNTRY` tables are described as follows: 

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

![](https://s3.amazonaws.com/hr-challenge-images/8342/1449769013-e54ce90480-Country.jpg)

```sql
select country.CONTINENT as continents, floor(avg(city.POPULATION)) as city_populations
from CITY  as city 
join COUNTRY as country
on city.COUNTRYCODE=country.CODE 
group by country.CONTINENT;
```