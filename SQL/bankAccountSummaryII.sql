# Write your MySQL query statement below
# https://leetcode.com/problems/bank-account-summary-ii

select Users.name, SUM(Transactions.amount) AS balance FROM Users 
LEFT JOIN Transactions ON (Transactions.account = Users.account)
GROUP BY Users.account
HAVING balance > 10000