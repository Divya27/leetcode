# Write your MySQL query statement below

SELECT employee_id from Employees WHERE employee_id NOT IN (SELECT employee_id FROM Salaries)
UNION ALL 
SELECT employee_id from Salaries WHERE employee_id NOT IN (SELECT employee_id FROM Employees)
ORDER BY employee_id 