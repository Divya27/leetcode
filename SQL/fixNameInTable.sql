# Write your MySQL query statement below
# https://leetcode.com/problems/fix-names-in-a-table

SELECT user_id, CONCAT(UPPER(LEFT(name, 1)),LOWER(SUBSTRING(name, 2, LENGTH(name)))) AS name FROM Users ORDER BY user_id;