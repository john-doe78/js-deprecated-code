# Occupations

- [Occupations](https://www.hackerrank.com/challenges/occupations/problem) `medium`

Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. The output column headers should be Doctor, Professor, Singer, and Actor, respectively.

Note: Print NULL when there are no more names corresponding to an occupation.

```sql
set @d=0,@a=0,@p=0,@s=0; 

select min(Doctor),min(Professor),min(Singer),min(Actor) from (
  select 
  	if(OCCUPATION='Actor', NAME, null) as Actor, 
    if(OCCUPATION='Doctor', NAME, null) as Doctor,
    if(OCCUPATION='Professor', NAME, null) as Professor, 
    if(OCCUPATION='Singer', NAME, null) as Singer, 
   	case OCCUPATION 
	    when 'Actor' then @a := @a+1 
	    when 'Doctor' then @d := @d+1 
	    when 'Professor' then @p := @p+1 
	    when 'Singer' then @s := @s+1 
    end as idn 
  from OCCUPATIONS order by NAME ) as TMP 
group by TMP.idn ;
```