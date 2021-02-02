//slice ,memotong atau mengambil dari parameter indeks pertama sampai parameter kedua
var list = ["a","b","c","d"];
// console.log(list.slice(1,2)); //menampilkan b

// var b = list.slice(1,3); // menampilkan b dan c
// console.log(b);

//splice
//menambahkan data di tengah tengah
//namaArray.splice(indeksAwal, mauDihapusBrp, elemenBaru1, elemenBaru2)
list.splice(1,2,"kiwi");
console.log(list)


// copy array
var list1 = list;
console.log(list1);
//mencopy array, menjadikannya memiliki 2 variabel,
//tetapi sumber reference-nya hanya 1, yaitu varibel list 
//jika list utama diubah, list1 juga berubah
list1.splice(2,1,"mangga");
console.log(list);

// alternatif copy array
var list2 = Array.from(list);

//concat array, menggabungkan array
var listX = [1,2,3]
var listY = [4,5,6]
//menggabung listX dan listY
var listZ = listX.concat(listY);
console.log(listZ);

