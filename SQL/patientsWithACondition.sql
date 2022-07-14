# Write your MySQL query statement below
# https://leetcode.com/problems/patients-with-a-condition

SELECT patient_id, patient_name, conditions FROM Patients WHERE conditions LIKE '% DIAB1%' OR CONDITIONS LIKE 'DIAB1%';