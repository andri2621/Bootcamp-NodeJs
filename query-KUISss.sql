-- f. Total Order per Kota yang di filter oleh Provinsi,
-- contoh jika di filter provinsi Jawa Barat, yang tampil
-- kota yang ada di jawabarat.
select * from City

select o.order_total , u.user_name
from Orders o inner join Users u on o.order_user_id = u.user_id
join 

-- tampilkan kota berdasarkan filter provinsi
select a.city_name, b.prov_name
FROM City a inner join Province b on a.city_prov_id = b.prov_id
where prov_name='Jawa Barat'
Group by city_name, prov_name
order by prov_name

select * from Product
select * from Cart
select * from Users
select * from Orders
select * from Order_detail

select cart_id, cart_created_on, cart_total, user_name
from Cart a JOIN Users b  on a.cart_user_id = b.user_id

SELECT prod_title , ordi_quantity as quantity, order_name
FROM Product a JOIN Order_detail b on a.prod_id = b.ordi_prod_id
join Orders c on b.ordi_order_name = c.order_name

select * from Address
select * from City

count(a.prod_title) as Product_name


-- ==============================================================



-- 1. Buat query untuk menampilkan :
-- 	a. Tampilkan total product by category :
select  c.cate_name, count (p.prod_title) as Total_Produk
from Category c join Product p on c.cate_id =p.prod_cate_id
group by c.cate_id

-- b. Tampilkan total order by product :




-- d. Total Order per bulan filter by tahun :
-- date
select order_name, bulan(order_created_on) as Bulan, sum(order_total) as Total_Order
from Orders where order_created_on between '2019-01-01' and '2020-12-30'
group by  order_name, order_created_on
order by order_created_on 
-- /timestamp
SELECT extract(month from a.order_created_on) as Bulan, sum(b.ordi_price) total_revenue
FROM Orders a  JOIN Order_detail b ON b.ordi_order_name = a.order_name
WHERE order_created_on between '2019-01-01' and '2020-12-30'
GROUP BY order_created_on
ORDER BY order_created_on

select * from Order_detail

-- 	a. Tampilkan total product by category :
select  c.cate_name, count (p.prod_title) as Total_Produk
from Category c join Product p on c.cate_id =p.prod_cate_id
group by c.cate_id


-- B. Tampilkan informasi :
SELECT prod_title , sum(ordi_quantity) as quantity, order_name
FROM Product a JOIN Order_detail b on a.prod_id = b.ordi_prod_id
join Orders c on b.ordi_order_name = c.order_name
group by prod_title, ordi_quantity, order_name

-- HASIL
-- "Kaos oblong"	3	"ORD-260620#0001"
-- "LED TV"			5	"ORD-260620#0001"
-- "Kemeja Putih"	2	"ORD-280620#0002"
-- "Magicom"		4	"ORD-280620#0002"
-- "Kursi Gaming"	1	"ORD-150720#0004"
-- "Meja Makan"		3	"ORD-110820#0005"
-- "Kemeja Putih"	3	"ORD-020920#0006"


-- C. Tampilkan jumlah qty yang dibeli by product ;
SELECT Prod_title as product, sum(ordi_quantity) as buyed
FROM Product a JOIN Order_detail b ON a.prod_id = b.ordi_prod_id
GROUP BY a.Prod_title
-- HASIL
-- "Meja Makan"		3
-- "LED TV"			5
-- "Kursi Gaming"	1
-- "Magicom"		4
-- "Kemeja Putih"	5
-- "Kaos oblong"	3
select * from Order_detail
select * from Product

INSERT INTO Order_detail (ordi_quantity, ordi_price, ordi_cart_id, ordi_prod_id, ordi_order_name)
VALUES (10, 750000, 1 , 1, 'ORD-260620#0001');

-- D. Tampilkan total order by product :
SELECT prod_title as product_name , sum(order_total) as total_order
FROM Product a JOIN Order_detail b ON a.prod_id = b.ordi_prod_id
JOIN Orders c ON c.order_name = b.ordi_order_name
group by prod_title

-- E. Tampilkan jumlah order tiap customer :

SELECT user_name , user_email , sum(order_total) as TotalOrder
FROM Users a inner join Orders b
on a.user_id = b.order_user_id
Group by user_name , user_email
order by user_name

-- f. Total Order per bulan filter by tahun :
SELECT extract(month from a.order_created_on) as Bulan, sum(b.ordi_price) total_revenue
FROM Orders a  JOIN Order_detail b ON b.ordi_order_name = a.order_name
WHERE order_created_on between '2019-01-01' and '2020-12-30'
GROUP BY order_created_on
ORDER BY order_created_on

-- G. Total Pendapatan Perbulan filter by tahun :

SELECT extract(month from a.order_created_on) as Bulan, sum(b.ordi_price) total_revenue
FROM Orders a  JOIN Order_detail b ON b.ordi_order_name = a.order_name
WHERE order_created_on between '2019-01-01' and '2020-12-30'
GROUP BY order_created_on, b.ordi_price
ORDER BY order_created_on


-- tampilkan kota berdasarkan filter provinsi
select a.city_name, b.prov_name
FROM City a inner join Province b on a.city_prov_id = b.prov_id
where prov_name='Jawa Barat'
Group by city_name, prov_name
order by prov_name

-- h. Total Order per Kota yang di filter oleh Provinsi, contoh jika di filter provinsi Jawa Barat, yang
-- tampil kota yang ada di jawabarat.
-- City	|	total_order
select a.city_name,  e.order_total
FROM City a  join Province b on a.city_prov_id = b.prov_id
JOIN Address c ON a.city_id = c.addr_city_id
JOIN Users d ON c.addr_user_id = d.user_id
JOIN Orders e On d.user_id = e.order_user_id
where prov_name='Jawa Barat'
Group by city_name, prov_name, addr_fullname, user_email, order_total
order by prov_name

select extract(month from od.order_created_on) as bulan from orders od
SELECT extract(month from a.order_created_on) as Bulan, sum(b.ordi_price) total_revenue
FROM Orders a  JOIN Order_detail b ON b.ordi_order_name = a.order_name
WHERE order_created_on between '2019-01-01' and '2020-12-30'
GROUP BY order_created_on, b.ordi_price
ORDER BY order_created_on

