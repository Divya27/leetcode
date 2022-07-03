# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below

DELETE p
from Person p
join Person p1 ON (p.id > p1.id AND p.email = p1.email)
