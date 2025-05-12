# Japanese Cities' Names

- [Japanese Cities' Names](https://www.hackerrank.com/challenges/japanese-cities-name/problem) `easy`

Query the names of all the Japanese cities in the `CITY` table. The `COUNTRYCODE` for Japan is `JPN`.

The `CITY` table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg)

```sql
select name
from CITY
where COUNTRYCODE="JPN";
```