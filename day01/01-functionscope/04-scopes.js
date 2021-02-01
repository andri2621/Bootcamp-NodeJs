// global variabel (karena tidak diberikan var, const, atau yang lainnya)
test = "js fullstack";
console.log(test);

//function scope (berada di lokal scope)
function scope(){
    var top = "top";
    console.log(top);
    var bottom = "bottom";
    console.log(bottom);
}
scope();

//menggunakan var, eksekusinya bisa di luar isi bodi if, ini kurang baik
function scope2(print){
    var top ="atas";
    if (print){
        var insideIf = "print";
    }
    console.log(insideIf);
}
scope2(true);


//menggunakan let, eksekusinya harus di dalam isi body, biasakan gunakan let ataupun const
function scope3(print){
    var top ="atas";
    if (print){
        let insideIf = "print";
        console.log(insideIf);
    }
}
scope3(true);

//penggunakan const isinya tidak bisa diubah
const x="hellow";
//x = "hello js";
console.log(x);


//penggunaan let isinya bisa diubah, tetapi tidak bisa di let lagi varibelnya. misalkan  let y=5 , maka y tidak bisa untuk di misalkan lagi
let y="js";
y = "hallo js";
console.log(y);


//penggunaan var isi dan variabelnya bisa diubah ubah
var z = "test";
var z = "cool";
console.log(z);