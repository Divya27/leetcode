# Write your MySQL query statement below
# https://leetcode.com/problems/combine-two-tables/

select person.firstName, person.lastName,
Ifnull(address.city, null) as city,
ifnull(address.state, null) as state
from person 
left join address on (person.personId = address.personId)