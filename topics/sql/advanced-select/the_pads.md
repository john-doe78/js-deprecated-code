# The PADS

- [The PADS](https://www.hackerrank.com/challenges/the-pads/problem) `medium`

Generate the following two result sets:

- Query an alphabetically ordered list of all names in `OCCUPATIONS`, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example: `AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S)`.
- Query the number of ocurrences of each occupation in `OCCUPATIONS`. Sort the occurrences in ascending order, and output them in the following format: 
	- `There are a total of [occupation_count] [occupation]s.`
	- where [occupation_count] is the number of occurrences of an occupation in `OCCUPATIONS` and [occupation] is the lowercase occupation name. If more than one Occupation has the same [occupation_count], they should be ordered alphabetically.

Note: There will be at least two entries in the table for each type of occupation.

![](https://s3.amazonaws.com/hr-challenge-images/12889/1443816414-2a465532e7-1.png)

Occupation will only contain one of the following values: Doctor, Professor, Singer or Actor.

```sql
select 
    concat(Name, "(", left(Occupation, 1), ")") as name
from OCCUPATIONS
order by Name;

select 
    concat("There are a total of ", count(occupation), " ", lower(Occupation), "s.") as Professions
from OCCUPATIONS
group by Occupation
order by count(Occupation), Occupation;
```