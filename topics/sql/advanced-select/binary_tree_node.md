# Binary Tree Nodes

- [Binary Tree Nodes](https://www.hackerrank.com/challenges/binary-search-tree-1/problem) `medium`

You are given a table, BST, containing two columns: N and P, where N represents the value of a node in Binary Tree, and P is the parent of N.

![](https://s3.amazonaws.com/hr-challenge-images/12888/1443818507-5095ab9853-1.png)

Write a query to find the node type of Binary Tree ordered by the value of the node. Output one of the following for each node:

- Root: If node is root node.
- Leaf: If node is leaf node.
- Inner: If node is neither root nor leaf node.

```sql
select
    N as Node,
    Case
        when P is null then "Root"
        when N in (select P from BST) then "Inner"
        else "Leaf"
    end as NodeType
from BST
order by N;
```