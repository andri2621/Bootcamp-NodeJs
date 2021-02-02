//convert string to array
let csv = "LG Monitor Asus Laptop 5432 Mix For Youtuber Bluetooth Adapter Solo Leveling Webtoon Panasoni Air Conditioner Karaoke Bazooka PowerBank 24 Hours Backpack of Holding Game Box 5 Universal Gadget Charger USBSquirming Tentacle USB Fishquarium Intel Processor 8 core Space BarKeyboard Organizer & USB Hub Pop USB Pet Rock Powerstation 5 Dual Heated Travel Mug Crosley Collegiate Portable USB Turntable Hoodie AK - 47"

let com = csv;
let arrProduct = com.split(" "); //membagi kalimat menjadi kata per kata, jika menemukan spasi
console.log(arrProduct);


//NOMOR 3
let filterProduct = (emps,prefix) => emps.filter(emp=> emp.startsWith(prefix));
console.log(filterProduct(arrProduct,"A"));
console.log(filterProduct(arrProduct,"S"));

//NOMOR 4 , menampilkan produk sesuai huruf abjadnya

// arrProduct.forEach(function(e){
//     console.log(e)
// })

// for(var i = 0; i < arrProduct.length; i++){
//     console.log(arrProduct[i])
// }


//NOMOR 4

var s = 'A';
while(s <= 'Z')
{
    console.log("==== "+s+" ====");
    hasil = filterProduct(arrProduct,s);
    s = String.fromCharCode(s.charCodeAt(0) + 1);
    console.log(hasil.join(" - "))
    console.log(" ")
}

// console.log(s);
// console.log(filterProduct(arrProduct,"A"));