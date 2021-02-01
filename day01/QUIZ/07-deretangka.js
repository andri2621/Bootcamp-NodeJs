// k = jumlah angka yg ditampilkan
function deretSatu(k){

    let deret = "";
    let deretS = "";
    let n = 1;
    // banyakAngka = k - 1;

    for (let i = 1; i <= k; i++){
        for (let j = 0; j < i; j++){
            deretS += n
        }
        deret += deretS + ",";
        deretS = "";
        }
        return deret;
}
console.log(deretSatu(5));