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

-- tampilkan employe yg gajinya paling tinggi tiap departmen
select first_name, max(salary) as salary, department_name
from employees e join departments d on e.department_id = d.department_id
group by department_name
order by salary desc

-- jumlah pegawai di tiap country
select distinct c.country_name, count(e.employee_id) as jumlah_pegawai
from countries c join locations l on c.country_id = l.country_id
join departments d on l.location_id = d.location_id
join employees e on d.department_id=e.department_id
group by c.country_name, e.first_name




