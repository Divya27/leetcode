# Write your MySQL query statement below
select Customers.name AS Customers from Customers
where Customers.id NOT IN (SELECT CustomerId from Orders)