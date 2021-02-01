//TYPEOF berfungsi untuk mengetahui tipe data dari variabel tersebut

//boolean
var is20 =false;
typeof is20;
console.log(typeof is20);

//number
var age = 18;
console.log(typeof age);

//string
var firstname = "Hello JS";
console.log(typeof firstname);

//objek array
var com = ["code", "dev", "id"]
console.log(typeof com);

//object
var obj = {firstName : "code", lastName : "id"}
console.log(typeof obj);

//objek null
var nullvar = null;
console.log(typeof nullvar);

//function
var fnc = function (){
    return "Hello"
}
console.log(typeof fnc);

//undefined
var blank;
console.log(typeof blank);

//objek date
var tgl = new Date();
console.log(typeof tgl);