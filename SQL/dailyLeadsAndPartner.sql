# Write your MySQL query statement below
# https://leetcode.com/problems/daily-leads-and-partners

select date_id, make_name, count(distinct(lead_id)) AS unique_leads, COUNT(distinct(partner_id)) AS unique_partners
from DailySales 
group by date_id, make_name