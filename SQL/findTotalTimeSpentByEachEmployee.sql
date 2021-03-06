# Write your MySQL query statement below
# https://leetcode.com/problems/find-total-time-spent-by-each-employee

select event_day AS day, emp_id, sum(out_time - in_time) AS total_time 
FROM employees
GROUP BY emp_id, event_day