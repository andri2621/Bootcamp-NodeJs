//mencari huruf ke-(2) pada string.. indeks selalu bermulai dari 0
var s = "code".charAt(2);
console.log(s);

//mengambil huruf pada string, dimulai dari huruf ke-(2) sebanyak 3 huruf
var s = "codeid".substr(2,3);
console.log(s);


//membandingkan setiap hurufnya, bukan jumlah hurufnya
var a = "add";
var b = "b";
console.log(a < b);

var a = "add";
var b = "ab";
console.log(a < b);

//indexOf , mencari berada diurutan ke berapa index yang dicari
console.log("code ecma".indexOf("ode")); //return 0
console.log("code ecma".indexOf("m"));

//decomposition, menjadikan string menjadi array
var skill = "java, javascript, python";
console.log(skill.split(","));

//memecah string menjadi array
var s = "codeigniter";
console.log(s.split("")); //hasilnya menjadi, (11) ['c', 'o', 'd', 'e', 'i', 'g', 'n', 'i', 't', 'e', 'r']

//function replace, merubah kata yang diinginkan
var s = "hello world".replace("world", "js");
console.log(s); //"hello world", diubah menjadi "hello js"