-- inner join
select a.region_id, a.region_name, b.country_id, b.country_name
from regions a inner join countries b
on a.region_id = b.region_id
-- memfilter, menampilkan hanya yang asia
where region_name='Asia'
-- mengurutkan
order by region_name , country_id desc

select a.region_id, a.region_name, count(country_name) as jumlah_negara
from regions a inner join countries b
on a.region_id = b.region_id
group by a.region_id
order by region_id

-- berapa departemen yang ada di tiap countries
select a.region_name, b.country_name, count(d.department_id) as jumlah_department
from regions a join countries b on a.region_id = b.region_id
join locations l on b.country_id=l.country_id
join departments d on l.location_id = d.location_id
group by a.region_id, b.country_name, a.region_name



