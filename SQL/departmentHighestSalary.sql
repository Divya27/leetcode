# Write your MySQL query statement below
# https://leetcode.com/problems/department-highest-salary/

SELECT 
  Department.name AS Department,
  Employee.name AS Employee,
  Employee.salary AS Salary,
  RANK() OVER(ORDER BY MAX(Employee.salary) DESC) 
FROM Employee
JOIN Department ON (Department.id = Employee.departmentId)
GROUP BY Employee.departmentId

  
