# Write your MySQL query statement below

# https://leetcode.com/problems/article-views-i/

SELECT author_id AS id FROM Views WHERE author_id = viewer_id GROUP BY author_id ORDER BY author_id ASC