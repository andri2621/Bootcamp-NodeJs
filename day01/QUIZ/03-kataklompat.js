function lompatKatak(posAwal, lompatan, posAkhir){
    //memindahkan variabel
    let hasilLompatan = posAwal;
    //inisiasi variabel hitung lompatan
    let hitung = 0;

    //perulangan, hasilLompatan akan diperbarui terus
    do{
        hasilLompatan = hasilLompatan + lompatan;
    //menghitung jumlah lompatan yang telah dilakukan
        hitung++;
    //jika hasilLompatan lebih kecil dari posAkhir maka akan berhenti
    }while(hasilLompatan < posAkhir)

    return hitung;
}

console.log(lompatKatak(10, 30, 85));