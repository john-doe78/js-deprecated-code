# Type of Triangle

- [Type of Triangle](https://www.hackerrank.com/challenges/what-type-of-triangle/problem) `easy`

Write a query identifying the type of each record in the `TRIANGLES` table using its three side lengths. Output one of the following statements for each record in the table:

- Equilateral: It's a triangle with  sides of equal length.
- Isosceles: It's a triangle with  sides of equal length.
- Scalene: It's a triangle with  sides of differing lengths.
- Not A Triangle: The given values of A, B, and C don't form a triangle.

The `TRIANGLES` table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/12887/1443815629-ac2a843fb7-1.png)

```sql
select  
	case
        when (A + B) <= C or (A + C) <= B or (B + C) <= A then "Not A Triangle" 
        when A = B and B = C and A = C then "Equilateral" 
        when A != B and B != C and A != C then "Scalene"
        when A = B or B = C or C = A then "Isosceles"
	end as traiangles
from TRIANGLES;
```