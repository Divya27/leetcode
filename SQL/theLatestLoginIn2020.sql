# Write your MySQL query statement below

SELECT user_id, time_stamp FROM Logins WHERE time_stamp LIKE "%2020%" GROUP BY user_id ORDER BY time_stamp DESC;