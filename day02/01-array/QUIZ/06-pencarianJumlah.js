// Buat function untuk menampilkan element yang jika dijumlahkan hasilnya 9. Contoh diatas hanya angka 4 & 5 jika dijumlahkan hasilnya 9.

// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((x, y) => {
// //   console.log('x : ' + x);
//   console.log('y : ' + y);
//   return x + y;
// });
// console.log(sum); // 15

function cariJumlah(total){
    let angka = [1, 2, 3, 4, 5]
    for(var i =0; i < angka.length; i++){
        // console.log(angka[i])
        if(hasil = angka[i]+angka[i+1] == 9){
            console.log("angka "+angka[i]+" + angka "+angka[i+1]+" adalah "+total)
        }
        
    }
}
console.log(cariJumlah(9));