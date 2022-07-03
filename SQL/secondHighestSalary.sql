# Write your MySQL query statement below
SELECT MAX(salary) AS SecondHighestSalary from EMPLOYEE where salary <
(select MAX(salary) from Employee)