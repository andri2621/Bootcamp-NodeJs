//akan menghasilkan NaN / not a number
const x = Number;
console.log(Number("tes"));

//function ganjil genap
function gage(angka){

    if (angka % 2 === 0){
        return "angka genap"
    }else{
        return "angka ganjil"
    }
};

console.log(gage(5));