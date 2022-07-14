# Write your MySQL query statement below
# https://leetcode.com/problems/find-customer-referee

SELECT name from Customer where (referee_id IS NULL OR referee_id != 2)