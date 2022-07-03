# Write your MySQL query statement below
select Users.name, IFNULL(SUM(Rides.distance),0) AS travelled_distance
from Users
left join Rides ON (Rides.user_id = Users.id)
group by Users.id
order by travelled_distance desc, name asc
