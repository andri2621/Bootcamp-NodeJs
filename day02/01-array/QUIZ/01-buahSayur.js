let fruits = ["Jeruk","Mangga","Jambu","Durian","Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

let buah = Array.from(fruits)
//a
// ['Jeruk', 'Mangga', 'Jambu', 'Durian', 'Rambutan',
// 'Anggur', 'Banana','sirsak]
fruits.push('Anggur', 'Banana', 'Sirsak')
console.log(fruits)

//b
// ['Jeruk', 'Mangga', 'Jambu', 'Durian', 'Rambutan',
// 'Anggur', 'Banana']
fruits.pop();
console.log(fruits)

//c
// hapus jambu ['Jeruk', 'Mangga', 'Durian', 'Rambutan', 'Anggur','Banana']
fruits.splice(2,1)
console.log(fruits)

//d
// hapus semua kecuali ['Jeruk', 'Mangga', 'Banana']
fruits.splice(2,3)
console.log(fruits)

//e
// Tambahkan Rambutan dan Bengkuang
// ['Jeruk', 'Mangga', 'Rambutan', 'Bangkuang''Banana']
fruits.splice(2,0,"Rambutan","Bengkuang")
console.log(fruits)

//f
// Replace Banana dengan Nangka
// ['Jeruk', 'Mangga', 'Rambutan', 'Bangkuang','Nangka']
fruits.splice(4,1,"Nangka")
console.log(fruits)

//g
// Join array fruit & sayur
// ['Jeruk', 'Mangga', 'Jambu', 'Durian', 'Rambutan',
// 'Kangkung', 'Bayam', 'Tomat', 'Bawang',
// 'Bayam']
var vege = buah.concat(sayur)
console.log(vege)
let campur = Array.from(vege)


//h
// Reverse array
// ['Bayam', 'Bawang', 'Tomat', 'Bayam', 'Kangkung',
// 'Jambu', 'Rambutan', 'Durian', 'Jambu', 'Mangga',
// 'Jeruk']
vege.reverse();
console.log(vege)


// //i
// // Buat function dengan 3 parameter : switch(vege,’TOMAT’,’JERUK’)
// // ['TOMAT', 'Mangga', 'Jambu', 'Durian', 'Rambutan',
// // 'Jambu', 'Kangkung', 'Bayam', 'JERUK', 'Bawang',
// // 'Bayam']

function tukar(arr , x , y){
    var indX = arr.indexOf(x); //mengambil nilai indeks X
    var tempX = arr[indX] //memindahkan isi ke dalam temp
    var indY = arr.indexOf(y); // mengambil nilai indeks Y
    arr[indX] = arr[indY] //isi dipindahkan ke isi X
    arr[indY] = tempX //isi pada tempX dipindahkan ke isi Y
    // return indX;
    return arr
}
console.log(tukar(campur,"Jeruk", "Tomat"))