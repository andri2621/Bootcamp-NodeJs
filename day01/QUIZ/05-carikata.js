function cariKata(kalimat, huruf) {
  
    hasil = kalimat.indexOf(huruf);

    if (hasil >= 0) {
        return true;
    } else {
        return false;
    }

}
console.log(cariKata("aku suka javascript", "z"));// false
console.log(cariKata("aku suka javascript", "k"));// true

