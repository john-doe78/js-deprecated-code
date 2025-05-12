# Population Census

![Population Census](https://www.hackerrank.com/challenges/asian-population/problem)

Given the `CITY` and `COUNTRY` tables, query the sum of the populations of all cities where the `CONTINENT` is 'Asia'.

Note: `CITY.CountryCode` and `COUNTRY.Code` are matching key columns.

The `CITY` and `COUNTRY` tables are described as follows: 

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

![](https://s3.amazonaws.com/hr-challenge-images/8342/1449769013-e54ce90480-Country.jpg)

```sql
select sum(city.POPULATION) as populations 
from CITY as city 
join COUNTRY as country 
on city.COUNTRYCODE=country.CODE 
where country.CONTINENT ="Asia";
```