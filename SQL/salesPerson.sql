# Write your MySQL query statement below
# https://leetcode.com/problems/sales-person

SELECT name FROM SalesPerson WHERE sales_id NOT IN (SELECT Orders.sales_id FROM Orders JOIN Company ON (Company.com_id = Orders.com_id AND Company.name = 'RED'))