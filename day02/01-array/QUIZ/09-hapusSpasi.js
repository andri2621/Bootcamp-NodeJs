// Buat function untuk me-replace space menjadi %20
// console.log(replaceSpace('Mr Code Id '))// return Mr%20Code%20Id Ganti karakter spasi menjadi %20

function fungsiSpasi(input) {

    var res = input.replace(/ /g, "%20");
    
    return res
}
console.log(fungsiSpasi(("Mr Code id")))