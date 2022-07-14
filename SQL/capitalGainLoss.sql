# Write your MySQL query statement below
# https://leetcode.com/problems/capital-gainloss

select stock_name,sum(
case
when operation = 'Buy' then -price
when operation = 'Sell' then price
end
) AS capital_gain_loss

From Stocks group by stock_name;

