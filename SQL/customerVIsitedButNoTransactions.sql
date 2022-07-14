# Write your MySQL query statement below
# https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions

select customer_id, count(customer_id) AS count_no_trans from Visits where visit_id NOT IN (SELECT visit_id from Transactions) GROUP BY customer_id