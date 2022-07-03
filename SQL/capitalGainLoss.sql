# Write your MySQL query statement below
select stock_name,sum(
case
when operation = 'Buy' then -price
when operation = 'Sell' then price
end
) AS capital_gain_loss

From Stocks group by stock_name;

