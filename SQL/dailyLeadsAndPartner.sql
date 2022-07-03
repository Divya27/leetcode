# Write your MySQL query statement below
select date_id, make_name, count(distinct(lead_id)) AS unique_leads, COUNT(distinct(partner_id)) AS unique_partners
from DailySales 
group by date_id, make_name