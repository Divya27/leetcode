# Write your MySQL query statement below
#SELECT customer_number
#FROM Orders
#GROUP BY customer_number
#ORDER BY COUNT(order_number) DESC
#LIMIT 1; 

#SELECT customer_number FROM
#(
#SELECT customer_number, count(order_number) as count
#FROM orders
#GROUP BY customer_number
#ORDER BY count(order_number) DESC
#)
#WHERE ROWNUM = 1;

with a as (select customer_number, count(order_number) as cnt from Orders group by customer_number),
b as (select a.customer_number, dense_rank() over (order by a.cnt DESC) as rnk from a)
select b.customer_number from b where b.rnk=1