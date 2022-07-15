# https://leetcode.com/problems/market-analysis-i

# Write your MySQL query statement below

SELECT 
Users.user_id AS buyer_id , Users.join_date,
IFNULL(buy_count.orders_in_2019, 0) AS orders_in_2019 FROM
Users 
LEFT JOIN
(SELECT buyer_id, COUNT(buyer_id) AS orders_in_2019 FROM
Orders WHERE order_date LIKE '%2019%' GROUP BY buyer_id)  AS buy_count ON (Users.user_id = buy_count.buyer_id)
