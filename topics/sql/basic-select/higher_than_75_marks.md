# Higher Than 75 Marks

- [Higher Than 75 Marks](https://www.hackerrank.com/challenges/more-than-75-marks/problem) `easy`

Query the Name of any student in `STUDENTS` who scored higher than `75` Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

![](https://s3.amazonaws.com/hr-challenge-images/12896/1443815243-94b941f556-1.png)

`STUDENTS` table contains uppercase (A-Z) and lowercase (a-z) letters.

```sql
select Name 
from STUDENTS 
where Marks > 75 
order by right(Name, 3), ID asc;
```