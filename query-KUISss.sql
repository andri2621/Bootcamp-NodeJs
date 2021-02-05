-- 1. Buat query untuk menampilkan :
-- 	a. Tampilkan total product by category :

select  c.cate_name, count (p.prod_title) as Total_Produk
from Category c join Product p on c.cate_id =p.prod_cate_id
group by c.cate_id

-- b. Tampilkan total order by product :


-- C. Tampilkan jumlah order tiap customer :

SELECT user_name , user_email , sum(order_total) as TotalOrder
FROM Users a inner join Orders b
on a.user_id = b.order_user_id
Group by user_name , user_email
order by user_name

-- d. Total Order per bulan filter by tahun :
select order_name, bulan(order_created_on) as Bulan, sum(order_total) as TotalOrder
from Orders where order_created_on between '2019-01-01' and '2020-12-30'
group by order_created_on, order_name
order by order_name desc


