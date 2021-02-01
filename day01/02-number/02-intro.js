//PROBLEM WITH NUMBER FRACTION

//hasilnya akan false, karena hasilnya tidak bulat tepat,
var a = 0.1 + 0.2 === 0.3;
console.log(a);

//solusi 1, gunakan math.round;
var a = (Math.round(0.1) + Math.round(0.2)) === Math.round(0.3);
console.log(a);

Math.floor(1.1) //return 1 //pembulatan ke bawah
Math.ceil(0.9) //return 1 //pembulatan keatas
Math.ceil(21.01) //return 22 //pembulatan keatas

var x = Math.random() * 100; //membuat nilai float (pecahan) secara random dari 0-100;
console.log(x);

var y = Math.round(Math.random() * 100); //membuat nilai random secara bilangan bulat;
console.log(y);