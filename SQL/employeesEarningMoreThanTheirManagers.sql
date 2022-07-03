# Write your MySQL query statement below

select emp.name AS Employee from 
Employee emp
JOIN Employee manager ON (emp.managerId = manager.id AND emp.salary > manager.salary)
